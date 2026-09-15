/*
  Einsatzgebiet.

  Stuttgart bleibt das Hauptziel der Seite: Meta-Title, H1-Umfeld, Hero-Subline
  und das erste Vertrauenssignal nennen ausschließlich Stuttgart. Die übrigen
  Regionen sind Ergänzung — der Betriebssitz liegt in Spraitbach im Ostalbkreis,
  dort ist die Anfahrt kurz und der Wettbewerb um die Suchbegriffe deutlich
  geringer als um „Gebäudereinigung Stuttgart“.

  Reihenfolge ist Absicht: Stuttgart steht in jeder Liste zuerst.
*/

/*
  Für areaServed in den strukturierten Daten. Städte als `City`,
  Landkreise als `AdministrativeArea` — Google wertet beides aus.

  TODO Kunde: Ortsliste bestätigen. Stuttgart, Schwäbisch Gmünd, Aalen und
  Göppingen sind abgestimmt. Waiblingen habe ich als Kreisstadt des
  Rems-Murr-Kreises ergänzt, weil eine Kreisangabe allein niemandem hilft,
  der nach seiner Stadt sucht. Bitte prüfen, ob die Anfahrt dorthin passt.
*/
export const regionen = [
  { name: 'Stuttgart', typ: 'City' },
  { name: 'Waiblingen', typ: 'City' },
  { name: 'Schwäbisch Gmünd', typ: 'City' },
  { name: 'Aalen', typ: 'City' },
  { name: 'Göppingen', typ: 'City' },
  { name: 'Rems-Murr-Kreis', typ: 'AdministrativeArea' },
  { name: 'Ostalbkreis', typ: 'AdministrativeArea' },
  { name: 'Landkreis Göppingen', typ: 'AdministrativeArea' },
] as const;

/* Kurzform für den Footer. */
export const gebietKurz =
  'Stuttgart, Rems-Murr-Kreis, Ostalbkreis und Landkreis Göppingen';

export const einsatzgebietText = {
  lead: 'Schwerpunkt ist Stuttgart: Büro-, Handels- und Logistikflächen in der Stadt und im direkten Umland.',
  absaetze: [
    'Vom Sitz in Spraitbach aus arbeiten wir außerdem im Rems-Murr-Kreis, im Ostalbkreis und im Landkreis Göppingen — unter anderem in Waiblingen, Schwäbisch Gmünd, Aalen und Göppingen.',
    'Liegt Ihr Objekt außerhalb dieses Gebiets, fragen Sie trotzdem an. Ob wir zusagen können, hängt an Anfahrt und Turnus. Die Antwort bekommen Sie innerhalb eines Werktags.',
  ],
};
