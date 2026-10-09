import { Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective {
  @Input() appScrollReveal: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'zoom' = 'fade-up';
  private el = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      const host = this.el.nativeElement as HTMLElement;
      host.classList.add('sr-hidden', `sr-${this.appScrollReveal}`);

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            host.classList.add('sr-visible');
            observer.unobserve(host);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      observer.observe(host);
    });
  }
}
