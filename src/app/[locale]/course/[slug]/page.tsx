import { client as sanityClient } from "../../../../sanity/lib/client";

type Course = {
  title: string;
  excerpt?: string;
  price?: number;
  currency?: string;
};

export default async function CoursePage({
  params,
}: {
  params: { locale: "en" | "fr"; slug: string };
}) {
  const isFr = params.locale === "fr";

  const course = await sanityClient.fetch<Course | null>(
    `*[_type=="course" && slug.current==$slug][0]{ title, excerpt, price, currency }`,
    { slug: params.slug }
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

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{course.title}</h1>
        {course.excerpt && <p className="mt-2 text-slate-600">{course.excerpt}</p>}

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="text-slate-700">
            {course.price ? `${course.currency || "USD"} ${course.price}` : isFr ? "Sur demande" : "On request"}
          </div>
          <a
            className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            href={`/${params.locale}/shop/courses`}
          >
            {isFr ? "Acheter" : "Buy"}
          </a>
        </div>
      </div>
    </main>
  );
}
