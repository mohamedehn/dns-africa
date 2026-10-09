import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { CountUpDirective } from '../../shared/directives/count-up.directive';
import { SpotlightDirective } from '../../shared/directives/spotlight.directive';
import { LinesDirective, MagneticDirective, ParallaxDirective, ScrollProgressDirective, TiltDirective } from '../../shared/directives/motion.directives';
import { EnergyCanvasComponent } from '../../shared/components/energy-canvas/energy-canvas';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective, CountUpDirective, SpotlightDirective,
    LinesDirective, MagneticDirective, ParallaxDirective, ScrollProgressDirective, TiltDirective, EnergyCanvasComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly titleWords = [
    { text: 'Ingénierie', accent: false },
    { text: 'solaire', accent: false },
    { text: "d'envergure", accent: true }
  ];

  readonly stats = [
    { value: 100, prefix: '',   suffix: ' MWc+', label: 'de projets accompagnés', icon: 'ti-bolt' },
    { value: 5,   prefix: '',   suffix: ' pays',  label: "d'intervention, de l'Europe au Sahel", icon: 'ti-world' },
    { value: 24,  prefix: '< ', suffix: ' h',   label: 'pour recevoir votre devis', icon: 'ti-clock-bolt' },
    { value: 100, prefix: '',   suffix: ' %',   label: 'de livrables normés NF / UTE', icon: 'ti-certificate' }
  ];

  readonly rays = Array.from({ length: 24 }, (_, i) => i * 15);

  readonly months = [28, 34, 48, 62, 78, 90, 100, 94, 74, 55, 36, 26];

  readonly missions = [
    {
      n: '01', accentClass: 'bg-orange', iconBg: 'bg-orange-100', iconColor: 'text-orange', icon: 'ti-zoom-check',
      title: 'Études avant-projet',
      desc: 'Faisabilité technique et économique, simulation PVsyst/PVGIS, dimensionnement, note de calcul, estimation CAPEX.',
      tag: 'APD / APS', tagClass: 'bg-orange-100 text-orange'
    },
    {
      n: '02', accentClass: 'bg-navy', iconBg: 'bg-blue-100', iconColor: 'text-navy', icon: 'ti-pencil-bolt',
      title: "Ingénierie d'exécution",
      desc: 'Plans AutoCAD/Revit, schémas unifilaires BT & HTA, CCTP, notes de calcul réglementaires, DOE, visa EXE.',
      tag: 'PRO / EXE / DOE', tagClass: 'bg-blue-100 text-navy'
    },
    {
      n: '03', accentClass: 'bg-green', iconBg: 'bg-green-100', iconColor: 'text-green', icon: 'ti-shield-check',
      title: 'AMO & Supervision',
      desc: 'Assistance MOA, consultation installateurs, suivi de chantier hebdomadaire, contrôle qualité, réception technique.',
      tag: 'AMO / OPC', tagClass: 'bg-green-100 text-green'
    }
  ];

  /** Secteurs illustrés par une photo */
  readonly secteursPhoto = [
    { img: '/images/centrale-solaire.jpg',     alt: "Vue aérienne d'une centrale solaire au sol",          icon: 'ti-solar-panel',      title: 'Centrales au sol',       desc: '50 kWc – 50 MWc · HTA · BESS' },
    { img: '/images/ombriere-pv.jpg',          alt: 'Ombrière photovoltaïque de parking',                    icon: 'ti-car-garage',       title: 'Ombrières PV',           desc: 'Parkings, zones commerciales' },
    { img: '/images/toiture-industrielle.jpg', alt: 'Toiture industrielle équipée de panneaux solaires',     icon: 'ti-building-factory', title: 'Toitures industrielles', desc: 'Entrepôts, plateformes logistiques' },
    { img: '/images/batiment-tertiaire.jpg',   alt: "Façade vitrée d'un bâtiment tertiaire",                icon: 'ti-building',         title: 'Toitures tertiaires',    desc: 'Bureaux, hôtels, commerces' }
  ];

  readonly secteursIcon = [
    { icon: 'ti-arrows-exchange',  title: 'Autoconsommation collective', desc: 'Résidences, ZAC, bailleurs' },
    { icon: 'ti-battery-charging', title: 'BESS / Stockage',             desc: 'Dimensionnement, intégration BMS' }
  ];

  /** Positions sur la carte stylisée (viewBox 800 × 460) */
  readonly hub = { x: 410, y: 70 };
  readonly countries = [
    { name: 'Maroc',       x: 300, y: 175, path: 'M410 70 Q 330 90 300 175',  delay: '0s' },
    { name: 'Tunisie',     x: 470, y: 160, path: 'M410 70 Q 450 100 470 160', delay: '.4s' },
    { name: 'Mauritanie',  x: 235, y: 305, path: 'M410 70 Q 200 140 235 305', delay: '.8s' },
    { name: 'Niger',       x: 540, y: 320, path: 'M410 70 Q 600 140 540 320', delay: '1.2s' },
    { name: 'DOM-TOM',     x: 110, y: 235, path: 'M410 70 Q 200 20 110 235',  delay: '1.6s' }
  ];

  readonly clients = [
    'Tenergie','Urbasolar','TSE','Valorem','Engie Green',
    'Neoen','Voltalia','Akuo Energy','BayWa r.e.','Artelia','Egis','Bouygues Énergies'
  ];

  readonly steps = [
    { icon: 'ti-message-2-bolt', title: 'Brief',        desc: 'Échange sur votre projet, devis sous 24 h' },
    { icon: 'ti-chart-dots',     title: 'Étude',        desc: 'Simulation, dimensionnement, faisabilité' },
    { icon: 'ti-blueprint',      title: 'Conception',   desc: 'Plans, unifilaires, CCTP, DOE' },
    { icon: 'ti-building-community', title: 'Chantier', desc: 'AMO, suivi hebdomadaire, qualité' },
    { icon: 'ti-circle-check',   title: 'Réception',    desc: 'Contrôles, levée des réserves, mise en service' }
  ];
}
