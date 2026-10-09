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
  progress = signal(0);

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
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled.set(window.scrollY > 40);
    this.progress.set(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
  }
}
