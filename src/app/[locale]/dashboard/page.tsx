export default function DashboardPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">{isFr ? "Tableau de bord" : "Dashboard"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Connexion + achats + accès aux cours seront ajoutés ensuite."
            : "Login + purchases + course access will be wired next."}
        </p>
        <a className="mt-6 inline-block rounded-2xl border px-5 py-3 hover:bg-slate-50" href={`/${params.locale}/dashboard/my-courses`}>
          {isFr ? "Mes cours" : "My Courses"}
        </a>
      </div>
    </main>
  );
}
