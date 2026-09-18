/*
  Sektionsfolge Problem → Aufwand → Zusage, direkt nach dem Hero.

  Zielgruppe ist der inhabergeführte Mittelstand ohne eigene Hausverwaltung
  und ohne Facility Manager: entschieden wird von der Geschäftsführung, der
  Büroleitung oder der Assistenz — von jemandem, der die Reinigung zusätzlich
  zur eigentlichen Arbeit betreut. Deshalb keine Begriffe aus dem
  Gebäudemanagement, und der Nutzen ist zurückgewonnene Zeit, nicht
  Reinigungsqualität an sich.

  Zwei Regeln, die diese Datei tragen:

  1) Keine Tatsachenbehauptung über Mitbewerber. Kein Satz sagt, was andere
     Firmen tun. Die Probleme sind aus der Erfahrung des Lesers formuliert —
     was schiefgeht, wenn es schiefgeht. Den Vorwurf ergänzt er selbst, und
     zwar glaubwürdiger, als eine Werbeseite ihn erheben könnte.

  2) Jedes Problem hat genau eine Zusage, und jede Zusage ist etwas, das der
     Leser einfordern kann. Fällt zu einem Problem keine belastbare Zusage
     ein, wird das Problem gestrichen statt die Zusage erfunden. Die Zusagen
     stammen aus der bestätigten Liste und werden hier nicht erweitert.

  Die Sektion „Wie wir arbeiten“ ist in `zusagenPaare` und `weitereZusagen`
  aufgegangen. Ihre ID (#arbeitsweise) wandert mit, weil Footer und
  /ueber-uns darauf verweisen.
*/

export interface Problem {
  titel: string;
  text: string;
}

export interface ZusagePaar {
  /* Die Kurzform des Problems aus `probleme` — bewusst wortgleich, damit
     der Leser die Wiederaufnahme erkennt und nicht neu lesen muss. */
  problem: string;
  titel: string;
  text: string;
}

export const problemeVorspann =
  'Die Reinigung ist bei Ihnen nicht jemandes Aufgabe, sondern jemandes Zusatzaufgabe. Solange sie läuft, kostet sie keine Aufmerksamkeit. Das sind die drei Situationen, in denen sie plötzlich welche kostet.';

export const probleme: Problem[] = [
  {
    titel: 'Sie merken selbst, dass niemand da war',
    text: 'Montagmorgen, und die Teeküche sieht aus wie am Freitagabend. Ob jemand da war und etwas übersehen hat oder ob der Termin ausgefallen ist, lässt sich nicht mehr klären — Sie wissen nur, dass das Ergebnis fehlt. Also rufen Sie an, schildern die Lage und hören, dass man sich das ansieht.',
  },
  {
    titel: 'Mängel melden Ihre Leute, nicht Ihr Dienstleister',
    text: 'Die Sanitärräume waren monatelang in Ordnung, deshalb sieht niemand hin. Aufgefallen ist es, weil jemand aus dem Team es angesprochen hat, oder weil Besuch da war. Damit ist die Kontrolle bei Ihnen gelandet — zusammen mit der Aufgabe, die Meldung weiterzugeben und nachzuhalten, ob sie ankommt.',
  },
  {
    titel: 'Urlaub und Krankheit ändern, wer im Haus steht',
    text: 'Im August und in der Grippezeit wird es dünn. Entweder verschiebt sich ein Termin, oder es steht jemand in Ihren Räumen, der die Schlüsselregelung nicht kennt und nicht weiß, welcher Raum nicht betreten wird. Beides kostet Sie eine Einweisung, die Sie nicht eingeplant hatten.',
  },
];

/*
  Übergang, kein eigener Auftritt: vier Punkte, ein Satz Vorspann, keine
  Erläuterungen. Die Kosten sind bei dieser Zielgruppe nicht Geld, sondern
  Aufwand — deshalb steht in keinem Punkt ein Betrag.
*/
export const aufwandVorspann = 'Der Aufwand fällt nicht bei der Reinigung an, sondern bei Ihnen.';

export const aufwand: string[] = [
  'Ihre Zeit geht in Kontrolle und Nachfassen — anrufen, erinnern, nachfragen, ob es diesmal erledigt ist',
  'Beschwerden kommen zu Ihnen, nicht zum Dienstleister. Sie sind die Stelle, die weiterleitet',
  'Das Thema ist nie abgeschlossen, es kommt in Abständen wieder hoch',
  'Wer zu Ihnen kommt, sieht Eingang, Flur und Sanitärräume, bevor er jemanden von Ihnen sieht',
];

export const zusagenVorspann =
  'Auf jeden der drei Punkte gibt es genau eine Zusage, und keine davon ist eine Absichtserklärung. Sie stehen schriftlich im Leistungsverzeichnis für Ihr Haus — Sie können sie uns gegenüber jederzeit einfordern.';

export const zusagenPaare: ZusagePaar[] = [
  {
    problem: 'Sie merken selbst, dass niemand da war',
    titel: 'Schriftlich festgelegt, was wann gemacht wird — Abweichungen melden wir',
    text: 'Was in Ihren Räumen geleistet wird, steht mit Umfang und Turnus schriftlich fest. Fällt ein Einsatz aus oder verschiebt er sich, erfahren Sie das von uns. Nicht daran, dass Sie es sehen.',
  },
  {
    problem: 'Mängel melden Ihre Leute, nicht Ihr Dienstleister',
    titel: 'Reklamationen innerhalb von 24 Stunden behoben',
    text: 'Gemeldete Mängel sind am nächsten Werktag erledigt. Ist das im Einzelfall nicht möglich, erfahren Sie noch am selben Tag, warum und wann. Und die Kontrolle bleibt nicht bei Ihnen: die Objektleitung geht das Objekt in festen Abständen selbst durch.',
  },
  {
    problem: 'Urlaub und Krankheit ändern, wer im Haus steht',
    titel: 'Geregelte Vertretung, keine unangekündigten Wechsel',
    text: 'Für Ihr Objekt ist eine eingewiesene Vertretung benannt, bevor sie gebraucht wird. Wechsel im Personal kündigen wir vorher an, statt Sie vor einem fremden Gesicht stehen zu lassen.',
  },
];

/*
  Die beiden Zusagen ohne Gegenstück in `probleme`. Sie stehen nicht als
  viertes Paar da, weil es dafür kein Problem in Sektion A gibt — und ein
  erfundenes Problem wäre der schlechtere Tausch.
*/
export const weitereZusagenTitel = 'Für alles dazwischen';

export const weitereZusagen: string[] = [
  'Eine feste Ansprechperson mit Durchwahl und Mobilnummer — keine Zentrale, keine Ticketnummer',
  'Rückruf innerhalb eines Werktags, auch bei Anfragen, aus denen am Ende kein Auftrag wird',
];
