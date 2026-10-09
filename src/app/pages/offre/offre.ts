import { Component } from '@angular/core';
import { PageHeroComponent } from '../../shared/components/page-hero/page-hero';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface PricingRow {
  label: string;
  colorClass: string;
  perimeter: string;
  perimeterSub: string;
  deliverables: string;
  delay: string;
  price: string;
  priceSub?: string;
}

interface Step {
  num: string;
  timing: string;
  title: string;
  desc: string;
  colorClass: string;
}

@Component({
  selector: 'app-offre',
  standalone: true,
  imports: [PageHeroComponent, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './offre.html',
  styleUrl: './offre.css'
})
export class OffreComponent {
  readonly rows: PricingRow[] = [
    {
      label: 'Étude de faisabilité',
      colorClass: 'text-orange',
      perimeter: '5 kWc – 500 kWc',
      perimeterSub: 'Toiture / Ombrière / Sol',
      deliverables: 'Rapport complet, dimensionnement, ROI/VAN/TRI, recommandation',
      delay: 'J+7 à J+15',
      price: '1 500 – 3 500 €'
    },
    {
      label: 'Ingénierie EXE',
      colorClass: 'text-navy',
      perimeter: '20 kWc – 10 MWc',
      perimeterSub: 'Tous types de projets',
      deliverables: 'Plans AutoCAD, schémas unifilaires, CCTP, notes de calcul, DOE',
      delay: 'J+15 à J+30',
      price: '3 500 – 8 500 €',
      priceSub: 'ou sur devis'
    },
    {
      label: 'Ingénierie EXE – Grand projet',
      colorClass: 'text-navy',
      perimeter: '100 kWc – 5 MWc',
      perimeterSub: 'Centrale sol / HTA',
      deliverables: "Basic design, ingénierie EXE complète, DOE, Owner's Engineer",
      delay: 'J+20 à J+40',
      price: '15 000 – 40 000 €'
    },
    {
      label: 'AMO / Supervision',
      colorClass: 'text-green',
      perimeter: 'Tous projets',
      perimeterSub: 'Missions à la carte',
      deliverables: 'Consultation, suivi chantier, contrôle qualité, réception',
      delay: 'Selon planning',
      price: 'Sur devis'
    },
    {
      label: 'Pack CVC / Fluides',
      colorClass: 'text-orange',
      perimeter: 'Bâtiment tertiaire ou industriel',
      perimeterSub: '',
      deliverables: 'CCTP CVC + Plomberie + CFA-CFO, notes de calcul, plans',
      delay: 'J+15 à J+30',
      price: 'Sur devis'
    },
    {
      label: 'BESS – Étude & ingénierie',
      colorClass: 'text-navy',
      perimeter: '100 kWh – 10 MWh',
      perimeterSub: '',
      deliverables: "Dimensionnement, schémas intégration, BMS, étude ICPE",
      delay: 'J+15 à J+30',
      price: 'Sur devis'
    }
  ];

  readonly steps: Step[] = [
    { num: '01', timing: 'J+0–2',   title: 'Brief technique',       desc: 'Recueil des données, plans, factures, périmètre',  colorClass: 'bg-orange' },
    { num: '02', timing: 'J+2–7',   title: 'Étude de faisabilité',  desc: 'Simulation, dimensionnement, ROI',                  colorClass: 'bg-orange' },
    { num: '03', timing: 'J+7–20',  title: 'Ingénierie & CCTP',     desc: 'Plans, schémas, notes de calcul',                   colorClass: 'bg-navy'   },
    { num: '04', timing: 'J+20–60', title: 'Supervision chantier',  desc: 'Visa EXE, suivi hebdo, contrôle qualité',           colorClass: 'bg-navy'   },
    { num: '05', timing: 'J+60+',   title: 'Réception & DOE',       desc: 'Levée réserves, DOE, formation',                    colorClass: 'bg-green'  }
  ];
}
