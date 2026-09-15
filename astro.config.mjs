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
  vite: {
    plugins: [tailwindcss()],
  },
});
