import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Inhaltliche Grenzen, die hier bewusst eingehalten sind:

  - Keine Preise, keine Stundensätze, keine Quadratmeterpreise.
  - Keine Zertifikate, Normen oder Prüfsiegel.
  - Keine Maschinen oder Mittel behauptet. „Reinigungsmittel und Geräte
    bringen wir mit“ regelt, wer beschafft, nicht welches Gerät.
  - Desinfizierende Sanitärreinigung ist NICHT zugesagt: sie verlangt
    gelistete Mittel und Einwirkzeiten. Die Positionen sprechen von
    „reinigen“. Offene Frage steht in der Rückfragenliste.
  - Personen sind „Reinigungskräfte“, nicht „Gebäudereiniger“.
  - Keine Zusage über den Startseiten-Block „Wie wir arbeiten“ hinaus.
    Vertretung und Rückruf sind dort versprochen und werden hier nur
    konkretisiert.
*/
export const unterhaltsreinigung: LeistungInhalt = {
  slug: 'unterhaltsreinigung',

  meta: {
    /* 41 Zeichen */
    title: 'Unterhaltsreinigung in Stuttgart | S.mile',
    /* 146 Zeichen */
    description:
      'Laufende Reinigung von Büro-, Handels- und Logistikflächen in Stuttgart. Feste Turnusse, schriftliches Leistungsverzeichnis, feste Ansprechperson.',
  },

  lead: `Die laufende Reinigung Ihres Objekts nach festem Turnus: Büroflächen, Sanitärbereiche, Teeküchen und Verkehrswege. Im Einsatz in ${site.einsatzgebiet}, mit einem schriftlichen Leistungsverzeichnis je Objekt.`,

  enthalten: {
    lead: 'Die Positionen unten sind der übliche Umfang. Was davon in Ihrem Objekt gilt und in welchem Turnus, wird bei der Begehung festgelegt und schriftlich festgehalten.',
    gruppen: [
      {
        gruppe: 'Büro- und Verwaltungsflächen',
        positionen: [
          'Papierkörbe leeren, Abfall nach Ihrer Trennung getrennt entsorgen',
          'Böden saugen oder feucht wischen, je nach Belag',
          'Freie Flächen auf Schreibtischen, Ablagen und Fensterbänken feucht abwischen',
          'Türklinken, Lichtschalter und Handläufe abwischen',
          'Glastüren und Glastrennwände im Griffbereich reinigen',
        ],
      },
      {
        gruppe: 'Sanitärbereiche',
        positionen: [
          'WC-Becken, Urinale, Waschtische und Armaturen reinigen',
          'Spiegel, Ablagen und Fliesen im Spritzbereich abwischen',
          'Böden reinigen, Abfallbehälter leeren und Beutel wechseln',
          'Verbrauchsmaterial nachfüllen: Seife, Papierhandtücher, Toilettenpapier',
        ],
      },
      {
        gruppe: 'Teeküchen und Sozialräume',
        positionen: [
          'Arbeitsflächen, Spüle und Armatur reinigen',
          'Tische und Sitzflächen abwischen',
          'Fronten von Kühlschrank, Spülmaschine und Schränken außen abwischen',
          'Böden reinigen, Abfall entsorgen',
        ],
      },
      {
        gruppe: 'Eingänge und Verkehrsflächen',
        positionen: [
          'Eingangsbereich, Windfang und Sauberlaufzone reinigen',
          'Flure und Verkehrswege reinigen',
          'Treppen und Handläufe reinigen',
          'Aufzugkabine, Spiegel und Tableau reinigen, soweit vorhanden',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nicht bei jedem Einsatz',
      positionen: [
        'Heizkörper, Fußleisten und Sockelbereiche abwischen',
        'Schilder, Beschriftungen und Bilderrahmen abstauben',
        'Möbelunterkanten, Stuhlrollen und Tischgestelle abwischen',
        'Lüftungsgitter im Griffbereich abstauben',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Drei Dinge gehören nicht in die Unterhaltsreinigung. Wir schreiben sie hier hin, damit sie nicht später zur Diskussion werden.',
    punkte: [
      {
        text: 'Fenster, Verglasung und Rahmen außerhalb des Griffbereichs. Das läuft nach eigenem Intervallplan.',
        verweisSlug: 'glasreinigung',
      },
      {
        text: 'Grundreinigung, Bodensanierung und das Einpflegen von Beschichtungen. Einmalige Leistungen mit eigenem Zeitfenster.',
        verweisSlug: 'grundreinigung',
      },
      {
        text: 'Die Beschaffung von Verbrauchsmaterial. Nachfüllen ist enthalten, wer Seife und Papier einkauft, legen wir im Vertrag fest.',
      },
    ],
  },

  turnus: {
    lead: 'Welcher Turnus passt, entscheidet sich bei der Begehung. Ausschlaggebend sind Publikumsverkehr, Bodenbelag, die Zahl der Sanitäreinheiten und ob ein Außenbereich dazugehört.',
    stufen: [
      {
        intervall: 'Täglich',
        text: 'Objekte mit durchgehendem Publikumsverkehr oder hoher Belegung. Meist betrifft das Sanitärbereiche, Eingänge und Verkehrswege, nicht zwingend alle Büroflächen.',
      },
      {
        intervall: 'Zwei bis drei Mal pro Woche',
        text: 'Der häufigste Fall bei Büroflächen mittlerer Größe: Sanitär und Eingänge bei jedem Einsatz, Büroflächen im Wechsel.',
      },
      {
        intervall: 'Wöchentlich',
        text: 'Kleinere Büroeinheiten, Praxen und Ladenflächen mit begrenzten Öffnungszeiten.',
      },
      {
        intervall: 'Zweiwöchentlich bis monatlich',
        text: 'Wenig genutzte Flächen: Lager, Archive, Technikräume, Besprechungsräume ohne feste Belegung.',
      },
    ],
    zeitfenster: [
      'Gereinigt wird vor Arbeitsbeginn, nach Arbeitsschluss oder während der Betriebszeit — was Ihr Betrieb zulässt. Bei Publikumsverkehr sind Eingang und Sanitär oft während der Öffnungszeit sinnvoller als danach.',
      'Zutritt, Schlüssel oder Transponder und der Umgang mit der Alarmanlage werden vor dem ersten Einsatz schriftlich geregelt. Ohne diese Regelung fangen wir nicht an.',
    ],
  },

  objekte: {
    lead: 'Unterhaltsreinigung kommt in allen Objektarten vor, die wir betreuen. Was sich unterscheidet, sind Zeitfenster, Zutrittsregeln und die Prüfpunkte bei der Kontrolle.',
    slugs: ['buero', 'handel', 'industrie-logistik', 'medizin', 'hotellerie-gastronomie'],
  },

  abstimmung: [
    'Bei der Begehung nehmen wir Flächen, Beläge und Sanitäreinheiten auf und halten fest, welche Position in welchem Turnus anfällt.',
    'Daraus entsteht das Leistungsverzeichnis für Ihr Objekt. Es ist die Grundlage für das Angebot und bleibt es im laufenden Betrieb.',
    'Änderungen am Umfang werden nachgetragen, nicht mündlich vereinbart — sonst stimmen Abrechnung und Kontrolle nach einem halben Jahr nicht mehr überein.',
  ],

  faq: [
    {
      frage: 'Reinigen Sie außerhalb unserer Betriebszeiten?',
      antwort:
        'Üblich ist vor Arbeitsbeginn oder nach Arbeitsschluss. Was möglich ist, hängt an Zutritt und Alarmanlage; das klären wir vor dem ersten Einsatz. Wochenendtermine besprechen wir im Einzelfall.',
    },
    {
      frage: 'Wer stellt Reinigungsmittel und Geräte?',
      antwort:
        'Reinigungsmittel und Geräte bringen wir mit. Verbrauchsmaterial in den Sanitärbereichen füllen wir auf; wer Seife und Papier beschafft, wird im Vertrag festgelegt.',
    },
    {
      frage: 'Was passiert, wenn die Reinigungskraft ausfällt?',
      antwort:
        'Für jedes Objekt ist eine eingewiesene Vertretung benannt. Wenn jemand anderes kommt, erfahren Sie es vorher — unangekündigte Wechsel gibt es nicht.',
    },
    {
      frage: 'Können wir den Turnus später ändern?',
      antwort:
        'Ja. Der Umfang wird im Leistungsverzeichnis angepasst, damit Abrechnung und Kontrolle zusammenpassen. Eine Änderung nur per Zuruf führt genau zu den Unklarheiten, die wir vermeiden wollen.',
    },
    {
      frage: 'Übernehmen Sie ein Objekt von einem anderen Dienstleister?',
      antwort:
        'Ja. Wir nehmen das Objekt auf, bevor der bisherige Dienstleister aufhört, und übernehmen zum vereinbarten Termin. Ein Parallelbetrieb ist dafür nicht nötig.',
    },
  ],
};
