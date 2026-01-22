"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TabKey = "all" | "mauritius" | "international";

export type BlogPostLite = {
  _id: string;
  title: string;
  slug: string;
  publishedAt?: string;
  category?: "mauritius" | "international";
};

function fmtDate(date?: string, locale?: string) {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return "";
  }
}

export default function BlogFeed(props: {
  locale: string;
  isFr: boolean;
  initialPosts: BlogPostLite[];
  initialHasMore: boolean;
  pageSize?: number;
}) {
  const { locale, isFr } = props;
  const pageSize = props.pageSize ?? 12;

  const [tab, setTab] = useState<TabKey>("all");
  const [posts, setPosts] = useState<BlogPostLite[]>(props.initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(props.initialHasMore);
  const [loading, setLoading] = useState(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const tabs = useMemo(
    () => [
      { key: "all" as const, label: isFr ? "Tout" : "All" },
      { key: "mauritius" as const, label: isFr ? "Maurice" : "Mauritius" },
      { key: "international" as const, label: isFr ? "International" : "International" },
    ],
    [isFr]
  );

  // When tab changes: reset and refetch page 1
  useEffect(() => {
    let cancelled = false;

    async function loadFirst() {
      setLoading(true);
      try {
        const qs = new URLSearchParams();
        qs.set("locale", locale);
        qs.set("page", "1");
        qs.set("pageSize", String(pageSize));
        if (tab !== "all") qs.set("category", tab);

        const res = await fetch(`/api/blog/posts?${qs.toString()}`, { cache: "no-store" });
        const data = await res.json();

        if (!cancelled) {
          setPosts(data.posts || []);
          setHasMore(!!data.hasMore);
          setPage(1);
        }
      } catch {
        if (!cancelled) {
          setPosts([]);
          setHasMore(false);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadFirst();
    return () => {
      cancelled = true;
    };
  }, [tab, locale, pageSize]);

  // Infinite scroll
  useEffect(() => {
    if (!sentinelRef.current) return;

    const el = sentinelRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first?.isIntersecting) return;
        if (loading || !hasMore) return;

        (async () => {
          setLoading(true);
          try {
            const nextPage = page + 1;

            const qs = new URLSearchParams();
            qs.set("locale", locale);
            qs.set("page", String(nextPage));
            qs.set("pageSize", String(pageSize));
            if (tab !== "all") qs.set("category", tab);

            const res = await fetch(`/api/blog/posts?${qs.toString()}`, { cache: "no-store" });
            const data = await res.json();

            setPosts((p) => [...p, ...(data.posts || [])]);
            setHasMore(!!data.hasMore);
            setPage(nextPage);
          } catch {
            setHasMore(false);
          } finally {
            setLoading(false);
          }
        })();
      },
      { root: null, threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [sentinelRef, loading, hasMore, page, locale, tab, pageSize]);

  return (
    <section className="mt-10">
      {/* Head row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {isFr ? "Derniers articles" : "Latest posts"}
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            {isFr
              ? "Guides premium pour parents, enfants et apprenants."
              : "Premium guidance for parents, kids, and learners."}
          </p>
        </div>

        <a className="text-sm font-semibold text-slate-700 hover:underline" href={`/${locale}/contact`}>
          {isFr ? "Question ? Contact →" : "Question? Contact →"}
        </a>
      </div>

      {/* Tabs */}
      <div className="mt-5 inline-flex w-full flex-wrap gap-2 rounded-3xl border bg-white/70 p-2 shadow-sm backdrop-blur">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={
              "hsa-tabBtn " +
              (tab === t.key ? "hsa-tabBtn--active" : "")
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {posts.map((post, idx) => (
          <a
            key={post._id}
            href={`/${locale}/blog/${post.slug}`}
            className="hsa-postTile hsa-animFadeUp"
            style={{ animationDelay: `${Math.min(idx, 10) * 60}ms` }}
          >
            <div className="hsa-postTile__top">
              <span className={"hsa-chip " + (post.category === "mauritius" ? "hsa-chip--mu" : "hsa-chip--intl")}>
                {post.category === "mauritius" ? (isFr ? "Maurice" : "Mauritius") : "International"}
              </span>
              <span className="text-xs text-slate-500">{fmtDate(post.publishedAt, locale)}</span>
            </div>

            <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
              {post.title}
            </div>

            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
              {isFr ? "Lire" : "Read"}
              <span className="hsa-dot" aria-hidden="true" />
            </div>

            <div className="hsa-postTile__bar" aria-hidden="true" />
          </a>
        ))}
      </div>

      {/* Empty state (NO Sanity message) */}
      {posts.length === 0 && !loading && (
        <div className="mt-6 rounded-3xl border bg-white p-6 text-slate-700 shadow-sm">
          {isFr
            ? "Aucun article pour le moment. Revenez bientôt ✨"
            : "No posts yet. Please check back soon ✨"}
        </div>
      )}

      {/* Loading / sentinel */}
      <div ref={sentinelRef} className="mt-8 h-10" />

      {loading && (
        <div className="mt-2 flex items-center gap-3 text-sm text-slate-600">
          <span className="hsa-spinner" aria-hidden="true" />
          {isFr ? "Chargement…" : "Loading…"}
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="mt-6 text-center text-sm text-slate-500">
          {isFr ? "Vous avez tout vu ✅" : "You’ve reached the end ✅"}
        </div>
      )}
    </section>
  );
}
