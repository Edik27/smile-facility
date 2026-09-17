import { objekttypHref } from '../site';
import { objekttypen as kacheln, verwaltungen } from './kacheln';
import type { ObjekttypInhalt } from './typen';
import { buero } from './buero';
import { handel } from './handel';
import { hotellerieGastronomie } from './hotellerie-gastronomie';
import { immobilienverwaltungen } from './immobilienverwaltungen';
import { industrieLogistik } from './industrie-logistik';
import { medizin } from './medizin';

export type { Objekttyp } from './kacheln';
export type { ObjekttypInhalt } from './typen';
export { objekttypen, verwaltungen } from './kacheln';

/*
  Dieses Verzeichnis ersetzt die frühere Datei src/data/objekttypen.ts.
  `import { objekttypen } from '../data/objekttypen'` löst auf diesen Barrel
  auf — an den Aufrufstellen musste nichts geändert werden.
*/

/*
  Immobilienverwaltungen ist keine Objektart, sondern eine Zielgruppe, und
  steht deshalb nicht im `objekttypen`-Array der Startseite. Für die
  Unterseite braucht sie trotzdem Titel und Verweistext — hier nachgezogen.
*/
const verwaltungsKachel = {
  slug: 'immobilienverwaltungen',
  titel: verwaltungen.titel,
  beschreibung: verwaltungen.lead,
  href: verwaltungen.href,
  bild: '',
  alt: '',
  linkText: verwaltungen.linkText,
};

const inhalte: ObjekttypInhalt[] = [
  buero,
  handel,
  industrieLogistik,
  medizin,
  hotellerieGastronomie,
  immobilienverwaltungen,
];

export type ObjekttypSeite = ObjekttypInhalt & {
  titel: string;
  beschreibung: string;
};

/* Kachel und Inhalt über den Slug zusammenführen. */
export const objekttypSeiten: ObjekttypSeite[] = inhalte.map((inhalt) => {
  const kachel =
    kacheln.find((k) => k.slug === inhalt.slug) ??
    (inhalt.slug === verwaltungsKachel.slug ? verwaltungsKachel : undefined);
  if (!kachel) {
    throw new Error(
      `Objektart "${inhalt.slug}" hat einen Inhalt, aber keinen Eintrag in kacheln.ts.`,
    );
  }
  return { ...inhalt, titel: kachel.titel, beschreibung: kachel.beschreibung };
});

/* Die übrigen Objektarten — für die Linkliste am Fuß einer Objekttyp-Seite. */
export function andereObjekttypen(slug: string) {
  return objekttypSeiten
    .filter((o) => o.slug !== slug)
    .map((o) => ({ titel: o.titel, href: objekttypHref(o.slug) }));
}
