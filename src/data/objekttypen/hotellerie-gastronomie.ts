import { site } from '../site';
import type { ObjekttypInhalt } from './typen';

/*
  Bewusst NICHT zugesagt: Küchenreinigung im Sinne der Produktionsküche,
  Fettabscheider, Dunstabzugskanäle, HACCP-konforme Reinigung mit
  Dokumentation. Das sind eigene Gewerke mit eigenen Nachweisen.

  Was hier steht, ist das Küchenumfeld — Böden, Fliesen, Sozialbereich.
  Die Grenze ist ausdrücklich benannt, weil sie sonst im Angebot verschwimmt.
*/
export const hotellerieGastronomie: ObjekttypInhalt = {
  slug: 'hotellerie-gastronomie',

  meta: {
    title: 'Reinigung für Hotel und Gastronomie | S.mile',
    description:
      'Gastraum, Sanitäranlagen und Küchenumfeld vor Betriebsbeginn, mit benannter Vertretung für Wochenenden und Feiertage. Für Betriebe in Stuttgart.',
  },

  lead: `Hotels, Restaurants und Cafés in ${site.einsatzgebiet}: fertig vor Betriebsbeginn, auch am Wochenende — mit einer benannten Vertretung, damit der Samstag nicht am Personalausfall hängt.`,

  ankommt: {
    lead: 'In der Gastronomie ist der Betrieb dann, wenn andere frei haben. Das macht Vertretung und Zeitfenster wichtiger als den Leistungsumfang.',
    gruppen: [
      {
        gruppe: 'Gastraum und Thekenbereich',
        positionen: [
          'Böden, Sitzflächen und Tischgestelle vor Betriebsbeginn',
          'Thekenaußenseiten, Fußleisten und Übergänge — Bereiche, die abends liegen bleiben',
          'Eingang, Windfang und Außenbereich in der Saison',
          'Gedeck, Gläser und Besteck bleiben unberührt, das macht der Service',
        ],
      },
      {
        gruppe: 'Sanitäranlagen',
        positionen: [
          'Bei Publikumsverkehr der Bereich mit dem höchsten Turnus, oft mehrfach täglich',
          'Verbrauchsmaterial nachfüllen, Geruchsbildung im Blick behalten',
          'Fliesen, Fugen und Bodenabläufe mit eigenem Intervall',
        ],
      },
      {
        gruppe: 'Küchenumfeld und Personalbereich',
        positionen: [
          'Böden und Fliesen im Küchenumfeld, Lager- und Kühlvorräume außen',
          'Personalumkleide, Sozialraum und Personal-WC',
          'Bereich um Leergut, Abfall und Warenannahme',
          'Die Produktionsküche selbst bleibt ausgenommen — siehe Hinweis unten',
        ],
      },
    ],
  },

  zugang: {
    lead: 'Gereinigt wird, wenn kein Gast im Haus ist. Das heißt in der Regel früh.',
    stufen: [
      {
        intervall: 'Vor Betriebsbeginn',
        text: 'Der Regelfall, meist zwischen 6 und 9 Uhr. Verlangt Zutritt und eine Absprache, wer aufschließt.',
      },
      {
        intervall: 'Nach Betriebsschluss',
        text: 'Bei Betrieben, die früh schließen. In der Spätgastronomie selten praktikabel.',
      },
      {
        intervall: 'Wochenende und Feiertage',
        text: 'Kein Zusatz, sondern der Normalfall. Gehört von Anfang an in den Vertrag, nicht als Ausnahme.',
      },
    ],
    hinweise: [
      'Für Wochenend- und Feiertagseinsätze ist eine eingewiesene Vertretung benannt. Das ist in der Gastronomie der Punkt, an dem Dienstleister auffallen — nicht der Leistungsumfang.',
      'Ausgenommen bleiben Produktionsküche, Fettabscheider, Dunstabzugskanäle und alles, was eine HACCP-Dokumentation verlangt. Das sind eigene Gewerke mit eigenen Nachweisen; wir reinigen das Küchenumfeld, nicht die Küche im Sinne der Lebensmittelhygiene.',
    ],
  },

  leistungen: {
    lead: 'In Hotellerie und Gastronomie sind das die vier üblichen.',
    slugs: ['unterhaltsreinigung', 'glasreinigung', 'grundreinigung', 'aussenanlagen-winterdienst'],
  },

  faq: [
    {
      frage: 'Arbeiten Sie am Wochenende und an Feiertagen?',
      antwort:
        'In der Gastronomie ist das der Normalfall und gehört von Anfang an in den Vertrag. Eine eingewiesene Vertretung ist benannt, damit der Einsatz nicht an einer einzelnen Person hängt.',
    },
    {
      frage: 'Reinigen Sie die Küche?',
      antwort:
        'Das Küchenumfeld ja — Böden, Fliesen, Lager- und Kühlvorräume außen, Sozialbereich. Die Produktionsküche mit Fettabscheider, Abzugskanälen und HACCP-Dokumentation nicht. Das ist ein eigenes Gewerk.',
    },
    {
      frage: 'Wird Geschirr oder Gedeck angefasst?',
      antwort:
        'Nein. Gläser, Besteck und Gedeck macht Ihr Service. Wir reinigen Flächen, nicht das Inventar auf den Tischen.',
    },
  ],
};
