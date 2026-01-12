import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | HeavenSeeds Academy",
  description:
    "Shop HeavenSeeds Academy courses and merchandise. Secure checkout, mobile-first, premium experience.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function ShopPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    badge: isFr ? "Boutique • Cours & Merch" : "Shop • Courses & Merch",
    title: isFr ? "Boutique" : "Shop",
    subtitle: isFr
      ? "Choisissez des cours premium (en ligne) ou découvrez notre merch. Paiement sécurisé, expérience mobile-first."
      : "Choose premium online courses or explore merch. Secure checkout, mobile-first experience.",
    courses: isFr ? "Cours" : "Courses",
    merch: "Merch",
    ctaCourses: isFr ? "Voir les cours" : "Browse courses",
    ctaMerch: isFr ? "Voir le merch" : "Browse merch",
    trust1: isFr ? "Accès après achat" : "Access after purchase",
    trust2: isFr ? "Support WhatsApp" : "WhatsApp support",
    trust3: isFr ? "Mobile-first" : "Mobile-first",
    hint: isFr
      ? "Astuce : Si vous hésitez, contactez-nous — on vous guide."
      : "Tip: If you’re unsure, contact us — we’ll guide you.",
    contact: isFr ? "Nous contacter" : "Contact us",
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

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                href={`/${locale}/shop/courses`}
                aria-label={isFr ? "Voir les cours" : "Browse courses"}
              >
                {t.ctaCourses}
              </a>

              <a
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                href={`/${locale}/shop/merch`}
                aria-label={isFr ? "Voir le merch" : "Browse merch"}
              >
                {t.ctaMerch}
              </a>
            </div>

            {/* Trust */}
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

            <div className="mt-6 rounded-2xl border bg-white p-4 text-sm text-slate-600 shadow-sm">
              <div className="font-semibold text-slate-900">{t.hint}</div>
              <a
                className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white"
                href={`/${locale}/contact`}
              >
                {t.contact}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-[28px] p-[2px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500">
              <div className="relative overflow-hidden rounded-[26px] border bg-slate-50">
                <Image
                  src="/hero-online-learning-laptop.webp"
                  alt={isFr ? "Cours en ligne" : "Online learning"}
                  width={1200}
                  height={900}
                  priority
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            {/* Floating mini tiles */}
            <div className="pointer-events-none absolute -bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:left-8 md:right-8">
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Cours premium" : "Premium courses"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Enfants & adultes" : "Kids & adults"}
                </div>
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Merch" : "Merch"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Bientôt disponible" : "Coming soon"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TWO LUXURY CARDS */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {/* Courses */}
        <a
          href={`/${locale}/shop/courses`}
          className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          aria-label={isFr ? "Aller aux cours" : "Go to courses"}
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isFr ? "Catalogue" : "Catalog"}
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {t.courses}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {isFr
                  ? "Cours internationaux + accès après achat."
                  : "International courses + access after purchase."}
              </p>
            </div>
            <span className="text-sm font-semibold text-slate-700 group-hover:underline">
              {isFr ? "Voir →" : "Browse →"}
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/online-english-kids.webp"
              alt={isFr ? "Cours d'anglais pour enfants" : "English courses for kids"}
              width={1200}
              height={600}
              className="h-[180px] w-full object-cover"
            />
          </div>
        </a>

        {/* Merch */}
        <a
          href={`/${locale}/shop/merch`}
          className="group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          aria-label={isFr ? "Aller au merch" : "Go to merch"}
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isFr ? "Boutique" : "Store"}
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {t.merch}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {isFr
                  ? "Uniformes, accessoires, goodies — bientôt."
                  : "Uniforms, accessories, goodies — coming soon."}
              </p>
            </div>
            <span className="text-sm font-semibold text-slate-700 group-hover:underline">
              {isFr ? "Voir →" : "Browse →"}
            </span>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/gallery-02.webp"
              alt={isFr ? "HeavenSeeds gallery" : "HeavenSeeds gallery"}
              width={1200}
              height={600}
              className="h-[180px] w-full object-cover"
            />
          </div>
        </a>
      </section>
    </main>
  );
}
