import type { Metadata } from "next";
import BlogMarqueeClient from "@/components/home/BlogMarqueeClient.client";
import BlogFeed, { type BlogPostLite } from "@/components/home/BlogFeed.client";
import { BLOG_POSTS } from "@/lib/blogData";

export const metadata: Metadata = {
  title: "Blog | HeavenSeeds Academy",
  description:
    "Premium education guidance — Mauritius insights + international learning tips for parents, kids, and learners.",
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function BlogPage(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const initialPosts: BlogPostLite[] = BLOG_POSTS
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 12)
    .map((p) => ({
      _id: p.slug,
      title: isFr ? p.title_fr : p.title_en,
      slug: p.slug,
      publishedAt: p.publishedAt,
      category: p.category,
      image: p.heroImg,
    }));

  const hasMore = BLOG_POSTS.length > initialPosts.length;

  return (
    <main className="hsa-blogWrap">
      <div className="hsa-rainbowBg" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero */}
        <header className="hsa-blogHero hsa-animFadeUp">
          <div className="hsa-blogHero__bar" />
          <h1 className="text-4xl font-semibold tracking-tight">
            {isFr ? "Blog & Ressources" : "Blog & Resources"}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-700">
            {isFr
              ? "Guides premium pour parents, inclusion, petite enfance et apprentissage international."
              : "Premium guidance for parents, inclusion, early childhood and international learning."}
          </p>
        </header>

        {/* Marquee */}
        <section className="mt-10">
          <BlogMarqueeClient locale={locale} isFr={isFr} />
        </section>

        {/* Feed */}
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
