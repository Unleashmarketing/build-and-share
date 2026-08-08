export type KantinchenEvent = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  img: string;
  description: string;
};

export const events: KantinchenEvent[] = [
  {
    id: 1,
    title: "74. Residenzfest – #KIBOSCHMECKT.",
    date: "8. – 10. August 2026",
    time: "3 Sommertage in der kleinen Residenz",
    location: "Kirchheimbolanden",
    img: "/img/event/Event_Residenzfest.jpg",
    description:
      "Die Stadt Kirchheimbolanden lädt zur Einkehr hinter historischen Mauern und Türmen, in idyllischen Hoflauben und Gaststätten mit Pfälzer Spezialitäten und Weinen aus dem Umland. Beim 74. Residenzfest – ausgezeichnet als \"Schönstes Weinfest 2017\" – gibt es drei Sommertage lang Genuss, Musik und Pfälzer Gastlichkeit. Infos: Büro der Stadt Kirchheimbolanden in der Orangerie, Tel. 0 63 52 / 750 47 77, www.visit-kirchheimbolanden.de",
  },
  {
    id: 2,
    title: "Kunst- und Genussmarkt",
    date: "15. August 2026",
    time: "12 – 19 Uhr | Auftritt von 2MOTION um 17.30 Uhr",
    location: "Im Garten des Kunsthauses Frankenthal",
    img: "/img/event/Event_Genussmarkt.jpg",
    description:
      "Kunst, Genuss und Live-Musik im Garten des Kunsthauses Frankenthal: Am 15. August 2026 von 12 bis 19 Uhr erwarten Sie Kunsthandwerk, sommerliche Drinks und kulinarische Köstlichkeiten. Um 17.30 Uhr spielt 2MOTION live. Eine Veranstaltung des Kunsthauses Frankenthal und der Frankenthaler Kulturstiftung.",
  },
  {
    id: 3,
    title: "Guitar Summit 2026",
    date: "25. – 27. September 2026",
    time: "Drei Festivaltage",
    location: "Rosengarten, Mannheim",
    img: "/img/event/Event_GuitarSummit.jpg",
    description:
      "Europas größtes Gitarren-Event kehrt zurück: Vom 25. bis 27. September 2026 verwandelt sich der Mannheimer Rosengarten beim Guitar Summit 2026 in einen Treffpunkt für Gitarrist*innen, Hersteller und Musikfans – mit Ausstellern, Workshops, Masterclasses und Live-Konzerten.",
  },
];
