export default function ContactPage({ params }: { params: { locale: "en" | "fr" } }) {
  const isFr = params.locale === "fr";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold">{isFr ? "Contact" : "Contact"}</h1>
        <p className="mt-2 text-slate-600">
          {isFr
            ? "Réservez une visite (Maurice) ou posez une question sur les cours en ligne."
            : "Book a tour (Mauritius) or ask about online courses."}
        </p>
      </header>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <form className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Formulaire" : "Form"}</h2>

          <div className="mt-4 grid gap-3">
            <input className="rounded-2xl border px-4 py-3" placeholder={isFr ? "Nom" : "Name"} />
            <input className="rounded-2xl border px-4 py-3" placeholder="Email" />
            <select className="rounded-2xl border px-4 py-3">
              <option>{isFr ? "Je veux réserver une visite (Maurice)" : "I want to book a tour (Mauritius)"}</option>
              <option>{isFr ? "Question sur les cours en ligne" : "Question about online courses"}</option>
            </select>
            <textarea className="min-h-[140px] rounded-2xl border px-4 py-3" placeholder={isFr ? "Message" : "Message"} />
            <button
              type="button"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Envoyer" : "Send"}
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            {isFr
              ? "Connexion API email/CRM sera ajoutée ensuite (Resend / SMTP / HubSpot)."
              : "Email/CRM API wiring will be added next (Resend / SMTP / HubSpot)."}
          </p>
        </form>

        <div className="rounded-3xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{isFr ? "Infos" : "Info"}</h2>
          <p className="mt-2 text-slate-600">
            {isFr ? "Adresse, téléphone, WhatsApp, carte Google seront ajoutés ici." : "Address, phone, WhatsApp, Google map goes here."}
          </p>
        </div>
      </section>
    </main>
  );
}
