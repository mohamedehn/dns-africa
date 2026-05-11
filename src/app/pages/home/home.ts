import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  readonly stats = [
    { value: '100 MWc+', label: 'projets accompagnés' },
    { value: '< 24h',    label: 'délai de réponse devis' },
    { value: '100 %',    label: 'livrables normés NF/UTE' }
  ];

  readonly missions = [
    {
      color: 'orange',
      accentClass: 'bg-orange',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange',
      icon: 'ti-zoom-check',
      title: 'Études avant-projet',
      desc: 'Faisabilité technique et économique, simulation PVsyst/PVGIS, dimensionnement, note de calcul, estimation CAPEX.',
      tag: 'APD / APS',
      tagClass: 'bg-orange-100 text-orange'
    },
    {
      color: 'navy',
      accentClass: 'bg-navy',
      iconBg: 'bg-blue-100',
      iconColor: 'text-navy',
      icon: 'ti-pencil-bolt',
      title: "Ingénierie d'exécution",
      desc: 'Plans AutoCAD/Revit, schémas unifilaires BT & HTA, CCTP, notes de calcul réglementaires, DOE, visa EXE.',
      tag: 'PRO / EXE / DOE',
      tagClass: 'bg-blue-100 text-navy'
    },
    {
      color: 'green',
      accentClass: 'bg-green',
      iconBg: 'bg-green-100',
      iconColor: 'text-green',
      icon: 'ti-shield-check',
      title: 'AMO & Supervision',
      desc: 'Assistance MOA, consultation installateurs, suivi de chantier hebdomadaire, contrôle qualité, réception technique.',
      tag: 'AMO / OPC',
      tagClass: 'bg-green-100 text-green'
    }
  ];

  readonly secteurs = [
    { icon: 'ti-solar-panel',      bgClass: 'bg-orange-100', iconClass: 'text-orange', title: 'Centrales au sol',          desc: '50 kWc – 50 MWc · HTA · BESS' },
    { icon: 'ti-car-garage',       bgClass: 'bg-blue-100',   iconClass: 'text-navy',   title: 'Ombrières PV',              desc: 'Parkings, zones commerciales' },
    { icon: 'ti-building-factory', bgClass: 'bg-green-100',  iconClass: 'text-green',  title: 'Toitures industrielles',    desc: 'Entrepôts, plateformes logistiques' },
    { icon: 'ti-building',         bgClass: 'bg-orange-100', iconClass: 'text-orange', title: 'Toitures tertiaires',       desc: 'Bureaux, hôtels, commerces' },
    { icon: 'ti-arrows-exchange',  bgClass: 'bg-blue-100',   iconClass: 'text-navy',   title: 'Autoconsommation collective', desc: 'Résidences, ZAC, bailleurs' },
    { icon: 'ti-battery-charging', bgClass: 'bg-green-100',  iconClass: 'text-green',  title: 'BESS / Stockage',           desc: 'Dimensionnement, intégration BMS' }
  ];

  readonly clients = [
    'Tenergie','Urbasolar','TSE','Valorem','Engie Green',
    'Neoen','Voltalia','Akuo Energy','BayWa r.e.','Artelia','Egis','Bouygues Énergies'
  ];
}
