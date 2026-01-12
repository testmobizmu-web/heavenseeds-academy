import Image from "next/image";
import ContactForm from "./ContactForm";

export default async function ContactPage(props: {
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const phoneDisplay = "+230 5820 4613";
  const email = "info@heavenseedacademy.com";
  const whatsappNumber = "23058204613"; // digits only for wa.me

  const mapEmbedUrl = "https://www.google.com/maps?q=Mauritius&output=embed";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <header className="relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {isFr ? "Visite • Cours • Support" : "Tour • Courses • Support"}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              {isFr ? "Contact" : "Contact"}
            </h1>

            <p className="mt-2 max-w-2xl text-slate-600">
              {isFr
                ? "Réservez une visite (Maurice) ou posez une question sur les cours en ligne. Réponse rapide et accompagnement chaleureux."
                : "Book a tour (Mauritius) or ask about online courses. Fast replies and warm guidance."}
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  isFr
                    ? "Bonjour 👋 Je souhaite des informations sur HeavenSeeds Academy."
                    : "Hello 👋 I would like more information about HeavenSeeds Academy."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-white shadow-sm hover:opacity-95"
              >
                {isFr ? "WhatsApp (réponse rapide)" : "WhatsApp (fast reply)"}
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 shadow-sm hover:bg-slate-50"
              >
                {isFr ? "Envoyer un email" : "Send an email"}
              </a>
            </div>
          </div>

          <div className="relative h-[170px] w-full overflow-hidden rounded-3xl border bg-slate-50 shadow-sm lg:h-[210px] lg:w-[340px]">
            <Image
              src="/trust-safe-campus.webp"
              alt={isFr ? "Environnement sûr et accueillant" : "Safe and welcoming environment"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
              priority={false}
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        <ContactForm locale={locale} />

        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

          <h2 className="text-lg font-semibold">{isFr ? "Infos" : "Contact Info"}</h2>

          <div className="mt-3 grid gap-3 text-slate-700">
            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {isFr ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}
              </div>
              <div className="mt-1 text-sm">{phoneDisplay}</div>
              <a
                className="mt-2 inline-block text-sm text-slate-900 underline decoration-slate-300 hover:decoration-slate-900"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                {isFr ? "Ouvrir WhatsApp" : "Open WhatsApp"}
              </a>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email
              </div>
              <div className="mt-1 text-sm">{email}</div>
              <a
                className="mt-2 inline-block text-sm text-slate-900 underline decoration-slate-300 hover:decoration-slate-900"
                href={`mailto:${email}`}
              >
                {isFr ? "Envoyer un email" : "Send an email"}
              </a>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {isFr ? "Adresse" : "Address"}
              </div>
              <div className="mt-1 text-sm">
                {isFr ? "Maurice (adresse exacte à confirmer)" : "Mauritius (exact address to be confirmed)"}
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-3xl border bg-white">
            <iframe
              title={isFr ? "Carte" : "Map"}
              src={mapEmbedUrl}
              className="h-[260px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 rounded-3xl border bg-white p-5 shadow-sm">
            <div className="text-sm font-semibold">
              {isFr ? "Réserver un créneau" : "Book a slot"}
            </div>
            <p className="mt-1 text-sm text-slate-600">
              {isFr
                ? "Intégration calendrier (Calendly / Cal.com) à activer."
                : "Calendar integration (Calendly / Cal.com) to be enabled."}
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center justify-center rounded-2xl border px-5 py-3 shadow-sm hover:bg-slate-50"
            >
              {isFr ? "Ouvrir le calendrier" : "Open calendar"}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

