/*
  Datenmodell der Leistungen, in zwei Hälften geteilt:

  - `LeistungKachel` — Identität einer Leistung: Titel, Nutzensatz, Icon.
    Liegt für alle sechs in kacheln.ts, weil die Startseite sie alle braucht,
    auch solange nicht jede eine Unterseite hat.
  - `LeistungInhalt` — Inhalt der Unterseite. Eine Datei je Leistung.

  `index.ts` führt beide über den Slug zusammen. Dadurch gibt es je Leistung
  genau eine Quelle für Titel und Nutzensatz — keine Kopie, die auseinander
  läuft, wenn ein Text geändert wird.
*/

/* Eine Gruppe im Leistungsverzeichnis — Gruppenname plus Positionen. */
export interface Positionsgruppe {
  gruppe: string;
  positionen: string[];
}

export interface Turnusstufe {
  intervall: string;
  text: string;
}

export interface FaqEintrag {
  frage: string;
  antwort: string;
}

export interface LeistungKachel {
  slug: string;

  /* Für H1, Breadcrumb und Kachel. */
  titel: string;

  /*
    Ein Satz, was der Auftraggeber davon hat — steht in der Kachel auf der
    Startseite und in der Linkliste am Fuß der Leistungsseiten.
  */
  nutzen: string;

  /* Freigestelltes PNG in public/icons/, siehe scripts/assets.mjs. */
  icon: string;

  /*
    Verweistext mit korrektem Kasus, wenn von anderer Stelle auf diese
    Leistung gezeigt wird. Eine Schablone „Zur ${titel}“ erzeugt
    „Zur Hausmeisterservice“ und „Zur Außenanlagen und Winterdienst“ —
    deshalb je Leistung ausgeschrieben.
  */
  verweisText: string;
}

export interface LeistungInhalt {
  slug: string;

  /* Metadaten je Seite einzeln formuliert, keine Schablone. */
  meta: {
    /* unter 60 Zeichen */
    title: string;
    /* unter 155 Zeichen */
    description: string;
  };

  /* Einordnung unter der H1. Nennt Einsatzgebiet und Objektarten. */
  lead: string;

  /* Kern der Seite: Positionen wie in einem Leistungsverzeichnis. */
  enthalten: {
    lead: string;
    gruppen: Positionsgruppe[];
    /* Positionen, die nicht bei jedem Einsatz anfallen. Optional. */
    turnusabhaengig?: Positionsgruppe;
  };

  /* Zwei bis drei Punkte. Jeweils mit Hinweis, wo es stattdessen hingehört. */
  nichtEnthalten: {
    lead: string;
    punkte: { text: string; verweisSlug?: string }[];
  };

  turnus: {
    lead: string;
    stufen: Turnusstufe[];
    /* Wovon der Turnus abhängt und wie die Zeitfenster geregelt werden. */
    zeitfenster: string[];
  };

  /* Slugs der Objektarten, für die diese Leistung in Frage kommt. */
  objekte: {
    lead: string;
    slugs: string[];
  };

  /* Drei Sätze, auf diese Leistung bezogen. Verlinkt auf /#ablauf. */
  abstimmung: string[];

  faq: FaqEintrag[];
}

/* Kachel und Inhalt zusammengeführt — das nutzen die Seitenkomponenten. */
export type Leistung = LeistungKachel & LeistungInhalt;
