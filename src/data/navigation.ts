import { kacheln as leistungsKacheln } from './leistungen';
import { objekttypSeiten } from './objekttypen';
import { objekttypHref, objekttypenHubHref, routes } from './site';

/*
  Aufklappmenüs der Kopfzeile. Nur „Leistungen“ und „Objekttypen“ bekommen
  eins — sie sind die beiden Punkte mit Unterseiten.

  Erster Eintrag ist jeweils die Hub-Seite. Das ist nötig, weil der Auslöser
  ein <button> und kein Link ist: ein Link, der gleichzeitig ein Menü
  öffnet, ist auf Touch nicht auflösbar. Über den ersten Panel-Eintrag
  bleibt der Hub erreichbar.
*/
export interface Untermenue {
  id: string;
  eintraege: { label: string; href: string }[];
}

export const untermenues: Record<string, Untermenue> = {
  Leistungen: {
    id: 'menue-leistungen',
    eintraege: [
      { label: 'Alle Leistungen im Überblick', href: routes.leistungen },
      ...leistungsKacheln.map((k) => ({
        label: k.titel,
        href: `${routes.leistungen}/${k.slug}`,
      })),
    ],
  },
  Objekttypen: {
    id: 'menue-objekttypen',
    eintraege: [
      { label: 'Alle Objekttypen im Überblick', href: objekttypenHubHref() },
      ...objekttypSeiten.map((o) => ({ label: o.titel, href: objekttypHref(o.slug) })),
    ],
  },
};

export const hauptnavigation = [
  { label: 'Leistungen', href: routes.leistungen },
  { label: 'Objekttypen', href: objekttypenHubHref() },
  { label: 'Über uns', href: routes.ueberUns },
  /*
    „Referenzen“ war in der Navigation vorgesehen, ist hier aber bewusst
    deaktiviert: es gibt noch keine Referenzobjekte, und ein Navigationspunkt,
    der auf eine leere Seite führt, wirkt schlechter als ein fehlender.
    Sobald zwei bis drei Objekte freigegeben sind: Zeile einkommentieren.
  */
  // { label: 'Referenzen', href: '/referenzen' },
  { label: 'Karriere', href: routes.karriere },
  { label: 'Kontakt', href: routes.kontakt },
] as const;

export const footerSpalten = [
  {
    titel: 'Leistungen',
    links: [
      { label: 'Unterhaltsreinigung', href: `${routes.leistungen}/unterhaltsreinigung` },
      { label: 'Glas- und Rahmenreinigung', href: `${routes.leistungen}/glasreinigung` },
      { label: 'Grund- und Sonderreinigung', href: `${routes.leistungen}/grundreinigung` },
      { label: 'Bauendreinigung', href: `${routes.leistungen}/bauendreinigung` },
      { label: 'Außenanlagen und Winterdienst', href: `${routes.leistungen}/aussenanlagen-winterdienst` },
      { label: 'Hausmeisterservice', href: `${routes.leistungen}/hausmeisterservice` },
    ],
  },
  {
    titel: 'Objekttypen',
    links: [
      { label: 'Büro- und Verwaltungsgebäude', href: objekttypHref('buero') },
      { label: 'Handel', href: objekttypHref('handel') },
      { label: 'Industrie und Logistik', href: objekttypHref('industrie-logistik') },
      { label: 'Arztpraxen und medizinische Einrichtungen', href: objekttypHref('medizin') },
      { label: 'Hotellerie und Gastronomie', href: objekttypHref('hotellerie-gastronomie') },
      { label: 'Immobilienverwaltungen', href: objekttypHref('immobilienverwaltungen') },
    ],
  },
  {
    titel: 'Unternehmen',
    links: [
      { label: 'Über uns', href: routes.ueberUns },
      { label: 'Einsatzgebiet', href: '/#einsatzgebiet' },
      { label: 'Wie wir arbeiten', href: '/#arbeitsweise' },
      { label: 'Ablauf der Zusammenarbeit', href: '/#ablauf' },
      { label: 'Karriere', href: routes.karriere },
    ],
  },
] as const;

/*
  Rechtliche Links im Footer.

  „Cookie-Einstellungen“ ist entfernt: die Seite setzt keine Cookies, lädt
  keine externen Skripte und nutzt kein Tracking. Ein Link auf eine
  Einwilligungsverwaltung, die nichts zu verwalten hat, weckt den falschen
  Eindruck. Bei Einsatz eines Consent-Tools wieder aufnehmen.

  „AGB“ ist ebenfalls entfernt: Allgemeine Geschäftsbedingungen sind im
  B2B-Geschäft freiwillig, und sie müssen vom Kunden kommen — ein
  Platzhaltertext wäre hier gefährlicher als eine fehlende Seite. Sobald
  echte AGB vorliegen, Zeile einkommentieren und Seite anlegen.
*/
export const rechtlicheLinks = [
  { label: 'Impressum', href: routes.impressum },
  { label: 'Datenschutz', href: routes.datenschutz },
  // { label: 'AGB', href: routes.agb },
] as const;
