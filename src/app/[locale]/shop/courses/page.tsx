export default function ShopCoursesPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Cours" : "Courses"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr ? "Paiement PayPal + accès aux cours (à connecter ensuite)." : "PayPal checkout + course access (to wire next)."}
        </p>
      </div>
    </main>
  );
}
