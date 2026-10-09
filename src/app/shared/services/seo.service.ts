import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

export const SITE_URL = 'https://www.dnsgroup-africa.com';
const DEFAULT_DESC =
  "Bureau d'études indépendant en ingénierie solaire : études, ingénierie EXE, AMO et supervision de chantier. France, Maroc, Tunisie, Afrique francophone.";

/** Met à jour description, canonical, robots et Open Graph à chaque navigation. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);

  init(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      let route = this.router.routerState.snapshot.root;
      while (route.firstChild) route = route.firstChild;

      const description: string = route.data['description'] ?? DEFAULT_DESC;
      const noindex: boolean = route.data['noindex'] ?? false;
      const path = this.router.url.split(/[?#]/)[0];
      const url = `${SITE_URL}${path}`;
      const title = this.title.getTitle();

      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'robots', content: noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large' });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:url', content: url });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });

      let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement('link');
        link.rel = 'canonical';
        this.doc.head.appendChild(link);
      }
      link.href = url;
    });
  }
}
