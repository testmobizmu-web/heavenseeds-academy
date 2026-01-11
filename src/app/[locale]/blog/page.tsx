import { client as sanityClient } from "../../../sanity/lib/client";

type PostCard = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
};

export default async function BlogPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";

  // Uses your existing postType schema
  const posts = await sanityClient.fetch<PostCard[]>(
    `*[_type=="post"] | order(publishedAt desc)[0..20]{ _id, title, slug, publishedAt }`
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Blog" : "Blog"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Conseils éducation, insights de Maurice, et tendances d’apprentissage."
            : "Education tips, Mauritius insights, and global learning trends."}
        </p>
      </header>

      <section className="mt-6 grid gap-4">
        {posts.length === 0 ? (
          <div className="rounded-3xl border bg-white p-6 text-slate-600 shadow-sm">
            {isFr ? "Ajoutez des articles dans Sanity Studio." : "Add blog posts in Sanity Studio."}
          </div>
        ) : (
          posts.map((p) => (
            <a
              key={p._id}
              href={`/${params.locale}/blog/${p.slug.current}`}
              className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-slate-500">
                {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : ""}
              </div>
            </a>
          ))
        )}
      </section>
    </main>
  );
}
