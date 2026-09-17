import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Offen und deshalb als Platzhalter markiert: bis zu welcher Höhe gearbeitet
  werden kann. Daran hängt bei dieser Leistung fast alles — Fassadenverglasung
  ab dem ersten Obergeschoss verlangt Hubarbeitsbühne, Steigschutz oder
  Seilzugangstechnik, und jede dieser Varianten setzt Ausstattung und
  Qualifikation voraus, die ich nicht behaupten kann.

  Bewusst NICHT geschrieben: Hebebühne, Teleskopstange, Osmoseanlage,
  reinstwassergestützte Reinigung. Das sind Verfahren und Geräte, nicht
  Zusagen.
*/
export const glasreinigung: LeistungInhalt = {
  slug: 'glasreinigung',

  meta: {
    /* 54 Zeichen */
    title: 'Glasreinigung für Gewerbeobjekte in Stuttgart | S.mile',
    /* 145 Zeichen */
    description:
      'Fenster, Rahmen und Glastrennwände nach Intervallplan. Für Büro-, Handels- und Praxisflächen in Stuttgart. Mit Nachweis der ausgeführten Termine.',
  },

  lead: `Fenster, Rahmen, Falze und Glastrennwände nach festem Intervallplan statt auf Zuruf. Für Gewerbeobjekte in ${site.einsatzgebiet} — mit Nachweis, wann welche Fläche bearbeitet wurde.`,

  enthalten: {
    lead: 'Glasreinigung wird flächenweise vereinbart, nicht pauschal. Bei der Begehung wird festgehalten, welche Verglasung in welchem Intervall dran ist.',
    gruppen: [
      {
        gruppe: 'Fensterflächen',
        positionen: [
          'Glasflächen innen und außen reinigen, soweit erreichbar',
          'Rahmen, Falze und Dichtungen feucht abwischen',
          'Fensterbänke innen und außen reinigen',
          'Fensterbeschläge und Griffe abwischen',
        ],
      },
      {
        gruppe: 'Innenverglasung',
        positionen: [
          'Glastrennwände und Glasbausteine beidseitig reinigen',
          'Glastüren einschließlich Griffe, Rahmen und Bodenschienen',
          'Vitrinen, Glasablagen und verglaste Schrankfronten',
          'Spiegel in Sanitär- und Umkleidebereichen',
        ],
      },
      {
        gruppe: 'Eingangs- und Publikumsbereich',
        positionen: [
          'Eingangs- und Windfangverglasung beidseitig',
          'Automatiktüren einschließlich Rahmenprofile',
          'Schaufenster und Auslagenverglasung',
          'Brüstungs- und Geländerverglasung, soweit vom Boden erreichbar',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nach Absprache',
      positionen: [
        'Lichtkuppeln und Dachverglasung — abhängig von Zugang und Absturzsicherung',
        'Jalousien und Rollos außen abwischen',
        'Insektenschutzgitter ausbauen, reinigen, wieder einsetzen',
        '[TODO Kunde: Bis zu welcher Höhe kann gearbeitet werden? Nur vom Boden aus, mit Leiter, oder mit Hubarbeitsbühne? Davon hängt ab, welche Fassadenverglasung überhaupt angeboten werden kann.]',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Drei Abgrenzungen, die bei Glasreinigung regelmäßig zu Rückfragen führen.',
    punkte: [
      {
        text: 'Fassadenreinigung von Putz, Stein, Metall oder Holz. Glas und Rahmen ja, die Wand daneben ist eine andere Leistung.',
      },
      {
        text: 'Beseitigung von Glasschäden: Kratzer, Zementschleier nach Bauarbeiten, Beschlag zwischen den Scheiben. Bauliche Verschmutzung nach einer Baustelle läuft über die Bauendreinigung.',
        verweisSlug: 'bauendreinigung',
      },
      {
        text: 'Anbringen oder Entfernen von Folien und Beschichtungen — Sonnenschutz, Sichtschutz, Beschriftung. Das macht der Folienhersteller oder ein Werbetechniker.',
      },
    ],
  },

  turnus: {
    lead: 'Wie oft sinnvoll ist, hängt an der Lage: eine Straßenfassade verschmutzt schneller als eine Hofseite, und ein Eingangsbereich mit Publikumsverkehr braucht ein anderes Intervall als ein Besprechungsraum im dritten Obergeschoss.',
    stufen: [
      {
        intervall: 'Monatlich bis vierzehntäglich',
        text: 'Eingangsverglasung, Automatiktüren und Schaufenster im Handel. Hier entscheidet der Griffbereich, nicht die Gesamtfläche.',
      },
      {
        intervall: 'Vierteljährlich',
        text: 'Der Regelfall bei Büroobjekten an Hauptstraßen und bei Praxen mit Publikumsverkehr.',
      },
      {
        intervall: 'Halbjährlich',
        text: 'Büro- und Verwaltungsflächen in ruhiger Lage, Innenverglasung in wenig genutzten Bereichen.',
      },
      {
        intervall: 'Einmal jährlich',
        text: 'Lager- und Hallenverglasung, Oberlichter, Flächen ohne Publikumsverkehr.',
      },
    ],
    zeitfenster: [
      'Termine werden vorher angekündigt, weil in Büros Arbeitsplätze frei geräumt und in Praxen Behandlungszeiten berücksichtigt werden müssen. Ein Intervallplan für das Jahr ist üblich, damit Sie nicht jedes Mal disponieren müssen.',
      'Gearbeitet wird nicht bei Frost und nicht bei Dauerregen — beides führt zu einem Ergebnis, das nach zwei Stunden wieder streifig ist. Fällt ein Termin deshalb aus, wird er nachgeholt, nicht abgerechnet.',
    ],
  },

  objekte: {
    lead: 'Glas ist in jedem Objekt anders gewichtet: im Handel entscheidet das Schaufenster, im Bürogebäude die Trennwand, in der Praxis der Empfang.',
    slugs: ['buero', 'handel', 'medizin', 'hotellerie-gastronomie', 'industrie-logistik'],
  },

  abstimmung: [
    'Bei der Begehung werden die Glasflächen aufgenommen und danach unterschieden, wie sie erreichbar sind — vom Boden, mit Leiter, oder gar nicht ohne zusätzliche Technik.',
    'Daraus entsteht ein Intervallplan für das Jahr: welche Fläche wann, und was ein Durchgang umfasst.',
    'Nach jedem Durchgang erhalten Sie die Angabe, welche Flächen bearbeitet wurden. Damit lässt sich die Leistung prüfen, ohne dass jemand nachzählen muss.',
  ],

  faq: [
    {
      frage: 'Brauchen Sie Wasser und Strom im Objekt?',
      antwort:
        'In der Regel ja, ein Wasseranschluss genügt. Wo keiner erreichbar ist, sagen Sie es vorher — dann wird das bei der Planung berücksichtigt.',
    },
    {
      frage: 'Was passiert bei Frost oder Dauerregen?',
      antwort:
        'Der Termin wird verschoben und nachgeholt. Bei Frost lässt sich nicht sauber arbeiten, bei Dauerregen ist das Ergebnis nach kurzer Zeit wieder hinfällig. Abgerechnet wird, was ausgeführt wurde.',
    },
    {
      frage: 'Müssen wir Arbeitsplätze frei räumen?',
      antwort:
        'An den Fenstern ja — Unterlagen, Geräte und Pflanzen von den Fensterbänken. Deshalb werden Termine vorher angekündigt und nicht spontan angesetzt.',
    },
    {
      frage: 'Reinigen Sie auch Fassadenverglasung in den Obergeschossen?',
      antwort:
        '[TODO Kunde: Diese Antwort hängt an der verfügbaren Technik und an der Qualifikation für Höhenarbeiten. Bitte klären, bevor die Seite online geht — es ist die häufigste Frage bei dieser Leistung.]',
    },
  ],
};
