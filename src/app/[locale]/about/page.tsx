import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | HeavenSeeds Academy",
  description:
    "Mission, values, objectives, and founders of HeavenSeeds Academy — an inclusive Mauritius pre-primary school and online learning platform.",
};

export default async function AboutPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Premium header */}
      <section className="relative overflow-hidden rounded-[28px] border bg-white shadow-sm">
        <div className="hsa-accent-line" />

        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {isFr ? "À propos • Notre mission" : "About • Our mission"}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {isFr ? "HeavenSeeds Academy" : "HeavenSeeds Academy"}
            </h1>

            <p className="mt-3 max-w-xl text-slate-600">
              {isFr
                ? "Une marque éducative à double marché : une école pré-primaire inclusive à Maurice et une plateforme d’apprentissage en ligne pour les non-anglophones."
                : "A dual-market education brand: an inclusive pre-primary school in Mauritius and an online learning platform for non-native English speakers."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/${locale}/programs-mauritius`}
                className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3"
                aria-label={
                  isFr ? "Voir les programmes à Maurice" : "View Mauritius programs"
                }
              >
                {isFr ? "Programmes (Maurice)" : "Programs (Mauritius)"}
              </a>

              <a
                href={`/${locale}/online-learning`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
                aria-label={isFr ? "Voir l'apprentissage en ligne" : "View online learning"}
              >
                {isFr ? "Apprentissage en ligne" : "Online Learning"}
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Confiance" : "Trust"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Clarté, sécurité, transparence" : "Clarity, safety, transparency"}
                </div>
              </div>

              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Inclusion" : "Inclusion"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Soutien & accessibilité" : "Support & accessibility"}
                </div>
              </div>

              <div className="hsa-card p-4">
                <div className="text-sm font-semibold text-slate-900">
                  {isFr ? "Excellence" : "Excellence"}
                </div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Progrès mesurable" : "Measurable progress"}
                </div>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative">
            <div className="hsa-rainbow-border rounded-[28px]">
              <div className="relative overflow-hidden rounded-[28px] border bg-slate-50">
                <Image
                  src="/trust-safe-campus.webp"
                  alt={isFr ? "Campus sûr et accueillant" : "Safe and welcoming campus"}
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
                  {isFr ? "Approche parent-friendly" : "Parent-friendly"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Infos rapides, rassurantes" : "Fast, reassuring information"}
                </div>
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Apprentissage" : "Learning"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "En classe + en ligne" : "In-class + online"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Values / Objectives */}
      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {isFr ? "Mission" : "Mission"}
              </h2>
              <p className="mt-2 text-slate-600">
                {isFr
                  ? "Offrir une éducation chaleureuse, sûre et inclusive — en soutenant chaque enfant et chaque apprenant vers la confiance et la réussite."
                  : "Deliver warm, safe, inclusive education—supporting every child and learner toward confidence and success."}
              </p>
            </div>
          </div>
        </div>

        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {isFr ? "Valeurs" : "Values"}
              </h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>{isFr ? "Bienveillance & respect" : "Care & respect"}</li>
                <li>{isFr ? "Inclusion & accessibilité" : "Inclusion & accessibility"}</li>
                <li>{isFr ? "Sécurité & confiance" : "Safety & trust"}</li>
                <li>{isFr ? "Progression & excellence" : "Growth & excellence"}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hsa-card p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                {isFr ? "Objectifs" : "Objectives"}
              </h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>{isFr ? "Développement de la petite enfance" : "Early childhood development"}</li>
                <li>{isFr ? "Intervention précoce & soutien" : "Early intervention & support"}</li>
                <li>{isFr ? "Apprentissage flexible en ligne" : "Flexible online learning"}</li>
                <li>{isFr ? "Partenariat fort avec les parents" : "Strong parent partnership"}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Founders block (premium, ready to replace with Sanity later) */}
        <div className="hsa-card overflow-hidden p-6">
          <div className="flex items-start gap-4">
            <div className="hsa-rainbow-dot mt-1" aria-hidden="true" />
            <div className="w-full">
              <h2 className="text-lg font-semibold text-slate-900">
                {isFr ? "Fondateurs" : "Founders"}
              </h2>

              <p className="mt-2 text-slate-600">
                {isFr
                  ? "Ajoutez ici la présentation des fondateurs (bio courte + photo). Cette section pourra ensuite être gérée via Sanity."
                  : "Add founders’ introduction here (short bio + photo). This section can later be managed via Sanity."}
              </p>

              <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
                <Image
                  src="/trust-teacher-one-to-one.webp"
                  alt={isFr ? "Accompagnement personnalisé" : "One-to-one guidance"}
                  width={1200}
                  height={600}
                  className="h-[180px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <div className="hsa-card overflow-hidden p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {isFr ? "Parlons de votre enfant ou de vos objectifs" : "Let’s talk about your child or your goals"}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                {isFr
                  ? "Réservez une visite à Maurice ou posez une question sur les cours en ligne. Nous vous répondrons rapidement."
                  : "Book a tour in Mauritius or ask about online courses. We’ll respond quickly."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`/${locale}/contact`}
                className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3"
              >
                {isFr ? "Nous contacter" : "Contact Us"}
              </a>
              <a
                href={`/${locale}/blog`}
                className="hsa-btn inline-flex items-center justify-center px-5 py-3"
              >
                {isFr ? "Lire le blog" : "Read the blog"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
