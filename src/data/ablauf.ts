export interface Schritt {
  titel: string;
  text: string;
}

export const ablauf: Schritt[] = [
  {
    titel: 'Anfrage',
    text: 'Sie nennen Objektart, Fläche, gewünschte Leistungen und Turnus. Wir rufen innerhalb eines Werktags zurück.',
  },
  {
    titel: 'Objektbegehung und Angebot',
    text: 'Wir sehen uns das Objekt an und erstellen ein schriftliches Leistungsverzeichnis mit Preis. Die Begehung ist kostenlos.',
  },
  {
    titel: 'Einarbeitung mit fester Objektleitung',
    text: 'Die Objektleitung weist das Personal vor Ort ein und übernimmt Ihre Vorgaben zu Zutritt, Schlüsseln und Zeitfenstern.',
  },
  {
    titel: 'Laufende Kontrolle und feste Ansprechperson',
    text: 'Regelmäßige Kontrollgänge, dokumentierte Abweichungen und eine Durchwahl für alles Weitere.',
  },
];
