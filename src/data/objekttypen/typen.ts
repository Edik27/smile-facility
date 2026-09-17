/*
  Datenmodell der Objekttyp-Unterseiten. Kachelhälfte steht in kacheln.ts,
  hier der Inhalt einer Unterseite. `index.ts` führt beides über den Slug
  zusammen — dieselbe Aufteilung wie bei src/data/leistungen/.
*/
import type { FaqEintrag, Positionsgruppe, Turnusstufe } from '../leistungen';

export interface ObjekttypInhalt {
  slug: string;

  /* Je Seite einzeln formuliert, keine Schablone. */
  meta: {
    /* unter 60 Zeichen */
    title: string;
    /* unter 155 Zeichen */
    description: string;
  };

  lead: string;

  /*
    Worauf es in dieser Objektart ankommt — Prüfpunkte, nicht Leistungen.
    Nutzt dieselbe Komponente wie „Was enthalten ist“ auf den
    Leistungsseiten, nur mit anderem Titel.
  */
  ankommt: {
    lead: string;
    gruppen: Positionsgruppe[];
  };

  /* Zeitfenster, Zutritt, Abstimmung mit dem Betrieb. */
  zugang: {
    lead: string;
    stufen: Turnusstufe[];
    hinweise: string[];
  };

  /* Welche der sechs Leistungen hier typisch sind. */
  leistungen: {
    lead: string;
    slugs: string[];
  };

  faq: FaqEintrag[];
}
