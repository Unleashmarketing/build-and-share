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
    title: "Eröffnungsfeier der 7 Mühlen Darts-Arena",
    date: "27. Juni 2026",
    time: "Ab 12:00 Uhr",
    location: "Großkarlbach",
    img: "/img/event/Event_Darts.jpeg",
    description:
      "Am 27. Juni 2026 ist es soweit: Offizielle Eröffnungsfeier der 7 Mühlen Darts-Arena in Großkarlbach. 96 Teilnehmer*innen, 3.000,- Preisgeld, 3 PDC Spieler, 4 Dartfluencer – und kulinarische Genüsse von Laras Kantinchen. Dazu Tombola und Charity-Aktion.",
  },
  {
    id: 2,
    title: "Pfeffinger Weinlaube 2026",
    date: "10. – 14. Juli 2026",
    time: "Täglich ab 17 Uhr | Sonntags ab 11 Uhr",
    location: "Weingut Pfeffingen, Bad Dürkheim",
    img: "/img/event/Event_Pfeffinger.jpeg",
    description:
      "Die Pfeffinger Weinlaube 2026 – das beliebte Wein- & Hoffest inmitten der Reben. Entspannen Sie bei mediterraner Atmosphäre, probieren Sie prämierte Weine und genießen Sie die kulinarischen Köstlichkeiten von Laras Kantinchen. Pfälzer Gastlichkeit pur!",
  },
  {
    id: 3,
    title: "SummerVibes am Trullo und Nussbaum",
    date: "25. Juli 2026",
    time: "Ab 18:00 Uhr",
    location: "Trullo und Nussbaum",
    img: "/img/event/Event_Weingut.jpeg",
    description:
      "Verbringen Sie am 25. Juli 2026 ab 18 Uhr einen unvergesslichen Sommerabend in besonderer Atmosphäre am Trullo und Nussbaum.",
  },
];
