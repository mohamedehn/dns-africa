import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [PageHeroComponent, ScrollRevealDirective],
  templateUrl: './equipe.html',
  styleUrl: './equipe.css'
})
export class EquipeComponent {}
