import { objekttypHref } from '../site';

/*
  Identität der Objektarten: Titel, Beschreibungssatz, Bild, Linktexte.
  Getrennt von den Inhaltsdateien im selben Verzeichnis — gleiche Aufteilung
  wie bei src/data/leistungen/. Die Startseite braucht alle Einträge.
*/
export interface Objekttyp {
  /*
    Slug als eigenes Feld. Vorher wurde er in Objektbezug.astro aus dem href
    zurückgerechnet (`href.split('/').pop()`) — das bricht, sobald der href
    über die Weiche auf einen Anker zeigt.
  */
  slug: string;
  titel: string;
  beschreibung: string;
  href: string;
  /* Slug des aufbereiteten Zeilenbildes in public/objekttypen/ */
  bild: string;
  /* Die Bilder sind nicht dekorativ, alt ist Pflicht. Knapp und beschreibend. */
  alt: string;
  /*
    Linktext mit korrektem Dativ. Eine Schablone „Mehr zu ${titel}“ würde
    „Mehr zu Büro- und Verwaltungsgebäude“ und „Mehr zu Handel“ erzeugen —
    beides falsch. Deshalb je Eintrag ausgeschrieben.
  */
  linkText: string;
}

/*
  Hervorgehobener Block: hier entstehen die Mehrobjekt-Verträge.
  Steht in Sektion 4 als erstes im Lesefluss und in eigener Zeile.
*/
export const verwaltungen = {
  titel: 'Immobilienverwaltungen',
  lead:
    'Mehrere Objekte, ein Vertrag, eine Ansprechperson. Sie geben ein Objekt in die Betreuung — nicht einen Auftrag in ein Postfach.',
  punkte: [
    'Ein schriftliches Leistungsverzeichnis pro Objekt, getrennt abrechenbar',
    'Objektaufnahme und Übernahme ohne Parallelbetrieb zum bisherigen Dienstleister',
    'Meldungen aus der Mieterschaft laufen über eine Nummer, nicht über eine Zentrale',
  ],
  href: objekttypHref('immobilienverwaltungen'),
  linkText: 'Leistungen für Immobilienverwaltungen',
};

export const objekttypen: Objekttyp[] = [
  {
    titel: 'Büro- und Verwaltungsgebäude',
    beschreibung:
      'Reinigung vor oder nach den Bürozeiten, Sanitär- und Teeküchenkontrolle im vereinbarten Rhythmus, Zutritt nach Ihrer Schließordnung.',
    slug: 'buero',
    href: objekttypHref('buero'),
    bild: 'buero',
    alt: 'Sitzbereich in einem Bürogebäude mit Glastrennwänden und Flur',
    linkText: 'Mehr zu Büro- und Verwaltungsgebäuden',
  },
  {
    titel: 'Handel',
    beschreibung:
      'Verkaufsflächen sind zur Öffnung fertig. Eingangsbereich und Kassenzone kontrollieren wir auf Wunsch auch während der Öffnungszeiten.',
    slug: 'handel',
    href: objekttypHref('handel'),
    bild: 'handel',
    alt: 'Verkaufsfläche mit Kleiderstangen und beleuchteter Warenwand',
    linkText: 'Mehr zum Handel',
  },
  {
    titel: 'Industrie und Logistik',
    beschreibung:
      'Hallenböden, Verkehrswege und Sozialräume im Schichtbetrieb, abgestimmt auf Ihre Produktions- und Umschlagzeiten.',
    slug: 'industrie-logistik',
    href: objekttypHref('industrie-logistik'),
    bild: 'industrie-logistik',
    alt: 'Regalgasse einer Logistikhalle mit markiertem Verkehrsweg',
    linkText: 'Mehr zu Industrie und Logistik',
  },
  {
    titel: 'Arztpraxen und medizinische Einrichtungen',
    beschreibung:
      'Getrennte Reinigungspläne für Behandlungs-, Warte- und Sanitärbereiche. Das Personal wird auf Ihren Hygieneplan eingewiesen.',
    slug: 'medizin',
    href: objekttypHref('medizin'),
    bild: 'medizin',
    alt: 'Behandlungsstuhl in einer Zahnarztpraxis',
    linkText: 'Mehr zu Arztpraxen und medizinischen Einrichtungen',
  },
  {
    titel: 'Hotellerie und Gastronomie',
    beschreibung:
      'Öffentliche Bereiche, Sanitäranlagen und Küchenumfeld vor Betriebsbeginn, mit benannter Vertretung für Wochenenden und Feiertage.',
    slug: 'hotellerie-gastronomie',
    href: objekttypHref('hotellerie-gastronomie'),
    bild: 'hotellerie-gastronomie',
    alt: 'Gastraum mit Fensterfront und eingedeckten Tischen',
    linkText: 'Mehr zu Hotellerie und Gastronomie',
  },
];
