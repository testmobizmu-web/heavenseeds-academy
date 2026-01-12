import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Courses | HeavenSeeds Academy",
  description: "View your purchased courses and access learning materials.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function MyCoursesPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    title: isFr ? "Mes cours" : "My Courses",
    subtitle: isFr
      ? "Ici apparaîtront vos cours achetés — accès premium après paiement."
      : "Your purchased courses will appear here — premium access after payment.",
    back: isFr ? "Retour au tableau de bord" : "Back to dashboard",
    shop: isFr ? "Voir les cours" : "Browse courses",
    hint: isFr
      ? "À connecter : PayPal + base de données + activation automatique."
      : "To connect: PayPal + database + automatic activation.",
    emptyTitle: isFr ? "Aucun cours pour le moment" : "No courses yet",
    emptyText: isFr
      ? "Explorez nos cours et achetez en ligne. L’accès sera visible ici après paiement."
      : "Browse our courses and purchase online. Access will show here after payment.",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href={`/${locale}/dashboard`}
              className="inline-flex w-fit items-center gap-2 rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              {t.back}
            </a>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              {t.title}
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">{t.subtitle}</p>
            <p className="mt-3 text-xs text-slate-500">{t.hint}</p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`/${locale}/shop/courses`}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {t.shop}
              </a>
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
              >
                {isFr ? "Besoin d’aide ?" : "Need help?"}
              </a>
            </div>
          </div>

          <div className="relative h-[160px] w-full overflow-hidden rounded-3xl border bg-slate-50 shadow-sm md:h-[220px] md:w-[360px]">
            <Image
              src="/online-english-kids.webp"
              alt={isFr ? "Cours pour enfants" : "Kids courses"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 360px"
              priority={false}
            />
          </div>
        </div>
      </header>

      {/* Empty state (until DB is wired) */}
      <section className="mt-6">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="text-lg font-semibold text-slate-900">{t.emptyTitle}</div>
          <p className="mt-2 text-slate-600">{t.emptyText}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-3xl border bg-white p-5 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Adultes" : "Adults"}
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {isFr ? "Anglais pratique & progressif." : "Practical, progressive English."}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border bg-white p-5 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Enfants" : "Kids"}
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {isFr ? "Ludique, rassurant, efficace." : "Playful, reassuring, effective."}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border bg-white p-5 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400" />
              <div className="text-sm font-semibold text-slate-900">
                {isFr ? "Maurice" : "Mauritius"}
              </div>
              <p className="mt-1 text-sm text-slate-600">
                {isFr ? "Pré-primaire + visite & suivi." : "Pre-primary + tour & follow-up."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
