import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Grob-, Zwischen- und Endreinigung sind eingeführte Begriffe der Branche,
  keine Zertifikate — sie dürfen benannt werden.

  Bewusst NICHT geschrieben: Entsorgung von Bauschutt mit Containerstellung
  und Entsorgungsnachweis. Das ist eine eigene Gewerbeerlaubnis und steht
  deshalb unter „nicht enthalten“.

  Ebenfalls nicht behauptet: Entfernen von Zementschleier mit Säure,
  Bauschlussreinigung mit Industriesaugern der Staubklasse M oder H. Beides
  hängt an Mitteln und Geräten.
*/
export const bauendreinigung: LeistungInhalt = {
  slug: 'bauendreinigung',

  meta: {
    /* 40 Zeichen */
    title: 'Bauendreinigung vor der Abnahme | S.mile',
    /* 141 Zeichen */
    description:
      'Übergabefertige Flächen zum vereinbarten Termin: Folien, Aufkleber, Farbreste, Feinstaub. Für Neubau und Sanierung in Stuttgart und Umgebung.',
  },

  lead: `Die Reinigung zwischen Handwerker und Abnahme. Folien, Aufkleber, Mörtel- und Farbreste, Feinstaub — damit Ihre Übergabe nicht an der Reinigung hängt. Für Neubau, Umbau und Sanierung in ${site.einsatzgebiet}.`,

  enthalten: {
    lead: 'Umfang und Termin werden vor Beginn festgelegt, weil auf einer Baustelle beides wandert. Was folgt, ist die Endreinigung — der Durchgang vor der Abnahme.',
    gruppen: [
      {
        gruppe: 'Rückstände entfernen',
        positionen: [
          'Bauschutzfolien, Klebebänder und Abdeckungen abnehmen',
          'Aufkleber und Etiketten von Fenstern, Türen und Sanitärobjekten',
          'Mörtel-, Gips- und Farbspritzer von Böden, Rahmen und Beschlägen',
          'Silikonreste an Fugen und Übergängen nacharbeiten',
        ],
      },
      {
        gruppe: 'Fenster und Türen',
        positionen: [
          'Glasflächen innen und außen einschließlich Rahmen und Falze',
          'Fensterbänke, Laibungen und Rollladenschienen',
          'Türblätter, Zargen, Drücker und Schließbleche',
          'Bodenschienen und Türdichtungen von Bauschmutz befreien',
        ],
      },
      {
        gruppe: 'Sanitär und Küche',
        positionen: [
          'Sanitärobjekte, Armaturen und Duschabtrennungen',
          'Fliesen und Fugen in Wand und Boden',
          'Einbauküchen innen und außen, Arbeitsplatten und Spüle',
          'Bodenabläufe und Revisionsklappen',
        ],
      },
      {
        gruppe: 'Feinreinigung',
        positionen: [
          'Böden reinigen, je nach Belag nass oder trocken',
          'Heizkörper, Rohre und Fußleisten',
          'Steckdosen, Schalter, Verteilerblenden und Leuchten außen abwischen',
          'Feinstaub von Oberkanten, Türblättern und Einbauten nehmen',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nach Absprache',
      positionen: [
        'Baugrobreinigung während der Bauphase — Kehren, Freiräumen der Verkehrswege',
        'Bauzwischenreinigung vor dem Einbau von Böden oder Küchen',
        'Treppenhaus und Außenanlagen im Anschluss',
        '[TODO Kunde: Wird Zementschleier entfernt? Das verlangt spezielle Mittel und Erfahrung mit dem jeweiligen Belag — bei Feinsteinzeug eine häufige Position.]',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Auf einer Baustelle ist die Abgrenzung wichtiger als überall sonst, weil mehrere Gewerke gleichzeitig arbeiten.',
    punkte: [
      {
        text: 'Entsorgung von Bauschutt, Verpackungen und Restmaterial einschließlich Containerstellung. Das ist eine eigene Leistung mit eigenen Nachweisen — wir räumen Reinigungsabfall ab, nicht die Baustelle.',
      },
      {
        text: 'Mängelbeseitigung am Bauwerk: Lackausbesserungen, Nachfugen, Nacharbeiten an Putz oder Estrich. Das gehört zum jeweiligen Gewerk.',
      },
      {
        text: 'Die laufende Reinigung nach dem Einzug. Sie beginnt nach der Abnahme und wird getrennt vereinbart.',
        verweisSlug: 'unterhaltsreinigung',
      },
    ],
  },

  turnus: {
    titel: 'Phasen und Zeitfenster',
    lead: 'Bauendreinigung hat keinen Turnus, sondern eine Abfolge. Welche Phasen beauftragt werden, entscheidet der Bauablauf.',
    stufen: [
      {
        intervall: 'Baugrobreinigung',
        text: 'Während der Bauphase: Verkehrswege frei halten, groben Schmutz und Verpackungsmaterial aus den Bereichen nehmen, in denen weitergearbeitet wird.',
      },
      {
        intervall: 'Bauzwischenreinigung',
        text: 'Vor einem Gewerk, das eine saubere Fläche braucht — vor dem Verlegen von Böden, vor dem Küchenaufbau, vor dem Malen.',
      },
      {
        intervall: 'Bauendreinigung',
        text: 'Der Durchgang vor der Abnahme. Das ist die Leistung, die hier beschrieben ist, und in der Regel die einzige beauftragte.',
      },
      {
        intervall: 'Nachreinigung',
        text: 'Nach der Mängelbeseitigung, wenn Handwerker noch einmal im Objekt waren. Wird getrennt beauftragt, weil der Zeitpunkt vorher nicht feststeht.',
      },
    ],
    zeitfenster: [
      'Wir kommen, wenn alle Gewerke fertig sind — nicht vorher. Wird nach der Reinigung noch gebohrt oder gestrichen, ist der Durchgang verloren. Der Termin wird deshalb mit der Bauleitung abgestimmt und nicht mit dem Kalender.',
      'Verschiebt sich die Fertigstellung, verschiebt sich der Termin. Sagen Sie so früh Bescheid, wie es geht; kurzfristige Termine sind möglich, aber nicht garantiert.',
    ],
  },

  objekte: {
    lead: 'Der Anlass ist überall derselbe — eine Übergabe steht an. Was sich unterscheidet, ist die Abnahmesituation: ein Mietobjekt wird anders übergeben als eine Produktionshalle.',
    slugs: ['buero', 'handel', 'industrie-logistik', 'medizin', 'hotellerie-gastronomie'],
  },

  abstimmung: [
    'Die Begehung findet auf der Baustelle statt, möglichst mit der Bauleitung. Aufgenommen wird der Zustand, die Fläche und was noch aussteht.',
    'Das Angebot nennt Umfang, Zeitfenster und die Annahme, in welchem Zustand übergeben wird. Weicht der Zustand davon ab, wird nachgetragen — vorher, nicht in der Rechnung.',
    'Die Abnahme der Reinigung läuft gemeinsam, direkt vor Ihrer eigenen Abnahme. Was nicht passt, wird nachgearbeitet.',
  ],

  faq: [
    {
      frage: 'Wann können Sie anfangen?',
      antwort:
        'Wenn alle Gewerke durch sind. Kommt danach noch jemand zum Bohren oder Streichen, muss nachgereinigt werden — das ist teurer als einmal richtig zu warten.',
    },
    {
      frage: 'Räumen Sie auch den Bauschutt weg?',
      antwort:
        'Nein. Bauschutt, Verpackungen und Restmaterial gehören zur Baustellenentsorgung mit eigenen Nachweisen. Reinigungsabfall nehmen wir mit.',
    },
    {
      frage: 'Was, wenn sich die Übergabe verschiebt?',
      antwort:
        'Dann verschiebt sich der Termin. Sagen Sie so früh Bescheid, wie es geht. Kurzfristige Termine sind möglich, aber nicht zugesagt.',
    },
    {
      frage: 'Dokumentieren Sie Schäden, die Sie vorfinden?',
      antwort:
        'Ja. Kratzer in Glas, Beschädigungen an Zargen oder Beläge, die sich nicht mehr reinigen lassen, melden wir vor der Bearbeitung. Das ist vor einer Abnahme in Ihrem Interesse.',
    },
  ],
};
