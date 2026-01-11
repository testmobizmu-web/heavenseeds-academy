import { client as sanityClient } from "../../../../sanity/lib/client";

type Post = {
  title: string;
  publishedAt?: string;
  content?: any[];
};

export default async function BlogPostPage({
  params,
}: {
  params: { locale: "en" | "fr"; slug: string };
}) {
  const isFr = params.locale === "fr";

  const post = await sanityClient.fetch<Post | null>(
    `*[_type=="post" && slug.current==$slug][0]{ title, publishedAt, content }`,
    { slug: params.slug }
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

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <article className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        {post.publishedAt && (
          <p className="mt-2 text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
        )}
        <div className="mt-6 text-slate-700">
          {/* Temporary renderer */}
          <p className="text-slate-600">
            {isFr
              ? "Le rendu riche (PortableText) sera ajouté ensuite. Pour le moment, ce contenu est géré dans Sanity."
              : "Rich rendering (PortableText) will be added next. For now, content is managed in Sanity."}
          </p>
        </div>
      </article>
    </main>
  );
}
