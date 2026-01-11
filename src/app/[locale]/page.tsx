import { sanityClient } from "@/lib/sanity.client";

type CourseCard = {
  _id: string;
  title: string;
  slug: { current: string };
  market?: "international" | "mauritius";
  price?: number;
  currency?: string;
};

export default async function Home({ params }: { params: { locale: "en" | "fr" } }) {
  // This will return [] until you add a "course" schema type. It's OK.
  const courses = await sanityClient.fetch<CourseCard[]>(
    `*[_type=="course"] | order(_createdAt desc)[0..5]{ _id, title, slug, market, price, currency }`
  );

  const isFr = params.locale === "fr";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="rounded-3xl border bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">HeavenSeeds Academy</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          {isFr
            ? "École pré-primaire à Maurice + apprentissage en ligne pour les non-anglophones."
            : "Mauritius Pre-Primary School + Online learning for non-native English speakers."}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            href={`/${params.locale}/programs-mauritius`}
          >
            {isFr ? "Pré-primaire (Maurice)" : "Pre-Primary (Mauritius)"}
          </a>
          <a
            className="rounded-2xl border px-5 py-3 shadow-sm hover:bg-slate-50"
            href={`/${params.locale}/online-learning`}
          >
            {isFr ? "Apprentissage en ligne" : "Online Learning"}
          </a>
        </div>
      </header>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-xl font-semibold">{isFr ? "Cours récents" : "Latest Courses"}</h2>
          <a className="text-sm text-slate-600 hover:underline" href={`/${params.locale}/shop/courses`}>
            {isFr ? "Voir tout" : "View all"}
          </a>
        </div>

        {courses.length === 0 ? (
          <div className="mt-4 rounded-3xl border bg-white p-6 text-slate-600 shadow-sm">
            {isFr
              ? "Ajoutez des cours dans Sanity Studio pour les afficher ici."
              : "Add courses in Sanity Studio to display them here."}
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <a
                key={c._id}
                href={`/${params.locale}/course/${c.slug?.current}`}
                className="rounded-3xl border bg-white p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  {c.market === "mauritius"
                    ? isFr
                      ? "Maurice"
                      : "Mauritius"
                    : isFr
                      ? "International"
                      : "International"}
                </div>
                <div className="mt-2 text-lg font-semibold">{c.title}</div>

                <div className="mt-3 text-sm text-slate-600">
                  {c.price ? `${c.currency || "USD"} ${c.price}` : isFr ? "Gratuit / Sur demande" : "Free / Enquire"}
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-14 border-t pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} HeavenSeeds Academy
      </footer>
    </main>
  );
}

