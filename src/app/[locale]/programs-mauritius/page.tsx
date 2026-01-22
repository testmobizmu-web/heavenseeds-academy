// src/app/[locale]/programs-mauritius/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-Primary Program Mauritius | HeavenSeeds Academy",
  description:
    "Inclusive pre-primary education in Mauritius. Safe campus, early intervention, and warm learning environment.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function ProgramsMauritiusPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  // WhatsApp CTA (same style as other pages)
  const waText = isFr
    ? "Bonjour 👋 Je souhaite réserver une visite pour le programme pré-primaire à Maurice."
    : "Hello 👋 I’d like to book a tour for the pre-primary program in Mauritius.";
  const waHref = `https://wa.me/23058204613?text=${encodeURIComponent(waText)}`;

  const t = {
    badge: isFr ? "Maurice • Pré-primaire" : "Mauritius • Pre-Primary",
    title: isFr
      ? "Programme Pré-Primaire à Maurice"
      : "Pre-Primary Program in Mauritius",
    subtitle: isFr
      ? "Un environnement premium, sûr et inclusif — pour aider chaque enfant à grandir avec confiance, joie et stabilité."
      : "A premium, safe, and inclusive environment — helping every child grow with confidence, joy, and stability.",

    ctaVisit: isFr ? "Réserver une visite" : "Book a tour",
    ctaWhatsApp: isFr ? "WhatsApp (réponse rapide)" : "WhatsApp (fast reply)",
    ctaExplore: isFr ? "Voir l’école" : "Explore the campus",

    trust1: isFr ? "Campus sécurisé" : "Secure campus",
    trust2: isFr ? "Approche parent-friendly" : "Parent-friendly approach",
    trust3: isFr ? "Éducateurs qualifiés" : "Qualified educators",
    trust4: isFr ? "Inclusion & soutien" : "Inclusion & support",

    // Sections
    s1Title: isFr ? "Sécurité & Confiance" : "Safety & Trust",
    s1Desc: isFr
      ? "Nous priorisons la sécurité, la routine et la confiance. Les parents reçoivent des informations claires, et les enfants évoluent dans un cadre rassurant."
      : "We prioritize safety, routine, and trust. Parents get clear communication, and children thrive in a reassuring environment.",

    s2Title: isFr ? "Apprentissage & Inclusion" : "Learning & Inclusion",
    s2Desc: isFr
      ? "Développement global : cognitif, émotionnel, social et créatif. Nous respectons le rythme de chaque enfant et soutenons les besoins spécifiques."
      : "Holistic growth: cognitive, emotional, social, and creative. We respect each child’s pace and support individual learning needs.",

    s3Title: isFr ? "Programme & Journée Type" : "Program & A Typical Day",
    s3Desc: isFr
      ? "Une structure simple et cohérente — activités courtes, transitions douces et apprentissage par le jeu pour renforcer l’autonomie."
      : "A simple, consistent structure — short activities, gentle transitions, and play-based learning to build independence.",

    s4Title: isFr ? "Visite & Inscription" : "Visit & Enrollment",
    s4Desc: isFr
      ? "Rencontrez notre équipe, visitez l’école et posez vos questions. Nous vous guidons étape par étape."
      : "Meet our team, tour the school, and ask anything. We’ll guide you step-by-step.",

    bulletsSafety: isFr
      ? [
          "Entrée contrôlée & environnement surveillé",
          "Routine claire : accueil, activités, collation, jeu, calme",
          "Communication parent-friendly (WhatsApp + rendez-vous)",
          "Culture de bienveillance & respect",
        ]
      : [
          "Controlled entry & supervised environment",
          "Clear routine: welcome, activities, snack, play, calm time",
          "Parent-friendly communication (WhatsApp + appointments)",
          "Culture of care & respect",
        ],

    bulletsLearn: isFr
      ? [
          "Apprentissage par le jeu (langage, logique, motricité)",
          "Développement socio-émotionnel (confiance, coopération)",
          "Intervention précoce et accompagnement inclusif",
          "Activités créatives (arts, musique, expression)",
        ]
      : [
          "Play-based learning (language, logic, motor skills)",
          "Social-emotional growth (confidence, cooperation)",
          "Early intervention and inclusive guidance",
          "Creative activities (arts, music, expression)",
        ],

    dayTitle: isFr ? "Journée type (exemple)" : "Typical day (example)",
    day: isFr
      ? [
          { k: "08:30", v: "Accueil & routine douce" },
          { k: "09:00", v: "Apprentissage guidé (langage, pré-lecture, math)" },
          { k: "10:00", v: "Pause & collation" },
          { k: "10:30", v: "Activités créatives / sensoriel" },
          { k: "11:15", v: "Jeu extérieur & motricité" },
          { k: "12:00", v: "Calme / histoires / bilan" },
        ]
      : [
          { k: "08:30", v: "Warm welcome & gentle routine" },
          { k: "09:00", v: "Guided learning (language, pre-reading, math)" },
          { k: "10:00", v: "Break & snack" },
          { k: "10:30", v: "Creative / sensory activities" },
          { k: "11:15", v: "Outdoor play & motor skills" },
          { k: "12:00", v: "Calm time / stories / wrap-up" },
        ],

    faqTitle: isFr ? "Questions fréquentes" : "FAQ",
    faq: isFr
      ? [
          {
            q: "Est-ce un programme inclusif ?",
            a: "Oui. Nous accueillons des profils variés et adaptons le soutien selon les besoins, avec une approche bienveillante et structurée.",
          },
          {
            q: "Puis-je visiter avant d’inscrire ?",
            a: "Bien sûr. Réservez une visite et nous vous présenterons l’environnement, l’équipe et la routine.",
          },
          {
            q: "Comment demander conseil rapidement ?",
            a: "WhatsApp est le plus rapide. Vous pouvez aussi utiliser le formulaire de contact.",
          },
        ]
      : [
          {
            q: "Is this an inclusive program?",
            a: "Yes. We welcome diverse learners and adapt support based on needs, with a caring, structured approach.",
          },
          {
            q: "Can I visit before enrolling?",
            a: "Absolutely. Book a tour and we’ll show you the campus, team, and routine.",
          },
          {
            q: "What’s the fastest way to ask questions?",
            a: "WhatsApp is the fastest. You can also use the contact form.",
          },
        ],

    stripTitle: isFr ? "Une école qui rassure" : "A school you can trust",
    stripDesc: isFr
      ? "Sécurité • Inclusion • Progression • Joie d’apprendre"
      : "Safety • Inclusion • Progress • Joy of learning",
  };

  return (
    <main className="pm-wrap">
      {/* Premium colourful background */}
      <div className="pm-bg" aria-hidden="true">
        <div className="pm-blob pm-blob--a" />
        <div className="pm-blob pm-blob--b" />
        <div className="pm-blob pm-blob--c" />
        <div className="pm-noise" />
      </div>

      <div className="hsa-container pm-inner">
        {/* HERO */}
        <section className="pm-hero relative overflow-hidden rounded-[28px] border bg-white/88 shadow-sm backdrop-blur">
          <div className="hsa-accent-line" />
          <div className="pm-sheen" aria-hidden="true" />

          <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
            {/* Copy */}
            <div className="flex flex-col justify-center">
              <p className="pm-fadeUp text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.badge}
              </p>

              <h1 className="pm-fadeUp pm-delay-1 mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {t.title}
              </h1>

              <p className="pm-fadeUp pm-delay-2 mt-3 max-w-xl text-slate-600">
                {t.subtitle}
              </p>

              <div className="pm-fadeUp pm-delay-3 mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`/${locale}/contact`}
                  className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3"
                >
                  {t.ctaVisit}
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hsa-btn inline-flex items-center justify-center px-6 py-3"
                >
                  {t.ctaWhatsApp}
                </a>
              </div>

              {/* Trust badges */}
              <div className="pm-fadeUp pm-delay-4 mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[t.trust1, t.trust2, t.trust3, t.trust4].map((item) => (
                  <div key={item} className="pm-pill">
                    <span className="pm-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mini strip */}
              <div className="pm-fadeUp pm-delay-4 mt-6 rounded-3xl border bg-white/90 p-5 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {t.stripTitle}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{t.stripDesc}</div>
                <div className="mt-3 h-[2px] w-full bg-slate-100">
                  <div className="h-[2px] w-1/2 bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 to-violet-500 opacity-70" />
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative pm-fadeUp pm-delay-2">
              <div className="hsa-rainbow-border rounded-[28px] pm-float">
                <div className="relative overflow-hidden rounded-[28px] border bg-slate-50">
                  <Image
                    src="/mauritius-preprimary-play.webp"
                    alt={isFr ? "Activités pré-primaire à Maurice" : "Pre-primary activities in Mauritius"}
                    width={1200}
                    height={900}
                    priority
                    className="h-[320px] w-full object-cover md:h-[420px]"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-4 left-4 right-4">
                <div className="rounded-2xl border bg-white/92 p-4 shadow-sm backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {isFr ? "Visite guidée" : "Guided tour"}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {isFr ? "Découvrez l’école, la routine & l’équipe." : "See the campus, routine & team."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A. Safety & Trust */}
        <section className="mt-10 pm-fadeUp">
          <div className="pm-slab relative overflow-hidden rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="pm-topLine" aria-hidden="true" />
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{t.s1Title}</h2>
                <p className="mt-2 max-w-2xl text-slate-600">{t.s1Desc}</p>

                <ul className="mt-5 space-y-2 text-slate-700">
                  {t.bulletsSafety.map((b) => (
                    <li key={b} className="pm-bullet">
                      <span className="pm-check" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/${locale}/contact`}
                    className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3"
                  >
                    {t.ctaVisit}
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="hsa-btn inline-flex items-center justify-center px-6 py-3"
                  >
                    {t.ctaWhatsApp}
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/trust-safe-campus.webp"
                  alt={isFr ? "Campus sécurisé à Maurice" : "Safe school campus in Mauritius"}
                  width={1200}
                  height={700}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* B. Learning & Inclusion */}
        <section className="mt-6 pm-fadeUp">
          <div className="pm-slab relative overflow-hidden rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="pm-topLine pm-topLine--alt" aria-hidden="true" />
            <div className="grid gap-6 md:grid-cols-2 md:items-start">
              <div className="order-2 md:order-1 overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/special-needs-early-intervention.webp"
                  alt={isFr ? "Inclusion et intervention précoce" : "Inclusive early intervention"}
                  width={1200}
                  height={700}
                  className="h-[260px] w-full object-cover md:h-[320px]"
                />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-xl font-semibold text-slate-900">{t.s2Title}</h2>
                <p className="mt-2 max-w-2xl text-slate-600">{t.s2Desc}</p>

                <ul className="mt-5 space-y-2 text-slate-700">
                  {t.bulletsLearn.map((b) => (
                    <li key={b} className="pm-bullet">
                      <span className="pm-check pm-check--violet" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border bg-white/90 p-5 shadow-sm backdrop-blur">
                  <div className="text-sm font-semibold text-slate-900">
                    {isFr ? "Notre promesse" : "Our promise"}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {isFr
                      ? "Une progression visible, une communication claire avec les parents, et un environnement où l’enfant se sent valorisé chaque jour."
                      : "Visible progress, clear parent communication, and an environment where your child feels valued every day."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C. Program & Typical Day */}
        <section className="mt-6 pm-fadeUp">
          <div className="pm-slab relative overflow-hidden rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="pm-topLine pm-topLine--gold" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-slate-900">{t.s3Title}</h2>
              <p className="max-w-3xl text-slate-600">{t.s3Desc}</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="pm-dayCard">
                <div className="text-sm font-semibold text-slate-900">{t.dayTitle}</div>

                <div className="mt-4 grid gap-2">
                  {t.day.map((row) => (
                    <div key={row.k} className="pm-dayRow">
                      <span className="pm-time">{row.k}</span>
                      <span className="pm-act">{row.v}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 h-[2px] w-full bg-slate-100">
                  <div className="h-[2px] w-2/3 bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-70" />
                </div>

                <div className="mt-4 text-xs text-slate-600">
                  {isFr
                    ? "La journée peut varier selon l’âge, le niveau et les besoins."
                    : "The schedule may vary by age, level, and needs."}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/trust-teacher-one-to-one.webp"
                  alt={isFr ? "Accompagnement personnalisé" : "One-to-one guidance"}
                  width={1200}
                  height={700}
                  className="h-[260px] w-full object-cover md:h-[340px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* D. Visit & Enrollment */}
        <section className="mt-6 pm-fadeUp">
          <div className="pm-cta relative overflow-hidden rounded-3xl border bg-white/90 p-8 shadow-sm backdrop-blur">
            <div className="pm-topLine pm-topLine--cta" aria-hidden="true" />
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{t.s4Title}</h2>
                <p className="mt-2 max-w-2xl text-slate-600">{t.s4Desc}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`/${locale}/contact`}
                    className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-6 py-3"
                  >
                    {t.ctaVisit}
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="hsa-btn inline-flex items-center justify-center px-6 py-3"
                  >
                    {t.ctaWhatsApp}
                  </a>
                </div>
              </div>

              <div className="pm-note">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {isFr ? "Conseil rapide" : "Quick guidance"}
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  {isFr
                    ? "Dites-nous l’âge de votre enfant et vos objectifs — nous vous guiderons."
                    : "Tell us your child’s age and your goals — we’ll guide you."}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="pm-mini">
                    <div className="text-xs font-semibold text-slate-900">
                      {isFr ? "Réponse" : "Reply"}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      {isFr ? "WhatsApp rapide" : "Fast on WhatsApp"}
                    </div>
                  </div>
                  <div className="pm-mini">
                    <div className="text-xs font-semibold text-slate-900">
                      {isFr ? "Visite" : "Tour"}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      {isFr ? "Sur rendez-vous" : "By appointment"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10 pm-fadeUp" aria-labelledby="faq">
          <div className="pm-slab rounded-3xl border bg-white/88 p-8 shadow-sm backdrop-blur">
            <div className="flex items-end justify-between gap-4">
              <h2 id="faq" className="text-xl font-semibold text-slate-900">
                {t.faqTitle}
              </h2>
              <a className="text-sm text-slate-700 hover:underline" href={`/${locale}/contact`}>
                {isFr ? "Nous contacter" : "Contact us"}
              </a>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {t.faq.map((item) => (
                <div key={item.q} className="pm-faq">
                  <div className="pm-faqTop" aria-hidden="true" />
                  <div className="text-sm font-semibold text-slate-900">{item.q}</div>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-[18px]" />
      </div>

      {/* ✅ No styled-jsx: plain <style> */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .pm-wrap{position:relative;overflow:hidden;padding:40px 0 10px;min-height:100%}
          .pm-inner{position:relative;z-index:2}

          .pm-bg{position:absolute;inset:0;z-index:0;
            background:
              radial-gradient(1200px 600px at 12% 10%, rgba(255,200,220,.55), transparent 60%),
              radial-gradient(1200px 600px at 90% 0%, rgba(190,240,255,.55), transparent 58%),
              radial-gradient(1200px 600px at 14% 105%, rgba(210,255,230,.55), transparent 60%),
              radial-gradient(900px 520px at 85% 90%, rgba(230,220,255,.55), transparent 60%),
              linear-gradient(90deg, rgba(255,190,120,.22), rgba(255,200,220,.22), rgba(210,210,255,.22), rgba(190,240,255,.22), rgba(200,255,220,.22)),
              #fff;
            filter:saturate(1.08);
          }
          .pm-blob{position:absolute;width:560px;height:560px;border-radius:999px;filter:blur(40px);opacity:.45;mix-blend-mode:multiply;transform:translate3d(0,0,0)}
          .pm-blob--a{left:-120px;top:120px;
            background:radial-gradient(circle at 30% 30%, rgba(255,90,145,.9), rgba(255,200,90,.55), rgba(255,255,255,0));
            animation:pmDriftA 12s ease-in-out infinite}
          .pm-blob--b{right:-140px;top:-60px;
            background:radial-gradient(circle at 30% 30%, rgba(90,170,255,.85), rgba(170,120,255,.55), rgba(255,255,255,0));
            animation:pmDriftB 14s ease-in-out infinite}
          .pm-blob--c{left:24%;bottom:-220px;
            background:radial-gradient(circle at 30% 30%, rgba(70,220,170,.85), rgba(255,210,120,.55), rgba(255,255,255,0));
            animation:pmDriftC 16s ease-in-out infinite}
          .pm-noise{position:absolute;inset:0;opacity:.08;
            background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='260' height='260' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
            mix-blend-mode:soft-light;pointer-events:none}

          @keyframes pmDriftA{0%{transform:translate(-10px,0) scale(1)}50%{transform:translate(26px,-18px) scale(1.04)}100%{transform:translate(-10px,0) scale(1)}}
          @keyframes pmDriftB{0%{transform:translate(0,10px) scale(1)}50%{transform:translate(-26px,14px) scale(1.05)}100%{transform:translate(0,10px) scale(1)}}
          @keyframes pmDriftC{0%{transform:translate(0,0) scale(1)}50%{transform:translate(18px,-20px) scale(1.06)}100%{transform:translate(0,0) scale(1)}}

          .pm-sheen{position:absolute;inset:-40%;
            background:radial-gradient(700px 360px at 25% 20%, rgba(255,255,255,.78), transparent 60%);
            transform:rotate(12deg);opacity:.55;pointer-events:none;
            animation:pmSheen 9s ease-in-out infinite}
          @keyframes pmSheen{0%{transform:translateX(-6%) rotate(12deg);opacity:.45}
            50%{transform:translateX(6%) rotate(12deg);opacity:.72}
            100%{transform:translateX(-6%) rotate(12deg);opacity:.45}}

          .pm-fadeUp{animation:pmFadeUp .8s ease both}
          .pm-delay-1{animation-delay:.06s}
          .pm-delay-2{animation-delay:.12s}
          .pm-delay-3{animation-delay:.18s}
          .pm-delay-4{animation-delay:.24s}
          @keyframes pmFadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

          .pm-float{animation:pmFloat 6s ease-in-out infinite}
          @keyframes pmFloat{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}

          .pm-pill{display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:18px;
            border:1px solid rgba(15,23,42,.12);
            background:linear-gradient(180deg, rgba(255,255,255,.92), rgba(248,250,252,.92));
            color:rgba(11,18,32,.86);font-size:13px;font-weight:800;
            box-shadow:0 10px 26px rgba(2,6,23,.06)}
          .pm-dot{width:10px;height:10px;border-radius:999px;
            background:linear-gradient(90deg,#ff4d8d,#ffc857,#3fe3b2,#4db7ff,#a97bff);
            box-shadow:0 0 0 6px rgba(255,77,141,.12)}
          .pm-slab{box-shadow:0 18px 55px rgba(2,6,23,.09)}
          .pm-topLine{position:absolute;inset-inline:0;top:0;height:4px;
            background:linear-gradient(90deg,#ff4d8d,#ffc857,#3fe3b2,#4db7ff,#a97bff);opacity:.75}
          .pm-topLine--alt{background:linear-gradient(90deg,#4db7ff,#3fe3b2,#a97bff,#ff4d8d)}
          .pm-topLine--gold{background:linear-gradient(90deg,#ffc857,#ff4d8d,#3fe3b2)}
          .pm-topLine--cta{background:linear-gradient(90deg,#a97bff,#4db7ff,#3fe3b2,#ffc857)}

          .pm-bullet{display:flex;align-items:flex-start;gap:10px}
          .pm-check{width:18px;height:18px;border-radius:8px;flex:0 0 auto;margin-top:2px;
            background:linear-gradient(180deg, rgba(255,77,141,.20), rgba(255,200,87,.16));
            border:1px solid rgba(15,23,42,.10);
            box-shadow:0 10px 26px rgba(2,6,23,.06);
            position:relative}
          .pm-check::after{content:"";position:absolute;left:5px;top:4px;width:7px;height:4px;
            border-left:2px solid rgba(11,18,32,.75);border-bottom:2px solid rgba(11,18,32,.75);
            transform:rotate(-45deg)}
          .pm-check--violet{background:linear-gradient(180deg, rgba(169,123,255,.22), rgba(77,183,255,.18))}

          .pm-dayCard{border-radius:24px;border:1px solid rgba(15,23,42,.10);background:rgba(255,255,255,.90);
            box-shadow:0 16px 45px rgba(2,6,23,.08);padding:18px}
          .pm-dayRow{display:flex;align-items:center;justify-content:space-between;gap:12px;
            padding:10px 12px;border-radius:16px;border:1px solid rgba(15,23,42,.08);
            background:rgba(248,250,252,.92)}
          .pm-time{font-size:12px;font-weight:900;letter-spacing:.08em;color:rgba(11,18,32,.70)}
          .pm-act{font-size:13px;font-weight:700;color:rgba(11,18,32,.88)}

          .pm-cta{box-shadow:0 18px 55px rgba(2,6,23,.10)}
          .pm-note{border-radius:24px;border:1px solid rgba(15,23,42,.10);
            background:rgba(248,250,252,.92);padding:18px;box-shadow:0 16px 45px rgba(2,6,23,.08)}
          .pm-mini{border-radius:18px;border:1px solid rgba(15,23,42,.10);background:rgba(255,255,255,.92);padding:12px}

          .pm-faq{position:relative;overflow:hidden;border-radius:24px;border:1px solid rgba(15,23,42,.10);
            background:rgba(248,250,252,.92);padding:18px;box-shadow:0 16px 45px rgba(2,6,23,.06);
            transition:transform .18s ease, box-shadow .18s ease}
          .pm-faq:hover{transform:translateY(-2px);box-shadow:0 18px 55px rgba(2,6,23,.10)}
          .pm-faqTop{position:absolute;inset-inline:0;top:0;height:3px;
            background:linear-gradient(90deg,#ff4d8d,#ffc857,#3fe3b2,#4db7ff,#a97bff);opacity:.75}

          @media (prefers-reduced-motion:reduce){
            .pm-fadeUp,.pm-float,.pm-blob,.pm-sheen{animation:none!important}
          }
        `,
        }}
      />
    </main>
  );
}

