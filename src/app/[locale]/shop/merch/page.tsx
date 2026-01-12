import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch | HeavenSeeds Academy",
  description:
    "Premium HeavenSeeds Academy merch: learning kits, books, apparel and gifts. Mobile-first, fast and SEO-optimized.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function ShopMerchPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    badge: isFr ? "Boutique • Merch" : "Shop • Merch",
    title: "Merch",
    subtitle: isFr
      ? "Kits d’apprentissage, livres, t-shirts et cadeaux — sélection premium (bientôt disponible)."
      : "Learning kits, books, t-shirts and gifts — premium selection (coming soon).",
    ctaShopCourses: isFr ? "Voir les cours" : "View courses",
    ctaContact: isFr ? "Demander un devis" : "Request a quote",
    coming: isFr ? "Bientôt disponible" : "Coming soon",
    note: isFr
      ? "Vous voulez un kit personnalisé ? Contactez-nous sur WhatsApp."
      : "Need a custom kit? Message us on WhatsApp.",
    whats: isFr ? "WhatsApp (réponse rapide)" : "WhatsApp (fast reply)",
    sectionsTitle: isFr ? "À venir dans la boutique" : "What’s coming to the shop",
    s1: isFr ? "Kits préscolaires" : "Pre-primary kits",
    s1d: isFr ? "Activités motricité, alphabet, couleurs, formes." : "Fine-motor, alphabet, colors, shapes.",
    s2: isFr ? "Livres & cahiers" : "Books & workbooks",
    s2d: isFr ? "Lecture, phonétique, vocabulaire, exercices." : "Reading, phonics, vocabulary, practice.",
    s3: isFr ? "Merch famille" : "Family merch",
    s3d: isFr ? "T-shirts, tote bags, goodies premium." : "T-shirts, tote bags, premium goodies.",
    s4: isFr ? "Cadeaux éducatifs" : "Educational gifts",
    s4d: isFr ? "Coffrets et packs anniversaire." : "Gift boxes and birthday packs.",
    faqTitle: isFr ? "Infos pratiques" : "Quick info",
    faq1: isFr ? "Paiement" : "Payment",
    faq1d: isFr ? "PayPal (international) + options locales à activer." : "PayPal (international) + local options to enable.",
    faq2: isFr ? "Livraison" : "Delivery",
    faq2d: isFr ? "Maurice : livraison locale • International : sur demande." : "Mauritius: local delivery • International: on request.",
    faq3: isFr ? "Personnalisation" : "Customization",
    faq3d: isFr ? "Nom de l’enfant, niveau, objectif — packs sur mesure." : "Child name, level, goals — custom packs.",
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

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                href={`/${locale}/shop/courses`}
                aria-label={isFr ? "Voir les cours" : "View courses"}
              >
                {t.ctaShopCourses}
              </a>

              <a
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                href={`/${locale}/contact`}
                aria-label={isFr ? "Contact" : "Contact"}
              >
                {t.ctaContact}
              </a>
            </div>

            <div className="mt-6 rounded-3xl border bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{t.coming}</div>
              <p className="mt-1 text-sm text-slate-600">{t.note}</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  {t.whats}
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
                  src="/gallery-01.webp"
                  alt={isFr ? "Activités éducatives" : "Educational activities"}
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
                  {isFr ? "Kits premium" : "Premium kits"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Conçus pour progresser" : "Designed for progress"}
                </div>
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Cadeaux" : "Gifts"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Packs sur mesure" : "Custom bundles"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="mt-10" aria-labelledby="coming-merch">
        <div className="flex items-end justify-between gap-4">
          <h2 id="coming-merch" className="text-xl font-semibold text-slate-900">
            {t.sectionsTitle}
          </h2>
          <a className="text-sm text-slate-600 hover:underline" href={`/${locale}/contact`}>
            {isFr ? "Parler à l’équipe" : "Talk to the team"}
          </a>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-70" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-900">{t.s1}</div>
                <p className="mt-2 text-sm text-slate-600">{t.s1d}</p>
              </div>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                {t.coming}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/gallery-02.webp"
                alt={t.s1}
                width={1200}
                height={700}
                className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 opacity-70" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-900">{t.s2}</div>
                <p className="mt-2 text-sm text-slate-600">{t.s2d}</p>
              </div>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                {t.coming}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/blog-education-tips.webp"
                alt={t.s2}
                width={1200}
                height={700}
                className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-900">{t.s3}</div>
                <p className="mt-2 text-sm text-slate-600">{t.s3d}</p>
              </div>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                {t.coming}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/trust-teacher-one-to-one.webp"
                alt={t.s3}
                width={1200}
                height={700}
                className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-500 opacity-70" />
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold text-slate-900">{t.s4}</div>
                <p className="mt-2 text-sm text-slate-600">{t.s4d}</p>
              </div>
              <span className="rounded-full border bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-700">
                {t.coming}
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
              <Image
                src="/gallery-03.webp"
                alt={t.s4}
                width={1200}
                height={700}
                className="h-[170px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="mt-10" aria-labelledby="merch-info">
        <div className="flex items-end justify-between gap-4">
          <h2 id="merch-info" className="text-xl font-semibold text-slate-900">
            {t.faqTitle}
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-70" />
            <div className="text-sm font-semibold text-slate-900">{t.faq1}</div>
            <p className="mt-2 text-sm text-slate-600">{t.faq1d}</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500 opacity-70" />
            <div className="text-sm font-semibold text-slate-900">{t.faq2}</div>
            <p className="mt-2 text-sm text-slate-600">{t.faq2d}</p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-500 opacity-70" />
            <div className="text-sm font-semibold text-slate-900">{t.faq3}</div>
            <p className="mt-2 text-sm text-slate-600">{t.faq3d}</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Pré-commande / packs sur mesure" : "Pre-order / custom bundles"}
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {isFr
                  ? "Dites-nous l’âge, le niveau et l’objectif — nous préparons un pack premium."
                  : "Tell us age, level and goal — we’ll prepare a premium bundle."}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappDigits}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {isFr ? "WhatsApp" : "WhatsApp"}
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
      </section>
    </main>
  );
}
