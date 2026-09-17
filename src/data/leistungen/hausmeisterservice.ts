import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Der heikle Punkt dieser Leistung ist die Grenze zur Handwerkerleistung.
  Bewusst NICHT geschrieben, weil es Fachkunde verlangt, die nicht belegt ist:

  - Arbeiten an Elektroanlagen über den Leuchtmittelwechsel hinaus
  - Arbeiten an Gas-, Heizungs- und Trinkwasseranlagen
  - Prüfung sicherheitstechnischer Anlagen: Brandschutz, Rauchmelder,
    Feuerlöscher, Aufzug, RWA, Notbeleuchtung. Das sind vorgeschriebene
    Prüfungen durch befähigte Personen, keine Hausmeistertätigkeit.
  - Legionellenprobenahme und Trinkwasserhygiene
  - „Wartung“ als Begriff. Kontrollgang ja, Wartung im Sinne der Herstellervorgaben nein.

  Was bleibt, ist ehrlich und trägt: sehen, melden, koordinieren, kleine
  Dinge selbst erledigen.
*/
export const hausmeisterservice: LeistungInhalt = {
  slug: 'hausmeisterservice',

  meta: {
    /* 46 Zeichen */
    title: 'Hausmeisterservice für Gewerbeobjekte | S.mile',
    /* 147 Zeichen */
    description:
      'Kontrollgänge, Kleinreparaturen und Handwerkerkoordination über eine Ansprechperson. Für Gewerbeobjekte und Verwaltungen in Stuttgart und Umgebung.',
  },

  lead: `Jemand, der regelmäßig durch das Objekt geht, Dinge sieht, bevor sie teuer werden, und Handwerker koordiniert. In ${site.einsatzgebiet} — eine Nummer statt fünf.`,

  enthalten: {
    lead: 'Was ein Hausmeisterservice leisten kann, hängt daran, was ohne Fachkunde zulässig ist. Die Grenze steht weiter unten ausdrücklich — sie ist bei dieser Leistung der wichtigste Teil des Vertrags.',
    gruppen: [
      {
        gruppe: 'Kontrollgänge',
        positionen: [
          'Rundgang nach festem Turnus, Auffälligkeiten schriftlich festhalten',
          'Fluchtwege, Notausgänge und Feuerwehrzufahrten auf Freihaltung prüfen',
          'Beleuchtung in Fluren, Treppenhäusern und auf Parkflächen prüfen',
          'Zustand von Türen, Schlössern, Toren und Schrankenanlagen sichten',
          'Feuchtigkeit, Wasserflecken und sichtbare Schäden melden',
        ],
      },
      {
        gruppe: 'Kleinreparaturen',
        positionen: [
          'Leuchtmittel und Starter wechseln, soweit ohne Eingriff in die Installation möglich',
          'Türen und Fenster nachstellen, Scharniere und Schlösser ölen',
          'Möbel und Regale montieren, Bilder und Schilder anbringen',
          'Silikonfugen in Sanitärbereichen erneuern',
          'Verstopfte Siphons und Bodenabläufe reinigen',
        ],
      },
      {
        gruppe: 'Betrieb und Koordination',
        positionen: [
          'Müllbehälter zur Leerung bereitstellen und zurückholen',
          'Zählerstände ablesen und weitergeben',
          'Handwerker beauftragen, einweisen, begleiten und die Ausführung prüfen',
          'Schlüssel und Transponder verwalten, Übergaben dokumentieren',
          'Anlieferungen annehmen und weiterleiten',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nach Absprache',
      positionen: [
        'Filterwechsel an Lüftungsgeräten, soweit vom Hersteller als Nutzertätigkeit vorgesehen',
        'Ablesen und Meldung von Betriebsdrücken an Heizungsanlagen — ohne Eingriff',
        'Bereitstellung und Kontrolle von Erste-Hilfe-Material',
        '[TODO Kunde: Gibt es eine Erreichbarkeit außerhalb der Bürozeiten für Störungen? Wenn ja, mit welcher Reaktionszeit? Für Verwaltungen mit mehreren Objekten ist das ein Auswahlkriterium.]',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Hier verläuft die wichtigste Linie dieser Leistung. Sie steht so im Vertrag, damit im Ernstfall niemand davon ausgeht, es sei erledigt.',
    punkte: [
      {
        text: 'Arbeiten an Elektro-, Gas-, Heizungs- und Trinkwasseranlagen. Ein Leuchtmittel wechseln ja, eine Leitung anfassen nein — das ist Sache eines zugelassenen Fachbetriebs.',
      },
      {
        text: 'Vorgeschriebene Prüfungen sicherheitstechnischer Anlagen: Brandschutz, Feuerlöscher, Rauchmelder, Notbeleuchtung, Aufzug. Wir prüfen, ob Fluchtwege frei sind, und melden fehlende Prüfnachweise — die Prüfung selbst verlangt eine befähigte Person.',
      },
      {
        text: 'Schnee, Eis und die Pflege der Außenflächen. Das ist eine eigene Leistung mit eigenem Vertrag und eigener Dokumentation.',
        verweisSlug: 'aussenanlagen-winterdienst',
      },
    ],
  },

  turnus: {
    lead: 'Der Turnus richtet sich nach der Größe des Objekts und danach, wie viel dort täglich passiert.',
    stufen: [
      {
        intervall: 'Zwei bis drei Mal pro Woche',
        text: 'Objekte mit Publikumsverkehr, mehreren Mietern oder laufenden Anlieferungen. Hier fällt zwischen zwei Rundgängen genug an.',
      },
      {
        intervall: 'Wöchentlich',
        text: 'Der Regelfall bei einzelnen Büro- oder Handelsobjekten mit überschaubarer Technik.',
      },
      {
        intervall: 'Vierzehntäglich',
        text: 'Kleinere Objekte, Praxen, Objekte ohne Außenanlagen. Häufig in Kombination mit der Unterhaltsreinigung, dann fällt der Weg nur einmal an.',
        },
      {
        intervall: 'Auf Abruf',
        text: 'Zusätzlich zum Turnus, wenn etwas gemeldet wird. Was als Reaktionszeit gilt, steht im Vertrag und nicht im Ermessen.',
      },
    ],
    zeitfenster: [
      'Rundgänge laufen zu festen Zeiten, damit sie planbar sind und Mieter wissen, wann jemand im Haus ist. Bei Objekten mit Unterhaltsreinigung wird beides zusammengelegt.',
      'Jeder Rundgang wird protokolliert: was geprüft wurde, was auffiel, was veranlasst ist. Sie bekommen das Protokoll, ohne danach zu fragen — und haben damit auch eine Unterlage für die Eigentümerversammlung.',
    ],
  },

  objekte: {
    lead: 'Für Verwaltungen mit mehreren Objekten ist das die Leistung, die am meisten Aufwand abnimmt: ein Rundgang, ein Protokoll, eine Nummer für Rückfragen.',
    slugs: ['buero', 'handel', 'industrie-logistik', 'hotellerie-gastronomie', 'medizin'],
  },

  abstimmung: [
    'Bei der Begehung wird aufgenommen, welche Technik im Objekt ist, wer bisher wofür zuständig war und wo die Grenze zur Handwerkerleistung verläuft.',
    'Der Vertrag nennt Turnus, Umfang der Kleinreparaturen und die Materialregelung — wer Kleinteile stellt und bis zu welchem Betrag ohne Rückfrage beschafft wird.',
    'Für Handwerkeraufträge gilt eine Freigabegrenze, die Sie festlegen. Darüber wird gefragt, darunter erledigt und im Protokoll vermerkt.',
  ],

  faq: [
    {
      frage: 'Wo genau ist die Grenze zur Handwerkerleistung?',
      antwort:
        'Alles, was einen Eingriff in Elektro-, Gas-, Heizungs- oder Trinkwasseranlagen bedeutet, geht an einen Fachbetrieb. Wir sehen es, melden es, holen Angebote und begleiten die Ausführung — wir führen sie nicht selbst aus.',
    },
    {
      frage: 'Wer bezahlt Material und Kleinteile?',
      antwort:
        'Kleinteile wie Leuchtmittel, Silikon oder Schrauben werden nach Aufwand abgerechnet oder aus Ihrem Bestand genommen — was Ihnen lieber ist. Eine Freigabegrenze für Beschaffungen legen Sie fest.',
    },
    {
      frage: 'Erhalten wir die Rundgänge schriftlich?',
      antwort:
        'Ja. Jeder Rundgang wird protokolliert: geprüfte Punkte, Auffälligkeiten, veranlasste Schritte. Das Protokoll kommt automatisch, nicht auf Anfrage.',
    },
    {
      frage: 'Gibt es eine Erreichbarkeit bei Störungen außerhalb der Bürozeiten?',
      antwort:
        '[TODO Kunde: Offen. Wenn ja, mit welcher Reaktionszeit? Ohne belastbare Antwort sollte hier nichts stehen — eine Notdienstzusage, die nicht hält, ist schlimmer als keine.]',
    },
  ],
};
