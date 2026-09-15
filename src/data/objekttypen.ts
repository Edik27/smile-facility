import { routes } from './site';

export interface Objekttyp {
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
  href: `${routes.objekttypen}/immobilienverwaltungen`,
  linkText: 'Leistungen für Immobilienverwaltungen',
};

export const objekttypen: Objekttyp[] = [
  {
    titel: 'Büro- und Verwaltungsgebäude',
    beschreibung:
      'Reinigung vor oder nach den Bürozeiten, Sanitär- und Teeküchenkontrolle im vereinbarten Rhythmus, Zutritt nach Ihrer Schließordnung.',
    href: `${routes.objekttypen}/buero`,
    bild: 'buero',
    alt: 'Sitzbereich in einem Bürogebäude mit Glastrennwänden und Flur',
    linkText: 'Mehr zu Büro- und Verwaltungsgebäuden',
  },
  {
    titel: 'Handel',
    beschreibung:
      'Verkaufsflächen sind zur Öffnung fertig. Eingangsbereich und Kassenzone kontrollieren wir auf Wunsch auch während der Öffnungszeiten.',
    href: `${routes.objekttypen}/handel`,
    bild: 'handel',
    alt: 'Verkaufsfläche mit Kleiderstangen und beleuchteter Warenwand',
    linkText: 'Mehr zum Handel',
  },
  {
    titel: 'Industrie und Logistik',
    beschreibung:
      'Hallenböden, Verkehrswege und Sozialräume im Schichtbetrieb, abgestimmt auf Ihre Produktions- und Umschlagzeiten.',
    href: `${routes.objekttypen}/industrie-logistik`,
    bild: 'industrie-logistik',
    alt: 'Regalgasse einer Logistikhalle mit markiertem Verkehrsweg',
    linkText: 'Mehr zu Industrie und Logistik',
  },
  {
    titel: 'Arztpraxen und medizinische Einrichtungen',
    beschreibung:
      'Getrennte Reinigungspläne für Behandlungs-, Warte- und Sanitärbereiche. Das Personal wird auf Ihren Hygieneplan eingewiesen.',
    href: `${routes.objekttypen}/medizin`,
    bild: 'medizin',
    alt: 'Behandlungsstuhl in einer Zahnarztpraxis',
    linkText: 'Mehr zu Arztpraxen und medizinischen Einrichtungen',
  },
  {
    titel: 'Hotellerie und Gastronomie',
    beschreibung:
      'Öffentliche Bereiche, Sanitäranlagen und Küchenumfeld vor Betriebsbeginn, mit benannter Vertretung für Wochenenden und Feiertage.',
    href: `${routes.objekttypen}/hotellerie-gastronomie`,
    bild: 'hotellerie-gastronomie',
    alt: 'Gastraum mit Fensterfront und eingedeckten Tischen',
    linkText: 'Mehr zu Hotellerie und Gastronomie',
  },
];
