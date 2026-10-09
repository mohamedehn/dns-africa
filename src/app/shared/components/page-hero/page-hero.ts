import { Component, Input } from '@angular/core';

/** Bandeau d'en-tête des pages internes — porte le h1 de la page. */
@Component({
  selector: 'app-page-hero',
  standalone: true,
  template: `
    <section class="relative overflow-hidden bg-hero text-white">
      <div class="absolute inset-0 grid-bg" aria-hidden="true"></div>
      <div class="orb orb-a w-96 h-96 bg-orange/25 -top-32 -right-20" aria-hidden="true"></div>
      <div class="orb orb-b w-80 h-80 bg-green/20 -bottom-40 left-10" aria-hidden="true"></div>
      <svg class="absolute -right-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-30 spin-slow hidden md:block" viewBox="0 0 200 200" fill="none" aria-hidden="true">
        <circle cx="100" cy="100" r="96" stroke="#F7941D" stroke-width="1" stroke-dasharray="3 8"/>
        <circle cx="100" cy="100" r="68" stroke="#4AAD52" stroke-width="1.5" stroke-dasharray="1 9"/>
        <circle cx="100" cy="100" r="40" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
      </svg>

      <div class="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <span class="hero-badge inline-flex items-center gap-2 bg-white/10 border border-white/15 text-orange text-xs font-semibold tracking-[0.18em] uppercase px-3.5 py-1.5 rounded-full mb-6">
          <i class="ti text-sm" [class]="icon"></i>{{ badge }}
        </span>
        <h1 class="hero-title font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl">
          {{ title }}
          @if (accent) { <span class="text-gradient"> {{ accent }}</span> }
        </h1>
        @if (subtitle) {
          <p class="hero-sub mt-5 text-[#B8C9E3] text-base md:text-lg leading-relaxed max-w-2xl">{{ subtitle }}</p>
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
}
