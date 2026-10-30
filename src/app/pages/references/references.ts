import { Component, signal, computed } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero';
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
  imports: [PageHeroComponent, ScrollRevealDirective],
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

  /** Pôle Digital : cas d'usage des jumeaux numériques par filière */
  readonly digitalTabs = [
    {
      id: 'aero', label: 'Aéronautique', heading: 'Disponibilité des pièces et traçabilité',
      items: [
        { title: 'Magasins de pièces de rechange MRO',       value: "Moins d'avions immobilisés (AOG)" },
        { title: "Suivi de l'outillage et des calibrations", value: 'Outils conformes et localisés à tout moment' },
        { title: 'Traçabilité par numéro de série',          value: 'Historique complet, audits facilités' },
        { title: 'Pièces à durée de vie limitée',            value: 'Alertes avant péremption, moins de rebuts' },
        { title: 'Stocks multi-sites et pools de pièces',    value: 'Rééquilibrage entre bases, moins de surstock' }
      ]
    },
    {
      id: 'energie', label: 'Énergie', heading: 'Continuité de production et maîtrise des coûts',
      items: [
        { title: 'Pièces de rechange des centrales solaires', value: 'Onduleurs et modules disponibles, moins de pertes' },
        { title: 'Postes HTA et HTB',                         value: 'Transformateurs et cellules suivis et anticipés' },
        { title: 'O&M multi-sites en Afrique',                value: 'Stock mutualisé entre centrales, délais réduits' },
        { title: 'Approvisionnement des chantiers EPC',       value: 'Suivi du BOM prévu face au matériel livré' },
        { title: 'Réseaux et télécoms',                       value: 'Câbles et équipements localisés par dépôt' }
      ]
    },
    {
      id: 'autres', label: 'Autres industries', heading: 'La même méthode, adaptée à chaque filière',
      items: [
        { title: 'Mines et phosphates', value: "Pièces d'usure et organes d'engins anticipés, moins d'arrêts d'extraction" },
        { title: 'Ports et logistique', value: 'Pièces de portiques et de grues localisées, stocks de rechange mutualisés' },
        { title: 'Automobile',          value: 'Approvisionnement bord de ligne, zéro rupture sur les références critiques' },
        { title: 'Agro-industrie',      value: 'Gestion des dates de péremption, emballages et pièces de lignes de production' },
        { title: 'Pharmacie et santé',  value: 'Traçabilité par lot, suivi de la chaîne du froid, conformité réglementaire' },
        { title: 'Ciment et BTP',       value: 'Pièces de fours et de broyeurs suivies, approvisionnement des chantiers' }
      ]
    }
  ];

  readonly digitalBenefits = [
    { value: '15–25 %', label: 'de baisse du stock immobilisé (stocks dormants et surstock)' },
    { value: '30–50 %', label: 'de ruptures en moins sur pièces critiques' },
    { value: '50–80 %', label: "de temps d'inventaire gagné (avec RFID ou codes-barres)" },
    { value: '> 98 %',  label: 'de fiabilité du stock, visible sur tous les sites' }
  ];

  digitalTab = signal('aero');

  get digitalTabData() {
    return this.digitalTabs.find(t => t.id === this.digitalTab()) ?? this.digitalTabs[0];
  }

  setDigitalTab(id: string): void {
    this.digitalTab.set(id);
  }
}
