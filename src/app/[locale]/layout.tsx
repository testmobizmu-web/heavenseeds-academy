import type { Metadata } from "next";
import Link from "next/link";
import "../globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export async function generateMetadata(props: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const p = await props.params;
  const locale = safeLocale(p?.locale);

  const canonical = `${SITE_URL}/${locale}`;
  const altEn = `${SITE_URL}/en`;
  const altFr = `${SITE_URL}/fr`;

  return {
    alternates: {
      canonical,
      languages: {
        en: altEn,
        fr: altFr,
      },
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);

  const t = {
    home: locale === "fr" ? "Accueil" : "Home",
    about: locale === "fr" ? "À propos" : "About",
    online: locale === "fr" ? "En ligne" : "Online Learning",
    mauritius: locale === "fr" ? "Maurice" : "Mauritius Programs",
    shop: locale === "fr" ? "Boutique" : "Shop",
    blog: locale === "fr" ? "Blog" : "Blog",
    contact: locale === "fr" ? "Contact" : "Contact",
    cta: locale === "fr" ? "Réserver / Demander" : "Book / Enquire",
    switchToEn: "EN",
    switchToFr: "FR",
  };

  return (
    <div data-locale={locale} className="min-h-screen bg-[#FAFBFF] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
        <div className="h-[3px] w-full bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between gap-3">
            {/* Brand */}
            <Link
              href={`/${locale}`}
              className="group flex items-center gap-3 rounded-2xl px-2 py-2 hover:bg-slate-50"
              aria-label="HeavenSeeds Academy"
            >
              <span className="relative grid h-10 w-10 place-items-center rounded-2xl border bg-white shadow-sm">
                <span className="h-4 w-4 rounded-full bg-slate-900" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              </span>

              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight">HeavenSeeds Academy</div>
                <div className="text-[11px] text-slate-500">
                  {locale === "fr"
                    ? "École inclusive • Maurice + En ligne"
                    : "Inclusive School • Mauritius + Online"}
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              <Link href={`/${locale}/about`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.about}
              </Link>
              <Link href={`/${locale}/online-learning`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.online}
              </Link>
              <Link href={`/${locale}/programs-mauritius`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.mauritius}
              </Link>
              <Link href={`/${locale}/shop`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.shop}
              </Link>
              <Link href={`/${locale}/blog`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.blog}
              </Link>
              <Link href={`/${locale}/contact`} className="rounded-2xl px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {t.contact}
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Locale Switch */}
              <div className="flex items-center overflow-hidden rounded-2xl border bg-white shadow-sm">
                <Link
                  href="/en"
                  className={`px-3 py-2 text-xs font-semibold ${
                    locale === "en" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-label="Switch to English"
                >
                  {t.switchToEn}
                </Link>
                <Link
                  href="/fr"
                  className={`px-3 py-2 text-xs font-semibold ${
                    locale === "fr" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-50"
                  }`}
                  aria-label="Passer en français"
                >
                  {t.switchToFr}
                </Link>
              </div>

              <Link
                href={`/${locale}/contact`}
                className="hidden rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:inline-flex"
              >
                {t.cta}
              </Link>

              <a
                href="#site-nav"
                className="inline-flex rounded-2xl border bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 lg:hidden"
                aria-label="Open navigation"
              >
                ☰
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-6">{props.children}</div>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">HeavenSeeds Academy</div>
              <p className="mt-2 text-sm text-slate-600">
                {locale === "fr"
                  ? "École pré-primaire inclusive à Maurice + apprentissage en ligne pour les non-anglophones."
                  : "Inclusive pre-primary school in Mauritius + online learning for non-native English speakers."}
              </p>
              <div className="mt-4 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
            </div>

            <div id="site-nav">
              <div className="text-sm font-semibold">{locale === "fr" ? "Navigation" : "Navigation"}</div>
              <div className="mt-2 grid gap-2 text-sm">
                <Link className="text-slate-700 hover:underline" href={`/${locale}`}>{t.home}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/about`}>{t.about}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/online-learning`}>{t.online}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/programs-mauritius`}>{t.mauritius}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/shop`}>{t.shop}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/blog`}>{t.blog}</Link>
                <Link className="text-slate-700 hover:underline" href={`/${locale}/contact`}>{t.contact}</Link>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">{locale === "fr" ? "Contact" : "Contact"}</div>
              <p className="mt-2 text-sm text-slate-600">
                {locale === "fr"
                  ? "Pour une visite à Maurice ou des cours en ligne, contactez-nous."
                  : "For a Mauritius tour or online learning packages, contact us."}
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex w-fit items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.cta}
                </Link>

                <a href="#top" className="w-fit text-sm font-semibold text-slate-700 hover:underline">
                  {locale === "fr" ? "Retour en haut" : "Back to top"}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} HeavenSeeds Academy.{" "}
            {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </div>
        </div>
      </footer>
    </div>
  );
}
