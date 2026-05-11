import { Component, signal } from '@angular/core';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface SfItem { icon: string; title: string; desc: string; }
interface SfTab  { id: string; label: string; heading: string; items: SfItem[]; }

@Component({
  selector: 'app-savoir-faire',
  standalone: true,
  imports: [SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './savoir-faire.html',
  styleUrl: './savoir-faire.css'
})
export class SavoirFaireComponent {
  activeTab = signal('pv');

  readonly tabs: SfTab[] = [
    {
      id: 'pv', label: 'Photovoltaïque', heading: 'Ingénierie Photovoltaïque',
      items: [
        { icon: 'ti-chart-dots',      title: 'Simulation solaire',      desc: 'PVGIS, PVsyst, analyse d\'ombrage, étude de production P50/P90' },
        { icon: 'ti-ruler-measure',   title: 'Dimensionnement',         desc: 'Modules, onduleurs, câblage DC/AC, protections, mise à la terre' },
        { icon: 'ti-file-text',       title: "Plans d'implantation",    desc: 'AutoCAD, Revit – toiture, sol, ombrière. Inter-rangées, orientation, inclinaison' },
        { icon: 'ti-circuit-capacitor',title: 'Schémas unifilaires',    desc: 'BT complet DC + AC + protections. Conformité NF C 15-100 & guide UTE C 15-712' },
        { icon: 'ti-calculator',      title: 'Notes de calcul',         desc: 'Sections câbles, chutes de tension, courants de court-circuit, rendement système' },
        { icon: 'ti-report',          title: 'Rapport de faisabilité',  desc: 'ROI, VAN, TRI, payback, analyse de sensibilité, recommandation d\'équipements' },
        { icon: 'ti-file-certificate',title: 'CCTP lot PV',             desc: 'Cahier des Clauses Techniques Particulières, bordereau de prix, planning d\'exécution' },
        { icon: 'ti-folder-check',    title: 'DOE & récolement',        desc: 'Dossier des ouvrages exécutés, plans conformes à exécution, fiches produits, PV de réception' }
      ]
    },
    {
      id: 'elec', label: 'Électricité BT/HTA', heading: 'Électricité BT & HTA',
      items: [
        { icon: 'ti-current-ac',       title: 'Tableaux BT / TGBT',     desc: 'Schémas, coordination des protections, calculs de sélectivité, notes Caneco' },
        { icon: 'ti-bolt',             title: 'Étude HTA',               desc: 'Raccordement réseau, cellules HTA, postes de livraison, calculs de court-circuit' },
        { icon: 'ti-topology-star-3',  title: 'Distribution électrique', desc: 'Cheminements câbles, chemins de câble, colonnes montantes, calculs d\'échauffement' },
        { icon: 'ti-plug-connected',   title: 'IRVE',                    desc: 'Infrastructure de recharge VE, dimensionnement, supervision, pilotage de charge' },
        { icon: 'ti-cpu',              title: 'GTB / SCADA',             desc: 'Supervision technique, monitoring production PV, alertes, dashboards temps réel' },
        { icon: 'ti-shield',           title: 'Sécurité électrique',     desc: 'Coordination des protections HTA/BT, vérifications réglementaires, CONSUEL' }
      ]
    },
    {
      id: 'cvc', label: 'CVC & Fluides', heading: 'CVC & Fluides',
      items: [
        { icon: 'ti-wind',             title: 'Climatisation & ventilation', desc: 'DRV, CTA, VMC, calculs thermiques, bilan de puissance froid/chaud' },
        { icon: 'ti-temperature',      title: 'Chauffage',                   desc: 'PAC, chaudières, planchers chauffants, radiateurs, calculs déperditions RT2020' },
        { icon: 'ti-droplet',          title: 'Plomberie sanitaire',         desc: 'EF/ECS, colonnes, réseau d\'évacuation, dimensionnement selon DTU 60.11' },
        { icon: 'ti-flame',            title: 'Désenfumage',                 desc: 'Calculs réglementaires, extracteurs, amenées d\'air, volets coupe-feu' },
        { icon: 'ti-activity',         title: 'Simulation thermique',        desc: 'STD, RE2020, bilan énergétique, optimisation des systèmes, Cometh/Pleiades' },
        { icon: 'ti-file-description', title: 'CCTP lots fluides',           desc: 'CVC, plomberie, sprinklage – tous corps d\'état fluides en une mission unifiée' }
      ]
    },
    {
      id: 'amo', label: 'AMO / OPC', heading: 'AMO & OPC',
      items: [
        { icon: 'ti-gavel',            title: 'Assistance MOA',          desc: 'Aide à la décision, analyse des offres, négociation technique, contrats installateurs' },
        { icon: 'ti-users',            title: 'Consultation installateurs', desc: 'DCE, analyse des réponses, grille de notation, recommandation attributaire' },
        { icon: 'ti-clipboard-check',  title: 'Supervision de chantier', desc: 'Réunions hebdomadaires, compte-rendu, contrôle qualité, levée des réserves' },
        { icon: 'ti-calendar-event',   title: 'Planning & coordination', desc: 'OPC, planning Gantt, jalons contractuels, interfaces entre lots' },
        { icon: 'ti-certificate',      title: 'Réception technique',     desc: 'PV de réception, liste des réserves, essais de performance, mise en service' },
        { icon: 'ti-chart-line',       title: 'Monitoring',              desc: 'Mise en place du suivi production, dashboard client, rapports mensuels' }
      ]
    },
    {
      id: 'bess', label: 'BESS & Stockage', heading: "BESS & Stockage d'énergie",
      items: [
        { icon: 'ti-battery-4',        title: 'Dimensionnement BESS',    desc: 'Capacité, puissance, technologie (Li-ion, LFP), durée de vie, garanties' },
        { icon: 'ti-circuit-diode',    title: 'Intégration AC/DC',       desc: 'Schémas d\'intégration, convertisseurs, protections, raccordement réseau' },
        { icon: 'ti-cpu-2',            title: 'BMS & SCADA',             desc: 'Système de gestion batterie, supervision, stratégies de charge/décharge' },
        { icon: 'ti-shield-lock',      title: 'Sécurité & réglementation', desc: 'ICPE, protection incendie, ventilation, analyse des risques thermiques' },
        { icon: 'ti-coin',             title: 'Optimisation économique', desc: 'Arbitrage tarifaire, peak shaving, valorisation en services réseau' },
        { icon: 'ti-file-analytics',   title: "Études de cas d'usage",   desc: 'Autoconsommation maximisée, effacement, résilience réseau, hybridation diesel' }
      ]
    }
  ];

  get activeTabData(): SfTab {
    return this.tabs.find(t => t.id === this.activeTab()) ?? this.tabs[0];
  }

  setTab(id: string): void {
    this.activeTab.set(id);
  }
}
