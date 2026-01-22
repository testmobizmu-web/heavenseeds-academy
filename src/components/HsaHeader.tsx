"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type MenuItem = { label: string; href: string };

export default function HsaHeader(props: {
  locale: "en" | "fr";
  menu: MenuItem[];
  ctaText: string;
  ctaHref: string;
}) {
  const { locale, ctaText, ctaHref } = props;
  const [open, setOpen] = useState(false);
  const isFr = locale === "fr";

  // Normalize menu here (so it works even if some old menu config still exists)
  const menu = useMemo(() => {
    const normalized: MenuItem[] = [];

    for (const m of props.menu || []) {
      const labelLower = (m.label || "").toLowerCase().trim();
      const hrefLower = (m.href || "").toLowerCase().trim();

      // 1) Remove "Shop" anywhere (label or href)
      if (labelLower === "shop" || hrefLower.includes("/shop")) continue;

      // 2) Rename International Programs => International Academy
      //    and ensure it always points to /online-learning
      const isInternational =
        labelLower.includes("international programs") ||
        labelLower.includes("international programme") ||
        labelLower.includes("international programmes") ||
        labelLower.includes("international academy") ||
        hrefLower.includes("/online-learning");

      if (isInternational) {
        normalized.push({
          label: isFr ? "Académie Internationale" : "International Academy",
          href: `/${locale}/online-learning`,
        });
        continue;
      }

      // 3) Otherwise keep as-is
      normalized.push(m);
    }

    // If international menu wasn't present at all, add it (premium default)
    const hasIntl = normalized.some((x) => x.href.includes(`/${locale}/online-learning`));
    if (!hasIntl) {
      normalized.splice(2, 0, {
        label: isFr ? "Académie Internationale" : "International Academy",
        href: `/${locale}/online-learning`,
      });
    }

    return normalized;
  }, [props.menu, locale, isFr]);

  // Lock body scroll when drawer open (iOS + Android friendly)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const localeSwitch = useMemo(() => {
    return (
      <div className="hsa-locale" aria-label="Language">
        <Link
          href="/en"
          className={`hsa-locale__link ${locale === "en" ? "is-active" : ""}`}
          aria-label="Switch to English"
          onClick={() => setOpen(false)}
        >
          EN
        </Link>
        <span className="hsa-locale__sep" aria-hidden="true">
          ·
        </span>
        <Link
          href="/fr"
          className={`hsa-locale__link ${locale === "fr" ? "is-active" : ""}`}
          aria-label="Passer en français"
          onClick={() => setOpen(false)}
        >
          FR
        </Link>
      </div>
    );
  }, [locale]);

  return (
    <>
      <header className="hsa-header">
        <div className="hsa-header__inner">
          {/* Brand */}
          <Link href={`/${locale}`} className="hsa-brand" aria-label="HeavenSeeds Academy Home">
            <span className="hsa-brand__logo">
              <Image
                src="/images/logo/logo-heavenseedsacademy.png"
                alt="HeavenSeeds Academy Logo"
                width={44}
                height={44}
                priority
              />
            </span>
            <span className="hsa-brand__text">
              <span className="hsa-brand__title">HeavenSeeds Academy</span>
              <span className="hsa-brand__sub">Heaven’s Seed International School</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hsa-nav" aria-label="Main menu">
            {menu.map((m) => (
              <Link key={m.href} href={m.href} className="hsa-nav__link">
                {m.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hsa-header__actions">
            {localeSwitch}

            <a className="hsa-cta" href={ctaHref} target="_blank" rel="noreferrer">
              {ctaText}
            </a>

            {/* Burger */}
            <button
              className="hsa-burger"
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`hsa-overlay ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Drawer (RIGHT) */}
      <aside className={`hsa-drawer ${open ? "is-open" : ""}`} aria-label="Mobile menu">
        <div className="hsa-drawer__top">
          <div className="hsa-drawer__title">Menu</div>
          <button className="hsa-drawer__close" onClick={() => setOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="hsa-drawer__nav" aria-label="Mobile navigation">
          {menu.map((m) => (
            <Link key={m.href} href={m.href} className="hsa-drawer__link" onClick={() => setOpen(false)}>
              {m.label}
            </Link>
          ))}
        </nav>

        <div className="hsa-drawer__bottom">
          <a
            href={ctaHref}
            className="hsa-drawer__cta"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            {ctaText}
          </a>
        </div>
      </aside>
    </>
  );
}
