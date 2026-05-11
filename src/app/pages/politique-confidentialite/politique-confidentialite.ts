import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-politique-confidentialite',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './politique-confidentialite.html'
})
export class PolitiqueConfidentialiteComponent {
  readonly rights = [
    { icon: 'ti-eye',        title: 'Droit d\'accès',       desc: 'Obtenir une copie de vos données personnelles que nous traitons.' },
    { icon: 'ti-pencil',     title: 'Droit de rectification', desc: 'Corriger vos données inexactes ou incomplètes.' },
    { icon: 'ti-trash',      title: 'Droit à l\'effacement', desc: 'Demander la suppression de vos données personnelles.' },
    { icon: 'ti-ban',        title: 'Droit d\'opposition',   desc: 'Vous opposer au traitement de vos données à des fins de prospection.' },
    { icon: 'ti-package-export', title: 'Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré et lisible.' },
    { icon: 'ti-adjustments', title: 'Droit à la limitation', desc: 'Limiter le traitement de vos données dans certains cas.' }
  ];
}
