import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Die sensibelste der sechs Seiten. Bewusst NICHT geschrieben:

  - „desinfizierende Reinigung“, „Flächendesinfektion“, Mittelnamen,
    Einwirkzeiten. Das verlangt gelistete Präparate und dokumentierte
    Verfahren — offene Frage, sichtbar markiert.
  - Verweise auf RKI-Empfehlungen, DIN-Normen, Hygienezertifikate oder
    Schulungsnachweise. Nichts davon ist belegt.
  - Reinigung von Medizinprodukten oder Instrumenten. Das ist Aufbereitung
    nach MPBetreibV und keine Gebäudereinigung.

  Was bleibt und trägt: Arbeiten nach dem Hygieneplan des Kunden, getrennte
  Pläne je Bereich, feste Reihenfolge.
*/
export const medizin: ObjekttypInhalt = {
  slug: 'medizin',

  meta: {
    title: 'Reinigung für Arztpraxen in Stuttgart | S.mile',
    description:
      'Getrennte Reinigungspläne für Behandlungs-, Warte- und Sanitärbereiche. Personal auf Ihren Hygieneplan eingewiesen. Für Praxen in Stuttgart und Umgebung.',
  },

  lead: `Praxen und medizinische Einrichtungen in ${site.einsatzgebiet}: gereinigt wird nach Ihrem Hygieneplan, in getrennten Plänen je Bereich und in fester Reihenfolge.`,

  ankommt: {
    lead: 'In Praxen gibt der Hygieneplan den Rahmen vor, nicht der Dienstleister. Unsere Aufgabe ist, ihn zuverlässig umzusetzen und die Reihenfolge einzuhalten.',
    gruppen: [
      {
        gruppe: 'Behandlungs- und Eingriffsräume',
        positionen: [
          'Eigener Reinigungsplan je Raumart, getrennt von Warte- und Sanitärbereich',
          'Feste Reihenfolge: vom weniger belasteten zum stärker belasteten Bereich',
          'Getrennte Utensilien je Bereich, kein Wechsel zwischen Behandlung und Sanitär',
          'Medizinprodukte und Instrumente werden nicht angefasst — das ist Aufbereitung, keine Reinigung',
        ],
      },
      {
        gruppe: 'Warte- und Empfangsbereich',
        positionen: [
          'Sitzflächen, Armlehnen und Türgriffe als Kontaktflächen mit eigenem Turnus',
          'Spielecken und Zeitschriftenablagen, soweit vorhanden',
          'Empfangstheke außen — Unterlagen und Bildschirme bleiben unberührt',
        ],
      },
      {
        gruppe: 'Sanitär und Personalbereich',
        positionen: [
          'Patienten-WC mit höherem Turnus als im Bürobau, oft mehrfach täglich',
          'Personalraum, Umkleide und Handwaschplätze',
          'Abfallbehälter — Praxisabfall wird nicht angefasst, nur Restabfall',
        ],
      },
    ],
  },

  zugang: {
    lead: 'In Praxen bestimmt die Sprechzeit alles. Drei Fenster kommen vor.',
    stufen: [
      {
        intervall: 'Nach Sprechzeitende',
        text: 'Der Regelfall. Die Räume sind frei, und das Ergebnis hält bis zum nächsten Morgen.',
      },
      {
        intervall: 'In der Mittagspause',
        text: 'Für Sanitär und Wartebereich bei durchgehendem Betrieb. Kurzes Fenster, deshalb auf wenige Positionen begrenzt.',
      },
      {
        intervall: 'Vor Sprechzeitbeginn',
        text: 'Wenn abends niemand mehr im Haus ist. Verlangt Zutritt und Alarmregelung wie im Bürobau.',
      },
    ],
    hinweise: [
      'Das Personal wird vor dem ersten Einsatz auf Ihren Hygieneplan eingewiesen: Reihenfolge der Räume, getrennte Utensilien, Umgang mit Abfall. Die Einweisung macht Ihre Praxis, nicht wir — wir setzen um, was dort festgelegt ist.',
      '[TODO Kunde: Wird desinfizierende Flächenreinigung angeboten? Das verlangt gelistete Mittel, festgelegte Einwirkzeiten und eine Dokumentation. Für Praxen ist das die Frage, an der die Anfrage hängt — ohne Antwort sollte diese Seite die Praxen nicht aktiv ansprechen.]',
    ],
  },

  leistungen: {
    lead: 'In Praxen sind das die drei üblichen.',
    slugs: ['unterhaltsreinigung', 'glasreinigung', 'grundreinigung'],
  },

  faq: [
    {
      frage: 'Arbeiten Sie nach unserem Hygieneplan?',
      antwort:
        'Ja, das ist die Grundlage. Ihr Plan legt Reihenfolge, Turnus und Utensilien fest; das Personal wird vorher darauf eingewiesen und arbeitet danach. Wir bringen keinen eigenen Plan mit, der Ihren überschreibt.',
    },
    {
      frage: 'Wird desinfizierend gereinigt?',
      antwort:
        '[TODO Kunde: Offen. Bitte vor dem Livegang klären — mit Angabe, welches Mittel und welche Einwirkzeit. Eine unbelegte Zusage ist hier besonders heikel.]',
    },
    {
      frage: 'Wer entsorgt den Praxisabfall?',
      antwort:
        'Sie. Wir leeren Restabfallbehälter; medizinischer Abfall, spitze Gegenstände und alles, was getrennt entsorgt werden muss, wird nicht angefasst.',
    },
  ],
};
