import { Component, Input } from '@angular/core';
import { EnergyCanvasComponent } from '../energy-canvas/energy-canvas';
import { LinesDirective, ParallaxDirective } from '../../directives/motion.directives';

/** Bandeau d'en-tête des pages internes — porte le h1 de la page. */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [EnergyCanvasComponent, LinesDirective, ParallaxDirective],
  template: `
    <section class="relative overflow-hidden bg-hero text-white">
      @if (image) {
        <div class="absolute inset-y-0 right-0 w-full lg:w-[70%] overflow-hidden mask-fade-left opacity-40 lg:opacity-100" aria-hidden="true">
          <img [src]="image" [attr.alt]="''" width="1400" height="788" fetchpriority="high"
               appParallax="0.06"
               class="animate-kenburns absolute -top-[8%] left-0 w-full h-[116%] object-cover">
          <div class="absolute inset-0 bg-linear-to-r from-navy-950/70 via-transparent to-navy-950/30"></div>
          <div class="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-navy-950/80 to-transparent"></div>
        </div>
      }
      <div class="absolute inset-0 grid-bg" aria-hidden="true"></div>
      <app-energy-canvas [density]="0.7" />
      <div class="orb orb-a w-96 h-96 bg-orange/25 -top-32 -right-20" aria-hidden="true"></div>
      <div class="orb orb-b w-80 h-80 bg-green/20 -bottom-40 left-10" aria-hidden="true"></div>

      <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-32">
        <span class="hero-badge inline-flex items-center gap-2 bg-white/10 border border-white/15 text-orange text-xs font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-6 backdrop-blur">
          <i class="ti text-sm" [class]="icon"></i>{{ badge }}
        </span>
        <h1 appLines class="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl">
          <span class="line"><span style="--d:0">{{ title }}</span></span>
          @if (accent) { <span class="line"><span style="--d:1" class="text-gradient">{{ accent }}</span></span> }
        </h1>
        @if (subtitle) {
          <p class="hero-sub mt-6 text-[#C4D3EA] text-base md:text-lg leading-relaxed max-w-2xl">{{ subtitle }}</p>
        }
      </div>
      <div class="absolute bottom-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange/70 to-transparent"></div>
    </section>
  `
})
export class PageHeroComponent {
  @Input() badge = '';
  @Input() title = '';
  @Input() accent = '';
  @Input() subtitle = '';
  @Input() icon = 'ti-solar-panel';
  @Input() image = '';
}
