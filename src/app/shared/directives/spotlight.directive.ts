import { Directive, HostListener, ElementRef, inject } from '@angular/core';

/** Expose la position de la souris en variables CSS (--mx / --my) pour l'effet de halo. */
@Directive({
  selector: '[appSpotlight]',
  standalone: true
})
export class SpotlightDirective {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('mousemove', ['$event'])
  onMove(e: MouseEvent): void {
    const r = this.el.nativeElement.getBoundingClientRect();
    this.el.nativeElement.style.setProperty('--mx', `${e.clientX - r.left}px`);
    this.el.nativeElement.style.setProperty('--my', `${e.clientY - r.top}px`);
  }
}
