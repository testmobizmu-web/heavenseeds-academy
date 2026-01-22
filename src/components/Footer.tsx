import Link from "next/link";

type FooterProps = {
  locale?: "en" | "fr";
  year?: number; // pass from layout to avoid hydration mismatch
};

function safeLocale(l?: string): "en" | "fr" {
  return l === "fr" ? "fr" : "en";
}

export default function Footer({ locale: rawLocale, year }: FooterProps) {
  const locale = safeLocale(rawLocale);
  const isFr = locale === "fr";

  const t = {
    home: isFr ? "Accueil" : "Home",
    about: isFr ? "À propos" : "About",
    international: isFr ? "Académie Internationale" : "International Academy",
    mauritius: isFr ? "Programmes Maurice" : "Mauritius Programs",
    blog: "Blog",
    contact: "Contact",
    quick: isFr ? "Liens rapides" : "Quick Links",
    who: isFr ? "Qui sommes-nous ?" : "Who are we?",
    whoText: isFr
      ? "Une école inclusive à Maurice et une académie internationale en ligne — une approche structurée, premium et rassurante pour chaque apprenant."
      : "An inclusive Mauritius school and international online academy — structured, premium learning with clear progress for every learner.",
    contactH: isFr ? "Contact" : "Contact us",
    map: "Map",
    openMap: isFr ? "Ouvrir Google Maps →" : "Open Google Maps →",
    terms: isFr ? "Conditions générales" : "Terms and Conditions",
    builtBy: isFr ? "Créé par" : "Built by",
  };

  const y = year ?? new Date().getFullYear();

  return (
    <footer className="hsa-footerPremium" aria-label="Footer">
      <div className="hsa-footerPremium__bg" aria-hidden="true" />

      <div className="hsa-container">
        <div className="hsa-footerPremium__grid">
          {/* Brand / About */}
          <div className="hsa-footerPremium__brand">
            <div className="hsa-footerPremium__brandTop">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/logo-heavenseedsacademy.png"
                alt="HeavenSeeds Academy"
                className="hsa-footerPremium__logo"
              />

              <div className="hsa-footerPremium__brandTxt">
                <div className="hsa-footerPremium__name">HeavenSeeds Academy</div>
                <div className="hsa-footerPremium__sub">
                  Heaven’s Seed International School
                </div>
              </div>
            </div>

            <div className="hsa-footerPremium__who">
              <div className="hsa-footerPremium__h">{t.who}</div>
              <p className="hsa-footerPremium__p">{t.whoText}</p>
            </div>

            <div className="hsa-footerPremium__social" aria-label="Social media">
              <a
                className="hsa-footerPremium__socialBtn"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 22v-8.2h2.75l.4-3.2H13.5V8.55c0-.93.26-1.56 1.6-1.56h1.72V4.12c-.3-.04-1.32-.12-2.52-.12-2.5 0-4.2 1.52-4.2 4.3v2.3H7.4v3.2h2.7V22h3.4Z"
                  />
                </svg>
              </a>

              <a
                className="hsa-footerPremium__socialBtn"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.9 6.75a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM5.2 21.5h3.4V9H5.2v12.5Zm5.6-12.5h3.25v1.7h.05c.45-.86 1.55-1.77 3.2-1.77 3.42 0 4.05 2.25 4.05 5.17v7.45h-3.4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5v6.72h-3.41V9Z"
                  />
                </svg>
              </a>

              <a
                className="hsa-footerPremium__socialBtn"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.48A3 3 0 0 0 2.4 7.2 31.6 31.6 0 0 0 2 12a31.6 31.6 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.12c1.8.48 7.5.48 7.5.48s5.7 0 7.5-.48a3 3 0 0 0 2.1-2.12A31.6 31.6 0 0 0 22 12a31.6 31.6 0 0 0-.4-4.8ZM10.2 15.2V8.8L15.7 12l-5.5 3.2Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hsa-footerPremium__col">
            <div className="hsa-footerPremium__h">{t.quick}</div>

            <Link className="hsa-footerPremium__a" href={`/${locale}`}>
              {t.home}
            </Link>
            <Link className="hsa-footerPremium__a" href={`/${locale}/about`}>
              {t.about}
            </Link>
            <Link className="hsa-footerPremium__a" href={`/${locale}/online-learning`}>
              {t.international}
            </Link>
            <Link className="hsa-footerPremium__a" href={`/${locale}/programs-mauritius`}>
              {t.mauritius}
            </Link>
            <Link className="hsa-footerPremium__a" href={`/${locale}/blog`}>
              {t.blog}
            </Link>
            <Link className="hsa-footerPremium__a" href={`/${locale}/contact`}>
              {t.contact}
            </Link>

            <div className="hsa-footerPremium__divider" aria-hidden="true" />

            <Link className="hsa-footerPremium__a" href={`/${locale}/terms-and-conditions`}>
              {t.terms}
            </Link>
          </div>

          {/* Contact + Map */}
          <div className="hsa-footerPremium__col">
            <div className="hsa-footerPremium__h">{t.contactH}</div>

            <div className="hsa-footerPremium__contact">
              <div className="hsa-footerPremium__line">
                <span className="hsa-footerPremium__k">Phone / WhatsApp:</span>
                <a className="hsa-footerPremium__v" href="tel:+23058204613">
                  +230 5820 4613
                </a>
              </div>

              <div className="hsa-footerPremium__line">
                <span className="hsa-footerPremium__k">Email:</span>
                <a
                  className="hsa-footerPremium__v"
                  href="mailto:heavenseedsacademy@gmail.com"
                >
                  heavenseedsacademy@gmail.com
                </a>
              </div>

              <div className="hsa-footerPremium__line">
                <span className="hsa-footerPremium__k">Address:</span>
                <span className="hsa-footerPremium__v">Royal Road, Curepipe</span>
              </div>
            </div>

            <a
              className="hsa-footerPremium__map"
              href="https://www.google.com/maps/search/?api=1&query=Heaven%20Seeds%20Academy%20Royal%20Road%20Curepipe"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Google Maps"
              title="Open Google Maps"
            >
              <div className="hsa-footerPremium__mapTop">
                <span className="hsa-footerPremium__mapBadge">{t.map}</span>
                <span className="hsa-footerPremium__mapHint">{t.openMap}</span>
              </div>

              <div className="hsa-footerPremium__mapFrame" aria-hidden="true">
                <div className="hsa-footerPremium__mapGrid" />
                <div className="hsa-footerPremium__pin" />
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hsa-footerPremium__bottom">
          <div className="hsa-footerPremium__copy">© {y} HeavenSeeds Academy</div>

          <div className="hsa-footerPremium__built">
            {t.builtBy}{" "}
            <a
              href="https://www.mobiz.mu"
              target="_blank"
              rel="noreferrer"
              className="hsa-footerPremium__builtLink"
            >
              MoBiz.mu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

