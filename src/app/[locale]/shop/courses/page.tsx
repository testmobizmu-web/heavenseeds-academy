import Image from "next/image";
import type { Metadata } from "next";
import { sanityClient } from "@/lib/sanity.client";

export const metadata: Metadata = {
  title: "Courses | HeavenSeeds Academy",
  description:
    "Explore HeavenSeeds Academy premium courses for non-native English speakers. Mobile-first, fast, and SEO-optimized.",
};

type CourseCard = {
  _id: string;
  title: string;
  slug: { current: string };
  market?: "international" | "mauritius";
  level?: "beginner" | "intermediate" | "advanced";
  excerpt?: string;
  price?: number;
  currency?: string;
  coverImage?: any;
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function ShopCoursesPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  // A) Only published + language match
  // B) Include market + level for filtering UI later
  // C) Fetch coverImage if you want to render it later (kept optional)
  const courses = await sanityClient.fetch<CourseCard[]>(
    `*[_type=="course" && isPublished==true && language==$lang]
      | order(_createdAt desc){
        _id,
        title,
        slug,
        market,
        level,
        excerpt,
        price,
        currency
      }`,
    { lang: locale }
  );

  const t = {
    badge: isFr ? "Boutique • Cours" : "Shop • Courses",
    title: isFr ? "Cours" : "Courses",
    subtitle: isFr
      ? "Cours premium pour non-anglophones (enfants & adultes). Paiement PayPal + accès après achat (connexion en cours)."
      : "Premium courses for non-native English speakers (kids & adults). PayPal checkout + access after purchase (wiring in progress).",
    filters: isFr ? "Filtres" : "Filters",
    all: isFr ? "Tous" : "All",
    intl: isFr ? "International" : "International",
    mu: isFr ? "Maurice" : "Mauritius",
    free: isFr ? "Gratuit" : "Free",
    enquire: isFr ? "Sur demande" : "On request",
    view: isFr ? "Ouvrir" : "Open",
    helpTitle: isFr ? "Besoin d’aide pour choisir ?" : "Need help choosing?",
    helpText: isFr
      ? "Écrivez-nous sur WhatsApp — réponse rapide."
      : "Message us on WhatsApp — fast reply.",
    contact: isFr ? "Contact / WhatsApp" : "Contact / WhatsApp",
  };

  const whatsappDigits = "23058204613";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.badge}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t.title}
            </h1>

            <p className="mt-3 max-w-xl text-slate-600">{t.subtitle}</p>

            {/* Trust pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                {isFr ? "Mobile-first" : "Mobile-first"}
              </span>
              <span className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                {isFr ? "Accès après achat" : "Access after purchase"}
              </span>
              <span className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
                {isFr ? "Support chaleureux" : "Warm support"}
              </span>
            </div>

            {/* Help CTA */}
            <div className="mt-6 rounded-3xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{t.helpTitle}</div>
              <p className="mt-1 text-sm text-slate-600">{t.helpText}</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.contact}
                </a>
                <a
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                >
                  {isFr ? "Formulaire" : "Form"}
                </a>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-[28px] p-[2px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500">
              <div className="relative overflow-hidden rounded-[26px] border bg-slate-50">
                <Image
                  src="/online-english-adults.webp"
                  alt={isFr ? "Cours d'anglais en ligne" : "Online English courses"}
                  width={1200}
                  height={900}
                  priority
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:left-8 md:right-8">
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Enfants & adultes" : "Kids & adults"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Progression claire" : "Clear progression"}
                </div>
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Niveaux" : "Levels"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Débutant → Avancé" : "Beginner → Advanced"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR (UI only — real filter wiring can be added later) */}
      <section className="mt-10">
        <div className="flex flex-col gap-3 rounded-3xl border bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold text-slate-900">{t.filters}</div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white">
              {t.all}
            </span>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {t.intl}
            </span>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {t.mu}
            </span>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {isFr ? "Débutant" : "Beginner"}
            </span>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {isFr ? "Intermédiaire" : "Intermediate"}
            </span>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold text-slate-700">
              {isFr ? "Avancé" : "Advanced"}
            </span>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="mt-6" aria-labelledby="course-grid">
        <div className="flex items-end justify-between gap-4">
          <h2 id="course-grid" className="text-xl font-semibold text-slate-900">
            {isFr ? "Catalogue des cours" : "Course catalog"}
          </h2>
          <a
            className="text-sm text-slate-600 hover:underline"
            href={`/${locale}/contact`}
          >
            {isFr ? "Demander un conseil" : "Ask guidance"}
          </a>
        </div>

        {courses.length === 0 ? (
          <div className="mt-4 rounded-3xl border bg-white p-6 text-slate-600 shadow-sm">
            {isFr
              ? "Ajoutez des cours dans Sanity Studio pour les afficher ici."
              : "Add courses in Sanity Studio to display them here."}
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => {
              const marketLabel =
                c.market === "mauritius"
                  ? isFr
                    ? "Maurice"
                    : "Mauritius"
                  : isFr
                    ? "International"
                    : "International";

              const levelLabel =
                c.level === "beginner"
                  ? isFr
                    ? "Débutant"
                    : "Beginner"
                  : c.level === "intermediate"
                    ? isFr
                      ? "Intermédiaire"
                      : "Intermediate"
                    : c.level === "advanced"
                      ? isFr
                        ? "Avancé"
                        : "Advanced"
                      : isFr
                        ? "Niveau"
                        : "Level";

              const priceLabel = c.price
                ? `${c.currency || "USD"} ${c.price}`
                : isFr
                  ? "Gratuit / Sur demande"
                  : "Free / On request";

              return (
                <a
                  key={c._id}
                  href={`/${locale}/course/${c.slug?.current}`}
                  className="group relative overflow-hidden rounded-3xl border bg-white p-5 shadow-sm transition hover:shadow-md"
                  aria-label={isFr ? `Ouvrir ${c.title}` : `Open ${c.title}`}
                >
                  {/* Rainbow top hairline */}
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500 opacity-70" />

                  {/* Optional image placeholder */}
                  <div className="mt-2 overflow-hidden rounded-2xl border bg-slate-50">
                    <Image
                      src={
                        c.market === "mauritius"
                          ? "/mauritius-preprimary-play.webp"
                          : "/hero-online-learning-laptop.webp"
                      }
                      alt={c.title}
                      width={1200}
                      height={700}
                      className="h-[160px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                        {marketLabel}
                      </span>
                      <span className="rounded-full border bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                        {levelLabel}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-700">
                      {t.view}
                    </span>
                  </div>

                  <div className="mt-2 text-lg font-semibold text-slate-900">
                    {c.title}
                  </div>

                  {c.excerpt && (
                    <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                      {c.excerpt}
                    </p>
                  )}

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-900">
                      {priceLabel}
                    </div>
                    <span className="inline-flex items-center justify-center rounded-xl border bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 group-hover:bg-white">
                      {isFr ? "Détails" : "Details"}
                    </span>
                  </div>

                  <div className="mt-4 h-[2px] w-full bg-slate-100">
                    <div className="h-[2px] w-1/3 bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
                  </div>
                </a>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
