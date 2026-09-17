import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Bewusst NICHT geschrieben: Einscheibenmaschine, Nassreiniger,
  Polymerbeschichtung, Kristallisation, Sprühextraktion, Trockenschaum.
  Das sind Verfahren und Maschinen. Ob der Betrieb sie hat, weiß ich nicht.

  Die Bodenbehandlung nach der Grundreinigung — Einpflegen, Beschichten,
  Versiegeln — steht deshalb als markierte offene Frage und nicht als
  Leistung. Sie ist der Punkt, an dem Angebote sich unterscheiden.
*/
export const grundreinigung: LeistungInhalt = {
  slug: 'grundreinigung',

  meta: {
    /* 42 Zeichen */
    title: 'Grundreinigung für Gewerbeflächen | S.mile',
    /* 143 Zeichen */
    description:
      'Einmalige Tiefenreinigung von Böden, Sanitär und Küchen — nach Mieterwechsel, vor Wiedervermietung oder als jährlicher Durchgang. In Stuttgart.',
  },

  lead: `Der einmalige Durchgang, wenn die laufende Reinigung an ihre Grenze kommt: nach Mieterwechsel, vor der Wiedervermietung oder als Auffrischung einmal im Jahr. In ${site.einsatzgebiet}, mit vorher abgestimmtem Ergebnis und festem Zeitfenster.`,

  enthalten: {
    lead: 'Eine Grundreinigung wird vorher abgegrenzt — welche Räume, welche Flächen, welches Ergebnis. Ohne diese Abgrenzung ist hinterher strittig, was dazugehörte.',
    gruppen: [
      {
        gruppe: 'Böden',
        positionen: [
          'Hartböden nass reinigen und Altverschmutzung aus Fugen und Rändern lösen',
          'Textile Böden gründlich absaugen, Flecken gezielt nachbehandeln',
          'Sockelleisten, Türschwellen und Übergangsprofile mit reinigen',
          'Ränder und Ecken von Hand nacharbeiten — dort sitzt die Verschmutzung, die bei der Unterhaltsreinigung liegen bleibt',
        ],
      },
      {
        gruppe: 'Sanitärbereiche',
        positionen: [
          'Fliesen, Fugen und Bodenabläufe gründlich reinigen',
          'Kalk an Armaturen, Duschen und Urinalen entfernen',
          'WC-Becken einschließlich Rückseite und Befestigung',
          'Trennwände, Türen und Ablagen beidseitig reinigen',
        ],
      },
      {
        gruppe: 'Küchen und Teeküchen',
        positionen: [
          'Arbeitsflächen, Fliesenspiegel und Spüle entkalken',
          'Schränke innen und außen, Griffe und Beschläge',
          'Kühlschrank und Spülmaschine innen, soweit zugänglich',
          'Dunstabzug außen und Fettfilter, soweit ausbaubar',
        ],
      },
      {
        gruppe: 'Mobiliar und Einbauten',
        positionen: [
          'Schreibtische, Regale und Schränke innen und außen',
          'Türen, Zargen, Lichtschalter und Steckdosenblenden',
          'Heizkörper einschließlich Zwischenräume und Rückseite',
          'Leuchten, Lüftungsgitter und Kabelkanäle abwischen',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nach Absprache',
      positionen: [
        'Polstermöbel und Bürostühle reinigen',
        'Jalousien und Lamellenvorhänge',
        'Fenster innen und außen — läuft sonst über die Glasreinigung',
        '[TODO Kunde: Wird nach der Grundreinigung eine Bodenbehandlung angeboten — Einpflegen, Beschichten, Versiegeln? Das ist der Punkt, an dem sich Angebote unterscheiden, und er gehört ins Leistungsverzeichnis.]',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Die Grundreinigung ist ein einmaliger Durchgang. Drei Dinge gehören nicht dazu.',
    punkte: [
      {
        text: 'Die laufende Reinigung danach. Eine Grundreinigung ersetzt keinen Turnus, sie setzt ihn zurück auf null.',
        verweisSlug: 'unterhaltsreinigung',
      },
      {
        text: 'Reinigung nach Bauarbeiten oder Sanierung. Bauschmutz, Zementschleier und Farbreste verlangen ein anderes Vorgehen.',
        verweisSlug: 'bauendreinigung',
      },
      {
        text: 'Entrümpeln, Möbelabbau und Entsorgung von Sperrgut. Wir reinigen, was zugänglich ist; leergeräumt wird vorher.',
      },
    ],
  },

  turnus: {
    lead: 'Eine Grundreinigung ist kein Turnus, sondern ein Anlass. Diese vier kommen in der Praxis vor.',
    stufen: [
      {
        intervall: 'Bei Mieterwechsel',
        text: 'Zwischen Auszug und Übergabe. Der Termin ist meist eng, deshalb wird das Zeitfenster vorher verbindlich festgelegt.',
      },
      {
        intervall: 'Vor Wiedervermietung oder Verkauf',
        text: 'Wenn die Fläche besichtigt wird. Hier zählt der erste Eindruck in Eingang, Sanitär und Küche mehr als die Gesamtfläche.',
      },
      {
        intervall: 'Einmal jährlich',
        text: 'Als geplanter Durchgang zusätzlich zur Unterhaltsreinigung, häufig in den Betriebsferien oder über ein Wochenende.',
      },
      {
        intervall: 'Nach Umbau oder Wasserschaden',
        text: 'Wenn ein einzelner Bereich betroffen war. Bei größeren Baumaßnahmen ist die Bauendreinigung die passende Leistung.',
      },
    ],
    zeitfenster: [
      'Grundreinigung braucht ein Zeitfenster, in dem die Fläche nicht genutzt wird — abends, am Wochenende oder in den Betriebsferien. Wie lange, hängt an Fläche und Zustand und wird bei der Begehung geschätzt.',
      'Nass gereinigte Böden müssen abtrocknen, bevor sie wieder begangen werden. Das wird bei der Terminplanung eingerechnet und nicht auf den letzten Abend gelegt.',
    ],
  },

  objekte: {
    lead: 'Der Anlass unterscheidet sich je Objektart, das Vorgehen weniger: in der Verwaltung der Mieterwechsel, im Handel die Umbauphase, in der Praxis der jährliche Durchgang.',
    slugs: ['buero', 'handel', 'medizin', 'hotellerie-gastronomie', 'industrie-logistik'],
  },

  abstimmung: [
    'Bei der Begehung wird der Zustand aufgenommen und festgelegt, welches Ergebnis erreicht werden soll — das ist bei einer Grundreinigung wichtiger als die Auflistung der Tätigkeiten.',
    'Sie erhalten ein Angebot mit Leistungsumfang und Zeitfenster. Was nicht drinsteht, ist nicht beauftragt; Nachträge werden vorher abgestimmt.',
    'Nach dem Durchgang gehen wir die Fläche gemeinsam ab. Was nicht passt, wird nachgearbeitet, bevor abgerechnet wird.',
  ],

  faq: [
    {
      frage: 'Wie lange ist die Fläche nicht nutzbar?',
      antwort:
        'Das hängt an Fläche und Bodenbelag. Bei der Begehung bekommen Sie eine Einschätzung, und die Trocknungszeit wird in die Terminplanung eingerechnet.',
    },
    {
      frage: 'Müssen wir vorher ausräumen?',
      antwort:
        'Freie Flächen bringen ein deutlich besseres Ergebnis. Was stehen bleibt, wird umgestellt und wieder zurückgestellt, aber Schränke und Regale werden nicht ausgeräumt.',
    },
    {
      frage: 'Ist eine Grundreinigung am Wochenende möglich?',
      antwort:
        'Das ist bei dieser Leistung der Normalfall, weil die Fläche frei sein muss. Der Termin wird bei der Beauftragung verbindlich festgelegt.',
    },
    {
      frage: 'Werden alte Beschichtungen entfernt?',
      antwort:
        '[TODO Kunde: Hängt an Verfahren und Ausstattung — bitte gemeinsam mit der Frage zur Bodenbehandlung klären. Bei Linoleum und PVC ist das die entscheidende Position im Angebot.]',
    },
  ],
};
