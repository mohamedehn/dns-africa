import { Directive, ElementRef, Input, NgZone, OnDestroy, afterNextRender, inject } from '@angular/core';

const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => matchMedia('(hover: hover) and (pointer: fine)').matches;

/** Titre révélé ligne par ligne : <h1 appLines> avec des <span class="line"><span>…</span></span>. */
@Directive({ selector: '[appLines]', standalone: true })
export class LinesDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    afterNextRender(() => {
      const el = this.el;
      if (prefersReducedMotion()) return;
      el.classList.add('reveal-lines');
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('is-in')));
    });
  }
}

/** Parallaxe verticale (propriété CSS `translate`, compatible avec scale/transform). */
@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements OnDestroy {
  @Input('appParallax') speed: number | string = 0.12;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private raf = 0;
  private bound = false;
  private update = () => {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const r = this.el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      const offset = (r.top + r.height / 2 - innerHeight / 2) * -(Number(this.speed) || 0.12);
      this.el.style.translate = `0 ${offset.toFixed(1)}px`;
    });
  };

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      this.bound = true;
      this.zone.runOutsideAngular(() => addEventListener('scroll', this.update, { passive: true }));
      this.update();
    });
  }

  ngOnDestroy() {
    if (this.bound) removeEventListener('scroll', this.update);
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}

/** Inclinaison 3D suivant la souris. */
@Directive({ selector: '[appTilt]', standalone: true })
export class TiltDirective {
  @Input('appTilt') max: number | string = 8;

  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private move = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const m = Number(this.max) || 8;
    this.el.style.transform = `perspective(1000px) rotateX(${(-y * m).toFixed(2)}deg) rotateY(${(x * m).toFixed(2)}deg)`;
  };
  private leave = () => (this.el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)');

  constructor() {
    afterNextRender(() => {
      if (!finePointer() || prefersReducedMotion()) return;
      this.el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
      this.el.style.willChange = 'transform';
      this.zone.runOutsideAngular(() => {
        this.el.addEventListener('pointermove', this.move);
        this.el.addEventListener('pointerleave', this.leave);
      });
    });
  }
}

/** Effet magnétique sur les boutons. */
@Directive({ selector: '[appMagnetic]', standalone: true })
export class MagneticDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private move = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    this.el.style.translate = `${dx * 0.22}px ${dy * 0.3}px`;
  };
  private leave = () => (this.el.style.translate = '0 0');

  constructor() {
    afterNextRender(() => {
      if (!finePointer() || prefersReducedMotion()) return;
      this.el.style.transition = 'translate .4s cubic-bezier(.16,1,.3,1), background-color .3s, box-shadow .3s';
      this.zone.runOutsideAngular(() => {
        this.el.addEventListener('pointermove', this.move);
        this.el.addEventListener('pointerleave', this.leave);
      });
    });
  }
}

/** Expose --p (0 → 1) sur l'élément selon sa progression dans le viewport (timelines pilotées au scroll). */
@Directive({ selector: '[appScrollProgress]', standalone: true })
export class ScrollProgressDirective implements OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private zone = inject(NgZone);
  private raf = 0;
  private bound = false;
  private update = () => {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = requestAnimationFrame(() => {
      const r = this.el.getBoundingClientRect();
      const p = Math.min(Math.max((innerHeight * 0.72 - r.top) / r.height, 0), 1);
      this.el.style.setProperty('--p', p.toFixed(4));
    });
  };

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) {
        this.el.style.setProperty('--p', '1');
        return;
      }
      this.bound = true;
      this.zone.runOutsideAngular(() => {
        addEventListener('scroll', this.update, { passive: true });
        addEventListener('resize', this.update, { passive: true });
      });
      this.update();
    });
  }

  ngOnDestroy() {
    if (this.bound) {
      removeEventListener('scroll', this.update);
      removeEventListener('resize', this.update);
    }
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
