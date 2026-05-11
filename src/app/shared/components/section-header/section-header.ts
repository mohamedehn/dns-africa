import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  template: `
    <div class="mb-10">
      @if (badge) {
        <span class="block text-xs font-semibold tracking-[0.18em] uppercase text-orange mb-3">{{ badge }}</span>
      }
      <h2 class="font-heading text-2xl md:text-[1.75rem] lg:text-3xl font-bold text-navy mb-3 leading-tight">{{ title }}</h2>
      @if (subtitle) {
        <p class="text-muted text-sm md:text-[15px] leading-relaxed max-w-xl">{{ subtitle }}</p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  @Input() badge = '';
  @Input() title = '';
  @Input() subtitle = '';
}
