// src/app/[locale]/online-learning/page.tsx
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
      ? "Clair, coloré, structuré — avec un support rassurant."
      : "Clear, colorful, structured — with trust-driven support.",

    p1: isFr ? "Mobile-first & rapide" : "Mobile-first & fast",
    p1d: isFr
      ? "Optimisé pour bas débit, pages légères."
      : "Optimized for low bandwidth, lightweight pages.",
    p2: isFr ? "Progression structurée" : "Structured progression",
    p2d: isFr ? "Objectifs clairs et étapes simples." : "Clear outcomes and simple steps.",
    p3: isFr ? "Support rassurant" : "Trust-driven support",
    p3d: isFr ? "WhatsApp + email pour guider le bon choix." : "WhatsApp + email to help you choose right.",

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

    trustTitle: isFr ? "Confiance & qualité" : "Trust & quality",
    trust1: isFr ? "Approche bienveillante" : "Warm approach",
    trust1d: isFr ? "Encourage la confiance et la progression." : "Builds confidence and progress.",
    trust2: isFr ? "Guidance rapide" : "Fast guidance",
    trust2d: isFr ? "WhatsApp + email pour choisir le bon cours." : "WhatsApp + email to choose the right course.",
    trust3: isFr ? "Objectifs clairs" : "Clear outcomes",
    trust3d: isFr ? "Parcours structuré, simple à suivre." : "Structured track, easy to follow.",

    seoTitle: isFr ? "Pourquoi HeavenSeeds ?" : "Why HeavenSeeds?",
    seoText: isFr
      ? "Une approche chaleureuse, inclusive et orientée résultats — inspirée des meilleures pratiques internationales, avec une base de confiance."
      : "A warm, inclusive, results-driven approach — inspired by international best practices, built on trust.",

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
    a3: isFr ? "Oui — contactez-nous via WhatsApp ou le formulaire." : "Yes — contact us via WhatsApp or the form.",
  };

  const courseLink = (qs: string) => `/${locale}/shop/courses${qs ? `?${qs}` : ""}`;

  return (
    <main className="ol-wrap">
      {/* Colourful animated background */}
      <div className="ol-bg" aria-hidden="true">
        <div className="ol-blob ol-blob--a" />
        <div className="ol-blob ol-blob--b" />
        <div className="ol-blob ol-blob--c" />
        <div className="ol-noise" />
      </div>

      <div className="hsa-container ol-inner">
        {/* Premium hero */}
        <section className="ol-hero relative overflow-hidden rounded-[28px] border bg-white/85 shadow-sm backdrop-blur">
          <div className="hsa-accent-line" />
          <div className="ol-heroSheen" aria-hidden="true" />

          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            {/* Copy */}
            <div className="flex flex-col justify-center">
              <p className="ol-fadeUp text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.badge}
              </p>

              <h1 className="ol-fadeUp ol-delay-1 mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {t.title}
              </h1>

              <p className="ol-fadeUp ol-delay-2 mt-3 max-w-xl text-slate-600">
                {t.subtitle}
              </p>

              <div className="ol-fadeUp ol-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={courseLink("")}
                  className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3"
                >
                  {t.ctaCourses}
                </a>

                <a
                  href={`/${locale}/contact`}
                  className="hsa-btn inline-flex items-center justify-center px-6 py-3"
                >
                  {t.ctaContact}
                </a>
              </div>

              {/* Quick chips */}
              <div className="ol-fadeUp ol-delay-4 mt-6 rounded-3xl border bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.quickTitle}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a className="ol-chip" href={courseLink("track=kids")}>
                    {t.chipKids}
                  </a>
                  <a className="ol-chip" href={courseLink("track=adults")}>
                    {t.chipAdults}
                  </a>
                  <a className="ol-chip" href={courseLink("level=beginner")}>
                    {t.chipBeginner}
                  </a>
                  <a className="ol-chip" href={courseLink("level=intermediate")}>
                    {t.chipIntermediate}
                  </a>
                </div>

                <div className="mt-4 h-[2px] w-full bg-slate-100">
                  <div className="h-[2px] w-1/3 bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="ol-miniCard">
                    <div className="text-sm font-semibold text-slate-900">{t.p1}</div>
                    <div className="mt-1 text-xs text-slate-600">{t.p1d}</div>
                  </div>
                  <div className="ol-miniCard">
                    <div className="text-sm font-semibold text-slate-900">{t.p2}</div>
                    <div className="mt-1 text-xs text-slate-600">{t.p2d}</div>
                  </div>
                  <div className="ol-miniCard">
                    <div className="text-sm font-semibold text-slate-900">{t.p3}</div>
                    <div className="mt-1 text-xs text-slate-600">{t.p3d}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative ol-fadeUp ol-delay-2">
              <div className="hsa-rainbow-border rounded-[28px] ol-float">
                <div className="relative overflow-hidden rounded-[28px] border bg-slate-50">
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

              <div className="pointer-events-none absolute -bottom-4 left-4 right-4">
                <div className="ol-promise rounded-2xl border bg-white/92 p-4 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {t.promiseTitle}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">{t.promiseLine}</div>
                  <div className="mt-2 h-[2px] w-full bg-slate-100">
                    <div className="h-[2px] w-1/2 bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 to-violet-500 opacity-70" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular tracks */}
        <section className="mt-10 ol-fadeUp">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">{t.tracksTitle}</h2>
            <a className="text-sm text-slate-700 hover:underline" href={courseLink("")}>
              {isFr ? "Voir tout" : "View all"}
            </a>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <a href={courseLink("track=kids")} className="ol-card group">
              <div className="ol-cardTop">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {isFr ? "Enfants" : "Kids"}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{t.kidsTitle}</div>
                  <p className="mt-2 text-sm text-slate-600">{t.kidsDesc}</p>
                </div>
                <span className="text-sm text-slate-700 group-hover:underline">
                  {isFr ? "Découvrir →" : "Explore →"}
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/online-english-kids.webp"
                  alt={isFr ? "Cours enfants" : "Kids course"}
                  width={1200}
                  height={700}
                  className="h-[210px] w-full object-cover"
                />
              </div>
            </a>

            <a href={courseLink("track=adults")} className="ol-card group">
              <div className="ol-cardTop">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {isFr ? "Adultes" : "Adults"}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900">{t.adultsTitle}</div>
                  <p className="mt-2 text-sm text-slate-600">{t.adultsDesc}</p>
                </div>
                <span className="text-sm text-slate-700 group-hover:underline">
                  {isFr ? "Voir →" : "View →"}
                </span>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/online-english-adults.webp"
                  alt={isFr ? "Cours adultes" : "Adults course"}
                  width={1200}
                  height={700}
                  className="h-[210px] w-full object-cover"
                />
              </div>
            </a>
          </div>
        </section>

        {/* Trust */}
        <section className="mt-10 ol-fadeUp">
          <div className="ol-slab relative overflow-hidden rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="ol-topLine" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-slate-900">{t.trustTitle}</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="ol-feature">
                <div className="ol-featureIcon ol-i1" aria-hidden="true" />
                <div className="text-sm font-semibold text-slate-900">{t.trust1}</div>
                <p className="mt-2 text-sm text-slate-600">{t.trust1d}</p>
              </div>

              <div className="ol-feature">
                <div className="ol-featureIcon ol-i2" aria-hidden="true" />
                <div className="text-sm font-semibold text-slate-900">{t.trust2}</div>
                <p className="mt-2 text-sm text-slate-600">{t.trust2d}</p>
              </div>

              <div className="ol-feature">
                <div className="ol-featureIcon ol-i3" aria-hidden="true" />
                <div className="text-sm font-semibold text-slate-900">{t.trust3}</div>
                <p className="mt-2 text-sm text-slate-600">{t.trust3d}</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-10 ol-fadeUp">
          <div className="ol-slab rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.howTitle}
            </div>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{t.howSub}</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="ol-step ol-step--a">
                <div className="text-sm font-semibold text-slate-900">{t.h1}</div>
                <p className="mt-2 text-sm text-slate-600">{t.h1d}</p>
              </div>
              <div className="ol-step ol-step--b">
                <div className="text-sm font-semibold text-slate-900">{t.h2}</div>
                <p className="mt-2 text-sm text-slate-600">{t.h2d}</p>
              </div>
              <div className="ol-step ol-step--c">
                <div className="text-sm font-semibold text-slate-900">{t.h3}</div>
                <p className="mt-2 text-sm text-slate-600">{t.h3d}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={courseLink("")} className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3">
                {t.ctaCourses}
              </a>
              <a href={`/${locale}/contact`} className="hsa-btn inline-flex items-center justify-center px-6 py-3">
                {t.ctaContact}
              </a>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="mt-10 ol-fadeUp">
          <div className="ol-slab relative overflow-hidden rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="ol-topLine" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-slate-900">{t.seoTitle}</h2>
            <p className="mt-2 max-w-3xl text-slate-600">{t.seoText}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="ol-miniCard">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Accessibilité" : "Accessibility"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Lisible, clair, contrasté." : "Readable, clear, high-contrast."}
                </div>
              </div>

              <div className="ol-miniCard">
                <div className="text-sm font-semibold text-slate-900">SEO-ready</div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Structure + metas + performance." : "Structure + metas + performance."}
                </div>
              </div>

              <div className="ol-miniCard">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Support rapide" : "Fast support"}
                </div>
                <div className="mt-1 text-xs text-slate-600">WhatsApp + email.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 ol-fadeUp" aria-labelledby="faq">
          <div className="ol-slab rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="flex items-end justify-between gap-4">
              <h2 id="faq" className="text-xl font-semibold text-slate-900">
                {t.faqTitle}
              </h2>
              <a className="text-sm text-slate-700 hover:underline" href={`/${locale}/contact`}>
                {isFr ? "Nous contacter" : "Contact us"}
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="ol-faq ol-faq--a">
                <div className="text-sm font-semibold text-slate-900">{t.q1}</div>
                <p className="mt-2 text-sm text-slate-600">{t.a1}</p>
              </div>
              <div className="ol-faq ol-faq--b">
                <div className="text-sm font-semibold text-slate-900">{t.q2}</div>
                <p className="mt-2 text-sm text-slate-600">{t.a2}</p>
              </div>
              <div className="ol-faq ol-faq--c">
                <div className="text-sm font-semibold text-slate-900">{t.q3}</div>
                <p className="mt-2 text-sm text-slate-600">{t.a3}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={courseLink("")} className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3">
                {t.ctaCourses}
              </a>
              <a href={`/${locale}/contact`} className="hsa-btn inline-flex items-center justify-center px-6 py-3">
                {t.ctaContact}
              </a>
            </div>
          </div>
        </section>

        <div className="h-[18px]" />
      </div>

      {/* ✅ Plain <style> tag (NO styled-jsx) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .ol-wrap{position:relative;overflow:hidden;padding:40px 0 10px;min-height:100%}
          .ol-inner{position:relative;z-index:2}

          .ol-bg{position:absolute;inset:0;z-index:0;
            background:
              radial-gradient(1200px 600px at 12% 10%, rgba(255,200,220,.55), transparent 60%),
              radial-gradient(1200px 600px at 90% 0%, rgba(190,240,255,.55), transparent 58%),
              radial-gradient(1200px 600px at 14% 105%, rgba(210,255,230,.55), transparent 60%),
              radial-gradient(900px 520px at 85% 90%, rgba(230,220,255,.55), transparent 60%),
              linear-gradient(90deg, rgba(255,190,120,.22), rgba(255,200,220,.22), rgba(210,210,255,.22), rgba(190,240,255,.22), rgba(200,255,220,.22)),
              #fff;
            filter:saturate(1.08);
          }
          .ol-blob{position:absolute;width:560px;height:560px;border-radius:999px;filter:blur(40px);opacity:.45;mix-blend-mode:multiply;transform:translate3d(0,0,0)}
          .ol-blob--a{left:-120px;top:120px;
            background:radial-gradient(circle at 30% 30%, rgba(255,90,145,.9), rgba(255,200,90,.55), rgba(255,255,255,0));
            animation:olDriftA 12s ease-in-out infinite}
          .ol-blob--b{right:-140px;top:-60px;
            background:radial-gradient(circle at 30% 30%, rgba(90,170,255,.85), rgba(170,120,255,.55), rgba(255,255,255,0));
            animation:olDriftB 14s ease-in-out infinite}
          .ol-blob--c{left:24%;bottom:-220px;
            background:radial-gradient(circle at 30% 30%, rgba(70,220,170,.85), rgba(255,210,120,.55), rgba(255,255,255,0));
            animation:olDriftC 16s ease-in-out infinite}
          .ol-noise{position:absolute;inset:0;opacity:.08;
            background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
            mix-blend-mode:soft-light;pointer-events:none}

          @keyframes olDriftA{0%{transform:translate(-10px,0) scale(1)}50%{transform:translate(26px,-18px) scale(1.04)}100%{transform:translate(-10px,0) scale(1)}}
          @keyframes olDriftB{0%{transform:translate(0,10px) scale(1)}50%{transform:translate(-26px,14px) scale(1.05)}100%{transform:translate(0,10px) scale(1)}}
          @keyframes olDriftC{0%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-20px) scale(1.06)}100%{transform:translate(0,0) scale(1)}}

          .ol-heroSheen{position:absolute;inset:-40%;
            background:radial-gradient(600px 320px at 25% 20%, rgba(255,255,255,.75), transparent 60%);
            transform:rotate(12deg);opacity:.55;pointer-events:none;
            animation:olSheen 9s ease-in-out infinite}
          @keyframes olSheen{0%{transform:translateX(-6%) rotate(12deg);opacity:.45}
            50%{transform:translateX(6%) rotate(12deg);opacity:.7}
            100%{transform:translateX(-6%) rotate(12deg);opacity:.45}}

          .ol-fadeUp{animation:olFadeUp .8s ease both}
          .ol-delay-1{animation-delay:.06s}
          .ol-delay-2{animation-delay:.12s}
          .ol-delay-3{animation-delay:.18s}
          .ol-delay-4{animation-delay:.24s}
          @keyframes olFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

          .ol-float{animation:olFloat 6s ease-in-out infinite}
          @keyframes olFloat{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}

          .ol-chip{display:inline-flex;align-items:center;justify-content:center;padding:10px 14px;border-radius:999px;
            border:1px solid rgba(15,23,42,.12);
            background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(248,250,252,.92));
            color:rgba(11,18,32,.82);font-size:12px;font-weight:700;text-decoration:none;
            box-shadow:0 10px 26px rgba(2,6,23,.06);
            transition:transform .18s ease, filter .18s ease}
          .ol-chip:hover{transform:translateY(-2px);filter:brightness(1.02)}

          .ol-miniCard{border-radius:18px;border:1px solid rgba(15,23,42,.10);background:rgba(248,250,252,.92);padding:14px;
            transition:transform .18s ease, box-shadow .18s ease}
          .ol-miniCard:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(2,6,23,.08)}

          .ol-card{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(15,23,42,.10);
            background:rgba(255,255,255,.9);padding:24px;box-shadow:0 16px 45px rgba(2,6,23,.08);
            transition:transform .18s ease, box-shadow .18s ease, filter .18s ease;text-decoration:none}
          .ol-card::before{content:"";position:absolute;inset:-2px;
            background:linear-gradient(90deg, rgba(255,90,145,.25), rgba(255,200,90,.25), rgba(70,220,170,.25), rgba(90,170,255,.25), rgba(170,120,255,.25));
            opacity:0;transition:opacity .18s ease;pointer-events:none}
          .ol-card:hover{transform:translateY(-3px);box-shadow:0 22px 60px rgba(2,6,23,.12);filter:brightness(1.01)}
          .ol-card:hover::before{opacity:1}
          .ol-cardTop{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;position:relative;z-index:2}

          .ol-slab{box-shadow:0 18px 55px rgba(2,6,23,.09)}
          .ol-topLine{position:absolute;inset-inline:0;top:0;height:4px;
            background:linear-gradient(90deg,#ff4d8d,#ffc857,#3fe3b2,#4db7ff,#a97bff);opacity:.7}

          .ol-feature{border-radius:22px;border:1px solid rgba(15,23,42,.10);background:rgba(248,250,252,.92);padding:18px;
            transition:transform .18s ease, box-shadow .18s ease}
          .ol-feature:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(2,6,23,.08)}
          .ol-featureIcon{width:42px;height:42px;border-radius:16px;border:1px solid rgba(15,23,42,.10);
            box-shadow:0 14px 34px rgba(2,6,23,.08);margin-bottom:10px}
          .ol-i1{background:linear-gradient(180deg, rgba(255,90,145,.22), rgba(255,200,90,.18))}
          .ol-i2{background:linear-gradient(180deg, rgba(90,170,255,.22), rgba(70,220,170,.18))}
          .ol-i3{background:linear-gradient(180deg, rgba(170,120,255,.22), rgba(255,200,220,.18))}

          .ol-step,.ol-faq{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(15,23,42,.10);
            background:rgba(248,250,252,.92);padding:20px;box-shadow:0 16px 45px rgba(2,6,23,.06);
            transition:transform .18s ease, box-shadow .18s ease}
          .ol-step:hover,.ol-faq:hover{transform:translateY(-2px);box-shadow:0 18px 55px rgba(2,6,23,.10)}
          .ol-step--a::before,.ol-faq--a::before,
          .ol-step--b::before,.ol-faq--b::before,
          .ol-step--c::before,.ol-faq--c::before{
            content:"";position:absolute;inset-inline:0;top:0;height:3px;opacity:.75}
          .ol-step--a::before,.ol-faq--a::before{background:linear-gradient(90deg,#4db7ff,#3fe3b2,#a97bff)}
          .ol-step--b::before,.ol-faq--b::before{background:linear-gradient(90deg,#ff4d8d,#ffc857,#3fe3b2)}
          .ol-step--c::before,.ol-faq--c::before{background:linear-gradient(90deg,#a97bff,#4db7ff,#3fe3b2)}

          .ol-promise{box-shadow:0 16px 45px rgba(2,6,23,.10)}

          @media (prefers-reduced-motion:reduce){
            .ol-fadeUp,.ol-float,.ol-blob,.ol-heroSheen{animation:none!important}
          }
        `,
        }}
      />
    </main>
  );
}

