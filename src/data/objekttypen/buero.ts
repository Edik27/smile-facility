import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Der heikle Punkt bei Büroflächen ist Datenschutz: Reinigungskräfte betreten
  Räume, in denen Unterlagen offen liegen. Das steht hier ausdrücklich, weil
  Verwaltungen und Datenschutzbeauftragte genau danach fragen.

  Bewusst NICHT zugesagt: Reinigung von Bildschirmen, Tastaturen und Geräten.
  Das ist Haftungsrisiko ohne Gegenwert.
*/
export const buero: ObjekttypInhalt = {
  slug: 'buero',

  meta: {
    title: 'Reinigung für Bürogebäude in Stuttgart | S.mile',
    description:
      'Unterhaltsreinigung, Glas und Hausmeisterservice für Büro- und Verwaltungsgebäude in Stuttgart. Zutritt nach Ihrer Schließordnung, feste Ansprechperson.',
  },

  lead: `Büro- und Verwaltungsflächen in ${site.einsatzgebiet}: gereinigt wird vor oder nach den Bürozeiten, nach Ihrer Schließordnung und mit einem Leistungsverzeichnis, das jede Position benennt.`,

  ankommt: {
    lead: 'In Büroflächen entscheidet weniger die Quadratmeterzahl als die Frage, wer wann welchen Raum betreten darf und was dort angefasst wird.',
    gruppen: [
      {
        gruppe: 'Arbeitsplätze und Besprechungsräume',
        positionen: [
          'Nur freie Flächen werden abgewischt — Unterlagen bleiben liegen, wo sie liegen',
          'Papierkörbe leeren, ohne den Inhalt zu sortieren oder zu sichten',
          'Bildschirme, Tastaturen und Telefone bleiben unberührt',
          'Besprechungsräume nach Belegung, nicht nach Turnus',
        ],
      },
      {
        gruppe: 'Sanitär und Teeküchen',
        positionen: [
          'Bei hoher Belegung mehr als ein Durchgang pro Tag, meist mittags',
          'Verbrauchsmaterial nachfüllen, damit niemand im Haus nachbestellen muss',
          'Teeküchen sind der häufigste Beschwerdegrund — Spüle und Arbeitsfläche zählen mehr als der Boden',
        ],
      },
      {
        gruppe: 'Eingang und Verkehrswege',
        positionen: [
          'Sauberlaufzone und Windfang bestimmen, wie viel Schmutz überhaupt ins Haus kommt',
          'Treppenhaus und Aufzug sind bei Mehrparteienobjekten die Visitenkarte',
          'Glastüren im Griffbereich fallen sofort auf und stehen deshalb im Turnus',
        ],
      },
    ],
  },

  zugang: {
    lead: 'Drei Zeitfenster kommen in Büroobjekten vor. Welches passt, hängt an der Schließordnung und daran, ob Publikumsverkehr besteht.',
    stufen: [
      {
        intervall: 'Vor Arbeitsbeginn',
        text: 'Meist zwischen 6 und 8 Uhr. Vorteil: die Flächen sind frei. Nachteil: es braucht einen Schlüssel oder Transponder und eine Alarmregelung.',
      },
      {
        intervall: 'Nach Arbeitsschluss',
        text: 'Der Regelfall. Verlangt dieselbe Zutrittsregelung und eine Absprache, wer zuletzt das Haus verlässt.',
      },
      {
        intervall: 'Während der Betriebszeit',
        text: 'Bei Objekten mit Empfang und Publikumsverkehr sinnvoll für Sanitär und Eingang — dort nutzt die Reinigung am Abend am wenigsten.',
      },
    ],
    hinweise: [
      'Zutritt, Schlüssel oder Transponder und der Umgang mit der Alarmanlage werden vor dem ersten Einsatz schriftlich geregelt. Wer welchen Schlüssel hat, wird dokumentiert.',
      'Zum Datenschutz: unser Personal betritt Räume, in denen Unterlagen offen liegen können. Unterlagen werden nicht bewegt, nicht gesichtet und nicht entsorgt. Verschlusssachen gehören in verschließbare Behälter — das lässt sich nicht durch eine Zusage ersetzen.',
    ],
  },

  leistungen: {
    lead: 'In Büroobjekten laufen diese vier am häufigsten zusammen.',
    slugs: ['unterhaltsreinigung', 'glasreinigung', 'grundreinigung', 'hausmeisterservice'],
  },

  faq: [
    {
      frage: 'Werden Schreibtische abgewischt?',
      antwort:
        'Nur die freien Flächen. Unterlagen, Ordner und Geräte werden nicht verschoben — wer eine vollständig abgewischte Fläche will, räumt sie vorher frei. Das steht so im Leistungsverzeichnis, damit niemand etwas anderes erwartet.',
    },
    {
      frage: 'Wie halten Sie es mit dem Datenschutz?',
      antwort:
        'Unterlagen werden nicht bewegt, nicht gelesen und nicht entsorgt. Papierkörbe werden geleert, ohne den Inhalt zu sortieren. Für Verschlusssachen brauchen Sie trotzdem verschließbare Behälter — eine Zusage ersetzt keine Abschließbarkeit.',
    },
    {
      frage: 'Reinigen Sie auch Serverräume und Technikräume?',
      antwort:
        'Nur wenn ausdrücklich vereinbart und mit Begleitung. In Technikräumen ist das Risiko, etwas zu berühren, größer als der Nutzen eines gewischten Bodens.',
    },
  ],
};
