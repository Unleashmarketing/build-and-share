import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Laras Kantinchen" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten bei Laras Kantinchen gemäß DSGVO." },
      { property: "og:title", content: "Datenschutzerklärung – Laras Kantinchen" },
      { property: "og:description", content: "Informationen zur Verarbeitung personenbezogener Daten bei Laras Kantinchen." },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
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
        <h1>Datenschutzerklärung</h1>
        <span className="date">Stand: 4. August 2024</span>

        <h2>Präambel</h2>
        <p>
          Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen
          Daten wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns
          durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als
          auch insbesondere auf unseren Webseiten sowie innerhalb externer Onlinepräsenzen, wie z. B. unserer
          Social-Media-Profile. Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
        </p>

        <h2>Verantwortlicher</h2>
        <p>
          Laras Kantinchen · Michaela Breyer<br />
          Christoph-Kröwerath-Straße 132 · 67071 Ludwigshafen<br />
          E-Mail: <a href="mailto:laras-kantinchen@email.de">laras-kantinchen@email.de</a><br />
          Telefon: +49 172 6676787
        </p>

        <h2>Arten der verarbeiteten Daten</h2>
        <ul>
          <li>Bestandsdaten</li>
          <li>Kontaktdaten</li>
          <li>Inhaltsdaten</li>
          <li>Nutzungsdaten</li>
          <li>Meta-, Kommunikations- und Verfahrensdaten</li>
          <li>Protokolldaten</li>
        </ul>

        <h2>Maßgebliche Rechtsgrundlagen</h2>
        <p>
          Wir verarbeiten personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. a) DSGVO (Einwilligung), Art. 6
          Abs. 1 lit. b) DSGVO (Vertragserfüllung und vorvertragliche Anfragen) sowie Art. 6 Abs. 1 lit. f) DSGVO
          (Berechtigte Interessen). Zusätzlich gelten nationale Datenschutzregelungen, insbesondere das BDSG.
        </p>

        <h2>Sicherheitsmaßnahmen</h2>
        <p>
          Wir treffen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
          zu gewährleisten, insbesondere durch TLS-/SSL-Verschlüsselung (HTTPS) für alle Datenübertragungen.
        </p>

        <h2>Datenspeicherung und Löschung</h2>
        <p>
          Wir löschen personenbezogene Daten, sobald der Zweck der Verarbeitung entfällt. Gesetzliche
          Aufbewahrungsfristen bleiben unberührt:
        </p>
        <ul>
          <li>10 Jahre – Buchungsbelege und Rechnungen</li>
          <li>6 Jahre – sonstige Geschäftsunterlagen</li>
          <li>3 Jahre – Gewährleistungs- und Schadensersatzansprüche</li>
        </ul>

        <h2>Rechte der betroffenen Personen</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit sowie das Widerspruchs- und Widerrufsrecht. Beschwerden können bei der zuständigen
          Datenschutz-Aufsichtsbehörde eingereicht werden.
        </p>

        <h2>Bereitstellung des Onlineangebots &amp; Webhosting</h2>
        <p>
          Zur Bereitstellung unserer Website werden Zugriffsdaten in Server-Logfiles erfasst (IP-Adresse, Zeitstempel,
          aufgerufene Seiten etc.). Diese Daten werden nach spätestens 30 Tagen gelöscht. Rechtsgrundlage: Art. 6 Abs. 1
          lit. f) DSGVO.
        </p>

        <h2>Cookies</h2>
        <p>
          Wir setzen Cookies im Einklang mit den gesetzlichen Vorschriften ein. Technisch notwendige Cookies erfordern
          keine Einwilligung. Für weitere Cookies holen wir Ihre Einwilligung ein. Permanente Cookies können bis zu zwei
          Jahre gespeichert werden. Sie können Ihre Einwilligung jederzeit über die Browser-Einstellungen widerrufen.
        </p>

        <h2>Kontaktformular</h2>
        <p>
          Bei Kontaktaufnahme über unser Formular oder per E-Mail verarbeiten wir Ihre Angaben (Name, Kontaktdaten,
          Nachricht) ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b) und f) DSGVO.
        </p>

        <h2>Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sobald Änderungen der Datenverarbeitungen dies
          erforderlich machen. Wir empfehlen, sich regelmäßig über den aktuellen Stand zu informieren.
        </p>
      </main>

      <footer className="legal-footer">© 2026 Laras Kantinchen · Michaela Breyer</footer>
    </>
  );
}
