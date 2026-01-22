// src/app/[locale]/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | HeavenSeeds Academy",
  description:
    "Mission, values, and story of HeavenSeeds Academy — an inclusive Mauritius school and international online academy.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function AboutPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    badge: isFr ? "À propos" : "About",
    title: isFr ? "HeavenSeeds Academy" : "HeavenSeeds Academy",
    subtitle: isFr
      ? "École inclusive à Maurice + académie internationale en ligne"
      : "Inclusive Mauritius school + international online academy",

    whoH: isFr ? "Qui sommes-nous ?" : "Who We Are",
    whoP1: isFr
      ? "Heaven’s Seed Online Academy est une communauté d’apprentissage inclusive, dédiée à l’épanouissement des jeunes esprits dans un environnement sûr, bienveillant et inspirant."
      : "Heaven’s Seed Online Academy is an inclusive online learning community dedicated to nurturing young minds in a safe, caring, and inspiring environment.",
    whoP2: isFr
      ? "Nous sommes une équipe d’éducateurs passionnés qui croit que chaque enfant est unique et rempli de potentiel."
      : "We are a team of passionate educators who believe that every child is unique and full of potential.",
    whoP3: isFr
      ? "Notre académie a été créée pour offrir une éducation en ligne de qualité — accessible, flexible et rassurante — y compris pour les enfants ayant des besoins d’apprentissage différents."
      : "Our academy was created to provide quality online education that is accessible, flexible, and supportive for all learners, including children with different learning needs.",
    whoP4: isFr
      ? "Nous favorisons un développement global — académique, émotionnel, social et créatif — afin que chaque enfant grandisse avec confiance et joie."
      : "We focus on holistic development—academic, emotional, social, and creative—so that children grow with confidence and joy.",
    whoP5: isFr
      ? "Nous travaillons main dans la main avec les familles, en valorisant un partenariat fort entre enseignants et parents. Grâce à la compassion, la patience et des méthodes innovantes, chaque enfant progresse à son rythme."
      : "We work hand in hand with families, valuing strong partnerships between teachers and parents. Through compassion, patience, and innovative teaching methods, we help each child blossom at their own pace.",
    whoP6: isFr
      ? "Un lieu où les petits esprits sont soutenus, valorisés et encouragés — en ligne et au-delà. 🌱"
      : "We are a place where little minds are nurtured, valued, and empowered—online and beyond. 🌱",

    pillarsH: isFr ? "Notre approche" : "Our Approach",
    pill1T: isFr ? "Sécurité & confiance" : "Safety & Trust",
    pill1P: isFr
      ? "Un cadre rassurant, clair, et bienveillant — pour les enfants et les parents."
      : "A reassuring, clear, and caring environment—for children and parents.",
    pill2T: isFr ? "Inclusion réelle" : "Real Inclusion",
    pill2P: isFr
      ? "Soutien adapté, progression à son rythme, encouragement constant."
      : "Personalized support, progress at their pace, consistent encouragement.",
    pill3T: isFr ? "Apprentissage structuré" : "Structured Learning",
    pill3P: isFr
      ? "Des objectifs simples, des activités guidées, et des progrès visibles."
      : "Clear goals, guided activities, and visible progress.",
    pill4T: isFr ? "Créativité & joie" : "Creativity & Joy",
    pill4P: isFr
      ? "Apprendre en s’amusant — arts, jeux, expression, curiosité."
      : "Learning through joy—arts, play, expression, and curiosity.",

    missionH: isFr ? "Mission" : "Mission",
    missionP: isFr
      ? "Offrir une éducation premium, accessible et inclusive — en soutenant chaque apprenant vers la confiance, la communication et la réussite."
      : "Deliver premium, accessible, inclusive education—supporting every learner toward confidence, communication, and success.",

    valuesH: isFr ? "Valeurs" : "Values",
    v1: isFr ? "Bienveillance & respect" : "Care & respect",
    v2: isFr ? "Inclusion & accessibilité" : "Inclusion & accessibility",
    v3: isFr ? "Patience & progrès" : "Patience & progress",
    v4: isFr ? "Excellence douce" : "Gentle excellence",

    forFamiliesH: isFr ? "Pour les familles" : "For Families",
    forFamiliesP: isFr
      ? "Une communication simple, un accompagnement rassurant, et des retours clairs pour soutenir votre enfant au quotidien."
      : "Simple communication, reassuring guidance, and clear feedback to support your child day to day.",

    programsH: isFr ? "Deux parcours, une même qualité" : "Two Paths, One Quality Standard",
    programs1T: isFr ? "Maurice (Présentiel)" : "Mauritius (In-person)",
    programs1P: isFr
      ? "Pré-primaire inclusif, encadrement chaleureux, routines structurées, développement global."
      : "Inclusive pre-primary, warm guidance, structured routines, holistic development.",
    programs2T: isFr ? "International (En ligne)" : "International (Online)",
    programs2P: isFr
      ? "Cours flexibles pour les non-anglophones, contenu accessible, soutien étape par étape."
      : "Flexible learning for non-native English speakers, accessible content, step-by-step support.",

    storyH: isFr ? "Pourquoi HeavenSeeds ?" : "Why HeavenSeeds?",
    storyP1: isFr
      ? "Nous avons créé HeavenSeeds pour offrir aux parents une solution éducative fiable : premium, inclusive, et réellement orientée vers le progrès."
      : "We built HeavenSeeds to give families a reliable education option: premium, inclusive, and genuinely progress-focused.",
    storyP2: isFr
      ? "Notre objectif est de rendre l’apprentissage plus humain — avec des méthodes modernes, des supports clairs et une relation forte avec les familles."
      : "Our goal is to make learning more human—using modern methods, clear materials, and strong family partnership.",

    ctaH: isFr ? "Parlons de votre enfant" : "Let’s talk about your child",
    ctaP: isFr
      ? "Posez une question, planifiez une visite, ou demandez un parcours adapté. Nous répondons rapidement."
      : "Ask a question, book a visit, or request a tailored learning path. We respond fast.",
    cta1: isFr ? "Nous contacter" : "Contact Us",
    cta2: isFr ? "Programmes (Maurice)" : "Programs (Mauritius)",
    cta3: isFr ? "Académie en ligne" : "Online Academy",
  };

  return (
    <main className="hsa-container">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border bg-white shadow-sm">
        <div className="hsa-accent-line" />

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {t.badge}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {t.title}
            </h1>

            <p className="mt-3 max-w-xl text-slate-600">{t.subtitle}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta1}
              </Link>
              <Link
                href={`/${locale}/programs-mauritius`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta2}
              </Link>
              <Link
                href={`/${locale}/online-learning`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta3}
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">{t.pill1T}</div>
                <div className="mt-1 text-xs text-slate-600">{t.pill1P}</div>
              </div>
              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">{t.pill2T}</div>
                <div className="mt-1 text-xs text-slate-600">{t.pill2P}</div>
              </div>
              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">{t.pill3T}</div>
                <div className="mt-1 text-xs text-slate-600">{t.pill3P}</div>
              </div>
              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">{t.pill4T}</div>
                <div className="mt-1 text-xs text-slate-600">{t.pill4P}</div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="hsa-rainbow-border rounded-[28px]">
              <div className="relative overflow-hidden rounded-[28px] border bg-slate-50">
                <Image
                  src="/trust-safe-campus.webp"
                  alt={isFr ? "Un environnement sûr et accueillant" : "A safe and welcoming environment"}
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
                  {isFr ? "Retour clair" : "Clear feedback"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Parents toujours informés" : "Parents always informed"}
                </div>
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Progression douce" : "Gentle progress"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "À son rythme" : "At their own pace"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-8 grid gap-4 md:grid-cols-12">
        <div className="hsa-card p-6 md:col-span-7 md:p-8">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div className="w-full">
              <h2 className="text-xl font-semibold text-slate-900">{t.whoH}</h2>

              <div className="mt-3 space-y-3 text-slate-600">
                <p>{t.whoP1}</p>
                <p>{t.whoP2}</p>
                <p>{t.whoP3}</p>
                <p>{t.whoP4}</p>
                <p>{t.whoP5}</p>
                <p className="font-medium text-slate-700">{t.whoP6}</p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="hsa-card p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {isFr ? "Méthodes modernes" : "Modern teaching"}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    {isFr
                      ? "Supports clairs, activités guidées, progrès visibles."
                      : "Clear materials, guided activities, visible progress."}
                  </div>
                </div>
                <div className="hsa-card p-4">
                  <div className="text-sm font-semibold text-slate-900">
                    {isFr ? "Partenariat parents" : "Parent partnership"}
                  </div>
                  <div className="mt-1 text-xs text-slate-600">
                    {isFr
                      ? "Communication simple, retours rapides, confiance."
                      : "Simple communication, fast feedback, trust."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side image + mini highlights */}
        <div className="hsa-card overflow-hidden p-0 md:col-span-5">
          <div className="relative">
            <Image
              src="/trust-teacher-one-to-one.webp"
              alt={isFr ? "Accompagnement personnalisé" : "One-to-one guidance"}
              width={1200}
              height={800}
              className="h-[220px] w-full object-cover md:h-[260px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>

          <div className="p-6">
            <div className="text-sm font-semibold text-slate-900">
              {isFr ? "Ce que vous ressentez chez nous" : "What you’ll feel with us"}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• {isFr ? "Une équipe calme et attentive" : "A calm, attentive team"}</li>
              <li>• {isFr ? "Une structure claire" : "Clear structure"}</li>
              <li>• {isFr ? "Un progrès rassurant" : "Reassuring progress"}</li>
              <li>• {isFr ? "Des enfants valorisés" : "Children who feel valued"}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES / FAMILIES */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{t.missionH}</h3>
              <p className="mt-2 text-slate-600">{t.missionP}</p>
            </div>
          </div>
        </div>

        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{t.valuesH}</h3>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>{t.v1}</li>
                <li>{t.v2}</li>
                <li>{t.v3}</li>
                <li>{t.v4}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{t.forFamiliesH}</h3>
              <p className="mt-2 text-slate-600">{t.forFamiliesP}</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/${locale}/contact`}
                  className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-4 py-2.5"
                >
                  {isFr ? "Demander des infos" : "Request info"}
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="hsa-btn inline-flex items-center justify-center px-4 py-2.5"
                >
                  {isFr ? "Lire le blog" : "Read the blog"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO PATHS */}
      <section className="mt-8">
        <div className="hsa-card overflow-hidden p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{t.programsH}</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                {isFr
                  ? "Que vous choisissiez le présentiel à Maurice ou l’apprentissage en ligne, vous retrouvez la même exigence : un cadre bienveillant, structuré, et orienté vers le progrès."
                  : "Whether you choose in-person learning in Mauritius or online learning, you get the same standard: caring, structured support focused on progress."}
              </p>
            </div>

            <div className="grid w-full gap-3 md:max-w-[520px] md:grid-cols-2">
              <div className="hsa-card p-5">
                <div className="text-sm font-semibold text-slate-900">{t.programs1T}</div>
                <div className="mt-2 text-sm text-slate-600">{t.programs1P}</div>
                <div className="mt-4">
                  <Link
                    href={`/${locale}/programs-mauritius`}
                    className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-4 py-2.5"
                  >
                    {isFr ? "Voir les programmes" : "View programs"}
                  </Link>
                </div>
              </div>

              <div className="hsa-card p-5">
                <div className="text-sm font-semibold text-slate-900">{t.programs2T}</div>
                <div className="mt-2 text-sm text-slate-600">{t.programs2P}</div>
                <div className="mt-4">
                  <Link
                    href={`/${locale}/online-learning`}
                    className="hsa-btn inline-flex items-center justify-center px-4 py-2.5"
                  >
                    {isFr ? "Découvrir" : "Explore"}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Holistique" : "Holistic"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {isFr
                  ? "Académique + émotionnel + social + créativité."
                  : "Academic + emotional + social + creativity."}
              </div>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Adapté" : "Adapted"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {isFr
                  ? "Approches flexibles pour différents besoins."
                  : "Flexible approaches for different needs."}
              </div>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Suivi" : "Follow-up"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                {isFr
                  ? "Objectifs simples et retours clairs."
                  : "Simple goals and clear feedback."}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY + CTA */}
      <section className="mt-10">
        <div className="hsa-card overflow-hidden p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="text-xl font-semibold text-slate-900">{t.storyH}</h2>
              <p className="mt-2 text-slate-600">{t.storyP1}</p>
              <p className="mt-3 text-slate-600">{t.storyP2}</p>

              <div className="mt-6 rounded-2xl border bg-slate-50 p-5">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Notre promesse" : "Our promise"}
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  {isFr
                    ? "Un accompagnement premium, une communication simple, et un environnement où chaque enfant se sent en sécurité pour grandir."
                    : "Premium guidance, simple communication, and an environment where every child feels safe to grow."}
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="hsa-rainbow-border rounded-[24px]">
                <div className="overflow-hidden rounded-[24px] border bg-slate-50">
                  <Image
                    src="/trust-safe-campus.webp"
                    alt={isFr ? "HeavenSeeds Academy" : "HeavenSeeds Academy"}
                    width={1200}
                    height={800}
                    className="h-[240px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{t.ctaH}</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">{t.ctaP}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/contact`}
                className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta1}
              </Link>
              <Link
                href={`/${locale}/programs-mauritius`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta2}
              </Link>
              <Link
                href={`/${locale}/online-learning`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
              >
                {t.cta3}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[18px]" />
    </main>
  );
}

