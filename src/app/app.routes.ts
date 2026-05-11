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
  { path: '',                              component: HomeComponent,                     title: 'DNS Africa — Ingénierie Solaire' },
  { path: 'savoir-faire',                  component: SavoirFaireComponent,              title: 'Savoir-faire — DNS Africa' },
  { path: 'offre',                         component: OffreComponent,                    title: 'Notre Offre — DNS Africa' },
  { path: 'references',                    component: ReferencesComponent,               title: 'Références — DNS Africa' },
  { path: 'equipe',                        component: EquipeComponent,                   title: 'Notre Équipe — DNS Africa' },
  { path: 'contact',                       component: ContactComponent,                  title: 'Contact & Devis — DNS Africa' },
  { path: 'mentions-legales',              component: MentionsLegalesComponent,          title: 'Mentions légales — DNS Africa' },
  { path: 'politique-de-confidentialite',  component: PolitiqueConfidentialiteComponent, title: 'Politique de confidentialité — DNS Africa' },
  { path: '**',                            redirectTo: '' }
];
