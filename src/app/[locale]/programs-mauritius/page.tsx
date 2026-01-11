export default function ProgramsMauritiusPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Programme Pré-Primaire (Maurice)" : "Pre-Primary Program (Mauritius)"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Informations, témoignages, et réservation de visite."
            : "Program info, testimonials, and tour booking."}
        </p>
        <a className="mt-6 inline-block rounded-2xl bg-slate-900 px-5 py-3 text-white hover:opacity-95" href={`/${params.locale}/contact`}>
          {isFr ? "Réserver une visite" : "Book a Tour"}
        </a>
      </div>
    </main>
  );
}
