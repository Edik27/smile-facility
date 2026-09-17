import type { LeistungKachel } from './typen';

/*
  Identität der sechs Leistungen: Titel, Nutzensatz, Icon.

  Getrennt von den Inhaltsdateien, weil die Startseite alle sechs Kacheln
  braucht, auch solange nicht jede eine Unterseite hat. Die Reihenfolge hier
  ist die Reihenfolge im Kachelblock und in der Linkliste am Seitenfuß.

  Jeder Nutzensatz sagt, was der Auftraggeber davon hat — nicht, was gewischt
  wird.
*/
export const kacheln: LeistungKachel[] = [
  {
    slug: 'unterhaltsreinigung',
    titel: 'Unterhaltsreinigung',
    nutzen:
      'Feste Turnusse, festes Personal, schriftlich fixierter Umfang. Sie müssen nicht nachfragen, ob jemand da war.',
    icon: '/icons/unterhaltsreinigung.png',
    verweisText: 'Zur Unterhaltsreinigung',
  },
  {
    slug: 'glasreinigung',
    titel: 'Glas- und Rahmenreinigung',
    nutzen:
      'Fenster, Verglasung und Rahmen nach Intervallplan. Die ausgeführten Termine weisen wir Ihnen nach.',
    icon: '/icons/glasreinigung.png',
    verweisText: 'Zur Glas- und Rahmenreinigung',
  },
  {
    slug: 'grundreinigung',
    titel: 'Grund- und Sonderreinigung',
    nutzen:
      'Einmalige Tiefenreinigung mit vorher abgestimmtem Ergebnis, auf Wunsch außerhalb Ihrer Betriebszeiten.',
    icon: '/icons/grundreinigung.png',
    verweisText: 'Zur Grund- und Sonderreinigung',
  },
  {
    slug: 'bauendreinigung',
    titel: 'Bauendreinigung',
    nutzen:
      'Übergabefertige Flächen zum vereinbarten Termin, damit Ihre Abnahme nicht an der Reinigung hängt.',
    icon: '/icons/bauendreinigung.png',
    verweisText: 'Zur Bauendreinigung',
  },
  {
    slug: 'aussenanlagen-winterdienst',
    titel: 'Außenanlagen und Winterdienst',
    nutzen:
      'Grünpflege, Reinigung der Außenflächen und Winterdienst in Ihrem Auftrag. Jeden Einsatz dokumentieren wir mit Uhrzeit.',
    icon: '/icons/aussenanlagen-winterdienst.png',
    verweisText: 'Zu Außenanlagen und Winterdienst',
  },
  {
    slug: 'hausmeisterservice',
    titel: 'Hausmeisterservice',
    nutzen:
      'Kontrollgänge, Kleinreparaturen und Handwerkerkoordination über eine Ansprechperson statt über fünf Nummern.',
    icon: '/icons/hausmeisterservice.png',
    verweisText: 'Zum Hausmeisterservice',
  },
];
