
import type { Metadata } from "next";
import BlogMarqueeClient from "@/components/home/BlogMarqueeClient.client";
import BlogFeed, { type BlogPostLite } from "@/components/home/BlogFeed.client";
import { client as sanityClient } from "../../../sanity/lib/client";

export const metadata: Metadata = {
  title: "Blog | HeavenSeeds Academy",
  description:
    "Premium education guidance — Mauritius insights + international learning tips for parents, kids, and learners.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

type Row = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  category?: "mauritius" | "international";
};

export default async function BlogPage(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const pageSize = 12;
  const start = 0;
  const end = pageSize - 1;

  const query = `
    *[_type=="post"] | order(publishedAt desc)[${start}..${end}]{
      _id, title, slug, publishedAt, category
    }
  `;
  const countQuery = `count(*[_type=="post"])`;

  const [rows, total] = await Promise.all([
    sanityClient.fetch<Row[]>(query),
    sanityClient.fetch<number>(countQuery),
  ]);

  const initialPosts: BlogPostLite[] = (rows || []).map((r) => ({
    _id: r._id,
    title: r.title,
    slug: r.slug?.current || "",
    publishedAt: r.publishedAt,
    category: r.category || undefined,
  }));

  const hasMore = initialPosts.length < (total || 0);

  // SEO JSON-LD (Blog + ItemList)
  const blogUrl = `https://heavenseedacademy.com/${locale}/blog`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `https://heavenseedacademy.com/${locale}` },
          { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        ],
      },
      {
        "@type": "Blog",
        name: "HeavenSeeds Academy Blog",
        url: blogUrl,
        description: isFr
          ? "Guides premium : Maurice + international."
          : "Premium guidance: Mauritius + international.",
      },
      {
        "@type": "ItemList",
        name: "Latest blog posts",
        itemListElement: initialPosts.slice(0, 10).map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          url: `https://heavenseedacademy.com/${locale}/blog/${p.slug}`,
          name: p.title,
        })),
      },
    ],
  };

  return (
    <main className="hsa-blogWrap">
      {/* Background (colorful, premium) */}
      <div className="hsa-rainbowBg" aria-hidden="true" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero header */}
        <header className="hsa-blogHero hsa-animFadeUp">
          <div className="hsa-blogHero__bar" aria-hidden="true" />
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            {isFr ? "Blog" : "Blog"}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            {isFr
              ? "Conseils premium pour parents, petite enfance, inclusion, et apprentissage international."
              : "Premium guidance for parents, early childhood, inclusion, and international learning."}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a className="hsa-btn hsa-btn--dark" href={`/${locale}/contact`}>
              {isFr ? "Demander conseil" : "Ask guidance"}
            </a>
            <a className="hsa-btn" href={`/${locale}/online-learning`}>
              {isFr ? "Apprentissage en ligne" : "Online Learning"}
            </a>
          </div>
        </header>

        {/* Marquee (your premium rows) */}
        <section className="mt-10">
          <BlogMarqueeClient locale={locale} isFr={isFr} />
        </section>

        {/* Latest posts + tabs + infinite scroll */}
        <BlogFeed
          locale={locale}
          isFr={isFr}
          initialPosts={initialPosts}
          initialHasMore={hasMore}
          pageSize={12}
        />
      </div>
    </main>
  );
}
