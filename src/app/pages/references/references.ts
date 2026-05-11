import { Component, signal, computed } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface Project {
  title: string;
  desc: string;
  tags: { label: string; colorClass: string }[];
  category: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './references.html',
  styleUrl: './references.css'
})
export class ReferencesComponent {
  activeFilter = signal('all');

  readonly filterOptions = [
    { id: 'all',        label: 'Tous' },
    { id: 'centrale',   label: 'Centrale sol' },
    { id: 'toiture',    label: 'Toiture' },
    { id: 'ombriere',   label: 'Ombrière' },
    { id: 'afrique',    label: 'Afrique' },
    { id: 'fluides',    label: 'CVC / Fluides' }
  ];

  readonly allProjects: Project[] = [
    {
      title: 'Centrale au sol – Sanofi Neuville-sur-Saône',
      desc: '996 kWc · Ingénierie structure/fondations/installation modules · DPGF · Supervision · Tenergie (MOA)',
      category: 'centrale',
      tags: [
        { label: 'Centrale sol',    colorClass: 'bg-orange-100 text-orange' },
        { label: 'Ingénierie EXE',  colorClass: 'bg-blue-100 text-navy' },
        { label: 'Supervision',     colorClass: 'bg-green-100 text-green' }
      ]
    },
    {
      title: 'Ombrière Baker Hughes – Le Creusot',
      desc: 'Ombrière PV parking · Étude structure + PV + raccordement · CCTP · EQUANS (MOE)',
      category: 'ombriere',
      tags: [
        { label: 'Ombrière',  colorClass: 'bg-orange-100 text-orange' },
        { label: 'CCTP',      colorClass: 'bg-blue-100 text-navy' }
      ]
    },
    {
      title: 'Étude faisabilité solaire – SLB Scierie Yèbles',
      desc: '36 kWc · Toiture industrielle · Rapport PDF complet, PVGIS, simulation, ROI · KBB (EPC)',
      category: 'toiture',
      tags: [
        { label: 'Toiture industrie', colorClass: 'bg-orange-100 text-orange' },
        { label: 'Faisabilité',       colorClass: 'bg-green-100 text-green' }
      ]
    },
    {
      title: 'Ingénierie PV 100 MWc – Mauritanie',
      desc: 'Proposition commerciale et technique · Étude de faisabilité · Dimensionnement multi-sites · DNS Africa (MOE)',
      category: 'afrique',
      tags: [
        { label: 'Grand projet', colorClass: 'bg-orange-100 text-orange' },
        { label: 'Afrique',      colorClass: 'bg-blue-100 text-navy' }
      ]
    },
    {
      title: 'Centrale au sol – Le Buisson 30 MWc',
      desc: '2×15 MWc · Lot structure (3V27+3V9 layout, 655 Wc) · DPGF · Piquetage/implantation · KBB (sous-traitant)',
      category: 'centrale',
      tags: [
        { label: 'Centrale sol', colorClass: 'bg-orange-100 text-orange' },
        { label: 'DPGF',         colorClass: 'bg-blue-100 text-navy' }
      ]
    },
    {
      title: 'Étude MAHAREPA – Centre commercial Moorea',
      desc: 'Ingénierie CVC, Plomberie, CFA-CFO · Lot exécution · BPU multi-lots · Polynésie française',
      category: 'fluides',
      tags: [
        { label: 'CVC / Fluides', colorClass: 'bg-green-100 text-green' },
        { label: 'DOM-TOM',       colorClass: 'bg-blue-100 text-navy' }
      ]
    }
  ];

  readonly filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category === f);
  });

  setFilter(id: string): void {
    this.activeFilter.set(id);
  }
}
