import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Laras Kantinchen" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von Laras Kantinchen, Michaela Breyer, Ludwigshafen am Rhein." },
      { property: "og:title", content: "Impressum – Laras Kantinchen" },
      { property: "og:description", content: "Impressum und Anbieterkennzeichnung von Laras Kantinchen." },
    ],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <nav className="legal-nav">
        <Link to="/" className="nav-logo">
          <img src="/img/LK_Logo_ohne_black_lang.png" alt="Laras Kantinchen" />
        </Link>
        <Link to="/" className="nav-back">← Zurück zur Website</Link>
      </nav>

      <main className="legal-main">
        <span className="label">Rechtliches</span>
        <h1>Impressum</h1>

        <h2>Angaben gemäß §5 TMG</h2>
        <p>
          Laras Kantinchen<br />
          Michaela Breyer<br />
          Christoph-Kröwerath-Straße 132<br />
          67071 Ludwigshafen am Rhein
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 172 6676787<br />
          E-Mail: <a href="mailto:laras-kantinchen@email.de">laras-kantinchen@email.de</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
          DE306276878
        </p>

        <h2>Verantwortlich für den Inhalt nach §55 Abs. 2 RStV</h2>
        <p>
          Michaela Breyer<br />
          Christoph-Kröwerath-Straße 132<br />
          67071 Ludwigshafen am Rhein
        </p>

        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
          und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter sind wir gemäß §7
          Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>
      </main>

      <footer className="legal-footer">© 2026 Laras Kantinchen · Michaela Breyer</footer>
    </>
  );
}
