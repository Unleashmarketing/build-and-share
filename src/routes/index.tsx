import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Truck,
  PartyPopper,
  Heart,
  Building2,
  MapPin,
  Utensils,
  Phone,
  Mail,
  Send,
  ArrowRight,
  Eye,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { events } from "@/data/events";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laras Kantinchen – Nostalgie, Kult & geiler Geschmack" },
      {
        name: "description",
        content:
          "Foodtruck-Catering für Hochzeiten, Firmenevents und Festivals in der Region Rhein-Main & Rhein-Neckar. Seit 2016 mit Oldtimer-Foodtrucks unterwegs.",
      },
      {
        property: "og:title",
        content: "Laras Kantinchen – Nostalgie, Kult & geiler Geschmack",
      },
      {
        property: "og:description",
        content:
          "Foodtruck-Catering für Hochzeiten, Firmenevents und Festivals in der Region Rhein-Main & Rhein-Neckar. Seit 2016 mit Oldtimer-Foodtrucks unterwegs.",
      },
    ],
  }),
  component: Index,
});

const galleryImages: [string, string][] = [
  ["/img/Kantinchen1.jpg", "Truck bei Nacht"],
  ["/img/Kantinchen56.jpeg", "Truck im Weinberg"],
  ["/img/Kantinchen59.jpeg", "Truck am See"],
  ["/img/Kantinchen22.jpeg", "Truck tagsüber"],
  ["/img/Kantinchen66.jpeg", "Truck Guitar Summit"],
  ["/img/Kantinchen8.jpeg", "Sandwich auf dem Grill"],
  ["/img/Kantinchen11.jpeg", "Koch mit Sandwich"],
  ["/img/Kantinchen10.jpeg", "Abends am Truck"],
  ["/img/Kantinchen35.jpeg", "Abend Atmosphäre"],
  ["/img/Kantinchen34.jpeg", "Weinbergstisch"],
  ["/img/Kantinchen73.jpg", "Burrata Salat"],
  ["/img/Kantinchen75.jpg", "Risotto"],
];

const menuItems: [string, string][] = [
  ["/img/Kantinchen2.jpg", "Pastrami Harry"],
  ["/img/Kantinchen5.jpg", "Pastrami Sally"],
  ["/img/Kantinchen3.jpg", "Pastrami Maxi"],
  ["/img/Kantinchen4.jpg", "Raclette"],
  ["/img/Kantinchen38.jpeg", "Cupcakes"],
  ["/img/Kantinchen68.jpeg", "Curry"],
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M13 8h-1.5A1.5 1.5 0 0 0 10 9.5V11H8.5v2.5H10V21h2.5v-7.5H14L14.5 11H12.5V9.75c0-.414.336-.75.75-.75H14V8h-1z"
        fill="currentColor"
      />
    </svg>
  );
}

function Index() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [btnLabel, setBtnLabel] = useState("Anfrage absenden");
  const [sending, setSending] = useState(false);
  const [cookieHidden, setCookieHidden] = useState(true);
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    setCookieHidden(Boolean(localStorage.getItem("cookieConsent")));
  }, []);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const counted = sessionStorage.getItem("visitCounted");
      if (counted) {
        const { data } = await supabase
          .from("visitor_counter")
          .select("count")
          .eq("id", 1)
          .maybeSingle();
        if (active && data) setVisits(Number(data.count));
        return;
      }
      const { data, error } = await supabase.rpc("increment_visitor_count");
      if (!error && active) {
        sessionStorage.setItem("visitCounted", "1");
        setVisits(Number(data));
      }
    };
    void load();
    return () => {
      active = false;
    };
  }, []);


  const dismissCookie = (value: string) => {
    localStorage.setItem("cookieConsent", value);
    setCookieHidden(true);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setBtnLabel("Wird gesendet...");
    try {
      const res = await fetch("https://formspree.io/f/mzdlloey", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setSent(true);
      } else {
        setBtnLabel("Fehler – bitte erneut versuchen");
        setSending(false);
      }
    } catch {
      setBtnLabel("Fehler – bitte erneut versuchen");
      setSending(false);
    }
  };

  const navLinkStyle = menuOpen
    ? ({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        background: "#fff",
        padding: "2rem",
        gap: "1.5rem",
        borderBottom: "1px solid #eee",
        zIndex: 99,
      } as React.CSSProperties)
    : undefined;

  return (
    <>
      {/* NAV */}
      <nav id="main-nav">
        <a href="#" className="nav-logo">
          <img src="/img/LK_Logo_ohne_black_lang.png" alt="Laras Kantinchen" className="nav-logo-img" />
        </a>
        <ul className="nav-links" style={navLinkStyle}>
          <li><a href="#about">Über uns</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#speisen">Speisen</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#galerie">Galerie</a></li>
          <li><a href="#kontakt" className="nav-cta">Jetzt anfragen</a></li>
        </ul>
        <div className="nav-burger" id="burger" onClick={() => setMenuOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-image-wrap">
          <img src="/img/Kantinchen12.jpeg" alt="Laras Kantinchen Foodtruck" />
          <div className="hero-image-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-h1">Liebe ist die<br />wichtigste Zutat.</h1>
          <p className="hero-sub">
            Vom Foodtruck bis zur Hochzeit – wir bringen Leidenschaft, Stil und ehrlichen Geschmack zu deiner
            Veranstaltung. Überall in der Region.
          </p>
          <div className="hero-buttons">
            <a href="#kontakt" className="btn-primary">Jetzt anfragen</a>
            <a href="#about" className="btn-outline">Mehr erfahren</a>
          </div>
        </div>
        <a href="#about" className="hero-scroll">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          Mehr entdecken
        </a>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><Truck size={14} /> Foodtruck Catering <span className="sep">·</span></div>
        <div className="trust-item"><PartyPopper size={14} /> Events &amp; Festivals <span className="sep">·</span></div>
        <div className="trust-item"><Heart size={14} /> Hochzeiten <span className="sep">·</span></div>
        <div className="trust-item"><Building2 size={14} /> Firmenevents <span className="sep">·</span></div>
        <div className="trust-item"><MapPin size={14} /> Region Rhein-Main &amp; Rhein-Neckar</div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-grid">
          <div className="about-images anim fade-up">
            <img className="about-img-main" src="/img/Kantinchen7.jpeg" alt="Lara vor dem Foodtruck" />
            <img className="about-img-secondary" src="/img/Kantinchen1.jpg" alt="Foodtruck bei Nacht" />
            <div className="about-accent"></div>
          </div>
          <div className="about-text anim fade-up">
            <span className="section-label">Wer wir sind</span>
            <h2 className="section-title">Nostalgie, Kult und geiler Geschmack.</h2>
            <p className="section-sub">
              Seit 2016 sind wir mit unseren Oldtimer-Foodtrucks „Laras Kantinchen" für euch unterwegs. Nachdem wir 11
              Jahre lang in der Oststadt in Mannheim „Laras Café-Bar" betrieben haben, haben wir uns entschlossen, uns
              von alten Ketten loszureißen und kulinarische Erlebnisse mobil zu euch zu bringen.
            </p>
            <p className="section-sub" style={{ marginTop: "1rem" }}>
              Egal ob Geburtstag, Firmenevent, Hochzeit oder Weihnachtsfeier – wir kommen mit vollem Engagement und
              bestem Equipment zu dir.
            </p>
            <div className="about-stats">
              <div className="stat-item"><div className="stat-num">2016</div><div className="stat-label">Seit diesem Jahr mobil unterwegs</div></div>
              <div className="stat-item"><div className="stat-num">11</div><div className="stat-label">Jahre Café-Bar in Mannheim</div></div>
              <div className="stat-item"><div className="stat-num">100%</div><div className="stat-label">Leidenschaft für gutes Essen</div></div>
              <div className="stat-item"><div className="stat-num">2</div><div className="stat-label">Oldtimer-Foodtrucks</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services-header anim fade-up">
          <span className="section-label">Was wir bieten</span>
          <h2 className="section-title">
            Von Privatveranstaltungen bis Streetfood Festivals – wir machen alles.
          </h2>
        </div>
        <div className="services-grid stagger-wrap">
          <div className="service-card anim fade-up">
            <img className="service-card-img" src="/img/Kantinchen71.jpg" alt="Hochzeit Catering" />
            <div className="service-card-body">
              <div className="service-icon"><Heart size={20} /></div>
              <div className="service-card-title">Hochzeiten &amp; Privatfeiern</div>
              <p className="service-card-text">
                Wir treten immer mit vollem Engagement und bestem Equipment auf, um deine nächste Veranstaltung zu einem
                unvergesslichen Erlebnis zu machen.
              </p>
            </div>
          </div>
          <div className="service-card anim fade-up">
            <img className="service-card-img" src="/img/Kantinchen49.jpeg" alt="Firmenevent Catering" />
            <div className="service-card-body">
              <div className="service-icon"><Building2 size={20} /></div>
              <div className="service-card-title">Firmenevents</div>
              <p className="service-card-text">
                Du planst dein nächstes Firmenevent? Bei uns bekommst du alles aus einer Hand – vom Foodtruck bis zum
                Getränke- und Kühlwagen.
              </p>
            </div>
          </div>
          <div className="service-card anim fade-up">
            <img className="service-card-img" src="/img/Kantinchen16.jpeg" alt="Streetfood Festival" />
            <div className="service-card-body">
              <div className="service-icon"><Utensils size={20} /></div>
              <div className="service-card-title">Streetfood &amp; Festivals</div>
              <p className="service-card-text">
                Ob Tattoo-Convention, Verköstigung bei Weingütern oder lokale Feste – wir sind immer unterwegs, um euch
                das beste kulinarische Erlebnis zu bieten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="menu" id="speisen">
        <div className="menu-header anim fade-up">
          <span className="section-label">Was wir anbieten</span>
          <h2 className="section-title">Gegrilltes Pastrami –<br />unsere Spezialität.</h2>
        </div>
        <div className="menu-grid stagger-wrap">
          {menuItems.map(([src, label]) => (
            <div className="menu-card anim fade-up" key={label}>
              <img src={src} alt={label} />
              <div className="menu-card-overlay"></div>
              <div className="menu-card-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="events" id="events">
        <div className="events-header anim fade-up">
          <div>
            <span className="section-label">Wo wir als nächstes sind</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Kommende Termine</h2>
          </div>
          <a href="#kontakt" className="btn-outline" style={{ color: "var(--black)", borderColor: "var(--black)" }}>
            Uns buchen
          </a>
        </div>
        <div className="events-list stagger-wrap" id="events-list">
          {events.map((ev) => (
            <div className="event-card anim fade-up" key={ev.id}>
              <img className="event-card-img" src={ev.img} alt={ev.title} />
              <div className="event-card-body">
                <span className="event-date">{ev.date}{ev.time ? ` · ${ev.time}` : ""}</span>
                <div className="event-title">{ev.title}</div>
                <p className="event-desc">{ev.location}</p>
                <Link to="/event/$id" params={{ id: String(ev.id) }} className="event-more">
                  Mehr erfahren <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="galerie">
        <div className="gallery-header anim fade-up">
          <span className="section-label">Ein kleiner Vorgeschmack</span>
          <h2 className="section-title">Bilder sagen mehr als Worte.</h2>
        </div>
        <div className="gallery-grid-extended stagger-wrap">
          {galleryImages.map(([src, alt]) => (
            <div className="gallery-item" key={src}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <div className="quote-section">
        <p className="quote-text">Es schmeckt so lecker, wie es aussieht</p>
      </div>

      {/* SOCIAL */}
      <div className="social-section">
        <span className="section-label" style={{ display: "block" }}>Bleib auf dem Laufenden</span>
        <p>Folg uns auf Instagram und Facebook für aktuelle Events, Eindrücke und Neuigkeiten.</p>
        <div className="social-buttons">
          <a href="https://www.instagram.com/laras_kantinchen/" target="_blank" rel="noreferrer" className="social-btn">
            <InstagramIcon /> Instagram
          </a>
          <a href="https://de-de.facebook.com/laraskantinchen/" target="_blank" rel="noreferrer" className="social-btn">
            <FacebookIcon /> Facebook
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact" id="kontakt">
        <div className="contact-grid">
          <div className="contact-info anim fade-up">
            <span className="section-label">Kontakt</span>
            <h2 className="section-title">Bereit für dein kulinarisches Abenteuer?</h2>
            <p className="section-sub">
              Schreib uns! Wir beißen nicht, versprochen. Für Anfragen rund um dein Event – wir melden uns schnell
              zurück.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <div className="contact-detail">
                <div className="contact-detail-icon"><MapPin size={18} /></div>
                <div className="contact-detail-text"><strong>Adresse</strong>Christoph-Kröwerath-Straße 132</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Phone size={18} /></div>
                <div className="contact-detail-text">
                  <strong>Telefon</strong>
                  <a href="tel:+491726676787" style={{ color: "inherit", textDecoration: "none" }}>+49 172 6676787</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Mail size={18} /></div>
                <div className="contact-detail-text">
                  <strong>E-Mail</strong>
                  <a href="mailto:laras-kantinchen@email.de" style={{ color: "inherit", textDecoration: "none" }}>
                    laras-kantinchen@email.de
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form anim fade-up">
            {!sent && (
              <form onSubmit={handleSubmit} id="contact-form">
                <input type="hidden" name="_subject" value="Neue Anfrage von laras-kantinchen.de" />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                <div className="form-row row-uneven">
                  <div className="form-group"><label>Vorname *</label><input type="text" name="vorname" placeholder="Max" required /></div>
                  <div className="form-group"><label>Nachname *</label><input type="text" name="nachname" placeholder="Mustermann" required /></div>
                </div>
                <div className="form-group"><label>Firmenname</label><input type="text" name="firma" placeholder="Optional" /></div>
                <div className="form-row row-uneven">
                  <div className="form-group"><label>Wunschdatum *</label><input type="date" name="wunschdatum" required /></div>
                  <div className="form-group"><label>Personenanzahl (min. 45) *</label><input type="number" name="personenanzahl" placeholder="80" min={45} required /></div>
                </div>
                <div className="form-group"><label>Ort / PLZ *</label><input type="text" name="ort" placeholder="z. B. Mannheim, 68159" required /></div>
                <div className="form-row">
                  <div className="form-group"><label>E-Mail *</label><input type="email" name="email" placeholder="max@mail.de" required /></div>
                  <div className="form-group"><label>Telefon *</label><input type="tel" name="telefon" placeholder="+49 ..." required /></div>
                </div>
                <div className="form-group">
                  <label>Deine Nachricht *</label>
                  <textarea name="nachricht" placeholder="Was planst du? Erzähl uns von deinem Event..." required />
                </div>
                <button type="submit" className="form-submit" disabled={sending}>
                  {btnLabel} <Send size={16} />
                </button>
              </form>
            )}
            {sent && (
              <div
                style={{
                  marginTop: "1.2rem",
                  padding: "1rem 1.2rem",
                  background: "#f0fdf4",
                  borderRadius: 12,
                  border: "1.5px solid #86efac",
                  color: "#166534",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Vielen Dank! Deine Anfrage wurde gesendet. Wir melden uns bald.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <a href="#" className="footer-logo">
            <img
              src="/img/LK_Logo_ohne_black_lang.png"
              alt="Laras Kantinchen"
              style={{ height: 52, width: "auto", filter: "invert(1)" }}
            />
          </a>
          <ul className="footer-links">
            <li><a href="#about">Über uns</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#speisen">Speisen</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Laras Kantinchen. Alle Rechte vorbehalten.</span>
          <span>Powered by LB.Graphics</span>
        </div>
      </footer>

      {/* VISITOR BADGE */}
      <div className="social-badges">
        <div className="ig-badge">
          <span style={{ color: "#EDDC9A", display: "flex" }}><Eye size={18} /></span>
          <span className="ig-badge-num">{visits !== null ? visits.toLocaleString("de-DE") : "–"}</span>
          <span className="ig-badge-label">Besuche</span>
        </div>
      </div>


      {/* COOKIE BANNER */}
      <div className={`cookie-banner${cookieHidden ? " hidden" : ""}`}>
        <p>
          Wir verwenden technisch notwendige Cookies, um dir die beste Erfahrung auf unserer Website zu bieten. Mehr
          dazu in unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.
        </p>
        <div className="cookie-banner-btns">
          <button className="cookie-decline" onClick={() => dismissCookie("declined")}>Ablehnen</button>
          <button className="cookie-accept" onClick={() => dismissCookie("accepted")}>Alles klar</button>
        </div>
      </div>
    </>
  );
}
