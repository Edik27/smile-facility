import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Bewusst NICHT zugesagt: Anfassen, Umstellen oder Nachfüllen von Ware.
  Warenpräsentation ist Sache des Betriebs, und ein verschobenes Display ist
  der schnellste Weg zu Streit.
*/
export const handel: ObjekttypInhalt = {
  slug: 'handel',

  meta: {
    title: 'Reinigung für Verkaufsflächen in Stuttgart | S.mile',
    description:
      'Verkaufsflächen sind zur Öffnung fertig. Eingang und Kassenzone auf Wunsch auch während der Öffnungszeit. Für Handelsobjekte in Stuttgart und Umgebung.',
  },

  lead: `Handelsflächen in ${site.einsatzgebiet}: die Fläche ist zur Öffnung fertig, und der Eingangsbereich bleibt es auch danach. Ohne dass jemand Ware anfasst.`,

  ankommt: {
    lead: 'Im Handel zählt der Zustand zu zwei Zeitpunkten: bei der Öffnung und mitten am Tag. Beides braucht unterschiedliche Durchgänge.',
    gruppen: [
      {
        gruppe: 'Verkaufsfläche',
        positionen: [
          'Böden vor Öffnung, damit der erste Kunde eine fertige Fläche sieht',
          'Ware wird nicht angefasst, nicht umgestellt und nicht nachgefüllt',
          'Regalböden und Sockelbereiche nach Absprache, nicht bei jedem Durchgang',
          'Umkleidekabinen und Spiegel bei Textilflächen',
        ],
      },
      {
        gruppe: 'Eingang und Kassenzone',
        positionen: [
          'Sauberlaufzone und Windfang tragen den größten Teil des Schmutzes',
          'Kassenbereich und Kundentheke auch während der Öffnungszeit',
          'Schaufensterverglasung innen im Griffbereich, außen über den Intervallplan',
          'Einkaufswagen- und Korbablagen',
        ],
      },
      {
        gruppe: 'Lager und Sozialräume',
        positionen: [
          'Verkehrswege im Lager frei und rutschsicher halten',
          'Personalräume, Umkleiden und Sanitär für Beschäftigte',
          'Bereich um Warenannahme und Leergut',
        ],
      },
    ],
  },

  zugang: {
    lead: 'Im Handel ist der Zeitpunkt wichtiger als die Häufigkeit.',
    stufen: [
      {
        intervall: 'Vor Öffnung',
        text: 'Der Hauptdurchgang. Verlangt Zutritt vor Ladenöffnung und damit eine Schlüssel- oder Alarmregelung.',
      },
      {
        intervall: 'Nach Ladenschluss',
        text: 'Alternative, wenn morgens niemand aufschließen kann. Nachteil: über Nacht setzt sich wieder Staub.',
      },
      {
        intervall: 'Während der Öffnungszeit',
        text: 'Für Eingang, Kassenzone und Sanitär. Ein kurzer Durchgang mittags bringt bei Publikumsverkehr mehr als ein langer am Abend.',
      },
    ],
    hinweise: [
      'Zutritt vor oder nach den Öffnungszeiten wird schriftlich geregelt, einschließlich Alarmanlage und Schlüsselübergabe. Bei Filialen mit Zentralschließung gehört die Regelung der Zentrale dazu.',
      'Arbeiten während der Öffnungszeit heißt: mit Hinweisschild bei feuchten Böden und ohne den Kundenweg zu blockieren. Das ist keine Kleinigkeit, sondern der Grund, warum Durchgänge kurz gehalten werden.',
    ],
  },

  leistungen: {
    lead: 'Im Handel sind vor allem diese vier gefragt.',
    slugs: ['unterhaltsreinigung', 'glasreinigung', 'aussenanlagen-winterdienst', 'grundreinigung'],
  },

  faq: [
    {
      frage: 'Reinigen Sie auch während der Öffnungszeit?',
      antwort:
        'Für Eingang, Kassenzone und Sanitär ja — mit Hinweisschild bei feuchten Böden und ohne den Kundenweg zu blockieren. Die Verkaufsfläche selbst läuft vor Öffnung oder nach Ladenschluss.',
    },
    {
      frage: 'Wird Ware angefasst oder umgestellt?',
      antwort:
        'Nein. Warenpräsentation ist Sache Ihres Betriebs. Wir reinigen um die Ware herum; was verschoben werden müsste, bleibt liegen und wird gemeldet.',
    },
    {
      frage: 'Was ist mit verkaufsoffenen Sonntagen?',
      antwort:
        'Zusätzliche Termine außerhalb des Turnus werden vorher vereinbart und getrennt abgerechnet. Sagen Sie die Termine früh genug, dann lässt sich das einplanen.',
    },
  ],
};
