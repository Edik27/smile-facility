import { site } from './site';

/*
  Sektion 6 — der tragende Block der Startseite. Ersetzt die Referenzliste:
  keine Aussagen über Vergangenes, sondern Zusagen, die der Kunde am Tag der
  Beauftragung einfordern kann. Jede Zeile ist absichtlich so formuliert, dass
  sie überprüfbar ist.
*/
export interface Zusage {
  titel: string;
  erlaeuterung: string;
}

export const zusagen: Zusage[] = [
  {
    titel: 'Feste Ansprechperson, direkt erreichbar',
    erlaeuterung:
      'Sie erhalten eine Durchwahl und eine Mobilnummer. Keine Zentrale, keine Ticketnummer, keine Weiterleitung durch drei Abteilungen.',
  },
  {
    titel: 'Schriftliches Leistungsverzeichnis je Objekt',
    erlaeuterung:
      'Jede Leistung mit Umfang und Turnus. Abweichungen werden dokumentiert und Ihnen mitgeteilt, nicht stillschweigend ausgeglichen.',
  },
  {
    titel: 'Reklamationen innerhalb von 24 Stunden behoben',
    erlaeuterung:
      'Gemeldete Mängel sind am nächsten Werktag erledigt. Wenn das im Einzelfall nicht möglich ist, erfahren Sie noch am selben Tag, warum und wann.',
  },
  {
    titel: 'Geregelte Vertretung bei Ausfall',
    erlaeuterung:
      'Für jedes Objekt ist eine eingewiesene Vertretung benannt. Wechsel im Personal kündigen wir vorher an, statt Sie vor fremden Gesichtern zu überraschen.',
  },
  {
    titel: 'Rückruf innerhalb eines Werktags',
    erlaeuterung:
      'Gilt für jede Anfrage — auch für die, aus der am Ende kein Auftrag wird.',
  },
];

/*
  Risikoreduzierung statt Historie. Das sind Zusagen, die ein Anbieter mit
  200 Objekten so nicht geben kann — hier liegt die Position der Firma.
*/
export const testAngebote: string[] = [
  'Kostenlose Objektbegehung mit schriftlichem Leistungsverzeichnis, unabhängig davon, ob Sie beauftragen',
  'Probereinigung oder erster Monat zum Test — danach entscheiden Sie',
  /* TODO Kunde: konkrete Kündigungsfrist im ersten Vertragsjahr eintragen (z. B. „vier Wochen zum Monatsende“). */
  'Kurze Kündigungsfristen im ersten Vertragsjahr: [TODO: Frist]',
  `${site.ansprechperson} ist Ihre Ansprechperson und bei der Einarbeitung im Objekt dabei`,
];
