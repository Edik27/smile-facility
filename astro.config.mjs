import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  /*
    Aus der E-Mail-Domain abgeleitet (info@smile-facility.de).
    TODO Kunde: bestätigen — mit oder ohne „www“? Der Wert landet in Canonical
    und Open-Graph-URLs; eine falsche Variante erzeugt doppelte Adressen.
  */
  site: 'https://www.smile-facility.de',
  output: 'static',

  /*
    Sitemap. `site` oben muss stimmen, sonst stehen falsche URLs drin.
    Die 404-Seite wird ausgenommen — sie soll nicht indexiert werden.
    Noch nicht gebaute Seiten (/anfrage, /kontakt, /karriere …) landen
    automatisch nicht in der Sitemap, weil sitemap nur erzeugte Routen
    aufnimmt.
  */
  integrations: [
    sitemap({
      filter: (seite) => !seite.endsWith('/404/') && !seite.endsWith('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
