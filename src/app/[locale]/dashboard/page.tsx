import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | HeavenSeeds Academy",
  description: "Your learning dashboard: purchases, access, and account.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function DashboardPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    title: isFr ? "Tableau de bord" : "Dashboard",
    subtitle: isFr
      ? "Accès premium : achats, cours, et support — tout au même endroit."
      : "Premium access: purchases, courses, and support — all in one place.",
    ctaMyCourses: isFr ? "Mes cours" : "My Courses",
    ctaShop: isFr ? "Voir la boutique" : "View Shop",
    ctaContact: isFr ? "Contacter l’équipe" : "Contact the team",
    note: isFr
      ? "Connexion + achats + accès aux cours seront finalisés ensuite (PayPal + base de données)."
      : "Login + purchases + course access will be finalized next (PayPal + database).",
    kpi1: isFr ? "Accès" : "Access",
    kpi2: isFr ? "Achats" : "Purchases",
    kpi3: isFr ? "Support" : "Support",
    kpi1d: isFr ? "Après achat" : "After purchase",
    kpi2d: isFr ? "PayPal" : "PayPal",
    kpi3d: isFr ? "WhatsApp + email" : "WhatsApp + email",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Premium header */}
      <header className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="grid gap-6 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {isFr ? "Espace élève • Premium" : "Learner space • Premium"}
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
              {t.title}
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">{t.subtitle}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/${locale}/dashboard/my-courses`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {t.ctaMyCourses}
              </a>

              <a
                href={`/${locale}/shop`}
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                {t.ctaShop}
              </a>

              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                {t.ctaContact}
              </a>
            </div>

            {/* KPI chips */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{t.kpi1}</div>
                <div className="mt-1 text-xs text-slate-600">{t.kpi1d}</div>
              </div>
              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{t.kpi2}</div>
                <div className="mt-1 text-xs text-slate-600">{t.kpi2d}</div>
              </div>
              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-sm font-semibold text-slate-900">{t.kpi3}</div>
                <div className="mt-1 text-xs text-slate-600">{t.kpi3d}</div>
              </div>
            </div>

            <p className="mt-5 text-xs text-slate-500">{t.note}</p>
          </div>

          {/* Side visual */}
          <div className="relative overflow-hidden rounded-3xl border bg-slate-50 shadow-sm">
            <Image
              src="/trust-teacher-one-to-one.webp"
              alt={isFr ? "Accompagnement personnalisé" : "Personal guidance"}
              width={900}
              height={700}
              className="h-[220px] w-full object-cover lg:h-[360px]"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/80 to-transparent p-4">
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Progression + confiance" : "Progress + confidence"}
              </div>
              <div className="mt-1 text-xs text-slate-600">
                {isFr
                  ? "Une expérience premium, simple, mobile-first."
                  : "A premium experience, simple, mobile-first."}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Next steps cards */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "Étape 1" : "Step 1"}
          </div>
          <div className="mt-2 text-lg font-semibold text-slate-900">
            {isFr ? "Connexion sécurisée" : "Secure login"}
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {isFr
              ? "Créer un compte, se connecter, et accéder à votre espace."
              : "Create an account, sign in, and access your space."}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "Étape 2" : "Step 2"}
          </div>
          <div className="mt-2 text-lg font-semibold text-slate-900">
            {isFr ? "Achat PayPal" : "PayPal purchase"}
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {isFr
              ? "Après paiement, le cours est activé automatiquement."
              : "After payment, the course is automatically activated."}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "Étape 3" : "Step 3"}
          </div>
          <div className="mt-2 text-lg font-semibold text-slate-900">
            {isFr ? "Accès aux cours" : "Course access"}
          </div>
          <p className="mt-2 text-sm text-slate-600">
            {isFr
              ? "Voir vos cours, progrès, et supports."
              : "See your courses, progress, and materials."}
          </p>
        </div>
      </section>
    </main>
  );
}
