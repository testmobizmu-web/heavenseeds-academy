import { client as sanityClient } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";

type Post = {
  title: string;
  publishedAt?: string;
  content?: any[];
  slug?: { current?: string };
  excerpt?: string;
};

function fmtDate(date?: string, locale?: string) {
  if (!date) return "";
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

export default async function BlogPostPage(props: {
  params: Promise<{ locale?: string; slug?: string }>;
}) {
  const p = await props.params;
  const locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";
  const slug = p?.slug || "";

  const post = await sanityClient.fetch<Post | null>(
    `*[_type=="post" && slug.current==$slug][0]{
      title,
      publishedAt,
      content,
      slug,
      excerpt
    }`,
    { slug }
  );

  if (!post) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          {isFr ? "Article introuvable." : "Post not found."}
        </div>
      </main>
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseeds-academy.vercel.app";
  const canonical = `${siteUrl}/${locale}/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    author: {
      "@type": "Organization",
      name: "HeavenSeeds Academy",
    },
    publisher: {
      "@type": "Organization",
      name: "HeavenSeeds Academy",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-heavenseeds.svg`,
      },
    },
    description:
      post.excerpt ||
      (isFr
        ? "Ressources éducatives et conseils pour parents et apprenants."
        : "Education resources and guidance for parents and learners."),
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="flex flex-col gap-4">
          <a
            href={`/${locale}/blog`}
            className="inline-flex w-fit items-center gap-2 rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
            {isFr ? "Retour au blog" : "Back to blog"}
          </a>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            {post.title}
          </h1>

          {post.publishedAt && (
            <p className="text-sm text-slate-500">
              {fmtDate(post.publishedAt, locale)}
            </p>
          )}
        </div>
      </header>

      {/* Article */}
      <article className="mt-6 overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
        {/* subtle rainbow accent */}
        <div className="-mt-8 -mx-8 mb-6 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

        <div className="prose prose-slate max-w-none">
          {post.content?.length ? (
            <PortableText
              value={post.content}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-semibold tracking-tight">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mt-8 text-2xl font-semibold tracking-tight">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{children}</h3>
                  ),
                  normal: ({ children }) => (
                    <p className="mt-4 leading-7 text-slate-700">{children}</p>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="mt-6 rounded-2xl border-l-4 border-slate-900 bg-slate-50 px-5 py-4 text-slate-700">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>
                  ),
                },
                marks: {
                  link: ({ children, value }) => {
                    const href = (value?.href || "") as string;
                    const isExternal = href.startsWith("http");
                    return (
                      <a
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        className="font-semibold text-slate-900 underline decoration-slate-300 hover:decoration-slate-900"
                      >
                        {children}
                      </a>
                    );
                  },
                  strong: ({ children }) => (
                    <strong className="font-semibold text-slate-900">{children}</strong>
                  ),
                },
              }}
            />
          ) : (
            <p className="text-slate-600">
              {isFr
                ? "Contenu en cours de préparation dans Sanity."
                : "Content is being prepared in Sanity."}
            </p>
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 rounded-3xl border bg-slate-50 p-6">
          <div className="text-sm font-semibold text-slate-900">
            {isFr ? "Besoin d’aide ou d’informations ?" : "Need help or more information?"}
          </div>
          <p className="mt-1 text-sm text-slate-600">
            {isFr
              ? "Contactez-nous pour réserver une visite (Maurice) ou pour choisir le bon package en ligne."
              : "Contact us to book a tour (Mauritius) or choose the right online package."}
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Nous contacter" : "Contact us"}
            </a>
            <a
              href={`/${locale}/online-learning`}
              className="inline-flex items-center justify-center rounded-2xl border bg-white px-5 py-3 shadow-sm hover:bg-slate-50"
            >
              {isFr ? "Voir l’apprentissage en ligne" : "Explore online learning"}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
