import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | HeavenSeeds Academy",
  description: "Mission, values, objectives, and founders of HeavenSeeds Academy.",
};

export default function AboutPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">
          {isFr ? "À propos" : "About Us"}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          {isFr
            ? "HeavenSeeds Academy est une marque éducative à double marché : une école pré-primaire inclusive à Maurice et une plateforme d’apprentissage en ligne pour les non-anglophones."
            : "HeavenSeeds Academy is a dual-market education brand: an inclusive pre-primary school in Mauritius and an online learning platform for non-native English speakers."}
        </p>
      </header>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Mission" : "Mission"}</h2>
          <p className="mt-2 text-slate-600">
            {isFr
              ? "Offrir une éducation chaleureuse, sûre et inclusive — en soutenant chaque enfant et chaque apprenant vers la confiance et la réussite."
              : "Deliver warm, safe, inclusive education—supporting every child and learner toward confidence and success."}
          </p>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Valeurs" : "Values"}</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-600">
            <li>{isFr ? "Bienveillance & respect" : "Care & respect"}</li>
            <li>{isFr ? "Inclusion & accessibilité" : "Inclusion & accessibility"}</li>
            <li>{isFr ? "Sécurité & confiance" : "Safety & trust"}</li>
            <li>{isFr ? "Progression & excellence" : "Growth & excellence"}</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Objectifs" : "Objectives"}</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-600">
            <li>{isFr ? "Développement de la petite enfance" : "Early childhood development"}</li>
            <li>{isFr ? "Intervention précoce & soutien" : "Early intervention & support"}</li>
            <li>{isFr ? "Apprentissage flexible en ligne" : "Flexible online learning"}</li>
            <li>{isFr ? "Partenariat fort avec les parents" : "Strong parent partnership"}</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Fondateurs" : "Founders"}</h2>
          <p className="mt-2 text-slate-600">
            {isFr
              ? "Ajoutez ici la présentation des fondateurs (bio courte + photo) — vous pourrez la gérer via Sanity ensuite."
              : "Add founders’ introduction here (short bio + photo)—we’ll later manage this via Sanity."}
          </p>
        </div>
      </section>

      <div className="mt-10">
        <a
          href={`/${params.locale}/contact`}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
        >
          {isFr ? "Nous contacter" : "Contact Us"}
        </a>
      </div>
    </main>
  );
}
