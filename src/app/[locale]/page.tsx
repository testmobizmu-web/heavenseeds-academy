import Image from "next/image";
import { sanityClient } from "@/lib/sanity.client";

type CourseCard = {
  _id: string;
  title: string;
  slug: { current: string };
  market?: "international" | "mauritius";
  price?: number;
  currency?: string;
  coverImage?: any;
};

function waLink(locale: "en" | "fr", text: string) {
  const phone = "23058204613";
  const base = `https://wa.me/${phone}`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default async function Home(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale: "en" | "fr" = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const courses = await sanityClient.fetch<CourseCard[]>(
    `*[_type=="course" && isPublished==true && language==$lang]
      | order(_createdAt desc)[0..5]{
        _id, title, slug, market, price, currency
      }`,
    { lang: locale }
  );

  const waHeroText = isFr
    ? "Bonjour 👋 Je souhaite des informations sur HeavenSeeds Academy (pré-primaire Maurice + cours en ligne)."
    : "Hello 👋 I’d like information about HeavenSeeds Academy (Mauritius pre-primary + online courses).";

  const waMauritiusText = isFr
    ? "Bonjour 👋 Je souhaite réserver une visite / avoir des infos sur le programme Pré-primaire à Maurice."
    : "Hello 👋 I’d like to book a tour / get info about the Mauritius Pre-Primary program.";

  const waOnlineText = isFr
    ? "Bonjour 👋 Je souhaite des infos sur les cours d’anglais en ligne (non-anglophones)."
    : "Hello 👋 I’d like info about online English courses for non-native speakers.";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* HERO (Luxury + Rainbow accent) */}
      <section className="relative overflow-hidden rounded-[30px] border bg-white shadow-sm">
        <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-rose-500 via-amber-400 via-emerald-400 via-sky-500 to-violet-500" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-rose-100 via-sky-100 to-violet-100 blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-100 via-amber-100 to-rose-100 blur-3xl opacity-55" />

        <div className="grid gap-10 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {isFr ? "Éducation • Confiance • Inclusion" : "Education • Trust • Inclusion"}
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              HeavenSeeds Academy
            </h1>

            <p className="mt-3 max-w-xl text-slate-600">
              {isFr
                ? "École pré-primaire inclusive à Maurice + apprentissage en ligne pour les non-anglophones — chaleureux, structuré, et premium."
                : "Inclusive Mauritius pre-primary school + online learning for non-native English speakers — warm, structured, premium."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
                href={`/${locale}/programs-mauritius`}
                aria-label={isFr ? "Voir les programmes à Maurice" : "View Mauritius programs"}
              >
                {isFr ? "Pré-primaire (Maurice)" : "Pre-Primary (Mauritius)"}
              </a>

              <a
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 shadow-sm hover:bg-slate-50"
                href={`/${locale}/online-learning`}
                aria-label={isFr ? "Voir l'apprentissage en ligne" : "View online learning"}
              >
                {isFr ? "Apprentissage en ligne" : "Online Learning"}
              </a>

              <a
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm hover:opacity-95"
                href={waLink(locale, waHeroText)}
                target="_blank"
                rel="noreferrer"
                aria-label={isFr ? "WhatsApp HeavenSeeds Academy" : "WhatsApp HeavenSeeds Academy"}
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{isFr ? "Mobile-first" : "Mobile-first"}</div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Optimisé bas débit" : "Low-bandwidth optimized"}
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{isFr ? "Inclusif" : "Inclusive"}</div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Intervention précoce" : "Early intervention support"}
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">{isFr ? "Fiable" : "Trusted"}</div>
                <div className="mt-1 text-xs text-slate-600">
                  {isFr ? "Approche parent-friendly" : "Parent-friendly approach"}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[30px] bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 p-[2px]">
              <div className="relative overflow-hidden rounded-[28px] border bg-slate-50">
                <Image
                  src="/hero-rainbow-seed-classroom.webp"
                  alt={isFr ? "Classe HeavenSeeds Academy" : "HeavenSeeds Academy classroom"}
                  width={1200}
                  height={900}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-[330px] w-full object-cover md:h-[460px]"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-4 left-4 right-4 grid grid-cols-2 gap-3 md:left-8 md:right-8">
              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">
                  {isFr ? "Sécurité & confiance" : "Safety & trust"}
                </div>
                <div className="mt-1 text-[11px] text-slate-600">
                  {isFr ? "Campus & encadrement" : "Campus & supervision"}
                </div>
              </div>

              <div className="rounded-2xl border bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="text-xs font-semibold text-slate-900">{isFr ? "Accès en ligne" : "Online access"}</div>
                <div className="mt-1 text-[11px] text-slate-600">{isFr ? "Après achat" : "After purchase"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="mt-8 grid gap-4 md:grid-cols-3" aria-label={isFr ? "Galerie" : "Gallery"}>
        <div className="relative overflow-hidden rounded-3xl border bg-slate-50 shadow-sm">
          <Image
            src="/gallery-01.webp"
            alt={isFr ? "Activités en classe" : "Classroom activities"}
            width={1200}
            height={800}
            className="h-[190px] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl border bg-slate-50 shadow-sm">
          <Image
            src="/gallery-02.webp"
            alt={isFr ? "Apprentissage créatif" : "Creative learning"}
            width={1200}
            height={800}
            className="h-[190px] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative overflow-hidden rounded-3xl border bg-slate-50 shadow-sm">
          <Image
            src="/gallery-03.webp"
            alt={isFr ? "Éducation inclusive" : "Inclusive education"}
            width={1200}
            height={800}
            className="h-[190px] w-full object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </section>

      {/* TWO MARKETS */}
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald-400 via-sky-500 to-violet-500" />

          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {isFr ? "Maurice" : "Mauritius"}
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {isFr ? "Pré-primaire & petite enfance" : "Pre-Primary & Early Childhood"}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {isFr
                  ? "Programmes, inclusion, intervention précoce et visite du campus."
                  : "Programs, inclusivity, early intervention and campus visits."}
              </p>
            </div>

            <a className="text-sm text-slate-700 underline decoration-slate-300 hover:decoration-slate-900" href={`/${locale}/programs-mauritius`}>
              {isFr ? "Découvrir →" : "Explore →"}
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/mauritius-preprimary-play.webp"
              alt={isFr ? "Activités pré-primaire à Maurice" : "Mauritius pre-primary activities"}
              width={1200}
              height={600}
              className="h-[190px] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(locale, waMauritiusText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Réserver via WhatsApp" : "Book via WhatsApp"}
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 shadow-sm hover:bg-slate-50"
            >
              {isFr ? "Formulaire de contact" : "Contact form"}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-400 to-sky-500" />

          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                International
              </div>
              <div className="mt-2 text-xl font-semibold text-slate-900">
                {isFr ? "Apprentissage en ligne" : "Online Learning"}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {isFr
                  ? "Cours d’anglais pour non-anglophones (enfants & adultes)."
                  : "English courses for non-native speakers (kids & adults)."}
              </p>
            </div>

            <a className="text-sm text-slate-700 underline decoration-slate-300 hover:decoration-slate-900" href={`/${locale}/online-learning`}>
              {isFr ? "Voir →" : "View →"}
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-50">
            <Image
              src="/hero-online-learning-laptop.webp"
              alt={isFr ? "Apprentissage en ligne sur ordinateur" : "Online learning on laptop"}
              width={1200}
              height={600}
              className="h-[190px] w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(locale, waOnlineText)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Infos via WhatsApp" : "Info via WhatsApp"}
            </a>
            <a
              href={`/${locale}/shop/courses`}
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-sm hover:opacity-95"
            >
              {isFr ? "Voir les cours" : "Browse courses"}
            </a>
          </div>
        </div>
      </section>

      {/* LATEST COURSES */}
      <section className="mt-10" aria-labelledby="latest-courses">
        <div className="flex items-end justify-between gap-4">
          <h2 id="latest-courses" className="text-xl font-semibold text-slate-900">
            {isFr ? "Cours récents" : "Latest Courses"}
          </h2>
          <a className="text-sm text-slate-600 hover:underline" href={`/${locale}/shop/courses`}>
            {isFr ? "Voir tout" : "View all"}
          </a>
        </div>

        {courses.length === 0 ? (
          <div className="mt-4 rounded-3xl border bg-white p-6 text-slate-600 shadow-sm">
            {isFr ? "Ajoutez des cours dans Sanity Studio pour les afficher ici." : "Add courses in Sanity Studio to display them here."}
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => {
              const waCourseText = isFr
                ? `Bonjour 👋 Je souhaite des infos sur le cours: ${c.title}`
                : `Hello 👋 I’d like info about the course: ${c.title}`;

              return (
                <div
                  key={c._id}
                  className="group relative overflow-hidden rounded-3xl border bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {c.market === "mauritius" ? (isFr ? "Maurice" : "Mauritius") : "International"}
                    </div>
                    <span className="text-xs text-slate-500 group-hover:text-slate-700">
                      {isFr ? "Premium" : "Premium"}
                    </span>
                  </div>

                  <div className="mt-2 text-lg font-semibold text-slate-900">{c.title}</div>

                  <div className="mt-3 text-sm text-slate-600">
                    {c.price
                      ? `${c.currency || "USD"} ${c.price}`
                      : isFr
                      ? "Gratuit / Sur demande"
                      : "Free / Enquire"}
                  </div>

                  <div className="mt-4 h-[2px] w-full bg-slate-100">
                    <div className="h-[2px] w-1/3 bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 opacity-70" />
                  </div>

                  <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={`/${locale}/course/${c.slug?.current}`}
                      className="inline-flex flex-1 items-center justify-center rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                      aria-label={isFr ? `Ouvrir le cours ${c.title}` : `Open course ${c.title}`}
                    >
                      {isFr ? "Ouvrir le cours" : "Open course"}
                    </a>

                    <a
                      href={waLink(locale, waCourseText)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center rounded-2xl border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50"
                      aria-label={isFr ? `Infos WhatsApp: ${c.title}` : `WhatsApp info: ${c.title}`}
                    >
                      {isFr ? "Infos WhatsApp" : "WhatsApp info"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="mt-14 border-t pt-6 text-sm text-slate-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} HeavenSeeds Academy</div>
          <nav className="flex gap-4" aria-label={isFr ? "Pied de page" : "Footer"}>
            <a className="hover:underline" href={`/${locale}/about`}>
              {isFr ? "À propos" : "About"}
            </a>
            <a className="hover:underline" href={`/${locale}/contact`}>
              {isFr ? "Contact" : "Contact"}
            </a>
            <a className="hover:underline" href={`/${locale}/blog`}>
              {isFr ? "Blog" : "Blog"}
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
