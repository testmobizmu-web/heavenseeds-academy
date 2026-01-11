export default function ShopPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Boutique" : "Shop"}</h1>
        <div className="mt-6 flex gap-3">
          <a className="rounded-2xl border px-5 py-3 hover:bg-slate-50" href={`/${params.locale}/shop/courses`}>
            {isFr ? "Cours" : "Courses"}
          </a>
          <a className="rounded-2xl border px-5 py-3 hover:bg-slate-50" href={`/${params.locale}/shop/merch`}>
            {isFr ? "Merch" : "Merch"}
          </a>
        </div>
      </div>
    </main>
  );
}
