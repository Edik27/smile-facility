import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Bewusst NICHT zugesagt: Maschinenreinigung, Reinigung im laufenden
  Produktionsprozess, Arbeiten in Bereichen mit Absturzgefahr,
  Reinigungsmaschinen mit Aufsitzführung.

  Die Unterweisung nach der Betriebsordnung des Kunden ist eine Zusage, die
  der Startseiten-Block „Wie wir arbeiten“ trägt (Personal wird eingewiesen)
  — sie wird hier nur auf Industrieflächen bezogen, nicht erweitert.
*/
export const industrieLogistik: ObjekttypInhalt = {
  slug: 'industrie-logistik',

  meta: {
    title: 'Reinigung für Industrie und Logistik | S.mile',
    description:
      'Hallenböden, Verkehrswege und Sozialräume im Schichtbetrieb, abgestimmt auf Produktions- und Umschlagzeiten. Für Objekte in Stuttgart und Umgebung.',
  },

  lead: `Hallen, Lager und Umschlagflächen in ${site.einsatzgebiet}: gereinigt wird in den Zeiten, in denen Ihr Betrieb es zulässt — nicht nach unserem Kalender.`,

  ankommt: {
    lead: 'In Industrie- und Logistikobjekten ist die Fläche groß und die Zeit knapp. Was zählt, sind Verkehrswege, Sozialräume und die Frage, wann überhaupt gearbeitet werden kann.',
    gruppen: [
      {
        gruppe: 'Hallenböden und Verkehrswege',
        positionen: [
          'Verkehrswege und Fluchtwege haben Vorrang vor der Gesamtfläche',
          'Bodenmarkierungen werden nicht überklebt, nicht abgedeckt und nicht beschädigt',
          'Bereiche mit Staplerverkehr nur in Pausen oder mit Absprache',
          'Ladezonen und Rampenbereiche einschließlich der Übergänge',
        ],
      },
      {
        gruppe: 'Sozialräume und Umkleiden',
        positionen: [
          'Umkleiden, Waschräume und Duschen — bei Schichtbetrieb der Bereich mit dem höchsten Turnus',
          'Pausenräume und Automatenbereiche',
          'Sanitär in der Halle, oft weiter von Anschlüssen entfernt als im Bürobau',
          'Spinde außen abwischen, Inhalt bleibt unberührt',
        ],
      },
      {
        gruppe: 'Büro- und Meisterbereiche in der Halle',
        positionen: [
          'Meisterbüros und Schichtleiterräume, meist mit anderem Turnus als die Halle',
          'Verglasung zwischen Büro und Halle beidseitig',
          'Treppen und Galerien zu Zwischenebenen',
        ],
      },
    ],
  },

  zugang: {
    lead: 'Der Zeitpunkt richtet sich nach Ihrem Schichtmodell, nicht umgekehrt.',
    stufen: [
      {
        intervall: 'In der Schichtpause',
        text: 'Kurze Fenster für Sozialräume und Sanitär. Planbar, weil die Pausen feststehen.',
      },
      {
        intervall: 'Zwischen zwei Schichten',
        text: 'Das übliche Fenster für Hallenböden und Verkehrswege, wenn kein Staplerverkehr läuft.',
      },
      {
        intervall: 'Am Wochenende',
        text: 'Für Flächen, die im Betrieb nicht erreichbar sind. Wird als eigener Termin vereinbart, nicht als Bereitschaft.',
      },
    ],
    hinweise: [
      'Unser Personal wird vor dem ersten Einsatz auf Ihre Betriebsordnung unterwiesen — Verkehrswege, Sperrbereiche, Verhalten bei Alarm, erforderliche persönliche Schutzausrüstung. Ohne diese Unterweisung fangen wir nicht an.',
      'Nicht übernommen werden Maschinenreinigung, Arbeiten im laufenden Prozess und Bereiche, die nur mit Absturzsicherung zugänglich sind. Das gehört an Ihre Instandhaltung oder an einen Fachbetrieb.',
    ],
  },

  leistungen: {
    lead: 'In Hallen und Lagern kommen vor allem diese vier zusammen.',
    slugs: ['unterhaltsreinigung', 'grundreinigung', 'aussenanlagen-winterdienst', 'glasreinigung'],
  },

  faq: [
    {
      frage: 'Arbeiten Sie im Schichtbetrieb?',
      antwort:
        'Wir arbeiten in den Fenstern, die Ihr Schichtmodell hergibt — in Pausen, zwischen Schichten oder am Wochenende. Welche Fenster das sind, wird bei der Begehung festgelegt und nicht laufend neu verhandelt.',
    },
    {
      frage: 'Werden Bodenmarkierungen berücksichtigt?',
      antwort:
        'Ja. Markierungen werden nicht abgedeckt und nicht mit Mitteln bearbeitet, die sie angreifen. Wo eine Markierung bereits beschädigt ist, melden wir das — erneuern lassen Sie sie besser vom Fachbetrieb.',
    },
    {
      frage: 'Braucht Ihr Personal eine Sicherheitsunterweisung?',
      antwort:
        'Ja, und wir bestehen darauf. Vor dem ersten Einsatz wird nach Ihrer Betriebsordnung unterwiesen: Verkehrswege, Sperrbereiche, Verhalten bei Alarm, Schutzausrüstung.',
    },
  ],
};
