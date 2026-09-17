/*
  Firmendaten. Werte in eckigen Klammern sind noch offen und erscheinen
  sichtbar auf der Seite, damit sie vor dem Livegang nicht übersehen werden.
*/
export const site = {
  name: 'S.mile Facility Services',

  /*
    Einzelunternehmen, vom Kunden bestätigt. Damit ist „S.mile Facility
    Services“ eine Geschäftsbezeichnung, keine Firma im Sinne des HGB — im
    Impressum muss deshalb der vollständige Name der natürlichen Person
    stehen, die Geschäftsbezeichnung darf daneben genannt werden.
    Keine Handelsregisternummer, kein Vertretungsberechtigter.
  */
  firmierung: 'S.mile Facility Services',
  rechtsform: 'Einzelunternehmen',

  /*
    Bewusst „Ansprechperson“ und nicht „Inhaberin“ oder „Inhaber“: die Texte
    nennen den Namen direkt, das ist konkreter als eine Funktionsbezeichnung
    und trifft keine Annahme über die Anrede. Siehe Hinweis in der Übergabe.
  */
  ansprechperson: 'Natalie Strek',

  /* Für Fließtext: „… in Stuttgart und Umgebung.“ */
  einsatzgebiet: 'Stuttgart und Umgebung',
  /* Für Meta-Title, wo jedes Zeichen zählt. */
  einsatzstadt: 'Stuttgart',

  /*
    TODO Kunde: Telefonnummer. Sie fehlt an drei Stellen, die darauf gebaut
    sind — Abschluss-CTA („Oder rufen Sie an“), Footer und LocalBusiness-
    Daten. Die Zusage „Rückruf innerhalb eines Werktags“ steht dreimal auf
    der Seite; ohne Nummer wirkt das unvollständig.
    `telHref` in internationaler Schreibweise, z. B. +4971234567890.
  */
  telefon: '[TODO: Telefonnummer]',
  telHref: '',

  email: 'info@smile-facility.de',

  strasse: 'Ölgarten 6',
  plz: '73565',
  ort: 'Spraitbach',

  /* Vom Kunden bestätigt. Speist auch openingHoursSpecification im JSON-LD. */
  bueroZeiten: 'Mo–Fr 9–20 Uhr',
  /* Maschinenlesbare Fassung derselben Angabe, für die strukturierten Daten. */
  oeffnungszeiten: {
    tage: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    von: '09:00',
    bis: '20:00',
  },

  /*
    Feld für die Umsatzsteuer-Identifikationsnummer nach § 27a UStG, die
    § 5 Abs. 1 Nr. 6 DDG „sofern vorhanden“ verlangt. Die gewöhnliche
    Steuernummer des Finanzamts ist hier NICHT gemeint und gehört nicht
    ins Impressum. Existiert keine USt-IdNr. (Kleinunternehmerregelung
    nach § 19 UStG), wird die Zeile im Impressum gelöscht statt gefüllt.
    Solange nichts vorliegt, bleibt der Marker — ohne diese Angabe ist das
    Impressum unvollständig.
  */
  ustId: '[TODO: USt-IdNr. — vorhanden? Sonst Zeile entfernen]',

  /*
    Hosting vom Kunden benannt, Serverstandort Frankfurt am Main. Damit
    liegt der Server in der EU — keine Drittlandübermittlung nach
    Art. 44 ff. DSGVO für das Hosting selbst, also auch keine
    Standardvertragsklauseln und kein Transfer Impact Assessment nötig.

    Offen bleibt die genaue juristische Person mit Anschrift und der
    Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Beides gehört in die
    Datenschutzerklärung, und der AV-Vertrag ist Pflicht, nicht optional.
  */
  hosting: 'Hostinger',
  hostingStandort: 'Frankfurt am Main',
} as const;

/*
  ───────────────────────────────────────────────────────────────────────────
  Eine Stelle für den Umstieg auf die Objekttyp-Unterseiten.

  /objekttypen/<slug> existiert noch nicht. Solange das so ist, verweisen alle
  Links auf den Objekttypen-Abschnitt der Startseite — die Leistungsseiten
  sollen keine toten Links erzeugen.

  Wenn die Unterseiten stehen: `OBJEKTTYP_SEITEN` auf true setzen. Das ändert
  zwei Dinge auf einmal, weil `Objektbezug.astro` daran auch die Darstellung
  hängt: solange false, stehen die Objektarten als Text mit einem einzelnen
  Sammellink — fünf identische Links auf denselben Anker wären sonst nur
  Redundanz. Ab true wird jede Objektart ihr eigener Link.
  ───────────────────────────────────────────────────────────────────────────
*/
export const OBJEKTTYP_SEITEN = true;

export function objekttypHref(slug: string): string {
  return OBJEKTTYP_SEITEN ? `/objekttypen/${slug}` : '/#objekttypen';
}

/* Dasselbe für die Übersichtsseite — Hauptnavigation und Footer. */
export function objekttypenHubHref(): string {
  return OBJEKTTYP_SEITEN ? '/objekttypen' : '/#objekttypen';
}

/*
  ───────────────────────────────────────────────────────────────────────────
  Ziel des Anfrageformulars.

  Eine statische Seite kann ein Formular nicht selbst verarbeiten. Solange
  hier nichts steht, sendet das Formular per `mailto:` an die Kontaktadresse
  — das öffnet das Mailprogramm des Absenders mit den ausgefüllten Feldern.
  Funktioniert bei Outlook und Apple Mail zuverlässig, bei reinen
  Webmail-Nutzern nicht.

  Sobald ein Endpunkt feststeht (eigenes Skript, Formspree, Netlify Forms
  oder Ähnliches), hier die URL eintragen — das Formular schaltet dann
  automatisch auf POST um. Eine Stelle, keine Änderung im Markup.
  ───────────────────────────────────────────────────────────────────────────
*/
export const ANFRAGE_ENDPUNKT = '';

export const routes = {
  anfrage: '/anfrage',
  karriere: '/karriere',
  kontakt: '/kontakt',
  leistungen: '/leistungen',
  objekttypen: '/objekttypen',
  ueberUns: '/ueber-uns',
  impressum: '/impressum',
  datenschutz: '/datenschutz',
  agb: '/agb',
  cookies: '/cookie-einstellungen',
} as const;
