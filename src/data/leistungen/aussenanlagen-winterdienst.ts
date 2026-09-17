import { site } from '../site';
import type { LeistungInhalt } from './typen';

/*
  Vom Kunden bestätigt: es wird von Hand geräumt, ohne Maschinen, und mit
  Splitt abgestumpft — kein Streusalz. Daraus folgen drei Dinge, die auf der
  Seite stehen müssen und nicht weggelassen werden dürfen:

  1) Handräumung begrenzt die Fläche. Gehwege, Zugänge, Eingänge, Treppen
     und kleinere Höfe sind realistisch; große Parkplätze, lange Zufahrten
     und Betriebshöfe sind es nicht. Das steht ausdrücklich drin — eine
     Zusage, die im ersten starken Schneefall nicht hält, kostet mehr als
     der Auftrag wert ist.

  2) Splitt ist auf Gehwegen das Mittel, das die Satzungen verlangen. Viele
     Gemeinden schreiben abstumpfende Streumittel vor und lassen Salz nur
     als Ausnahme zu. Splitt ist hier also der Normalfall und darf ohne
     Einschränkung genannt werden — das war mit Salz anders.

  3) Splitt hat eine eigene Folgepflicht: er bleibt nach der Schmelze
     liegen und muss aufgenommen und entsorgt werden. Die Satzungen
     verlangen das in der Regel ausdrücklich. Deshalb steht die Aufnahme
     nach Saisonende als eigene Position im Leistungsumfang — sonst
     entsteht eine Lücke, die im März zum Streitpunkt wird.
     Kaufmännisch ist noch zu bestätigen, dass sie einkalkuliert ist.

  Grünpflege ist vom Kunden freigegeben und aufgenommen. Zwei gesetzliche
  Fristen bestimmen dabei, was wann überhaupt erlaubt ist — sie stehen auf
  der Seite, weil sie den Turnus bestimmen und nicht umgangen werden können:

  - § 39 Abs. 5 Satz 1 Nr. 2 BNatSchG verbietet vom 1. März bis 30.
    September, Hecken, Gebüsche und Gehölze abzuschneiden, auf den Stock zu
    setzen oder zu beseitigen. Erlaubt bleiben nach Satz 2 Nr. 1 schonende
    Form- und Pflegeschnitte. Starker Rückschnitt gehört also in den
    Zeitraum Oktober bis Februar. Zusätzlich gilt § 44 BNatSchG: ein
    besetztes Nest darf auch ein Pflegeschnitt nicht stören.
  - § 12 Abs. 2 PflSchG erlaubt Pflanzenschutzmittel auf versiegelten und
    befestigten Flächen nur mit behördlicher Genehmigung. Unkraut in
    Pflasterfugen wird deshalb mechanisch entfernt, nicht chemisch — das
    steht ausdrücklich in der Position.

  Beides sind Punkte zum Berichten, nicht zum Entscheiden: der Kunde sollte
  wissen, dass die Fristen die Leistung begrenzen, bevor ein Kunde sie im
  Juli einfordert.

  Was bei der Grünpflege NICHT zugesagt wird:
  - Abtransport und Entsorgung des Grünschnitts als Regelleistung. Das
    verlangt ein Fahrzeug und eine Entsorgungsstelle; beides ist nicht
    bestätigt. Aufnehmen und zur Entsorgung bereitstellen ist Handarbeit
    und damit gesichert — der Abtransport steht unter „Nach Absprache“.
  - Ausbringen von Pflanzenschutzmitteln. Das verlangt einen
    Sachkundenachweis nach § 9 PflSchG und ist nicht belegt.
  - Neuanlage, Pflanzplanung, Rasenneuanlage, Bewässerungstechnik.

  Bewusst weiter NICHT geschrieben:
  - Kehrmaschine, Schneepflug, Streuautomat — es wird von Hand gearbeitet
  - Streusalz als eigene Leistung. Es wird nicht eingesetzt. Wo Salz nötig
    wäre (Eisregen auf blankem Eis), sagt die Seite die Grenze statt eine
    Wirkung, die Splitt nicht hat: Splitt schafft Griffigkeit, es taut
    nichts auf.
  - Räumzeiten als Tatsache. Sie stehen in der Satzung der jeweiligen
    Gemeinde und unterscheiden sich; Stuttgart, Spraitbach und Waiblingen
    regeln das nicht identisch. Weiter offen.
  - 24-Stunden-Bereitschaft oder Rufbereitschaft
  - Betriebshaftpflicht. Die ist nicht belegt und darf nicht als Argument
    auftauchen — gerade beim Winterdienst nicht, wo sie die erste Frage ist.

  Rechtlicher Punkt in „Was nicht enthalten ist“: die Räum- und Streupflicht
  ist vertraglich übertragbar, eine Überwachungspflicht bleibt beim
  Eigentümer. Das ist gefestigte Rechtslage, gehört aber vom Anwalt des
  Kunden für den Vertrag bestätigt.
*/
export const aussenanlagenWinterdienst: LeistungInhalt = {
  slug: 'aussenanlagen-winterdienst',

  meta: {
    /* 48 Zeichen */
    title: 'Winterdienst und Außenanlagen Stuttgart | S.mile',
    /* 144 Zeichen */
    description:
      'Grünpflege, Reinigung der Außenflächen und Winterdienst mit Splitt in Ihrem Auftrag. Jeder Einsatz dokumentiert. Für Gewerbeobjekte in Stuttgart.',
  },

  lead: `Gehwege, Zufahrten und Grünflächen das Jahr über gepflegt und im Winter frei. In ${site.einsatzgebiet}, mit Dokumentation jedes Einsatzes nach Datum und Uhrzeit — das ist die Unterlage, die im Streitfall zählt.`,

  enthalten: {
    lead: 'Außenflächen, Grünpflege und Winterdienst werden getrennt vereinbart, auch wenn sie meist zusammen beauftragt werden. Die Winterdienstsaison wird mit Anfangs- und Enddatum festgelegt, die Grünpflege läuft in der Wachstumszeit. Was anfällt — Laub, Schnittgut, Mähgut, Kehrgut — nehmen wir mit und entsorgen es; es bleibt kein Haufen für später stehen.',
    gruppen: [
      {
        gruppe: 'Außenflächen im Jahresverlauf',
        positionen: [
          'Gehwege, Zufahrten, Höfe und Parkplätze kehren',
          'Laub von Wegen, Eingängen und Entwässerungsrinnen aufnehmen',
          'Unkraut aus Pflasterfugen und Randsteinen entfernen — mechanisch, ohne Pflanzenschutzmittel',
          'Außenabfallbehälter leeren, Abfall im Umfeld aufnehmen',
          'Eingangsbereich, Sauberlaufzonen und Fahrradständer freihalten',
        ],
      },
      {
        gruppe: 'Grünpflege',
        positionen: [
          'Rasenflächen mähen, Kanten an Wegen und Beeten abstechen',
          'Hecken und Sträucher in Form halten — Form- und Pflegeschnitt bis Kopfhöhe',
          'Beete und Pflanzflächen von Unkraut freihalten, Rindenmulch ergänzen',
          'Pflanzflächen, Kübel und Neupflanzungen in Trockenperioden wässern',
          'Schnittgut und Mähgut aufnehmen, abtransportieren und entsorgen — es bleibt nichts am Objekt zurück',
        ],
      },
      {
        gruppe: 'Winterdienst',
        positionen: [
          'Schnee von Gehwegen, Zugängen, Eingangsbereichen und Treppen räumen — von Hand, ohne Maschinen',
          'Bei Glätte mit Splitt abstumpfen — dem Streumittel, das die meisten Gemeindesatzungen auf Gehwegen vorschreiben',
          'Schnee und Splitt so ablagern, dass Abläufe, Zufahrten und Nachbargrundstücke frei bleiben',
          'Splitt nach Saisonende aufnehmen, Flächen abkehren und das Kehrgut entsorgen',
          'Jeden Einsatz mit Datum, Uhrzeit und behandelter Fläche dokumentieren',
        ],
      },
    ],
    turnusabhaengig: {
      gruppe: 'Nach Absprache',
      positionen: [
        'Reinigung von Tiefgaragen und Stellplatzflächen',
        'Freihalten von Fluchtwegen und Feuerwehrzufahrten im Winter',
        'Abstumpfen bei Frost ohne Schneefall',
        'Starker Rückschnitt von Hecken und Gebüsch — nur zwischen Oktober und Februar zulässig',
      ],
    },
  },

  nichtEnthalten: {
    lead: 'Beim Winterdienst ist die Abgrenzung nicht nur eine Frage des Umfangs, sondern eine Frage der Haftung. Deshalb hier klar:',
    punkte: [
      {
        text: 'Die Verkehrssicherungspflicht selbst. Räumen und Streuen lassen sich vertraglich übertragen, eine Überwachungspflicht bleibt beim Eigentümer oder der Verwaltung. Wir übernehmen die Ausführung und dokumentieren sie — die Pflicht wandert damit nicht vollständig weg.',
      },
      {
        text: 'Arbeiten in der Höhe: Dachlawinen, Eiszapfen, Schneelast auf Dächern und Vordächern. Das verlangt Absturzsicherung und gehört an einen Fachbetrieb.',
      },
      {
        text: 'Baumpflege, Fällungen und Rückschnitt über Kopfhöhe. Wir nehmen Laub und Schnittgut auf, schneiden aber keine Bäume.',
      },
      {
        text: 'Ausbringen von Pflanzenschutz- und Unkrautvernichtungsmitteln. Das verlangt einen Sachkundenachweis nach § 9 PflSchG, und auf befestigten Flächen ist es nach § 12 Abs. 2 PflSchG ohnehin nur mit behördlicher Genehmigung erlaubt. Wir arbeiten mechanisch.',
      },
      {
        text: 'Neuanlage und Gestaltung: Pflanzplanung, Neupflanzungen, Rasenneuanlage, Bewässerungsanlagen. Wir pflegen den Bestand, wir legen ihn nicht an.',
      },
    ],
  },

  turnus: {
    lead: 'Außenflächen laufen im festen Turnus, Grünpflege nach Wachstum, der Winterdienst nach Wetter. Alle drei werden getrennt vereinbart.',
    stufen: [
      {
        intervall: 'Außenflächen: wöchentlich',
        text: 'Der Regelfall bei Büro- und Handelsobjekten. Eingang und Sauberlaufzone bestimmen den Eindruck, nicht die Parkplatzfläche.',
      },
      {
        intervall: 'Außenflächen: zwei Mal pro Woche',
        text: 'Bei Publikumsverkehr, Gastronomie mit Außenbereich und in der Laubzeit von Oktober bis Dezember.',
      },
      {
        intervall: 'Grünpflege: alle zwei Wochen von April bis Oktober',
        text: 'Der Regelfall. Rasen wächst nicht nach Turnus, sondern nach Wetter — in einem nassen Mai eher wöchentlich, im August womöglich gar nicht. Abgerechnet wird der Einsatz, nicht der Kalender.',
      },
      {
        intervall: 'Grünpflege: monatlich',
        text: 'Für Objekte mit kleinen Grünflächen, bei denen der Eindruck am Eingang zählt und nicht die Rasenfläche im Hinterhof.',
      },
      {
        intervall: 'Winterdienst: Saisonvertrag',
        text: 'Mit festem Anfangs- und Enddatum. Eingesetzt wird nach Wetterlage, nicht nach Plan — abgerechnet wird, was dokumentiert ist. Zum Saisonende gehört die Aufnahme des Splitts dazu.',
      },
      {
        intervall: 'Winterdienst: auf Abruf',
        text: 'Für Objekte, die selbst räumen und nur Rückhalt brauchen. Ein Abruf ist keine Bereitschaft: es gilt, was im Vertrag als Reaktionszeit steht.',
      },
      {
        intervall: 'Was von Hand machbar ist',
        text: 'Gehwege, Zugänge, Eingänge, Treppen und kleinere Höfe. Große Parkplätze, lange Zufahrten und Betriebshöfe brauchen Maschinen — die haben wir nicht, und wir sagen sie deshalb nicht zu.',
      },
    ],
    zeitfenster: [
      'Gearbeitet wird von Hand. Das begrenzt die Fläche, nicht die Zuverlässigkeit: für Gehwege, Zugänge und Eingänge ist Handräumung das übliche Verfahren, und bei anhaltendem Schneefall sind mehrere Durchgänge am Tag möglich. Für Parkplatz- und Hofflächen in Maschinengröße sind wir nicht der richtige Anbieter.',
      'Bei der Grünpflege gibt das Naturschutzrecht den Takt vor, nicht der Wunschtermin: nach § 39 Abs. 5 BNatSchG dürfen Hecken, Gebüsche und Gehölze vom 1. März bis 30. September nicht abgeschnitten, auf den Stock gesetzt oder beseitigt werden. Erlaubt bleiben in diesem Zeitraum schonende Form- und Pflegeschnitte — also das Kurzhalten des Zuwachses, nicht der starke Rückschnitt. Wer eine Hecke deutlich kleiner haben will, bekommt das im Oktober, nicht im Juli. Kommt uns beim Schnitt ein besetztes Nest unter, wird die Stelle stehen gelassen; das ist keine Kulanz, sondern § 44 BNatSchG.',
      'Gestreut wird mit Splitt, nicht mit Salz. Das ist auf Gehwegen nicht die Ausnahme, sondern was die Satzungen üblicherweise verlangen: abstumpfende Mittel sind vorgeschrieben, Salz ist dort meist nur für Sonderfälle zugelassen. Splitt greift außerdem Pflasterbeläge und angrenzende Grünflächen nicht an. Wo er liegt, muss er wieder weg — Aufnehmen, Abkehren und Entsorgen nach der Saison sind Teil der Leistung und keine Zusatzposition.',
      'Eine Grenze gehört dazu: Splitt schafft Griffigkeit, er taut nichts auf. Bei Eisregen auf blankem Eis ist abstumpfendes Material das Mittel der Wahl, aber kein Ersatz für Auftauen. Wie in dieser Lage verfahren wird, wird im Vertrag geregelt und nicht im Einsatz improvisiert.',
      'Wann geräumt sein muss, steht ebenfalls in der Satzung und ist nicht überall gleich. [TODO Kunde: Räumzeiten der betroffenen Gemeinden zusammenstellen — Stuttgart, Spraitbach, Waiblingen und die Landkreise regeln Werktage und Sonntage unterschiedlich.]',
      'Was unabhängig davon gilt: jeder Einsatz wird mit Datum, Uhrzeit und behandelter Fläche festgehalten und ist für Sie abrufbar. Wenn nach einem Sturz Fragen kommen, ist diese Unterlage das, was zählt.',
    ],
  },

  objekte: {
    lead: 'Entscheidend ist nicht die Objektart, sondern wer die Fläche betritt: Publikumsverkehr verschärft die Anforderung, ein umzäuntes Betriebsgelände entspannt sie.',
    slugs: ['handel', 'buero', 'industrie-logistik', 'hotellerie-gastronomie', 'medizin'],
  },

  abstimmung: [
    'Bei der Begehung werden die Flächen aufgemessen und danach unterschieden, welche zur Räumpflicht gehören und welche zusätzlich gewünscht sind — das ist beim Winterdienst die wichtigste Unterscheidung. Rasen-, Beet- und Heckenflächen werden dabei getrennt erfasst, weil sie nach unterschiedlichem Turnus laufen.',
    'Der Vertrag nennt Flächen, Saisonzeitraum, Reaktionszeit und Streugut. Ohne diese vier Angaben ist ein Winterdienstvertrag im Streitfall wenig wert.',
    'Die Einsatzdokumentation erhalten Sie laufend, nicht erst auf Anfrage. Sie ist Teil der Leistung, nicht ein Nachweis, den man erbitten muss.',
  ],

  faq: [
    {
      frage: 'Ab wann ist morgens geräumt?',
      antwort:
        '[TODO Kunde: Erst beantwortbar, wenn die Räumzeiten der betroffenen Gemeinden vorliegen und geklärt ist, wie früh Einsätze möglich sind. Diese Frage entscheidet über die Anfrage — ohne Antwort geht die Seite besser ohne diesen Punkt online.]',
    },
    {
      frage: 'Mit welchem Streugut arbeiten Sie?',
      antwort:
        'Mit Splitt. Abstumpfende Streumittel sind auf Gehwegen in den meisten Gemeindesatzungen vorgeschrieben, Salz ist dort nur für Sonderfälle zugelassen — mit Splitt sind Sie auf der Seite der Satzung. Er greift außerdem Pflaster und Grünflächen nicht an. Nach der Saison nehmen wir ihn auf, kehren die Flächen ab und entsorgen das Kehrgut; das gehört zur Leistung.',
    },
    {
      frage: 'Räumen Sie von Hand oder mit Maschine?',
      antwort:
        'Von Hand. Für Gehwege, Zugänge, Eingänge und Treppen ist das das übliche Verfahren und bei anhaltendem Schneefall sind mehrere Durchgänge am Tag möglich. Große Parkplätze, lange Zufahrten und Betriebshöfe brauchen Maschinen — dafür sind wir nicht der richtige Anbieter, und das sagen wir vorher statt hinterher.',
    },
    {
      frage: 'Wann können Hecken zurückgeschnitten werden?',
      antwort:
        'Starker Rückschnitt nur von Oktober bis Februar. Vom 1. März bis 30. September verbietet § 39 Abs. 5 BNatSchG das Abschneiden und Auf-den-Stock-Setzen von Hecken und Gebüsch; erlaubt sind in dieser Zeit nur schonende Form- und Pflegeschnitte. Wir halten die Hecke also den Sommer über in Form und planen den Rückschnitt für den Herbst ein. Das ist keine Auslegungssache und wird auch von uns nicht auf Zuruf anders gemacht.',
    },
    {
      frage: 'Nehmen Sie den Grünschnitt mit?',
      antwort:
        'Ja. Schnittgut, Mähgut und Laub werden aufgenommen, abtransportiert und entsorgt — das ist Teil der Leistung und keine Zusatzposition. Am Objekt bleibt kein Haufen stehen, der auf die nächste Grünabfuhr wartet. Für Bauschutt und Sperrgut gilt das nicht; dafür gibt es eigene Nachweispflichten.',
    },
    {
      frage: 'Wie oft wird der Rasen gemäht?',
      antwort:
        'Im Regelfall alle zwei Wochen von April bis Oktober. Rasen wächst aber nach Wetter und nicht nach Turnus: in einem nassen Mai kann wöchentlich nötig sein, in einem trockenen August gar nichts. Der Vertrag legt deshalb einen Regelturnus fest, und abgerechnet wird der tatsächliche Einsatz.',
    },
    {
      frage: 'Wird bei Grünflächen chemisch gegen Unkraut gearbeitet?',
      antwort:
        'Nein, mechanisch. Für das berufsmäßige Ausbringen von Pflanzenschutzmitteln ist ein Sachkundenachweis nach § 9 PflSchG nötig, und auf befestigten Flächen wie Pflaster und Einfahrten ist die Anwendung nach § 12 Abs. 2 PflSchG nur mit behördlicher Genehmigung zulässig. Fugen, Randsteine und Beete werden von Hand freigehalten.',
    },
    {
      frage: 'Was passiert bei anhaltendem Schneefall?',
      antwort:
        'Dann wird mehrfach am Tag geräumt. Jeder Einsatz wird dokumentiert, auch der zweite und dritte — abgerechnet wird, was dokumentiert ist.',
    },
    {
      frage: 'Wer haftet, wenn jemand auf der Fläche stürzt?',
      antwort:
        'Das richtet sich nach dem Vertrag. Räumen und Streuen lassen sich übertragen, eine Überwachungspflicht bleibt beim Eigentümer. Die Einsatzdokumentation ist im Ernstfall die Grundlage für beide Seiten — deshalb ist sie Teil der Leistung und nicht optional.',
    },
    {
      frage: 'Übernehmen Sie auch nur die Außenanlagen ohne Winterdienst?',
      antwort:
        'Ja. Beides wird getrennt vereinbart und kann einzeln beauftragt werden. Häufig läuft die Außenreinigung ganzjährig und der Winterdienst als Saisonvertrag daneben.',
    },
  ],
};
