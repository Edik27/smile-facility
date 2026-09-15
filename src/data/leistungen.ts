import { routes } from './site';

/*
  Jeder Satz beschreibt, was der Auftraggeber davon hat — nicht, was gewischt
  wird. Wiederverwendbar auf /leistungen und den sechs Unterseiten.

  Die Icons liegen als freigestellte PNGs in public/icons/ und werden von
  `npm run assets` aus src/assets/marke/ erzeugt (Originale: Dateinamen mit
  Umlauten und Leerzeichen, deckend weißer Hintergrund).
*/
export interface Leistung {
  titel: string;
  nutzen: string;
  href: string;
  icon: string;
}

export const leistungen: Leistung[] = [
  {
    titel: 'Unterhaltsreinigung',
    nutzen:
      'Feste Turnusse, festes Personal, schriftlich fixierter Umfang. Sie müssen nicht nachfragen, ob jemand da war.',
    href: `${routes.leistungen}/unterhaltsreinigung`,
    icon: '/icons/unterhaltsreinigung.png',
  },
  {
    titel: 'Glas- und Rahmenreinigung',
    nutzen:
      'Fenster, Verglasung und Rahmen nach Intervallplan. Die ausgeführten Termine weisen wir Ihnen nach.',
    href: `${routes.leistungen}/glasreinigung`,
    icon: '/icons/glasreinigung.png',
  },
  {
    titel: 'Grund- und Sonderreinigung',
    nutzen:
      'Einmalige Tiefenreinigung mit vorher abgestimmtem Ergebnis, auf Wunsch außerhalb Ihrer Betriebszeiten.',
    href: `${routes.leistungen}/grundreinigung`,
    icon: '/icons/grundreinigung.png',
  },
  {
    titel: 'Bauendreinigung',
    nutzen:
      'Übergabefertige Flächen zum vereinbarten Termin, damit Ihre Abnahme nicht an der Reinigung hängt.',
    href: `${routes.leistungen}/bauendreinigung`,
    icon: '/icons/bauendreinigung.png',
  },
  {
    titel: 'Außenanlagen und Winterdienst',
    nutzen:
      'Räumen, Streuen und Pflege der Außenflächen in Ihrem Auftrag. Jeden Einsatz dokumentieren wir mit Uhrzeit.',
    href: `${routes.leistungen}/aussenanlagen-winterdienst`,
    icon: '/icons/aussenanlagen-winterdienst.png',
  },
  {
    titel: 'Hausmeisterservice',
    nutzen:
      'Kontrollgänge, Kleinreparaturen und Handwerkerkoordination über eine Ansprechperson statt über fünf Nummern.',
    href: `${routes.leistungen}/hausmeisterservice`,
    icon: '/icons/hausmeisterservice.png',
  },
];
