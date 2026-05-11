import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  readonly expertises = [
    { label: 'Ingénierie photovoltaïque', path: '/savoir-faire' },
    { label: 'Électricité BT & HTA',      path: '/savoir-faire' },
    { label: 'CVC & Fluides',             path: '/savoir-faire' },
    { label: 'BESS & Stockage',           path: '/savoir-faire' },
    { label: 'AMO / Supervision',         path: '/savoir-faire' }
  ];

  readonly year = new Date().getFullYear();
}
