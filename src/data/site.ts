/*
  Firmendaten. Werte in eckigen Klammern sind noch offen und erscheinen
  sichtbar auf der Seite, damit sie vor dem Livegang nicht übersehen werden.
*/
export const site = {
  name: 'S.mile Facility Services',

  /*
    TODO Kunde: Rechtsform bestätigen. Die gelieferten Angaben — natürliche
    Person, Wohnanschrift, keine Gesellschaftsform, Steuernummer folgt — deuten
    auf ein Einzelunternehmen. Für das Impressum nach § 5 DDG muss das eindeutig
    sein; bei einem Einzelunternehmen gehört der vollständige Name der
    natürlichen Person hinein, bei einer GmbH die Firmierung plus
    Geschäftsführung und Handelsregisternummer.
  */
  firmierung: 'S.mile Facility Services',

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

  /* TODO Kunde: Erreichbarkeit im Büro, z. B. „Mo–Fr 8–17 Uhr“. */
  bueroZeiten: '[TODO: Bürozeiten]',

  /*
    TODO Kunde: USt-IdNr. beziehungsweise Steuernummer — laut Kunde wird
    nachgereicht. Wird auf der Startseite nicht angezeigt, gehört aber ins
    Impressum. Bei Kleinunternehmerregelung nach § 19 UStG genügt die
    Steuernummer; eine USt-IdNr. ist dann nicht anzugeben.
  */
  ustId: '[TODO: USt-IdNr. oder Steuernummer]',
} as const;

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
