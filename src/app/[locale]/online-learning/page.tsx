export default function OnlineLearningPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Apprentissage en ligne" : "Online Learning"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Catalogue des cours internationaux (anglais pour non-anglophones)."
            : "International course catalog (English for non-native speakers)."}
        </p>
      </div>
    </main>
  );
}
