import { site } from './site';

/*
  Risikoabbau vor der Unterschrift — das ist ein anderer Job als die
  Zusagen zum laufenden Betrieb (siehe praxis.ts). Deshalb steht dieser
  Block spät auf der Seite, kurz vor der Entscheidung, und nicht in der
  Sektionsfolge Problem/Aufwand/Zusage.

  Das sind Zusagen, die ein Anbieter mit 200 Objekten so nicht geben kann —
  hier liegt die Position der Firma.
*/
export const testAngebote: string[] = [
  'Termin vor Ort, danach schriftlich festgehalten, was gemacht wird — kostenlos, unabhängig davon, ob Sie beauftragen',
  'Probereinigung oder erster Monat zum Test — danach entscheiden Sie',
  /* TODO Kunde: konkrete Kündigungsfrist im ersten Vertragsjahr eintragen (z. B. „vier Wochen zum Monatsende“). */
  'Kurze Kündigungsfristen im ersten Vertragsjahr: [TODO: Frist]',
  `${site.ansprechperson} ist Ihre Ansprechperson und bei der Einarbeitung in Ihren Räumen dabei`,
];
