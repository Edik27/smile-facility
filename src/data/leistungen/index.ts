import { routes } from '../site';
import { kacheln } from './kacheln';
import type { Leistung, LeistungInhalt } from './typen';
import { aussenanlagenWinterdienst } from './aussenanlagen-winterdienst';
import { bauendreinigung } from './bauendreinigung';
import { glasreinigung } from './glasreinigung';
import { grundreinigung } from './grundreinigung';
import { hausmeisterservice } from './hausmeisterservice';
import { unterhaltsreinigung } from './unterhaltsreinigung';

export type {
  FaqEintrag,
  Leistung,
  LeistungInhalt,
  LeistungKachel,
  Positionsgruppe,
  Turnusstufe,
} from './typen';
export { kacheln } from './kacheln';

/*
  Dieses Verzeichnis ersetzt die frühere Datei src/data/leistungen.ts.
  `import { leistungen } from '../data/leistungen'` löst auf diesen Barrel
  auf, deshalb musste an den Aufrufstellen nichts geändert werden.
*/

/*
  Inhalte der Unterseiten. Reihenfolge wie in kacheln.ts.
  `getStaticPaths` in src/pages/leistungen/[slug].astro erzeugt genau für
  diese Einträge eine Seite — eine Leistung ohne Inhaltsdatei bekommt keine.
*/
const inhalte: LeistungInhalt[] = [
  unterhaltsreinigung,
  glasreinigung,
  grundreinigung,
  bauendreinigung,
  aussenanlagenWinterdienst,
  hausmeisterservice,
];

/* Kachel + Inhalt über den Slug zusammenführen. */
export const leistungsSeiten: Leistung[] = inhalte.map((inhalt) => {
  const kachel = kacheln.find((k) => k.slug === inhalt.slug);
  if (!kachel) {
    throw new Error(
      `Leistung "${inhalt.slug}" hat einen Inhalt, aber keinen Eintrag in kacheln.ts.`,
    );
  }
  return { ...kachel, ...inhalt };
});

export function leistungNachSlug(slug: string): Leistung | undefined {
  return leistungsSeiten.find((l) => l.slug === slug);
}

/*
  Kacheldaten für den Block auf der Startseite und für den Hub. Shape wie
  zuvor in src/data/leistungen.ts, damit Leistungen.astro unverändert bleibt.
*/
export interface LeistungKachelMitHref {
  titel: string;
  nutzen: string;
  icon: string;
  href: string;
}

export const leistungen: LeistungKachelMitHref[] = kacheln.map((k) => ({
  titel: k.titel,
  nutzen: k.nutzen,
  icon: k.icon,
  href: `${routes.leistungen}/${k.slug}`,
}));

/* Die übrigen fünf Leistungen — für die Linkliste am Fuß einer Leistungsseite. */
export function andereLeistungen(slug: string) {
  return kacheln
    .filter((k) => k.slug !== slug)
    .map((k) => ({ titel: k.titel, href: `${routes.leistungen}/${k.slug}` }));
}
