import { Component, signal, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, SectionHeaderComponent, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  submitted = signal(false);
  success   = signal(false);
  loading   = signal(false);
  error     = signal(false);

  form = this.fb.nonNullable.group({
    nom:       ['', [Validators.required, Validators.minLength(2)]],
    societe:   [''],
    email:     ['', [Validators.required, Validators.email]],
    telephone: [''],
    prestation:['', Validators.required],
    puissance: [''],
    message:   ['', [Validators.required, Validators.minLength(20)]]
  });

  readonly prestations = [
    'Étude de faisabilité (APD)',
    'Ingénierie EXE complète',
    'AMO / Supervision chantier',
    'Ingénierie CVC / Fluides',
    'BESS / Stockage',
    "Owner's Engineer (grand projet)",
    'Autre / À définir'
  ];

  readonly puissances = [
    '< 100 kWc',
    '100 kWc – 1 MWc',
    '1 – 10 MWc',
    '> 10 MWc',
    'Non définie / Autre'
  ];

  isInvalid(field: string): boolean {
    const ctrl: AbstractControl | null = this.form.get(field);
    return !!ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched || this.submitted());
  }

  submit(): void {
    this.submitted.set(true);
    if (this.form.invalid) return;

    this.loading.set(true);
    this.error.set(false);

    const v = this.form.getRawValue();

    fetch('https://formspree.io/f/mzdoynge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        _subject:  `📧 DNS Africa — ${v.prestation}`,
        _replyto:  v.email,
        nom:       v.nom,
        societe:   v.societe || 'Non renseigné',
        email:     v.email,
        telephone: v.telephone || 'Non renseigné',
        prestation: v.prestation,
        puissance:  v.puissance || 'Non définie',
        message:   v.message
      })
    })
      .then(response => {
        if (response.ok) {
          this.success.set(true);
        } else {
          this.error.set(true);
        }
      })
      .catch(() => this.error.set(true))
      .finally(() => this.loading.set(false));
  }

  reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.success.set(false);
    this.error.set(false);
  }
}
