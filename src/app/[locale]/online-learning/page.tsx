import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Learning | HeavenSeeds Academy",
  description:
    "Premium online learning for non-native English speakers (kids & adults). Mobile-first, fast, and accessible.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function OnlineLearningPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    badge: isFr ? "International • En ligne" : "International • Online",
    title: isFr ? "Apprentissage en ligne" : "Online Learning",
    subtitle: isFr
      ? "Cours premium pour non-anglophones — enfants & adultes. Simple, mobile-first, rassurant."
      : "Premium courses for non-native English speakers — kids & adults. Simple, mobile-first, trust-driven.",

    ctaCourses: isFr ? "Voir les cours" : "Browse courses",
    ctaContact: isFr ? "Demander conseil" : "Ask guidance",

    promiseTitle: isFr ? "Une expérience premium" : "A premium experience",
    promiseLine: isFr
      ? "Cours premium — simple, efficace, rassurant."
      : "Premium courses — simple, effective, trust-driven.",

    p1: isFr ? "Mobile-first & rapide" : "Mobile-first & fast",
    p1d: isFr ? "Optimisé pour bas débit, pages légères." : "Optimized for low bandwidth, lightweight pages.",
    p2: isFr ? "Progression structurée" : "Structured progression",
    p2d: isFr ? "Objectifs clairs et étapes simples." : "Clear outcomes and simple steps.",
    p3: isFr ? "Support rassurant" : "Trust-driven support",
    p3d: isFr ? "WhatsApp + email pour guider le bon choix." : "WhatsApp + email to help you choose right.",

    // A) Quick chips
    quickTitle: isFr ? "Choisissez votre parcours" : "Choose your track",
    chipKids: isFr ? "Enfants" : "Kids",
    chipAdults: isFr ? "Adultes" : "Adults",
    chipBeginner: isFr ? "Débutant" : "Beginner",
    chipIntermediate: isFr ? "Intermédiaire" : "Intermediate",

    tracksTitle: isFr ? "Parcours populaires" : "Popular tracks",
    kidsTitle: isFr ? "Anglais pour enfants" : "Kids English",
    kidsDesc: isFr
      ? "Ludique, interactif, adapté au rythme de l’enfant."
      : "Playful, interactive, designed for the child’s pace.",
    adultsTitle: isFr ? "Anglais pour adultes" : "Adults English",
    adultsDesc: isFr
      ? "Anglais pratique pour la confiance, le travail, la vie quotidienne."
      : "Practical English for confidence, work, and daily life.",

    howTitle: isFr ? "Comment ça marche" : "How it works",
    howSub: isFr ? "Simple, clair, premium." : "Simple, clear, premium.",
    h1: isFr ? "1) Choisissez un cours" : "1) Choose a course",
    h1d: isFr ? "Par niveau, objectif et rythme." : "By level, goal, and pace.",
    h2: isFr ? "2) Achetez en ligne" : "2) Purchase online",
    h2d: isFr ? "Paiement PayPal (international)." : "PayPal payment (international).",
    h3: isFr ? "3) Accès & progression" : "3) Access & progress",
    h3d: isFr ? "Accès après achat + support si besoin." : "Access after purchase + support if needed.",

    // B) Trust proof strip
    trustTitle: isFr ? "Confiance & qualité" : "Trust & quality",
    trust1: isFr ? "Approche bienveillante" : "Warm approach",
    trust1d: isFr ? "Encourage la confiance et la progression." : "Builds confidence and progress.",
    trust2: isFr ? "Guidance rapide" : "Fast guidance",
    trust2d: isFr ? "WhatsApp + email pour choisir le bon cours." : "WhatsApp + email to choose the right course.",
    trust3: isFr ? "Objectifs clairs" : "Clear outcomes",
    trust3d: isFr ? "Parcours structuré, simple à suivre." : "Structured track, easy to follow.",

    // SEO / Why
    seoTitle: isFr ? "Pourquoi HeavenSeeds ?" : "Why HeavenSeeds?",
    seoText: isFr
      ? "Une approche chaleureuse, inclusive et orientée résultats — inspirée des meilleures pratiques internationales, avec une base de confiance."
      : "A warm, inclusive, results-driven approach — inspired by international best practices, built on trust.",

    // C) FAQ
    faqTitle: isFr ? "Questions fréquentes" : "FAQ",
    q1: isFr ? "Est-ce adapté aux débutants ?" : "Is it beginner-friendly?",
    a1: isFr
      ? "Oui. Nous proposons des parcours simples et progressifs, adaptés au niveau."
      : "Yes. We offer simple progressive tracks tailored to your level.",
    q2: isFr ? "Comment accéder au cours après paiement ?" : "How do I access after payment?",
    a2: isFr
      ? "Après achat, l’accès est fourni et l’équipe peut vous guider si besoin."
      : "After purchase, access is provided and the team can guide you if needed.",
    q3: isFr ? "Puis-je demander conseil avant d’acheter ?" : "Can I ask before buying?",
    a3: isFr
      ? "Oui — contactez-nous via WhatsApp ou le formulaire."
      : "Yes — contact us via WhatsApp or the form.",
  };

  // Query-string links (future-ready filters)
  const courseLink = (qs: string) => `/${locale}/shop/courses${qs ? `?${qs}` : ""}`;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Premium hero */}
      <section className="relative overflow-hidden rounded-[28px] border bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          {/* Copy */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.badge}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t.title}
            </h1>

            <p className="mt-3 max-w-xl text-slate-600">{t.subtitle}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={courseLink("")}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                aria-label={isFr ? "Voir les cours" : "Browse courses"}
              >
                {t.ctaCourses}
              </a>

              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                aria-label={isFr ? "Demander conseil" : "Ask guidance"}
              >
                {t.ctaContact}
              </a>
            </div>

            {/* A) Quick chips */}
            <div className="mt-6 rounded-3xl border bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.quickTitle}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
                  href={courseLink("track=kids")}
                >
                  {t.chipKids}
                </a>
                <a
                  className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
                  href={courseLink("track=adults")}
                >
                  {t.chipAdults}
                </a>
                <a
                  className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
                  href={courseLink("level=beginner")}
                >
                  {t.chipBeginner}
                </a>
                <a
                  className="rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
                  href={courseLink("level=intermediate")}
                >
                  {t.chipIntermediate}
                </a>
              </div>

              <div className="mt-4 h-[2px] w-full bg-slate-100">
                <div className="h-[2px] w-1/3 bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
              </div>

              {/* Value cards */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{t.p1}</div>
                  <div className="mt-1 text-xs text-slate-600">{t.p1d}</div>
                </div>
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{t.p2}</div>
                  <div className="mt-1 text-xs text-slate-600">{t.p2d}</div>
                </div>
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">{t.p3}</div>
                  <div className="mt-1 text-xs text-slate-600">{t.p3d}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="rounded-[28px] p-[2px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500">
              <div className="relative overflow-hidden rounded-[26px] border bg-slate-50">
                <Image
                  src="/hero-online-learning-laptop.webp"
                  alt={isFr ? "Apprentissage en ligne" : "Online learning"}
                  width={1200}
                  height={900}
                  priority
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            {/* Floating promise */}
            <div className="pointer-events-none absolute -bottom-4 left-4 right-4">
              <div className="rounded-2xl border bg-white/90 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {t.promiseTitle}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  {t.promiseLine}
                </div>
                <div className="mt-2 h-[2px] w-full bg-slate-100">
                  <div className="h-[2px] w-1/3 bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular tracks */}
      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-900">{t.tracksTitle}</h2>
          <a className="text-sm text-slate-600 hover:underline" href={courseLink("")}>
            {isFr ? "Voir tout" : "View all"}
          </a>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <a
            href={courseLink("track=kids")}
            className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            aria-label={isFr ? "Parcours enfants" : "Kids track"}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {isFr ? "Enfants" : "Kids"}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{t.kidsTitle}</div>
                <p className="mt-2 text-sm text-slate-600">{t.kidsDesc}</p>
              </div>
              <span className="text-sm text-slate-600 group-hover:underline">
                {isFr ? "Découvrir →" : "Explore →"}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/online-english-kids.webp"
                alt={isFr ? "Cours enfants" : "Kids course"}
                width={1200}
                height={700}
                className="h-[200px] w-full object-cover"
              />
            </div>
          </a>

          <a
            href={courseLink("track=adults")}
            className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            aria-label={isFr ? "Parcours adultes" : "Adults track"}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {isFr ? "Adultes" : "Adults"}
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">{t.adultsTitle}</div>
                <p className="mt-2 text-sm text-slate-600">{t.adultsDesc}</p>
              </div>
              <span className="text-sm text-slate-600 group-hover:underline">
                {isFr ? "Voir →" : "View →"}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/online-english-adults.webp"
                alt={isFr ? "Cours adultes" : "Adults course"}
                width={1200}
                height={700}
                className="h-[200px] w-full object-cover"
              />
            </div>
          </a>
        </div>
      </section>

      {/* B) Trust & Quality strip */}
      <section className="mt-10" aria-labelledby="trust-strip">
        <div className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500 opacity-70" />
          <h2 id="trust-strip" className="text-xl font-semibold text-slate-900">
            {t.trustTitle}
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl border bg-white shadow-sm">
                  <span className="h-4 w-4 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
                </span>
                <div className="text-sm font-semibold text-slate-900">{t.trust1}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{t.trust1d}</p>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl border bg-white shadow-sm">
                  <span className="h-4 w-4 rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
                </span>
                <div className="text-sm font-semibold text-slate-900">{t.trust2}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{t.trust2d}</p>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl border bg-white shadow-sm">
                  <span className="h-4 w-4 rounded-full bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-500" />
                </span>
                <div className="text-sm font-semibold text-slate-900">{t.trust3}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{t.trust3d}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {t.howTitle}
          </div>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{t.howSub}</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
              <div className="text-sm font-semibold text-slate-900">{t.h1}</div>
              <p className="mt-2 text-sm text-slate-600">{t.h1d}</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              <div className="text-sm font-semibold text-slate-900">{t.h2}</div>
              <p className="mt-2 text-sm text-slate-600">{t.h2d}</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400" />
              <div className="text-sm font-semibold text-slate-900">{t.h3}</div>
              <p className="mt-2 text-sm text-slate-600">{t.h3d}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={courseLink("")}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              {t.ctaCourses}
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>

      {/* SEO / Trust section */}
      <section className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500 opacity-70" />
          <h2 className="text-xl font-semibold text-slate-900">{t.seoTitle}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t.seoText}</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Accessibilité" : "Accessibility"}
              </div>
              <div className="mt-1 text-xs text-slate-600">
                {isFr ? "Lisible, clair, contrasté." : "Readable, clear, high-contrast."}
              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">SEO-ready</div>
              <div className="mt-1 text-xs text-slate-600">
                {isFr ? "Structure + metas + performance." : "Structure + metas + performance."}
              </div>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Support rapide" : "Fast support"}
              </div>
              <div className="mt-1 text-xs text-slate-600">WhatsApp + email.</div>
            </div>
          </div>
        </div>
      </section>

      {/* C) FAQ (SEO booster) */}
      <section className="mt-10" aria-labelledby="faq">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <h2 id="faq" className="text-xl font-semibold text-slate-900">
              {t.faqTitle}
            </h2>
            <a className="text-sm text-slate-600 hover:underline" href={`/${locale}/contact`}>
              {isFr ? "Nous contacter" : "Contact us"}
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border bg-slate-50 p-6">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-70" />
              <div className="text-sm font-semibold text-slate-900">{t.q1}</div>
              <p className="mt-2 text-sm text-slate-600">{t.a1}</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border bg-slate-50 p-6">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 opacity-70" />
              <div className="text-sm font-semibold text-slate-900">{t.q2}</div>
              <p className="mt-2 text-sm text-slate-600">{t.a2}</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border bg-slate-50 p-6">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-500 opacity-70" />
              <div className="text-sm font-semibold text-slate-900">{t.q3}</div>
              <p className="mt-2 text-sm text-slate-600">{t.a3}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={courseLink("")}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              {t.ctaCourses}
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {t.ctaContact}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
