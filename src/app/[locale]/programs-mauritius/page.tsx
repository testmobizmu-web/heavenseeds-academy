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

  const t = {
    badge: isFr ? "Maurice • Pré-primaire" : "Mauritius • Pre-Primary",
    title: isFr
      ? "Programme Pré-Primaire à Maurice"
      : "Pre-Primary Program in Mauritius",
    subtitle: isFr
      ? "Un environnement sûr, inclusif et bienveillant pour le développement de chaque enfant."
      : "A safe, inclusive, and nurturing environment for every child’s development.",
    ctaVisit: isFr ? "Réserver une visite" : "Book a tour",

    aTitle: isFr ? "A. Sécurité & Confiance" : "A. Safety & Trust",
    aDesc: isFr
      ? "Un campus sécurisé, une équipe attentive, et une approche centrée sur le bien-être."
      : "A secure campus, caring staff, and a child-first wellbeing approach.",

    bTitle: isFr ? "B. Apprentissage & Inclusion" : "B. Learning & Inclusion",
    bDesc: isFr
      ? "Développement global, intervention précoce et respect du rythme de chaque enfant."
      : "Holistic development, early intervention, and respect for each child’s pace.",

    cTitle: isFr ? "C. Visite & Inscription" : "C. Visit & Enrollment",
    cDesc: isFr
      ? "Rencontrez notre équipe, visitez l’école et posez toutes vos questions."
      : "Meet our team, tour the school, and get all your questions answered.",

    trust1: isFr ? "Campus sécurisé" : "Secure campus",
    trust2: isFr ? "Approche parent-friendly" : "Parent-friendly approach",
    trust3: isFr ? "Personnel qualifié" : "Qualified educators",

    learn1: isFr ? "Développement cognitif & social" : "Cognitive & social development",
    learn2: isFr ? "Intervention précoce spécialisée" : "Specialized early intervention",
    learn3: isFr ? "Apprentissage par le jeu" : "Play-based learning",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO */}
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

            <div className="mt-6">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {t.ctaVisit}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[t.trust1, t.trust2, t.trust3].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border bg-slate-50 p-4 text-sm font-semibold text-slate-900"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-[28px] p-[2px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500">
              <div className="relative overflow-hidden rounded-[26px] border bg-slate-50">
                <Image
                  src="/mauritius-preprimary-play.webp"
                  alt="Pre-primary activities in Mauritius"
                  width={1200}
                  height={900}
                  priority
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A. SAFETY */}
      <section className="mt-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{t.aTitle}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t.aDesc}</p>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/trust-safe-campus.webp"
              alt="Safe school campus Mauritius"
              width={1200}
              height={600}
              className="h-[240px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* B. LEARNING */}
      <section className="mt-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">{t.bTitle}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t.bDesc}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>{t.learn1}</li>
              <li>{t.learn2}</li>
              <li>{t.learn3}</li>
            </ul>

            <div className="overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/special-needs-early-intervention.webp"
                alt="Early intervention and inclusive education"
                width={1200}
                height={600}
                className="h-[220px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* C. VISIT */}
      <section className="mt-6">
        <div className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
          <h2 className="text-xl font-semibold text-slate-900">{t.cTitle}</h2>
          <p className="mt-2 max-w-3xl text-slate-600">{t.cDesc}</p>

          <div className="mt-6">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              {t.ctaVisit}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

