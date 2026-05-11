import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  menuOpen = signal(false);
  scrolled = signal(false);

  readonly navLinks: NavLink[] = [
    { path: '/',             label: 'Accueil',      exact: true },
    { path: '/savoir-faire', label: 'Savoir-faire' },
    { path: '/offre',        label: 'Offre' },
    { path: '/references',   label: 'Références' },
    { path: '/equipe',       label: 'Équipe' },
    { path: '/contact',      label: 'Contact' }
  ];

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }
}
