import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { events } from "@/data/events";

export const Route = createFileRoute("/event/$id")({
  loader: ({ params }) => {
    const ev = events.find((e) => e.id === Number(params.id));
    if (!ev) throw notFound();
    return { ev };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Event nicht gefunden – Laras Kantinchen" }, { name: "robots", content: "noindex" }] };
    }
    const { ev } = loaderData;
    return {
      meta: [
        { title: `${ev.title} – Laras Kantinchen` },
        { name: "description", content: ev.description.slice(0, 155) },
        { property: "og:title", content: `${ev.title} – Laras Kantinchen` },
        { property: "og:description", content: ev.description.slice(0, 155) },
      ],
    };
  },
  component: EventDetail,
});

function EventDetail() {
  const { ev } = Route.useLoaderData();

  return (
    <>
      <nav className="legal-nav">
        <Link to="/" className="nav-logo">
          <img src="/img/LK_Logo_ohne_black_lang.png" alt="Laras Kantinchen" />
        </Link>
        <Link to="/" hash="events" className="nav-back">← Alle Events</Link>
      </nav>

      <img className="event-hero" src={ev.img} alt={ev.title} />

      <main className="event-detail-main">
        <span className="label">Kommende Termine</span>
        <h1>{ev.title}</h1>
        <div className="event-meta">
          <div className="event-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{ev.date}</span>
          </div>
          <div className="event-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{ev.time}</span>
          </div>
          <div className="event-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{ev.location}</span>
          </div>
        </div>
        <p>{ev.description}</p>
        <Link to="/" hash="kontakt" className="btn-cta">Jetzt anfragen</Link>
      </main>

      <footer className="legal-footer">© 2026 Laras Kantinchen · Michaela Breyer</footer>
    </>
  );
}
