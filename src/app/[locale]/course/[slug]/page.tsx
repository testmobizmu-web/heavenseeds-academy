import type { Metadata } from "next";
import Image from "next/image";
import { client as sanityClient } from "../../../../sanity/lib/client";

type Course = {
  title: string;
  excerpt?: string;
  price?: number;
  currency?: string;
  slug?: { current?: string };
  coverImage?: any; // optional if you later map Sanity image URL
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

function abs(urlPath: string) {
  if (!urlPath.startsWith("/")) return urlPath;
  return `${SITE_URL}${urlPath}`;
}

export async function generateMetadata(props: {
  params: Promise<{ locale?: string; slug?: string }>;
}): Promise<Metadata> {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const slug = p?.slug || "";

  const canonical = `${SITE_URL}/${locale}/course/${slug}`;

  // Fetch minimal data for SEO title/desc (fast, cheap)
  const course = await sanityClient.fetch<Course | null>(
    `*[_type=="course" && isPublished==true && language==$lang && slug.current==$slug][0]{
      title, excerpt, price, currency, slug
    }`,
    { lang: locale, slug }
  );

  const title = course?.title
    ? `${course.title} | HeavenSeeds Academy`
    : "Course | HeavenSeeds Academy";

  const description =
    course?.excerpt ||
    (locale === "fr"
      ? "Programme d’apprentissage premium — conçu pour la progression, la confiance et l’inclusion."
      : "Premium learning program — designed for growth, confidence, and inclusion.");

  const ogImage = "/hero-rainbow-seed-classroom.webp";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${SITE_URL}/en/course/${slug}`,
        fr: `${SITE_URL}/fr/course/${slug}`,
        // Optional richer tags for SEO bots:
        "en-US": `${SITE_URL}/en/course/${slug}`,
        "fr-FR": `${SITE_URL}/fr/course/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonical,
      siteName: "HeavenSeeds Academy",
      title,
      description,
      images: [
        {
          url: abs(ogImage),
          width: 1200,
          height: 630,
          alt: course?.title || "HeavenSeeds Academy",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [abs(ogImage)],
    },
  };
}

export default async function CoursePage(props: {
  params: Promise<{ locale?: string; slug?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";
  const slug = p?.slug || "";

  // ✅ IMPORTANT: filter by language==$lang so EN and FR pages don’t mix
  const course = await sanityClient.fetch<Course | null>(
    `*[_type=="course" && isPublished==true && language==$lang && slug.current==$slug][0]{
      title, excerpt, price, currency, slug
    }`,
    { lang: locale, slug }
  );

  if (!course) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          {isFr ? "Cours introuvable." : "Course not found."}
        </div>
      </main>
    );
  }

  const canonical = `${SITE_URL}/${locale}/course/${slug}`;

  // Course JSON-LD (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description:
      course.excerpt ||
      (isFr
        ? "Programme d’apprentissage premium — conçu pour la progression et la confiance."
        : "Premium learning program — designed for growth and confidence."),
    provider: {
      "@type": "Organization",
      name: "HeavenSeeds Academy",
      url: SITE_URL,
    },
    url: canonical,
    offers: course.price
      ? {
          "@type": "Offer",
          price: String(course.price),
          priceCurrency: course.currency || "USD",
          availability: "https://schema.org/InStock",
          url: canonical,
        }
      : undefined,
  };

  const priceLabel = course.price
    ? `${course.currency || "USD"} ${course.price}`
    : isFr
      ? "Sur demande"
      : "On request";

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium hero header */}
      <header className="relative overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="p-8">
          <a
            href={`/${locale}/shop/courses`}
            className="inline-flex w-fit items-center gap-2 rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
            {isFr ? "Retour aux cours" : "Back to courses"}
          </a>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            {course.title}
          </h1>

          {course.excerpt && (
            <p className="mt-3 max-w-2xl text-slate-600">{course.excerpt}</p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="rounded-2xl border bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
              {priceLabel}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                href={`/${locale}/shop/courses`}
              >
                {isFr ? "Acheter" : "Buy"}
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                href={`/${locale}/contact`}
              >
                {isFr ? "Demander un conseil" : "Ask guidance"}
              </a>
            </div>
          </div>

          {/* Optional visual strip (uses your existing public assets) */}
          <div className="mt-6 overflow-hidden rounded-3xl border bg-slate-50">
            <Image
              src="/hero-online-learning-laptop.webp"
              alt={isFr ? "Cours en ligne HeavenSeeds Academy" : "HeavenSeeds Academy online learning"}
              width={1200}
              height={600}
              className="h-[220px] w-full object-cover"
              priority={false}
            />
          </div>
        </div>
      </header>

      {/* A / B / C premium blocks */}
      <section className="mt-6 grid gap-4">
        {/* A */}
        <div className="relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "A • Résultats" : "A • Outcomes"}
          </div>
          <h2 className="mt-2 text-lg font-semibold">
            {isFr ? "Ce que vous allez apprendre" : "What you’ll learn"}
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-700">
            <li>{isFr ? "Progression structurée et objectifs clairs." : "Structured progression with clear outcomes."}</li>
            <li>{isFr ? "Activités adaptées au niveau et au rythme." : "Activities tailored to level and pace."}</li>
            <li>{isFr ? "Confiance, autonomie, motivation." : "Confidence, independence, motivation."}</li>
          </ul>
        </div>

        {/* B */}
        <div className="relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "B • Méthode" : "B • Method"}
          </div>
          <h2 className="mt-2 text-lg font-semibold">
            {isFr ? "Approche premium, simple, inclusive" : "Premium, simple, inclusive approach"}
          </h2>
          <p className="mt-2 text-slate-600">
            {isFr
              ? "Une méthode rassurante et progressive, avec des supports clairs et une pédagogie bienveillante."
              : "A calm, progressive method with clear materials and a trust-driven learning style."}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">{isFr ? "Clarté" : "Clarity"}</div>
              <div className="mt-1 text-xs text-slate-600">{isFr ? "Étapes simples" : "Simple steps"}</div>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">{isFr ? "Rythme" : "Pace"}</div>
              <div className="mt-1 text-xs text-slate-600">{isFr ? "Flexible" : "Flexible"}</div>
            </div>
            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-sm font-semibold text-slate-900">{isFr ? "Inclusion" : "Inclusion"}</div>
              <div className="mt-1 text-xs text-slate-600">{isFr ? "Pour tous" : "For everyone"}</div>
            </div>
          </div>
        </div>

        {/* C */}
        <div className="relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-violet-500 via-sky-500 to-emerald-400" />
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {isFr ? "C • Accès & Support" : "C • Access & Support"}
          </div>
          <h2 className="mt-2 text-lg font-semibold">{isFr ? "Accès & support" : "Access & support"}</h2>
          <p className="mt-2 text-slate-600">
            {isFr
              ? "Accès après achat + assistance si vous avez besoin d’aide pour choisir le bon programme."
              : "Access after purchase + support if you need help choosing the right program."}
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={`/${locale}/dashboard/my-courses`}
              className="inline-flex items-center justify-center rounded-2xl border bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
            >
              {isFr ? "Mes cours" : "My courses"}
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Contacter l’équipe" : "Contact the team"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

