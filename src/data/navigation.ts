import { routes } from './site';

export const hauptnavigation = [
  { label: 'Leistungen', href: routes.leistungen },
  { label: 'Objekttypen', href: routes.objekttypen },
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
      { label: 'Büro- und Verwaltungsgebäude', href: `${routes.objekttypen}/buero` },
      { label: 'Handel', href: `${routes.objekttypen}/handel` },
      { label: 'Industrie und Logistik', href: `${routes.objekttypen}/industrie-logistik` },
      { label: 'Arztpraxen und medizinische Einrichtungen', href: `${routes.objekttypen}/medizin` },
      { label: 'Hotellerie und Gastronomie', href: `${routes.objekttypen}/hotellerie-gastronomie` },
      { label: 'Immobilienverwaltungen', href: `${routes.objekttypen}/immobilienverwaltungen` },
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

export const rechtlicheLinks = [
  { label: 'Impressum', href: routes.impressum },
  { label: 'Datenschutz', href: routes.datenschutz },
  { label: 'AGB', href: routes.agb },
  /*
    TODO: „Cookie-Einstellungen“ ist nur sinnvoll, wenn es überhaupt
    einwilligungspflichtige Cookies gibt. Aktuell enthält die Seite kein
    Tracking und keine externen Skripte — der Link führt vorerst auf eine
    Erklärseite. Bei Einsatz eines Consent-Tools hier auf dessen
    Öffnen-Funktion umstellen.
  */
  { label: 'Cookie-Einstellungen', href: routes.cookies },
] as const;
