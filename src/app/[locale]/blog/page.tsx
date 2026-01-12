import Image from "next/image";
import { client as sanityClient } from "../../../sanity/lib/client";

type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  mainImage?: any;
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

export default async function BlogPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  // If your post schema has language/isPublished later, we can filter:
  // *[_type=="post" && language==$lang && isPublished==true] ...
  const posts = await sanityClient.fetch<PostCard[]>(
    `*[_type=="post"] | order(publishedAt desc)[0..20]{
      _id, title, slug, publishedAt, mainImage
    }`
  );

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />
        <h1 className="text-3xl font-semibold tracking-tight">{isFr ? "Blog" : "Blog"}</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          {isFr
            ? "Conseils éducation, insights de Maurice, et tendances d’apprentissage — en version claire et parent-friendly."
            : "Education tips, Mauritius insights, and global learning trends — clear, trust-driven, parent-friendly."}
        </p>

        {/* Decorative subtle rainbow chip */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700">
          <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
          {isFr ? "Ressources & conseils" : "Resources & guidance"}
        </div>
      </header>

      {/* Featured */}
      {posts.length > 0 && (
        <section className="mt-6">
          <a
            href={`/${locale}/blog/${featured!.slug.current}`}
            className="group relative grid overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md lg:grid-cols-2"
          >
            <div className="relative min-h-[220px] lg:min-h-[320px]">
              <Image
                src="/blog-education-tips.webp"
                alt={isFr ? "Image blog" : "Blog image"}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
              <div className="absolute left-5 top-5 rounded-full border bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                {isFr ? "À la une" : "Featured"}
              </div>
            </div>

            <div className="p-7 lg:p-8">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {isFr ? "Lecture" : "Read"}
                </div>
                <div className="text-xs text-slate-500">{fmtDate(featured!.publishedAt, locale)}</div>
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                {featured!.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                {isFr
                  ? "Guides pratiques pour les parents, conseils éducatifs, et contenus utiles — optimisés pour le mobile."
                  : "Practical guidance for parents, education tips, and helpful content — optimized for mobile."}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm group-hover:opacity-95">
                {isFr ? "Lire l’article" : "Read article"}
                <span className="h-[10px] w-[10px] rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
              </div>
            </div>

            {/* subtle rainbow underline */}
            <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />
          </a>
        </section>
      )}

      {/* Grid */}
      <section className="mt-6">
        {posts.length === 0 ? (
          <div className="rounded-3xl border bg-white p-6 text-slate-600 shadow-sm">
            {isFr ? "Ajoutez des articles dans Sanity Studio." : "Add blog posts in Sanity Studio."}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {rest.map((post, idx) => {
              const fallback =
                idx % 3 === 0
                  ? "/blog-mauritius-insights.webp"
                  : idx % 3 === 1
                    ? "/blog-global-learning.webp"
                    : "/blog-education-tips.webp";

              return (
                <a
                  key={post._id}
                  href={`/${locale}/blog/${post.slug.current}`}
                  className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative h-[180px]">
                    <Image
                      src={fallback}
                      alt={isFr ? "Image article" : "Post image"}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {isFr ? "Article" : "Post"}
                      </div>
                      <div className="text-xs text-slate-500">{fmtDate(post.publishedAt, locale)}</div>
                    </div>

                    <div className="mt-2 text-lg font-semibold text-slate-900">
                      {post.title}
                    </div>

                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                      {isFr ? "Lire" : "Read"}
                      <span className="h-[8px] w-[8px] rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400 opacity-0 transition group-hover:opacity-100" />
                </a>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

