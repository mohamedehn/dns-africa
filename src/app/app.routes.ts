import { Routes } from '@angular/router';
import { HomeComponent }                        from './pages/home/home';
import { SavoirFaireComponent }                 from './pages/savoir-faire/savoir-faire';
import { OffreComponent }                       from './pages/offre/offre';
import { ReferencesComponent }                  from './pages/references/references';
import { EquipeComponent }                      from './pages/equipe/equipe';
import { ContactComponent }                     from './pages/contact/contact';
import { MentionsLegalesComponent }             from './pages/mentions-legales/mentions-legales';
import { PolitiqueConfidentialiteComponent }    from './pages/politique-confidentialite/politique-confidentialite';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    title: 'DNS Africa — Bureau d\'études en ingénierie solaire | France · Maroc · Tunisie',
    data: { description: 'Bureau d\'études indépendant en ingénierie solaire : études de faisabilité, ingénierie EXE, AMO et supervision de chantier. Plus de 100 MWc accompagnés en France, Maghreb et Afrique francophone. Devis sous 24 h.' }
  },
  {
    path: 'savoir-faire', component: SavoirFaireComponent,
    title: 'Savoir-faire — Ingénierie photovoltaïque, HTA, BESS et CVC | DNS Africa',
    data: { description: 'Simulation PVsyst/PVGIS, dimensionnement, schémas unifilaires BT/HTA, CCTP, BESS, CVC et fluides. Livrables normés NF C 15-100, guides UTE, référentiels STEG, SOMELEC et SONELEC.' }
  },
  {
    path: 'offre', component: OffreComponent,
    title: 'Offre & tarifs — Études et ingénierie solaire, marché France | DNS Africa',
    data: { description: 'Tarifs HT, périmètres, livrables et délais de nos prestations d\'ingénierie solaire. Étude de faisabilité offerte sur votre premier dossier. Devis gratuit sous 24 h.' }
  },
  {
    path: 'references', component: ReferencesComponent,
    title: 'Références — Projets photovoltaïques accompagnés | DNS Africa',
    data: { description: 'Centrales au sol, ombrières, toitures industrielles et tertiaires, autoconsommation collective, BESS : découvrez les projets accompagnés par DNS Africa.' }
  },
  {
    path: 'equipe', component: EquipeComponent,
    title: 'Équipe — Ingénieurs énergies renouvelables, électricité et fluides | DNS Africa',
    data: { description: 'Une équipe d\'ingénieurs spécialisés en énergies renouvelables, électricité et fluides, appuyée par un réseau de partenaires EPC et bureaux de contrôle.' }
  },
  {
    path: 'contact', component: ContactComponent,
    title: 'Contact & devis gratuit sous 24 h | DNS Africa',
    data: { description: 'Décrivez votre projet solaire : DNS Africa vous répond sous 24 h ouvrées avec un périmètre, un délai et un prix ferme. Devis gratuit et sans engagement.' }
  },
  {
    path: 'mentions-legales', component: MentionsLegalesComponent,
    title: 'Mentions légales — DNS Africa',
    data: { description: 'Mentions légales du site DNS Africa.', noindex: true }
  },
  {
    path: 'politique-de-confidentialite', component: PolitiqueConfidentialiteComponent,
    title: 'Politique de confidentialité — DNS Africa',
    data: { description: 'Politique de confidentialité et protection des données personnelles de DNS Africa.', noindex: true }
  },
  { path: '**', redirectTo: '' }
];
