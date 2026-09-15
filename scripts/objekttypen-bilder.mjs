/*
  Zeilenbilder der Objekttypen-Sektion. Aufruf: npm run bilder:objekttypen
  (läuft auch als Teil von `npm run assets`).

  Pipeline je Quellbild:
    1. Ganzes Bild auf 3:2 (Seitenverhältnis von drei der fünf Quellen)
    2. Ausgabebreiten 640, 960 und 1280 für srcset
    3. Sättigung auf 0,7 — hält fünf verschieden temperierte Fotos zusammen,
       ohne wie ein Filter zu wirken
    4. AVIF mit WebP-Fallback (Parameter siehe unten)

  Kein Blur und kein Magenta-Stich: bei scharfen Bildern wird ein Farbstich
  sichtbar und liest sich als Effekt. Die Vereinheitlichung macht Schritt 3
  allein.

  Warum 3:2 und nicht 4:3:
  „Ganzes Bild“ und ein festes 4:3 schließen sich aus. Die Quellen messen

    bueroflaechen              3365×2168   1,552
    handel                     3543×2362   1,500
    industrie und logistik     6000×4000   1,500
    arztpraxen …               5473×3654   1,498
    Hotellerie und Gastronomie 5220×3920   1,332

  Bei 4:3 verlieren vier von fünf 11–14 % der Breite. Bei 3:2 sind drei exakt
  passend, bueroflaechen verliert 3,4 % der Breite, Hotellerie 11,2 % der Höhe.
  3:2 ist damit das Format, in dem „ganzes Bild“ tatsächlich stimmt.

  Damit entfallen die Offset-Tabellen: `fit: cover` zentriert, nur Hotellerie
  bekommt `position: top` — dort liegt der Verlust sonst zur Hälfte in der
  Decke und zur Hälfte im vorderen Tisch; von oben geschnitten fällt nur der
  angeschnittene Vordergrundtisch weg.
*/
import { mkdir, stat } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const QUELLE = 'src/assets/objekttypen';
const ZIEL = 'public/objekttypen';

/*
  Breiten: 640, 960 und 1280. Es gibt zwei Anzeigefälle, und sie stellen
  unterschiedliche Anforderungen — beide müssen hier stehen bleiben, sonst
  wird die Liste beim nächsten Aufräumen wieder gekürzt.

  Fall 1 — Desktop, zweispaltig ab 768px:
  Die Bildspalte ist bei gedeckeltem Container (1200px) rechnerisch 435px
  breit: (1200 − 64 Außenabstand − 48 Spaltenabstand) × 2/5. Bei doppelter
  Pixeldichte sind das 870px, die 960er deckt das ab.

  Fall 2 — Mobil, unter 768px:
  Dort läuft das Bild über die volle Viewport-Breite (`sizes` endet auf
  100vw). Ein Telefon mit 430px CSS-Breite und dreifacher Pixeldichte fordert
  rund 1290px an. Ohne die 1280er bekäme es die 960er und skalierte sie um
  etwa ein Drittel hoch — sichtbar an den Kanten im Bild.

  Die 960er bleibt, weil sie für Desktop bei doppelter Dichte und für mittlere
  Viewports die passende Stufe ist: 1280 wäre dort fast das Dreifache der
  Anzeigegröße.
*/
const BREITEN = [640, 960, 1280];
const SAETTIGUNG = 0.7;

/*
  Qualität: WebP wie vorgegeben 62, AVIF 60.

  Die Zahlen sind zwischen den Formaten nicht vergleichbar. Bei diesen körnigen
  Aufnahmen — besonders handel.jpg, dunkel und hoch-ISO — kostet AVIF bei
  gleichem Nennwert mehr Bytes als WebP, weil libaom das Korn mitspeichert.
  Bei q62 landete das AVIF-Set auf 250,5 KB und riss das Budget um 0,5 KB;
  q60 ergibt 240,5 KB. Der Unterschied ist bei 435px Anzeigebreite nicht
  sichtbar.

  4:2:0 statt des sharp-Standards 4:4:4 und effort 9 statt 4 bringen den
  größten Teil der Ersparnis, ohne die Qualitätsstufe anzutasten.
*/
const AVIF = { quality: 60, chromaSubsampling: '4:2:0', effort: 9 };
const WEBP = { quality: 62, effort: 6, smartSubsample: true };

/* Zielverhältnis der Zeilenbilder. */
const VERHAELTNIS = 3 / 2;

/*
  Quellen. `position` nur dort, wo das Verhältnis nicht ohnehin passt und die
  Lage des Schnitts inhaltlich etwas ändert.
*/
const BILDER = [
  { quelle: 'bueroflaechen.jpg', slug: 'buero' },
  { quelle: 'handel.jpg', slug: 'handel' },
  { quelle: 'industrie und logistik.jpg', slug: 'industrie-logistik' },
  { quelle: 'arztpraxen und medizinische Einrichtungen.jpg', slug: 'medizin' },
  {
    quelle: 'Hotellerie und Gastronomie.jpg',
    slug: 'hotellerie-gastronomie',
    /* Einzige Quelle im 4:3-Format. Von oben geschnitten bleiben Fensterfront,
       Putzwand und die mittleren Tische; weg fällt der angeschnittene
       Vordergrundtisch. */
    position: 'top',
  },
];

async function aufbereiten({ quelle, slug, position = 'centre' }) {
  const zeilen = [];
  const quell = await sharp(`${QUELLE}/${quelle}`).metadata();
  const quellVerhaeltnis = quell.width / quell.height;

  /* Wie viel Prozent des Originals fallen weg — kommt in die Messausgabe. */
  const verlust =
    quellVerhaeltnis > VERHAELTNIS
      ? (1 - (quell.height * VERHAELTNIS) / quell.width) * 100
      : (1 - quell.width / VERHAELTNIS / quell.height) * 100;
  const richtung = quellVerhaeltnis > VERHAELTNIS ? 'Breite' : 'Höhe';

  for (const breite of BREITEN) {
    const basis = await sharp(`${QUELLE}/${quelle}`)
      .resize(breite, Math.round(breite / VERHAELTNIS), { fit: 'cover', position })
      .modulate({ saturation: SAETTIGUNG })
      .toBuffer();

    const name = `${slug}-${breite}`;
    await sharp(basis).avif(AVIF).toFile(`${ZIEL}/${name}.avif`);
    await sharp(basis).webp(WEBP).toFile(`${ZIEL}/${name}.webp`);

    zeilen.push({
      slug,
      breite,
      verlust,
      richtung,
      avif: (await stat(`${ZIEL}/${name}.avif`)).size,
      webp: (await stat(`${ZIEL}/${name}.webp`)).size,
    });
  }

  return zeilen;
}

export async function objekttypenBilder() {
  await mkdir(ZIEL, { recursive: true });

  const ergebnisse = [];
  for (const bild of BILDER) ergebnisse.push(...(await aufbereiten(bild)));

  const kb = (b) => (b / 1024).toFixed(1).padStart(7) + ' KB';

  console.log('');
  console.log(
    `Objekttypen-Zeilenbilder — 3:2, ganzes Bild, Sättigung ${SAETTIGUNG}, AVIF q${AVIF.quality} / WebP q${WEBP.quality}`,
  );
  console.log('');
  console.log('Slug                      Breite       AVIF       WebP   verworfen');
  console.log('──────────────────────── ─────── ────────── ────────── ───────────');

  for (const e of ergebnisse) {
    console.log(
      `${e.slug.padEnd(24)} ${String(e.breite).padStart(6)}px ${kb(e.avif)} ${kb(e.webp)}   ${(e.verlust.toFixed(1) + '% ' + e.richtung).padStart(11)}`,
    );
  }

  console.log('');
  for (const breite of BREITEN) {
    const satz = ergebnisse.filter((e) => e.breite === breite);
    const a = satz.reduce((s, e) => s + e.avif, 0) / 1024;
    const w = satz.reduce((s, e) => s + e.webp, 0) / 1024;
    const budget = breite === Math.max(...BREITEN) ? '  (Budget 250 KB)' : '';
    console.log(
      `Summe ${String(breite).padStart(4)}px: AVIF ${a.toFixed(1).padStart(6)} KB, WebP ${w.toFixed(1).padStart(6)} KB${budget}`,
    );
  }
  console.log('');

  return ergebnisse;
}

/* Direktaufruf. pathToFileURL, weil der Projektpfad Leerzeichen enthält und
   ein naiver String-Vergleich mit `file://` + argv[1] dann fehlschlägt. */
if (import.meta.url === pathToFileURL(process.argv[1]).href) await objekttypenBilder();
