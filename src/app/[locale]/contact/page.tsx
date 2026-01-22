// src/app/[locale]/contact/page.tsx
import Image from "next/image";
import ContactForm from "./ContactForm";
import BookingForm from "./BookingForm";

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export default async function ContactPage(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const phoneDisplay = "+230 5820 4613";
  const email = "info@heavenseedacademy.com";
  const whatsappNumber = "23058204613";

  // more premium: location focus (Mauritius)
  const mapEmbedUrl = "https://www.google.com/maps?q=Royal%20Road%20Curepipe%20Mauritius&output=embed";

  const copy = {
    badge: isFr ? "VISITE • COURS • SUPPORT" : "TOUR • COURSES • SUPPORT",
    title: isFr ? "Contact" : "Contact",
    sub: isFr
      ? "École inclusive à Maurice + académie internationale en ligne — un accompagnement premium, rapide et rassurant."
      : "Inclusive Mauritius school + international online academy — premium guidance with fast, reassuring replies.",
    ctaWa: isFr ? "WhatsApp (réponse rapide)" : "WhatsApp (fast reply)",
    ctaMail: isFr ? "Envoyer un email" : "Send an email",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Colorful page background (soft luxury) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 520px at 10% 10%, rgba(255,210,230,.55), transparent 60%)," +
            "radial-gradient(900px 520px at 90% 0%, rgba(210,235,255,.60), transparent 58%)," +
            "radial-gradient(900px 520px at 20% 105%, rgba(230,255,235,.60), transparent 60%)," +
            "linear-gradient(90deg, rgba(255,190,120,.16), rgba(255,200,220,.14), rgba(210,210,255,.14), rgba(190,240,255,.14), rgba(200,255,220,.14))," +
            "#ffffff",
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-[32px] border bg-white/85 p-8 shadow-sm backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{copy.badge}</p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{copy.title}</h1>

            <p className="mt-2 text-slate-700">{copy.sub}</p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  isFr
                    ? "Bonjour 👋 Je souhaite réserver une visite / obtenir des informations (Maurice + en ligne)."
                    : "Hello 👋 I’d like to book a tour / get information (Mauritius + online)."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                {copy.ctaWa}
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center rounded-2xl border bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                {copy.ctaMail}
              </a>
            </div>
          </div>

          {/* Premium image card */}
          <div className="relative h-[170px] w-full overflow-hidden rounded-3xl border bg-slate-50 shadow-sm lg:h-[210px] lg:w-[380px]">
            <Image
              src="/trust-safe-campus.webp"
              alt={isFr ? "Environnement sûr et accueillant" : "Safe and welcoming environment"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 380px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-black/0 to-black/0" />
          </div>
        </div>
      </header>

      {/* MAIN GRID (compact + premium) */}
      <section className="mt-6 grid gap-4 lg:grid-cols-12">
        {/* Left: Direct booking (not too tall) */}
        <div className="lg:col-span-6">
          <BookingForm locale={locale} />
        </div>

        {/* Right: contact form + info stacked */}
        <div className="grid gap-4 lg:col-span-6">
          <ContactForm locale={locale} />

          <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-sky-500 via-emerald-400 to-violet-500" />

            <h2 className="text-lg font-semibold text-slate-900">{isFr ? "Infos de contact" : "Contact Info"}</h2>

            <div className="mt-3 grid gap-3 text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {isFr ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}
                </div>
                <div className="mt-1 text-sm">{phoneDisplay}</div>
                <a
                  className="mt-2 inline-block text-sm font-semibold text-slate-900 underline decoration-slate-300 hover:decoration-slate-900"
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {isFr ? "Ouvrir WhatsApp" : "Open WhatsApp"}
                </a>
              </div>

              <div className="rounded-2xl border bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Email</div>
                <div className="mt-1 text-sm">{email}</div>
                <a
                  className="mt-2 inline-block text-sm font-semibold text-slate-900 underline decoration-slate-300 hover:decoration-slate-900"
                  href={`mailto:${email}`}
                >
                  {isFr ? "Envoyer un email" : "Send an email"}
                </a>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{isFr ? "Adresse" : "Address"}</div>
              <div className="mt-1 text-sm">{isFr ? "Royal Road, Curepipe (Maurice)" : "Royal Road, Curepipe (Mauritius)"}</div>
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
          </div>
        </div>
      </section>
    </main>
  );
}

