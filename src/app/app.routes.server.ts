import { RenderMode, ServerRoute } from '@angular/ssr';

/** Toutes les pages sont prérendues en HTML statique au build (SEO). */
export const serverRoutes: ServerRoute[] = [
  { path: '**', renderMode: RenderMode.Prerender }
];
