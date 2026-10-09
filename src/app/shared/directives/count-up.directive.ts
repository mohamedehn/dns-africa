import { Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

/** Anime un compteur de 0 à la valeur cible quand l'élément entre dans le viewport. */
@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective {
  @Input({ required: true }) appCountUp = 0;
  @Input() prefix = '';
  @Input() suffix = '';
  @Input() duration = 1800;
  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const host = this.el.nativeElement as HTMLElement;
      const render = (v: number) =>
        (host.textContent = `${this.prefix}${Math.round(v).toLocaleString('fr-FR')}${this.suffix}`);

      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      render(0);

      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / this.duration, 1);
          render(this.appCountUp * (1 - Math.pow(1 - t, 4)));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, { threshold: 0.4 });
      observer.observe(host);
    });
  }
}
