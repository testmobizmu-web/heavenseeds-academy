export default function ShopMerchPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Merch" : "Merch"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr ? "Produits physiques (t-shirts, livres, kits) — à ajouter ensuite." : "Physical products (t-shirts, books, kits) — to add next."}
        </p>
      </div>
    </main>
  );
}
