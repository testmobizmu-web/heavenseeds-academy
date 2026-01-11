export default function MyCoursesPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">{isFr ? "Mes cours" : "My Courses"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Cette page affichera les cours achetés (PayPal + DB)."
            : "This will list purchased courses (PayPal + DB)."}
        </p>
      </div>
    </main>
  );
}
