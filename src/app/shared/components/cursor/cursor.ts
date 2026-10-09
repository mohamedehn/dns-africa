import { Component, ElementRef, NgZone, OnDestroy, ViewChild, afterNextRender, inject } from '@angular/core';

/** Curseur additionnel (anneau + halo) — actif uniquement sur appareils à pointeur précis. */
@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div #glow class="cursor-glow" aria-hidden="true"></div>
    <div #ring class="cursor-ring" aria-hidden="true"></div>
  `
})
export class CursorComponent implements OnDestroy {
  @ViewChild('glow', { static: true }) glow!: ElementRef<HTMLElement>;
  @ViewChild('ring', { static: true }) ring!: ElementRef<HTMLElement>;

  private zone = inject(NgZone);
  private tx = 0;
  private ty = 0;
  private x = 0;
  private y = 0;
  private raf = 0;
  private enabled = false;

  constructor() {
    afterNextRender(() => {
      this.enabled =
        matchMedia('(hover: hover) and (pointer: fine)').matches &&
        !matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.enabled) return;
      this.zone.runOutsideAngular(() => {
        addEventListener('pointermove', this.move, { passive: true });
        addEventListener('pointerover', this.over, { passive: true });
        document.documentElement.addEventListener('pointerleave', this.hide);
        this.raf = requestAnimationFrame(this.loop);
      });
    });
  }

  ngOnDestroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (!this.enabled) return;
    removeEventListener('pointermove', this.move);
    removeEventListener('pointerover', this.over);
    document.documentElement.removeEventListener('pointerleave', this.hide);
  }

  private move = (e: PointerEvent) => {
    this.tx = e.clientX;
    this.ty = e.clientY;
    this.ring.nativeElement.classList.add('is-visible');
    this.glow.nativeElement.classList.add('is-visible');
  };

  private hide = () => {
    this.ring.nativeElement.classList.remove('is-visible');
    this.glow.nativeElement.classList.remove('is-visible');
  };

  private over = (e: PointerEvent) => {
    const t = e.target as HTMLElement | null;
    this.ring.nativeElement.classList.toggle('is-hover', !!t?.closest('a, button, input, select, textarea, label, [data-cursor]'));
  };

  private loop = () => {
    this.x += (this.tx - this.x) * 0.16;
    this.y += (this.ty - this.y) * 0.16;
    this.ring.nativeElement.style.transform = `translate3d(${this.x}px, ${this.y}px, 0)`;
    this.glow.nativeElement.style.transform = `translate3d(${this.tx}px, ${this.ty}px, 0)`;
    this.raf = requestAnimationFrame(this.loop);
  };
}
