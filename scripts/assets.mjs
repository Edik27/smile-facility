/*
  Leitet aus den Original-Markendateien in src/assets/marke/ die Web-Assets
  in public/ ab. Aufruf: npm run assets

  Hintergrund: die gelieferten Dateien sind quadratische Bilder mit weißem
  Hintergrund (logo.jpg, favicon.png) beziehungsweise PNGs mit deckend weißem
  Hintergrund (die sechs Leistungs-Icons). Beides ist so nicht einsetzbar:
  auf der dunklen Footer-Fläche entsteht ein weißer Kasten, und die gestapelte
  Wortmarke ist in einer 64–80px hohen Kopfzeile nicht lesbar.

  Das Skript erledigt deshalb drei Dinge:
  1. Weiß freistellen (echter Alphakanal statt weißer Fläche)
  2. Das quadratische Logo in Bildmarke und Wortmarke trennen, damit die
     Kopfzeile daraus eine liegende Lockup bauen kann
  3. Alles auf Anzeigegröße rechnen — die Originale sind 1254px bzw. 336px groß
     und würden als Seitengewicht durchschlagen

  Wenn der Kunde eine offizielle liegende Lockup als SVG nachliefert, wird
  dieses Skript für das Logo überflüssig; die Icons bleiben.
*/
import { mkdir, readdir } from 'node:fs/promises';
import sharp from 'sharp';

const QUELLE = 'src/assets/marke';
const ZIEL = 'public';

/*
  Schnittkanten im Original (1254×1254, ermittelt über das Nicht-Weiß-Profil):
  Die Bildmarke endet bei y=748, direkt darunter beginnt das „S“ von S.mile.
*/
const LOGO = {
  marke: { left: 305, top: 86, width: 685, height: 663 },
  wortmarke: { left: 81, top: 749, width: 1102, height: 419 },
};

/*
  Stellt eine weiße Fläche frei. Die Deckkraft ergibt sich aus dem dunkelsten
  Kanal: je weißer der Pixel, je durchsichtiger. Anschließend wird die Farbe
  entgegen der Weißmischung zurückgerechnet, damit Kanten auf dunklem Grund
  keinen hellen Saum bekommen. `BOOST` hebt nahezu deckende Flächen auf volle
  Deckkraft — ohne das bliebe das Magenta des Logos bei 93 % hängen.

  `aufhellen: true` ersetzt zusätzlich alle unbunten dunklen Pixel durch Weiß.
  Damit entsteht aus der schwarz-magenta Wortmarke eine weiß-magenta Fassung
  für den Footer auf --ink. Das Magenta bleibt unangetastet.
*/
const BOOST = 1.15;

async function weissFreistellen(eingabe, { aufhellen = false } = {}) {
  const bild = sharp(eingabe).ensureAlpha();
  const { data, info } = await bild.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const raus = Buffer.alloc(width * height * 4);

  for (let p = 0; p < width * height; p++) {
    const i = p * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const dunkelster = Math.min(r, g, b);

    let a = ((255 - dunkelster) / 255) * BOOST;
    if (a <= 0.004) {
      raus[p * 4 + 3] = 0;
      continue;
    }
    if (a > 1) a = 1;

    const zurueck = (kanal) => {
      const wert = (kanal - 255 * (1 - a)) / a;
      return wert < 0 ? 0 : wert > 255 ? 255 : Math.round(wert);
    };

    let nr = zurueck(r);
    let ng = zurueck(g);
    let nb = zurueck(b);

    if (aufhellen) {
      const max = Math.max(nr, ng, nb);
      const min = Math.min(nr, ng, nb);
      const unbunt = max - min < 45;
      const dunkel = (nr + ng + nb) / 3 < 160;
      if (unbunt && dunkel) {
        nr = 255;
        ng = 255;
        nb = 255;
      }
    }

    raus[p * 4] = nr;
    raus[p * 4 + 1] = ng;
    raus[p * 4 + 2] = nb;
    raus[p * 4 + 3] = Math.round(a * 255);
  }

  return sharp(raus, { raw: { width, height, channels: 4 } }).png({ compressionLevel: 9, effort: 10 });
}

async function logo() {
  const quelle = `${QUELLE}/logo.jpg`;
  await mkdir(`${ZIEL}/logo`, { recursive: true });

  // Bildmarke — quadratisch, in der Kopfzeile 44px, hier in doppelter Auflösung
  const markeRoh = await sharp(quelle).extract(LOGO.marke).png().toBuffer();
  await (await weissFreistellen(markeRoh))
    .resize({ height: 96, fit: 'inside' })
    .toFile(`${ZIEL}/logo/marke.png`);

  /*
    Für den Footer auf --ink braucht auch die Bildmarke eine Negativfassung:
    Augen und Mund sind im Original schwarz auf der weißen Gesichtsfläche.
    Freigestellt fällt diese Fläche weg, und Schwarz auf --ink ist unsichtbar.
    Aufgehellt bleiben Ring und Lächeln in Magenta, die Augen werden weiß.
  */
  await (await weissFreistellen(markeRoh, { aufhellen: true }))
    .resize({ height: 96, fit: 'inside' })
    .toFile(`${ZIEL}/logo/marke-hell.png`);

  // Wortmarke „S.mile FACILITY SERVICES“ — dunkel für weißen Grund
  const wortRoh = await sharp(quelle).extract(LOGO.wortmarke).png().toBuffer();
  await (await weissFreistellen(wortRoh))
    .resize({ height: 72, fit: 'inside' })
    .toFile(`${ZIEL}/logo/wortmarke-dunkel.png`);

  // … und hell für den Footer auf --ink
  await (await weissFreistellen(wortRoh, { aufhellen: true }))
    .resize({ height: 72, fit: 'inside' })
    .toFile(`${ZIEL}/logo/wortmarke-hell.png`);

  // Vollständiges Logo, freigestellt — für JSON-LD und Social Sharing
  await (await weissFreistellen(quelle))
    .resize(400, 400, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(`${ZIEL}/logo.png`);

  console.log('Logo: marke.png, marke-hell.png, wortmarke-dunkel.png, wortmarke-hell.png, logo.png');
}

/*
  Objektaufnahmen. Das Original liegt mit 5973px in src/assets/originale/ und
  wird von nichts importiert — Astro würde daraus sonst Varianten bis zur
  vollen Auflösung rechnen und knapp 13 MB in dist ablegen.

  Hier entsteht daraus die Arbeitsdatei mit 1920px Breite. Das ist die längste
  Kante, die die Seite je braucht: unter 1024px läuft das Bild über die volle
  Spaltenbreite (maximal 959px CSS), bei doppelter Pixeldichte also 1918px.
  Astro rechnet daraus AVIF, WebP und JPEG in fünf Breiten.
*/
const FOTO_ORIGINAL = 'src/assets/originale/objekt-hero.jpg';

async function fotos() {
  await sharp(FOTO_ORIGINAL)
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile('src/assets/objekt-hero.jpg');

  console.log('Foto: src/assets/objekt-hero.jpg (1920px Arbeitsdatei)');
}

/*
  Open-Graph-Bild, 1200×630 mittig beschnitten. Bewusst ohne Schrift oder Logo
  darauf: eine gebrandete Fassung ist eine Gestaltungsentscheidung, die der
  Kunde sehen und freigeben sollte.
*/
async function ogBild() {
  await sharp(FOTO_ORIGINAL)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(`${ZIEL}/og-bild.jpg`);

  console.log('Open Graph: og-bild.jpg');
}

async function favicon() {
  const quelle = `${QUELLE}/favicon.png`;

  await (await weissFreistellen(quelle)).resize(48, 48, { fit: 'inside' }).toFile(`${ZIEL}/favicon-48.png`);

  /*
    apple-touch-icon: iOS setzt transparente Bereiche schwarz, deshalb hier
    bewusst mit weißem Grund und etwas Luft statt freigestellt.
  */
  await sharp(quelle)
    .resize(160, 160, { fit: 'inside' })
    .extend({ top: 10, bottom: 10, left: 10, right: 10, background: '#ffffff' })
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(`${ZIEL}/apple-touch-icon.png`);

  console.log('Favicon: favicon-48.png, apple-touch-icon.png');
}

/*
  Die sechs Leistungs-Icons. Dateinamen mit Umlauten und Leerzeichen sind als
  URL unbrauchbar, deshalb werden sie auf die Slugs der Leistungsseiten
  abgebildet. Alle landen in einem einheitlichen 96×96-Rahmen, damit sie in
  den Karten optisch auf einer Linie sitzen.
*/
const ICONS = {
  'Unterhaltsreinigung': 'unterhaltsreinigung',
  'Glas- und Rahmenreinigung': 'glasreinigung',
  'Grund- und Sonderreinigung': 'grundreinigung',
  'Bauendreinigung': 'bauendreinigung',
  'Außenanlagen und Winterdienst': 'aussenanlagen-winterdienst',
  'Hausmeisterservice': 'hausmeisterservice',
};

async function icons() {
  await mkdir(`${ZIEL}/icons`, { recursive: true });
  const vorhanden = await readdir(QUELLE);

  for (const [datei, slug] of Object.entries(ICONS)) {
    const name = `${datei}.png`;
    if (!vorhanden.includes(name)) {
      console.warn(`  fehlt: ${name}`);
      continue;
    }
    await (await weissFreistellen(`${QUELLE}/${name}`))
      .resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(`${ZIEL}/icons/${slug}.png`);
  }
  console.log(`Icons: ${Object.keys(ICONS).length} Dateien in public/icons/`);
}

await logo();
await fotos();
await ogBild();
await favicon();
await icons();
