import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Keine Objektart, sondern eine Zielgruppe — und die wertvollste. Deshalb
  eine eigene Seite und nicht ein Absatz auf einer anderen.

  Der Inhalt bleibt dicht an den Zusagen der Startseite und erweitert sie
  nicht: getrennte Leistungsverzeichnisse, Übernahme ohne Parallelbetrieb,
  eine Nummer für Meldungen, Dokumentation als Teil der Leistung.

  Bewusst NICHT geschrieben: Mengenrabatte, Rahmenvertragskonditionen,
  Reaktionszeiten in Stunden. Alles Zahlen, die ich nicht habe.
*/
export const immobilienverwaltungen: ObjekttypInhalt = {
  slug: 'immobilienverwaltungen',

  meta: {
    title: 'Gebäudereinigung für Hausverwaltungen | S.mile',
    description:
      'Mehrere Objekte, ein Vertrag, eine Ansprechperson. Getrennte Leistungsverzeichnisse je Objekt, Übernahme ohne Parallelbetrieb. In Stuttgart und Umgebung.',
  },

  lead: `Für Verwaltungen mit mehreren Objekten in ${site.einsatzgebiet}: ein Vertrag, getrennte Leistungsverzeichnisse je Objekt und eine Nummer für Rückfragen aus der Mieterschaft.`,

  ankommt: {
    lead: 'Eine Verwaltung kauft nicht Reinigung, sondern weniger eigenen Aufwand. Danach ist dieses Angebot gebaut.',
    gruppen: [
      {
        gruppe: 'Mehrere Objekte, ein Vertrag',
        positionen: [
          'Ein schriftliches Leistungsverzeichnis pro Objekt, einzeln abrechenbar',
          'Umlagefähige und nicht umlagefähige Positionen getrennt ausgewiesen',
          'Objekte lassen sich einzeln aufnehmen oder herausnehmen, ohne den Vertrag neu zu schreiben',
          'Eine Ansprechperson für alle Objekte — keine Zuständigkeit je Standort',
        ],
      },
      {
        gruppe: 'Übernahme von einem anderen Dienstleister',
        positionen: [
          'Objektaufnahme, bevor der bisherige Dienstleister aufhört',
          'Übernahme zum vereinbarten Termin, ohne Parallelbetrieb und ohne Lücke',
          'Schlüssel- und Transponderübergabe dokumentiert',
          'Der bisherige Leistungsumfang wird aufgenommen, bevor er verändert wird',
        ],
      },
      {
        gruppe: 'Meldungen und Nachweise',
        positionen: [
          'Meldungen aus der Mieterschaft laufen über eine Nummer, nicht über eine Zentrale',
          'Reklamationen innerhalb von 24 Stunden behoben, wie überall bei uns',
          'Kontroll- und Einsatzdokumentation je Objekt, auch als Unterlage für die Eigentümerversammlung',
          'Winterdiensteinsätze mit Datum und Uhrzeit — die Unterlage, die im Streitfall zählt',
        ],
      },
    ],
  },

  zugang: {
    lead: 'Bei mehreren Objekten läuft die Aufnahme in drei Schritten, nicht in einem Termin.',
    stufen: [
      {
        intervall: 'Objektaufnahme',
        text: 'Begehung je Objekt, einzeln. Ergebnis ist ein Leistungsverzeichnis pro Objekt, nicht ein Sammelangebot über eine Gesamtfläche.',
      },
      {
        intervall: 'Übernahme',
        text: 'Gestaffelt oder zum gemeinsamen Termin — was Ihnen lieber ist. Bei Staffelung bleibt der Aufwand auf Ihrer Seite überschaubar.',
      },
      {
        intervall: 'Laufender Betrieb',
        text: 'Feste Ansprechperson, laufende Dokumentation, Änderungen am Umfang schriftlich nachgetragen.',
      },
    ],
    hinweise: [
      `${site.ansprechperson} ist bei der Einarbeitung im Objekt dabei. Bei mehreren Objekten heißt das: bei jedem, nicht beim ersten.`,
      'Was an Konditionen für mehrere Objekte möglich ist, steht im Angebot nach der Begehung. [TODO Kunde: Gibt es eine Regel für Rahmenverträge ab einer bestimmten Objektzahl? Solange nicht, wird jedes Objekt einzeln kalkuliert — das ist ehrlicher als ein Rabattversprechen ohne Grundlage.]',
    ],
  },

  leistungen: {
    lead: 'Verwaltungen bündeln meist mehrere davon in einem Vertrag.',
    slugs: [
      'unterhaltsreinigung',
      'glasreinigung',
      'aussenanlagen-winterdienst',
      'hausmeisterservice',
      'grundreinigung',
    ],
  },

  faq: [
    {
      frage: 'Können mehrere Objekte in einen Vertrag?',
      antwort:
        'Ja, mit getrenntem Leistungsverzeichnis und getrennter Abrechnung je Objekt. So bleibt die Umlage sauber und ein Objekt lässt sich herausnehmen, ohne den Vertrag neu zu schreiben.',
    },
    {
      frage: 'Wie läuft die Übernahme von einem anderen Dienstleister?',
      antwort:
        'Wir nehmen das Objekt auf, bevor der bisherige Dienstleister aufhört, und übernehmen zum vereinbarten Termin. Ein Parallelbetrieb ist dafür nicht nötig. Auf Wunsch gestaffelt über mehrere Objekte.',
    },
    {
      frage: 'Bekommen wir Unterlagen für die Eigentümerversammlung?',
      antwort:
        'Ja. Kontrollgänge, Einsätze und Reklamationen werden je Objekt dokumentiert. Die Unterlage kommt laufend, nicht erst, wenn die Versammlung ansteht.',
    },
    {
      frage: 'Wer ist unsere Ansprechperson bei mehreren Objekten?',
      antwort:
        `Eine — ${site.ansprechperson}, für alle Objekte. Keine Zuständigkeit je Standort, keine Weiterleitung, keine Ticketnummer.`,
    },
  ],
};
