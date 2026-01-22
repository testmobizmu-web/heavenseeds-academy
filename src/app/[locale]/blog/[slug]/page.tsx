import Image from "next/image";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

function fmtDate(date: string, locale: "en" | "fr") {
  try {
    return new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  } catch {
    return "";
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ locale?: string; slug?: string }>;
}): Promise<Metadata> {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const slug = p?.slug || "";

  const post = BLOG_POSTS.find((x) => x.slug === slug);

  const title = post
    ? `${locale === "fr" ? post.title_fr : post.title_en} | HeavenSeeds Academy`
    : `Blog | HeavenSeeds Academy`;

  const description = post
    ? (locale === "fr" ? post.desc_fr : post.desc_en)
    : (locale === "fr"
        ? "Ressources éducatives premium et conseils pour parents et apprenants."
        : "Premium education resources and guidance for parents and learners.");

  return { title, description };
}

export default async function BlogPostPage(props: {
  params: Promise<{ locale?: string; slug?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";
  const slug = p?.slug || "";

  const post = BLOG_POSTS.find((x) => x.slug === slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-3xl border bg-white/85 p-8 shadow-sm backdrop-blur">
          <div className="h-[4px] -mx-8 -mt-8 mb-6 bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />
          <h1 className="text-2xl font-semibold text-slate-900">
            {isFr ? "Article introuvable." : "Post not found."}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {isFr ? "Retournez au blog pour voir les derniers articles." : "Go back to the blog to see the latest posts."}
          </p>
          <div className="mt-6">
            <a href={`/${locale}/blog`} className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3">
              {isFr ? "Retour au blog" : "Back to blog"}
            </a>
          </div>
        </div>
      </main>
    );
  }

  const title = isFr ? post.title_fr : post.title_en;
  const desc = isFr ? post.desc_fr : post.desc_en;
  const sections = isFr ? post.sections_fr : post.sections_en;

  return (
    <main className="relative">
      {/* Premium colourful background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -top-20 left-[-10%] h-[360px] w-[520px] rounded-full bg-rose-200/70 blur-[70px]" />
        <div className="absolute -top-10 right-[-10%] h-[360px] w-[520px] rounded-full bg-sky-200/70 blur-[70px]" />
        <div className="absolute top-[40%] left-[20%] h-[320px] w-[420px] rounded-full bg-emerald-200/60 blur-[70px]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[420px] w-[560px] rounded-full bg-violet-200/60 blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/30 to-white" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Header */}
        <header className="relative overflow-hidden rounded-3xl border bg-white/85 p-8 shadow-sm backdrop-blur">
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

          <div className="flex flex-wrap items-center justify-between gap-3">
            <a
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-white"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              {isFr ? "Retour au blog" : "Back to blog"}
            </a>

            <div className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
              {fmtDate(post.publishedAt, locale)}
            </div>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h1>

          <p className="mt-3 max-w-3xl text-sm text-slate-600">{desc}</p>

          {/* Hero image */}
          <div className="mt-6 rounded-[26px] p-[2px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500">
            <div className="relative overflow-hidden rounded-[24px] border bg-slate-50">
              <Image
                src={post.heroImg}
                alt={title}
                width={1400}
                height={900}
                priority
                className="h-[240px] w-full object-cover md:h-[360px]"
              />
            </div>
          </div>
        </header>

        {/* Article */}
        <article className="mt-6 overflow-hidden rounded-3xl border bg-white/90 p-8 shadow-sm backdrop-blur">
          <div className="-mx-8 -mt-8 mb-6 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

          <div className="prose prose-slate max-w-none">
            {sections.map((s, i) => (
              <section key={i} className={i === 0 ? "" : "mt-10"}>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="mt-4 leading-7 text-slate-700">
                    {para}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
            <div className="h-[3px] -mx-6 -mt-6 mb-5 bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500 opacity-80" />
            <div className="text-base font-semibold text-slate-900">
              {isFr ? "Besoin d’aide ou d’informations ?" : "Need help or more information?"}
            </div>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              {isFr
                ? "Contactez-nous pour réserver une visite à Maurice ou pour choisir le meilleur parcours en ligne — nous répondons rapidement."
                : "Contact us to book a tour in Mauritius or choose the best online track — we respond quickly."}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href={`/${locale}/contact`} className="hsa-btn hsa-btn--dark inline-flex items-center justify-center px-5 py-3">
                {isFr ? "Nous contacter" : "Contact us"}
              </a>
              <a href={`/${locale}/online-learning`} className="hsa-btn inline-flex items-center justify-center px-5 py-3">
                {isFr ? "Apprentissage en ligne" : "Online learning"}
              </a>
              <a href={`/${locale}/programs-mauritius`} className="hsa-btn inline-flex items-center justify-center px-5 py-3">
                {isFr ? "Programmes Maurice" : "Mauritius programs"}
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

