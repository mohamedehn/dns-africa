import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  template: `
    <div class="mb-12" [class.text-center]="center" [class.mx-auto]="center" [class.max-w-2xl]="center">
      @if (badge) {
        <span class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-4">
          <span class="h-px w-8 bg-orange"></span>{{ badge }}
        </span>
      }
      <h2 class="font-heading text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight"
          [class]="dark ? 'text-white' : 'text-navy'">{{ title }}</h2>
      @if (subtitle) {
        <p class="text-[15px] md:text-base leading-relaxed max-w-2xl"
           [class]="(dark ? 'text-[#A9BCD8]' : 'text-muted') + (center ? ' mx-auto' : '')">{{ subtitle }}</p>
      }
    </div>
  `
})
export class SectionHeaderComponent {
  @Input() badge = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() center = false;
  @Input() dark = false;
}
