// src/app/[locale]/page.tsx
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/hsa/Reveal";
import BlogMarqueeClient from "@/components/home/BlogMarquee.client";


import { headers } from "next/headers";

// ✅ Next 16: headers() is async
async function getBaseUrl() {
  const h = await headers();
  const host = h.get("x-forwarded-host") || h.get("host");
  const proto = h.get("x-forwarded-proto") || "http";
  if (host) return `${proto}://${host}`;

  const env =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    "";
  if (env) return env.startsWith("http") ? env : `https://${env}`;

  return "http://localhost:3000";
}


/* ---------- helpers ---------- */
function clamp(str: string, n: number) {
  if (!str) return "";
  return str.length > n ? str.slice(0, n - 1).trimEnd() + "…" : str;
}

function waLink(locale: "en" | "fr", text: string) {
  const phone = "23058204613";
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function ensureProto(url: string) {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}


/* ---------- types ---------- */
type Locale = "en" | "fr";
type NewsItem = {
  title: string;
  link: string;
  source: string;
  image?: string;
  publishedAt?: string;
};

/* ---------- education-only news normalization ---------- */
function pickImage(n: any): string | undefined {
  const candidates = [
    n?.image,
    n?.imageUrl,
    n?.urlToImage,
    n?.thumbnail,
    n?.thumb,
    n?.mediaImage,
    n?.media?.image,
    n?.media?.thumbnail,
    n?.enclosure?.url,
    n?.ogImage,
    n?.openGraphImage,
  ];
  const found = candidates.find((v) => typeof v === "string" && v.startsWith("http"));
  return found || "/images/hero/hero-rainbow-seed-classroom.webp";
}

function isEducationNews(title: string, source: string) {
  const t = `${title || ""} ${source || ""}`.toLowerCase();
  const keywords = [
    "education",
    "school",
    "teacher",
    "teaching",
    "learning",
    "student",
    "students",
    "classroom",
    "curriculum",
    "edtech",
    "university",
    "college",
    "exam",
    "exams",
    "literacy",
    "early childhood",
    "preschool",
    "nursery",
    "primary",
    "secondary",
    "higher education",
    "training",
    "éducation",
    "école",
    "enseignant",
    "enseignants",
    "apprentissage",
    "élève",
    "élèves",
    "classe",
    "programme",
    "pédagogie",
    "université",
    "examen",
    "maternelle",
    "pré-primaire",
    "primaire",
    "secondaire",
    "formation",
  ];
  return keywords.some((k) => t.includes(k));
}

function normalizeNews(items: any[]): NewsItem[] {
  return (items || [])
    .map((n: any) => ({
      title: String(n?.title || n?.headline || n?.name || ""),
      link: String(n?.link || n?.url || n?.href || ""),
      source: String(n?.source || n?.publisher || n?.site || "News"),
      image: pickImage(n),
      publishedAt: String(n?.publishedAt || n?.date || n?.pubDate || ""),
    }))
    .filter((n) => n.title && n.link)
    .filter((n) => isEducationNews(n.title, n.source));
}

/* ---------- NEWS FETCH (SERVER SAFE) ---------- */

async function getNews(locale: Locale): Promise<NewsItem[]> {
  try {
    // ✅ Relative fetch works on Vercel + local, no host/proto issues
    const res = await fetch(`/api/news?lang=${locale}&topic=education`, {
      next: { revalidate: 60 * 60 * 12 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const raw: any[] = Array.isArray(data?.items) ? data.items : [];

    const items = normalizeNews(raw).slice(0, 16);

    const fallbacks = [
      "/images/news-fallback-01.webp",
      "/images/news-fallback-02.webp",
      "/images/news-fallback-03.webp",
      "/images/news-fallback-04.webp",
    ];

    return items.map((n, i) => ({
      ...n,
      image: n.image || fallbacks[i % fallbacks.length],
      source: n.source || "Education",
    }));
  } catch {
    return [];
  }
}



/* ---------- SEO ---------- */
export async function generateMetadata(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale: Locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const title = isFr
    ? "HeavenSeeds Academy — École Pré-Primaire Inclusive à Maurice & Académie Internationale"
    : "HeavenSeeds Academy — Inclusive Mauritius Pre-Primary School & International Online Academy";

  const description = isFr
    ? "École à Maurice (nursery & pré-primaire, inclusion, intervention précoce) + apprentissage international en ligne. Mobile-first, rapide et rassurant."
    : "Mauritius nursery & pre-primary school (inclusive, early intervention) + international online learning. Mobile-first, fast, and parent-friendly.";

  const ogImg = "/images/hero/hero-rainbow-seed-classroom.webp";
  const base = await getBaseUrl();


  return {
    title,
    description,
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        fr: `${base}/fr`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${base}/${locale}`,
      images: [{ url: `${base}${ogImg}`, width: 1200, height: 630 }],
      locale: isFr ? "fr_FR" : "en_US",
      siteName: "HeavenSeeds Academy",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${base}${ogImg}`],
    },
  };
}

/* ---------- page ---------- */
export default async function Home(props: { params: Promise<{ locale?: string }> }) {
  const p = await props.params;
  const locale: Locale = p?.locale === "fr" ? "fr" : "en";
  const isFr = locale === "fr";

  const waText = isFr
    ? "Bonjour 👋 Je souhaite des informations sur HeavenSeeds Academy (école à Maurice + académie en ligne)."
    : "Hello 👋 I’d like information about HeavenSeeds Academy (Mauritius school + online academy).";

  const news = await getNews(locale);

  const stripImgs = Array.from({ length: 10 }).map(
    (_, i) => `/images/strip/strip-${String(i + 1).padStart(2, "0")}.webp`
  );

  const base = await getBaseUrl();


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "HeavenSeeds Academy",
    url: `${base}/${locale}`,
    description: isFr
      ? "École pré-primaire inclusive à Maurice & académie internationale d’anglais en ligne."
      : "Inclusive Mauritius pre-primary school & international online English academy.",
    areaServed: ["Mauritius", "International"],
  };

  return (
    <main className="hsa-page">
      {/* Anchor for Back-to-top */}
      <div id="top" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
/* =========================================================
   GLOBAL QUALITY (smooth scroll + mobile)
========================================================= */
html{ scroll-behavior:smooth; }
:target{ scroll-margin-top: 92px; }
@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior:auto; }
}

/* =========================================================
   BUTTONS (ALL) — Dark Red + White text
========================================================= */
:root{
  --hsa-red:#8C0F1A;
  --hsa-red2:#A31220;
  --hsa-white:#ffffff;
  --hsa-ink:#0b1220;
}

.hsa-btn,
a.hsa-btn,
button.hsa-btn,
.hsa-hero__btn,
.hsa-explorePill{
  background: linear-gradient(180deg, var(--hsa-red2), var(--hsa-red)) !important;
  color: var(--hsa-white) !important;
  border: 1px solid rgba(255,255,255,.18) !important;
  text-decoration:none !important;
}

.hsa-btn:hover,
a.hsa-btn:hover,
button.hsa-btn:hover,
.hsa-hero__btn:hover,
.hsa-explorePill:hover{
  filter: brightness(1.06);
  transform: translateY(-1px);
}

.hsa-btn:active,
a.hsa-btn:active,
button.hsa-btn:active,
.hsa-hero__btn:active,
.hsa-explorePill:active{
  transform: translateY(0px);
}

.hsa-btn--ghost{
  background: rgba(140,15,26,.10) !important;
  color: var(--hsa-red) !important;
  border-color: rgba(140,15,26,.22) !important;
}
.hsa-btn--ghost:hover{
  background: rgba(140,15,26,.14) !important;
}

/* Premium back-to-top (left side) */
.hsa-backTop{
  position: fixed;
  left: 16px;
  bottom: 18px;
  z-index: 70;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, var(--hsa-red2), var(--hsa-red));
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 16px 46px rgba(2,6,23,.20);
  text-decoration:none;
  color:#fff;
  transition: transform .22s ease, filter .22s ease, opacity .22s ease;
}
.hsa-backTop:hover{ transform: translateY(-2px); filter: brightness(1.06); }
.hsa-backTop svg{ width:18px; height:18px; display:block; }

@media (max-width: 420px){
  .hsa-backTop{ left: 12px; bottom: 14px; width: 42px; height: 42px; }
}

/* =========================================================
   Auto marquee (no scrollbar)
========================================================= */
.hsa-auto{
  overflow:hidden;
  position:relative;
  mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%);
}
.hsa-autoRow{ display:flex; width:100%; gap:12px; padding:8px 0; }
.hsa-autoTrack{
  display:flex;
  flex-wrap:nowrap;
  gap:12px;
  width:max-content;
  will-change: transform;
  animation: hsa-marquee-left 62s linear infinite;
}
.hsa-autoTrack--right{ animation: hsa-marquee-right 62s linear infinite; }
@keyframes hsa-marquee-left{ from{ transform: translateX(0); } to{ transform: translateX(-50%); } }
@keyframes hsa-marquee-right{ from{ transform: translateX(-50%); } to{ transform: translateX(0); } }
@media (prefers-reduced-motion: reduce){
  .hsa-autoTrack,.hsa-autoTrack--right{ animation:none !important; transform:none !important; }
}

/* =========================================================
   TWO PANELS — equal height content + consistent actions
   (Fix: same length / same height like screenshot)
========================================================= */
.hsa-two{ align-items: stretch; }
.hsa-panel{ display:flex; flex-direction:column; }
.hsa-panel__body{ display:flex; flex-direction:column; height:100%; }
.hsa-panel__desc{
  display:-webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow:hidden;
  min-height: calc(1.55em * 3);
}
.hsa-panel__list{
  margin-top: 10px;
  margin-bottom: 14px;
  min-height: calc(1.55em * 3);
}
.hsa-panel__actions{ margin-top:auto; }

/* =========================================================
   Courses Grid — remove top glass cap, fix Explore disappearing
========================================================= */
.hsa-courseGrid{
  display:grid;
  grid-template-columns:repeat(5, minmax(0,1fr));
  gap:16px;
  margin-top:18px;
  background:
    radial-gradient(1200px 380px at 20% 0%, rgba(255,220,240,.22), transparent 60%),
    radial-gradient(1200px 380px at 85% 100%, rgba(210,235,255,.28), transparent 60%);
  border:1px solid rgba(15,23,42,.08);
  border-radius:28px;
  padding:clamp(18px, 2.4vw, 26px);
  box-shadow: 0 18px 60px rgba(2,6,23,.06);
}
@media (max-width: 1100px){ .hsa-courseGrid{ grid-template-columns:repeat(3, minmax(0,1fr)); } }
@media (max-width: 700px){
  .hsa-courseGrid{ grid-template-columns:repeat(2, minmax(0,1fr)); gap:12px; }
}

.hsa-courseCard{
  position:relative;
  display:flex;
  flex-direction:column;
  border-radius:24px;
  text-decoration:none;
  color:inherit;
  overflow:hidden;
  transform: translateY(0) scale(1);
  transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s cubic-bezier(.2,.8,.2,1);
  box-shadow: 0 14px 40px rgba(2,6,23,.08);
  border:1px solid rgba(15,23,42,.10);
  background: rgba(255,255,255,.78);
  backdrop-filter: blur(10px);
  animation: hsa-courseIn .55s cubic-bezier(.2,.8,.2,1) both;
  animation-delay: var(--d, 0ms);
}
@keyframes hsa-courseIn{ from{ opacity:0; transform: translateY(10px) scale(.985); } to{ opacity:1; transform: translateY(0) scale(1); } }
.hsa-courseCard:hover{ transform: translateY(-6px) scale(1.015); box-shadow: 0 26px 80px rgba(2,6,23,.16); }
.hsa-courseCard:active{ transform: translateY(-2px) scale(1.008); }

.hsa-courseCard__media{ position:relative; padding:18px 18px 0; }

/* removed the "cap" */
.hsa-courseCard__cap{ display:none !important; }

.hsa-courseCard__imgGlow{
  position:absolute; inset:8px 8px auto 8px;
  height:160px;
  border-radius:18px;
  filter: blur(22px);
  opacity:.55;
  background: var(--tint, rgba(200,220,255,.55));
}
.hsa-courseCard__img{
  display:block;
  width:100%;
  aspect-ratio:1/1;
  object-fit:cover;
  border-radius:18px;
  background: rgba(255,255,255,.60);
  border:1px solid rgba(15,23,42,.10);
  transform: translateZ(0);
  transition: transform .45s cubic-bezier(.2,.8,.2,1), filter .45s cubic-bezier(.2,.8,.2,1);
}
.hsa-courseCard:hover .hsa-courseCard__img{ transform: translateY(-2px) scale(1.03); filter: saturate(1.05) contrast(1.03); }

.hsa-courseCard__fade{
  position:absolute; left:0; right:0; bottom:0;
  height:54px;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,.78));
  pointer-events:none;
  border-bottom-left-radius:24px;
  border-bottom-right-radius:24px;
}
.hsa-courseCard__body{
  padding:14px 18px 18px;
  display:flex;
  flex-direction:column;
  gap:8px;
  flex:1;
}
.hsa-courseCard__title{
  font-weight:750;
  letter-spacing:-0.02em;
  font-size:16px;
  line-height:1.2;
  color: rgba(11,18,32,.96);
}
.hsa-courseCard__desc{
  margin:0;
  font-size:13.5px;
  line-height:1.45;
  color: rgba(11,18,32,.74);
  min-height: 44px;
}
.hsa-courseCard__foot{ margin-top:auto; }

/* Explore pill stays consistent (never disappears) */
.hsa-explorePill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 12px;
  border-radius:999px;
  box-shadow: 0 10px 26px rgba(2,6,23,.08);
  transition: transform .45s cubic-bezier(.2,.8,.2,1), box-shadow .45s cubic-bezier(.2,.8,.2,1), opacity .2s ease;
  opacity: 1 !important;
}
.hsa-courseCard:hover .hsa-explorePill{ transform: translateY(-1px); box-shadow: 0 16px 40px rgba(2,6,23,.12); }
.hsa-explorePill__long{ display:none; }
.hsa-explorePill__short{ display:inline; }

.rainbow-a{ --tint: rgba(255,205,225,.70); }
.rainbow-b{ --tint: rgba(214,210,255,.70); }
.rainbow-c{ --tint: rgba(205,230,255,.70); }
.rainbow-d{ --tint: rgba(205,245,235,.70); }
.rainbow-e{ --tint: rgba(255,235,200,.70); }
.rainbow-f{ --tint: rgba(255,220,210,.70); }
.rainbow-g{ --tint: rgba(220,235,255,.70); }
.rainbow-h{ --tint: rgba(225,255,230,.70); }
.rainbow-i{ --tint: rgba(245,225,255,.70); }
.rainbow-j{ --tint: rgba(255,245,210,.70); }

@media (prefers-reduced-motion: reduce){
  .hsa-courseCard, .hsa-courseCard:hover, .hsa-courseCard__img, .hsa-explorePill{
    transition:none !important; animation:none !important; transform:none !important;
  }
}

/* =========================================================
   WhatsApp Floating Button — round icon only + bounce + tooltip
========================================================= */
.hsa-waFloat{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:60;
  display:flex;
  align-items:center;
  justify-content:center;
  width:56px;
  height:56px;
  border-radius:999px;
  background: linear-gradient(180deg, var(--hsa-red2), var(--hsa-red));
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 18px 55px rgba(2,6,23,.22);
  text-decoration:none;
  color:#fff;
  transform: translateZ(0);
  animation: hsa-bounce 1.8s ease-in-out infinite;
}
.hsa-waFloat svg{ width:26px; height:26px; display:block; }

@keyframes hsa-bounce{
  0%,100%{ transform: translateY(0); }
  50%{ transform: translateY(-6px); }
}
@media (prefers-reduced-motion: reduce){
  .hsa-waFloat{ animation:none; }
}

.hsa-waTip{
  position:absolute;
  right:64px;
  bottom:50%;
  transform: translateY(50%);
  background: rgba(11,18,32,.92);
  color:#fff;
  font-size:12px;
  padding:8px 10px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,.12);
  box-shadow: 0 14px 40px rgba(2,6,23,.20);
  white-space:nowrap;
  opacity:0;
  pointer-events:none;
  transition: opacity .22s ease, transform .22s ease;
}
.hsa-waTip::after{
  content:"";
  position:absolute;
  right:-6px;
  top:50%;
  transform: translateY(-50%);
  border-width:6px;
  border-style:solid;
  border-color: transparent transparent transparent rgba(11,18,32,.92);
}
.hsa-waFloat:hover .hsa-waTip,
.hsa-waFloat:focus-visible .hsa-waTip{
  opacity:1;
  transform: translateY(50%) translateX(-2px);
}

@media (max-width: 420px){
  .hsa-waFloat{ right:14px; bottom:14px; width:54px; height:54px; }
}

/* =========================================================
   Remove the eyebrow labels you asked to delete
========================================================= */
.hsa-whySplit .hsa-eyebrow{ display:none !important; } /* removes "Our promise" */
.hsa-vmv .hsa-eyebrow{ display:none !important; }     /* removes "Our framework" */

/* Remove the unwanted pills line in Why section */
.hsa-whySplit__trust{ display:none !important; }

/* Make Values CTA a premium dark red button */
.hsa-vmvCard__cta .hsa-link{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  padding: 12px 14px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--hsa-red2), var(--hsa-red));
  color:#fff !important;
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 14px 40px rgba(2,6,23,.12);
  text-decoration:none !important;
}
.hsa-vmvCard__cta .hsa-link:hover{
  filter: brightness(1.06);
  transform: translateY(-1px);
}
      `}</style>

      {/* Back-to-top (left) */}
      <a className="hsa-backTop" href="#top" aria-label={isFr ? "Retour en haut" : "Back to top"} title={isFr ? "Retour en haut" : "Back to top"}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5l-7 7 1.4 1.4L11 8.8V20h2V8.8l4.6 4.6L19 12l-7-7Z" fill="currentColor" />
        </svg>
      </a>

      {/* Floating WhatsApp */}
      <a
        className="hsa-waFloat"
        href={waLink(locale, waText)}
        target="_blank"
        rel="noreferrer"
        aria-label={isFr ? "Contacter WhatsApp" : "Chat on WhatsApp"}
        title={isFr ? "Discuter avec nous" : "Chat with us"}
      >
        <span className="hsa-waTip">{isFr ? "Discuter avec nous" : "Chat with us"}</span>
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.28c-.22-.12-1.3-.64-1.5-.72-.2-.08-.35-.12-.5.12-.15.24-.58.72-.72.86-.13.14-.26.16-.48.06-.22-.12-.93-.34-1.77-1.1-.66-.58-1.1-1.3-1.22-1.52-.13-.22-.01-.34.1-.46.1-.1.22-.26.34-.38.11-.12.15-.2.22-.34.07-.14.03-.26-.02-.38-.06-.12-.5-1.2-.68-1.64-.18-.42-.36-.36-.5-.36h-.42c-.14 0-.38.06-.58.26-.2.2-.76.74-.76 1.8 0 1.06.78 2.08.9 2.22.12.14 1.54 2.34 3.74 3.28.52.22.92.35 1.24.45.52.16.99.14 1.36.08.42-.06 1.3-.54 1.48-1.06.18-.52.18-.96.12-1.06-.06-.1-.2-.16-.42-.28Z"
          />
          <path
            fill="currentColor"
            d="M16 3C8.83 3 3 8.66 3 15.64c0 2.46.73 4.86 2.12 6.92L4 29l6.68-1.98c1.98 1.05 4.21 1.6 5.45 1.6 7.17 0 13-5.66 13-12.64C29.13 8.66 23.17 3 16 3Zm0 22.2c-1.1 0-3.13-.52-4.93-1.62l-.36-.22-3.96 1.18 1.28-3.78-.24-.38A10.1 10.1 0 0 1 5.9 15.64C5.9 10.26 10.35 5.9 16 5.9c5.65 0 10.1 4.36 10.1 9.74S21.65 25.2 16 25.2Z"
          />
        </svg>
      </a>

      {/* HERO */}
      <section className="hsa-hero">
        <div className="hsa-hero__media" aria-hidden="true">
          <Image
            src="/images/hero/hero-rainbow-seed-classroom.webp"
            alt=""
            width={1920}
            height={1080}
            priority
            className="hsa-hero__imgFull"
            sizes="100vw"
          />
          <div className="hsa-hero__shade" />
        </div>

        <div className="hsa-container">
          <Reveal className="hsa-hero__content">
            <p className="hsa-hero__kicker">
              {isFr
                ? "Maurice • International • Inclusion • Excellence"
                : "Mauritius • International • Inclusion • Excellence"}
            </p>

            <h1 className="hsa-hero__title">{isFr ? "Élevez l’apprentissage" : "Elevate Learning"}</h1>

            <p className="hsa-hero__subtitle">
              {isFr ? "École pré-primaire à Maurice & académie en ligne" : "Mauritius pre-primary school & online academy"}
            </p>

            <p className="hsa-hero__desc">
              {isFr
                ? "Une expérience premium, mobile-first et rapide — intervention précoce, inclusion, langage, autonomie, et apprentissage international en ligne."
                : "A premium, mobile-first, fast experience — early intervention, inclusion, language, independence, and international online learning."}
            </p>

            <div className="hsa-hero__ctaRow">
              <a href={waLink(locale, waText)} className="hsa-hero__btn" target="_blank" rel="noreferrer">
                {isFr ? "Commencez aujourd’hui" : "Start Today"}{" "}
                <span className="hsa-arrow" aria-hidden="true">
                  ›
                </span>
              </a>
            </div>

            <div className="hsa-hero__badges">
              <div className="hsa-badge">
                <div className="hsa-badge__t">{isFr ? "École à Maurice" : "Mauritius School"}</div>
                <div className="hsa-badge__d">
                  {isFr ? "Nursery & Pré-primaire • Inclusive" : "Nursery & Pre-Primary • Inclusive"}
                </div>
              </div>

              <div className="hsa-badge">
                <div className="hsa-badge__t">{isFr ? "Académie Internationale" : "International Academy"}</div>
                <div className="hsa-badge__d">{isFr ? "Anglais en ligne • À votre rythme" : "Online English • At your pace"}</div>
              </div>

              <div className="hsa-badge">
                <div className="hsa-badge__t">{isFr ? "Premium & Rapide" : "Premium & Fast"}</div>
                <div className="hsa-badge__d">{isFr ? "Mobile-first • Accessible • Pro UX" : "Mobile-first • Accessible • Pro UX"}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2) Two premium containers */}
      <section className="hsa-container hsa-section">
        <Reveal className="hsa-two">
          {/* Mauritius */}
          <div className="hsa-panel hsa-sheen hsa-panel--img">
            <div className="hsa-panel__media" data-badge={isFr ? "Maurice" : "Mauritius"}>
              <Image
                src="/images/mauritius.webp"
                alt={isFr ? "École à Maurice — HeavenSeeds Academy" : "Mauritius School — HeavenSeeds Academy"}
                width={1200}
                height={700}
                className="hsa-panel__img"
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="eager"
              />
            </div>

            <div className="hsa-panel__body">
              <div className="hsa-panel__top">
                <h2 className="hsa-panel__title">
                  {isFr ? "École à Maurice (Nursery & Pré-Primaire)" : "Mauritius School (Nursery & Pre-Primary)"}
                </h2>
                <Link className="hsa-panel__link" href={`/${locale}/programs-mauritius`}>
                  {isFr ? "Découvrir" : "Explore"} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="hsa-panel__desc">
                {isFr
                  ? "Une école premium et inclusive à Maurice — pour développer confiance, langage et autonomie. Routines structurées, intervention précoce et accompagnement rassurant pour les parents."
                  : "A premium, inclusive early-years school in Mauritius — designed for confidence, language development and independence. Structured routines, early intervention and parent reassurance."}
              </p>

              <ul className="hsa-panel__list">
                <li className="hsa-panel__li">{isFr ? "Nursery & Pré-primaire (3 mois+)" : "Nursery & Pre-Primary pathways (3 months+)"}</li>
                <li className="hsa-panel__li">{isFr ? "Inclusion & suivi personnalisé" : "Inclusion support & tailored learning follow-up"}</li>
                <li className="hsa-panel__li">{isFr ? "Parents : guidance & progrès clairs" : "Parents: guidance & clear progress milestones"}</li>
              </ul>

              <div className="hsa-panel__actions">
                <Link className="hsa-btn" href={`/${locale}/programs-mauritius`}>
                  {isFr ? "Voir les programmes" : "View programs"}
                </Link>
                <Link className="hsa-btn" href={`/${locale}/contact`}>
                  {isFr ? "Visite / Appel" : "Visit / Call"}
                </Link>
              </div>
            </div>
          </div>

          {/* International */}
          <div className="hsa-panel hsa-sheen hsa-panel--img">
            <div className="hsa-panel__media" data-badge="International">
              <Image
                src="/images/international.webp"
                alt={isFr ? "Académie internationale en ligne — HeavenSeeds" : "International Online Academy — HeavenSeeds"}
                width={1200}
                height={700}
                className="hsa-panel__img"
                sizes="(max-width: 900px) 100vw, 50vw"
                loading="eager"
              />
            </div>

            <div className="hsa-panel__body">
              <div className="hsa-panel__top">
                <h2 className="hsa-panel__title">{isFr ? "Académie Internationale en Ligne" : "International Online Academy"}</h2>
                <Link className="hsa-panel__link" href={`/${locale}/online-learning`}>
                  {isFr ? "Voir les cours" : "View courses"} <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="hsa-panel__desc">
                {isFr
                  ? "Un apprentissage premium pour non-anglophones — enfants, adultes et parents. Une progression claire (vocabulaire → prononciation → conversation) accessible partout, à tout moment."
                  : "Premium online learning for non-native speakers — kids, adults and parents. A clear pathway (vocabulary → pronunciation → conversation) accessible anywhere, anytime."}
              </p>

              <ul className="hsa-panel__list">
                <li className="hsa-panel__li">{isFr ? "Kids & Adults • objectifs clairs" : "Kids & Adults • goal-based lessons"}</li>
                <li className="hsa-panel__li">{isFr ? "Vocabulaire + prononciation + conversation" : "Vocabulary + pronunciation + conversation practice"}</li>
                <li className="hsa-panel__li">{isFr ? "Accès après achat (Cours)" : "Access after purchase (Courses)"}</li>
              </ul>

              <div className="hsa-panel__actions">
                <Link className="hsa-btn" href={`/${locale}/online-learning`}>
                  {isFr ? "Découvrir l’académie" : "Explore academy"}
                </Link>
                {/* Shop removed -> Contact Us */}
                <Link className="hsa-btn" href={`/${locale}/contact`}>
                  {isFr ? "Contactez-nous" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3) Courses Grid */}
      <section className="hsa-container hsa-section" aria-labelledby="hsa-courses-title">
        <Reveal className="hsa-head">
          <h2 id="hsa-courses-title" className="hsa-h2">
            {isFr ? "Parcours d’anglais (Kids • Adultes • Pros)" : "English Learning Pathways (Kids • Adults • Professionals)"}
          </h2>
          <p className="hsa-sub">
            {isFr
              ? "Dix parcours structurés et mobile-first — pour développer une maîtrise de l’anglais claire, confiante et utile au quotidien."
              : "Ten structured, mobile-first pathways — to build clear, confident, real-world English for everyday life, study and work."}
          </p>
        </Reveal>

        {(() => {
          const items = [
            {
              key: "daily-news",
              img: "/images/courses/daily-news.webp",
              title: isFr ? "Actualités du jour" : "Daily News",
              desc: isFr
                ? "Lire et comprendre l’actualité : vocabulaire clé, idées principales et expression guidée."
                : "Build informed English through the news: key vocabulary, main ideas and guided speaking.",
              href: `/${locale}/online-learning#daily-news`,
              tint: "rainbow-a",
            },
            {
              key: "conversations",
              img: "/images/courses/conversations.webp",
              title: isFr ? "Conversations" : "Conversations",
              desc: isFr
                ? "Parler avec naturel : rythme, prononciation, réponses spontanées et feedback."
                : "Speak naturally: rhythm, pronunciation, spontaneous answers and feedback-led practice.",
              href: `/${locale}/online-learning#conversations`,
              tint: "rainbow-b",
            },
            {
              key: "travel-culture",
              img: "/images/courses/travel-culture.webp",
              title: isFr ? "Voyage & culture" : "Travel & Culture",
              desc: isFr
                ? "Anglais pratique : aéroport, hôtel, directions — situations réelles, sans stress."
                : "Practical travel English: airport, hotel, directions — real situations, zero stress.",
              href: `/${locale}/online-learning#travel-culture`,
              tint: "rainbow-c",
            },
            {
              key: "describing-pictures",
              img: "/images/courses/describing-pictures.webp",
              title: isFr ? "Décrire des images" : "Describing Pictures",
              desc: isFr
                ? "Décrire avec précision : vocabulaire, structure, comparaisons — idéal pour examens."
                : "Describe with precision: vocabulary, structure and comparisons — ideal for exam speaking tasks.",
              href: `/${locale}/online-learning#describing-pictures`,
              tint: "rainbow-d",
            },
            {
              key: "grammar",
              img: "/images/courses/grammar.webp",
              title: isFr ? "Grammaire" : "Grammar",
              desc: isFr
                ? "Règles essentielles + corrections : écrire et parler avec justesse, simplement."
                : "Essential rules + corrections: write and speak with accuracy, made simple.",
              href: `/${locale}/online-learning#grammar`,
              tint: "rainbow-e",
            },
            {
              key: "ielts-speaking",
              img: "/images/courses/ielts-speaking.webp",
              title: isFr ? "IELTS Speaking" : "IELTS Speaking Preparation",
              desc: isFr
                ? "Structure, timing, idées : vocabulaire efficace et prononciation naturelle."
                : "Structure, timing, ideas: high-value vocabulary and natural pronunciation practice.",
              href: `/${locale}/online-learning#ielts-speaking`,
              tint: "rainbow-f",
            },
            {
              key: "interview-english",
              img: "/images/courses/interview-english.webp",
              title: isFr ? "Anglais d’entretien" : "Interview English",
              desc: isFr
                ? "Réponses pro : expérience, compétences, objectifs — clarté, impact, aisance."
                : "Professional answers: experience, strengths, goals — clarity, impact and confidence.",
              href: `/${locale}/online-learning#interview-english`,
              tint: "rainbow-g",
            },
            {
              key: "business-english",
              img: "/images/courses/business-english.webp",
              title: isFr ? "Business English" : "Business English",
              desc: isFr
                ? "Emails, réunions, appels : ton juste, phrases solides, communication efficace."
                : "Emails, meetings, calls: the right tone, strong phrases and confident communication.",
              href: `/${locale}/online-learning#business-english`,
              tint: "rainbow-h",
            },
            {
              key: "oxford-discover-grammar",
              img: "/images/courses/oxford-discover-grammar.webp",
              title: isFr ? "Oxford Discover Grammar" : "Oxford Discover Grammar",
              desc: isFr ? "Pour enfants : bases solides, activités guidées et progression douce." : "For kids: strong foundations, guided activities and smooth progress.",
              href: `/${locale}/online-learning#oxford-discover-grammar`,
              tint: "rainbow-i",
            },
            {
              key: "cambridge-primary-path",
              img: "/images/courses/cambridge-primary-path.webp",
              title: isFr ? "Cambridge Primary Path" : "Cambridge Primary Path",
              desc: isFr ? "Lecture, phonics, vocabulaire : étapes claires et routines efficaces." : "Reading, phonics, vocabulary: clear steps and effective routines.",
              href: `/${locale}/online-learning#cambridge-primary-path`,
              tint: "rainbow-j",
            },
          ];

          return (
            <Reveal className="hsa-courseGrid" aria-label={isFr ? "Parcours d’anglais" : "English pathways"}>
              {items.map((it, idx) => (
                <Link
                  key={it.key}
                  href={it.href}
                  className={`hsa-courseCard ${it.tint}`}
                  style={{ ["--d" as any]: `${idx * 60}ms` }}
                >
                  <div className="hsa-courseCard__media" aria-hidden="true">
                    {/* cap removed */}
                    <div className="hsa-courseCard__imgGlow" />
                    <Image
                      src={it.img}
                      alt={it.title}
                      width={900}
                      height={900}
                      className="hsa-courseCard__img"
                      sizes="(max-width: 900px) 50vw, 20vw"
                      loading="lazy"
                    />
                    <div className="hsa-courseCard__fade" />
                  </div>

                  <div className="hsa-courseCard__body">
                    <h3 className="hsa-courseCard__title">{it.title}</h3>
                    <p className="hsa-courseCard__desc">{it.desc}</p>

                    <div className="hsa-courseCard__foot">
                      <span className="hsa-explorePill">
                        <span className="hsa-explorePill__short">{isFr ? "Découvrir" : "Explore"}</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </Reveal>
          );
        })()}
      </section>

      {/* WHY SECTION */}
      <section className="hsa-whySplit" aria-labelledby="hsa-why-title">
        <div className="hsa-container">
          <Reveal className="hsa-whySplit__head">
            {/* "Our promise" removed by CSS (and we keep structure safe) */}
            <div className="hsa-eyebrow" aria-hidden="true">
              <span className="hsa-eyebrow__dot" />
              <span>{isFr ? "Notre promesse" : "Our promise"}</span>
            </div>

            <h2 id="hsa-why-title" className="hsa-whySplit__title">
              {isFr ? "Pourquoi nous choisir ?" : "Why Choose Us?"}
            </h2>

            <p className="hsa-whySplit__sub">
              {isFr
                ? "Une approche premium — humaine, structurée et orientée résultats, à Maurice et en ligne."
                : "A premium approach — human, structured and results-driven, in Mauritius and online."}
            </p>
          </Reveal>

          <Reveal className="hsa-whySplit__grid">
            <div className="hsa-whySplit__left">
              <div className="hsa-whySplit__item">
                <div className="hsa-whySplit__icon is-red" aria-hidden="true">
                  ✓
                </div>
                <div className="hsa-whySplit__copy">
                  <h3 className="hsa-whySplit__h3">{isFr ? "Approche personnalisée" : "Personalized Approach"}</h3>
                  <p className="hsa-whySplit__p">
                    {isFr
                      ? "Chaque enfant (et chaque apprenant) progresse différemment. Nous adaptons la méthode, le rythme et les objectifs — pour renforcer le langage, la confiance et l’autonomie de façon durable."
                      : "Every child (and every learner) progresses differently. We tailor method, pace and goals — building language, confidence and independence with steady long-term results."}
                  </p>
                </div>
              </div>

              <div className="hsa-whySplit__divider" role="presentation" />

              <div className="hsa-whySplit__item">
                <div className="hsa-whySplit__icon is-blue" aria-hidden="true">
                  ✓
                </div>
                <div className="hsa-whySplit__copy">
                  <h3 className="hsa-whySplit__h3">{isFr ? "Équipe passionnée & méthode claire" : "Passionate Team & Clear Method"}</h3>
                  <p className="hsa-whySplit__p">
                    {isFr
                      ? "Une pédagogie structurée, simple à suivre et motivante : vocabulaire → prononciation → conversation. À Maurice, nous mettons l’accent sur l’intervention précoce et l’inclusion."
                      : "A structured, easy-to-follow method that motivates: vocabulary → pronunciation → conversation. In Mauritius we focus on early intervention, inclusion and foundational routines."}
                  </p>
                </div>
              </div>

              <div className="hsa-whySplit__divider" role="presentation" />

              <div className="hsa-whySplit__item">
                <div className="hsa-whySplit__icon is-gold" aria-hidden="true">
                  ✓
                </div>
                <div className="hsa-whySplit__copy">
                  <h3 className="hsa-whySplit__h3">{isFr ? "Environnement rassurant & suivi parents" : "Supportive Environment & Parent Follow-Up"}</h3>
                  <p className="hsa-whySplit__p">
                    {isFr
                      ? "Un cadre bienveillant, sécurisé et positif. Pour les parents : objectifs clairs, communication fluide et conseils pratiques — avec une expérience mobile-first rapide."
                      : "A safe, nurturing learning environment. For parents: clear goals, smooth communication and practical guidance — with a fast mobile-first experience."}
                  </p>
                </div>
              </div>

              <div className="hsa-whySplit__cta" role="group" aria-label={isFr ? "Actions" : "Actions"}>
                <a className="hsa-btn hsa-btn--dark" href={`/${locale}/contact`}>
                  {isFr ? "Parler à l’équipe" : "Talk to the team"}
                </a>
                <a className="hsa-btn hsa-btn--ghost" href={`/${locale}/online-learning`}>
                  {isFr ? "Voir l’académie" : "Explore academy"}
                </a>
              </div>

              {/* Removed: the pills row that caused "Mobile-firstClear progressInclusive approach" */}
              <div className="hsa-whySplit__trust" aria-hidden="true" />
            </div>

            <div className="hsa-whySplit__right" aria-label={isFr ? "Moments d’apprentissage" : "Learning moments mosaic"}>
              <div className="hsa-whyMosaic hsa-sheen" aria-hidden="true">
                <div className="hsa-whyMosaic__tile is-a">
                  <Image
                    src="/images/why/why-1.webp"
                    alt={isFr ? "Cours interactif — HeavenSeeds Academy" : "Interactive lesson — HeavenSeeds Academy"}
                    width={1200}
                    height={800}
                    className="hsa-whyMosaic__img"
                    sizes="(max-width: 900px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="hsa-whyMosaic__tile is-b">
                  <Image
                    src="/images/why/why-2.webp"
                    alt={isFr ? "Accompagnement & pratique — HeavenSeeds" : "Guidance & practice — HeavenSeeds"}
                    width={1200}
                    height={800}
                    className="hsa-whyMosaic__img"
                    sizes="(max-width: 900px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="hsa-whyMosaic__tile is-c">
                  <Image
                    src="/images/why/why-3.webp"
                    alt={isFr ? "Concentration & progrès — HeavenSeeds" : "Focus & progress — HeavenSeeds"}
                    width={1200}
                    height={800}
                    className="hsa-whyMosaic__img"
                    sizes="(max-width: 900px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <span className="hsa-whyMosaic__orb is-1" aria-hidden="true" />
                <span className="hsa-whyMosaic__orb is-2" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="hsa-vmv" aria-labelledby="hsa-vmv-title">
        <div className="hsa-container">
          <Reveal className="hsa-vmv__head">
            {/* "Our framework" removed by CSS */}
            <div className="hsa-eyebrow" aria-hidden="true">
              <span className="hsa-eyebrow__dot" />
              <span>{isFr ? "Notre cadre" : "Our framework"}</span>
            </div>

            <h2 id="hsa-vmv-title" className="hsa-vmv__title">
              {isFr ? "Notre vision, mission & valeurs" : "Our Vision, Mission & Values"}
            </h2>

            <p className="hsa-vmv__sub">
              {isFr
                ? "Une éducation premium, humaine et structurée — au service de la petite enfance à Maurice et de l’apprentissage international de l’anglais en ligne."
                : "Premium, human and structured education — supporting early childhood in Mauritius and international online English learning."}
            </p>
          </Reveal>

          <Reveal className="hsa-vmv__grid">
            <article className="hsa-vmvCard hsa-vmvCard--red">
              <div className="hsa-vmvCard__top">
                <div className="hsa-vmvCard__sq" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="hsa-vmvCard__icon">
                    <path
                      d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                  </svg>
                </div>
                <h3 className="hsa-vmvCard__title">{isFr ? "Vision" : "Vision"}</h3>
              </div>

              <p className="hsa-vmvCard__p">
                {isFr
                  ? "Offrir une expérience d’apprentissage inclusive et premium où chaque enfant — et chaque apprenant — progresse avec confiance. Nous construisons des bases solides : langage, autonomie et bien-être, grâce à une méthode claire et des routines rassurantes."
                  : "To deliver an inclusive, premium learning experience where every child — and every learner — progresses with confidence. We build strong foundations: language, independence and wellbeing, through a clear method and reassuring routines."}
              </p>
            </article>

            <article className="hsa-vmvCard hsa-vmvCard--blue">
              <div className="hsa-vmvCard__top">
                <div className="hsa-vmvCard__sq" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="hsa-vmvCard__icon">
                    <path
                      d="M12 21a9 9 0 1 0-9-9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 16a4 4 0 1 0-4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path d="M12 12l7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M15.5 5.5H19v3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="hsa-vmvCard__title">{isFr ? "Mission" : "Mission"}</h3>
              </div>

              <p className="hsa-vmvCard__p">
                {isFr
                  ? "Rendre l’apprentissage joyeux, efficace et mesurable — sur campus à Maurice et en ligne à l’international. Nous adaptons le rythme, renforçons la communication et la prononciation, et offrons une expérience mobile-first rapide et agréable."
                  : "To make learning joyful, effective and measurable — on campus in Mauritius and online internationally. We tailor pace, strengthen communication and pronunciation, and deliver a fast, mobile-first experience that’s easy to join and enjoyable to follow."}
              </p>
            </article>

            <article className="hsa-vmvCard hsa-vmvCard--gold">
              <div className="hsa-vmvCard__top">
                <div className="hsa-vmvCard__sq" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" className="hsa-vmvCard__icon">
                    <path
                      d="M12 2l1.2 5.1L18 9l-4.8 1.9L12 16l-1.2-5.1L6 9l4.8-1.9L12 2Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 13l.7 2.7L22 16l-2.3.3L19 19l-.7-2.7L16 16l2.3-.3L19 13Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="hsa-vmvCard__title">{isFr ? "Valeurs" : "Values"}</h3>
              </div>

              <ul className="hsa-vmvCard__list">
                <li>
                  <strong>{isFr ? "Excellence éducative" : "Educational excellence"}:</strong>{" "}
                  {isFr ? "qualité constante, matériel moderne et progrès clair." : "consistent quality, modern materials and clear progress."}
                </li>
                <li>
                  <strong>{isFr ? "Inclusion & bienveillance" : "Inclusion & care"}:</strong>{" "}
                  {isFr ? "un environnement rassurant adapté à chaque besoin." : "a reassuring environment tailored to each learner’s needs."}
                </li>
                <li>
                  <strong>{isFr ? "Transparence & suivi" : "Transparency & follow-up"}:</strong>{" "}
                  {isFr ? "objectifs clairs, communication fluide et guidance parents." : "clear goals, smooth communication and parent-friendly guidance."}
                </li>
              </ul>

              <div className="hsa-vmvCard__cta">
                <Link className="hsa-link" href={`/${locale}/about`}>
                  {isFr ? "Découvrir notre approche →" : "Discover our approach →"}
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* BLOG */}
      <section id="hsa-blog" className="hsa-container hsa-section" aria-labelledby="hsa-blog-title">
        <div className="hsa-narrow">
          <Reveal className="hsa-head">
            <h2 id="hsa-blog-title" className="hsa-h2">
              {isFr ? "Blog & Ressources" : "Blog & Resources"}
            </h2>
            <p className="hsa-sub">
              {isFr
                ? "Guides parents à Maurice + progression internationale en anglais — pratiques, clairs et motivants."
                : "Mauritius parent guides + international English progress — practical, clear and motivating."}
            </p>
          </Reveal>

          <BlogMarqueeClient locale={locale} isFr={isFr} />
        </div>
      </section>

      {/* GALLERY */}
      <section className="hsa-container hsa-section">
        <div className="hsa-narrow">
          <Reveal className="hsa-head">
            <h2 className="hsa-h2">{isFr ? "Galerie" : "Gallery"}</h2>
            <p className="hsa-sub">
              {isFr
                ? "École inclusive à Maurice & apprentissage international — moments, activités et progrès."
                : "Inclusive Mauritius school & international learning — moments, activities and progress."}
            </p>
          </Reveal>

          <div className="hsa-autoRow hsa-autoRow--left" aria-label="Gallery auto row">
            <div className="hsa-autoTrack">
              {[...stripImgs, ...stripImgs, ...stripImgs].map((src, idx) => (
                <div key={`${src}-${idx}`} className="hsa-stripCard hsa-sheen">
                  <Image
                    src={src}
                    alt={isFr ? "Galerie HeavenSeeds Academy" : "HeavenSeeds Academy gallery"}
                    width={240}
                    height={240}
                    className="hsa-stripCard__img"
                    sizes="240px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION NEWS */}
      <section className="hsa-container hsa-section">
        <div className="hsa-narrow">
          <Reveal className="hsa-head">
            <h2 className="hsa-h2">{isFr ? "Actualités Éducation" : "Education News"}</h2>
            <p className="hsa-sub">
              {isFr
                ? "Sélection éducation : EdTech, pédagogie, écoles, universités et apprentissage."
                : "Education-only selection: EdTech, teaching, schools, universities and learning."}
            </p>
          </Reveal>

          {news.length === 0 ? (
            <Reveal className="hsa-empty hsa-sheen">{isFr ? "Actualités indisponibles pour le moment." : "News feed unavailable right now."}</Reveal>
          ) : (
            <Reveal>
              <div className="hsa-auto">
                <div className="hsa-autoRow">
                  <div className="hsa-autoTrack">
                    {[...news, ...news].map((n, idx) => (
                      <a
                        key={`${n.link}-${idx}`}
                        href={n.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hsa-postCard hsa-sheen"
                      >
                        <div className="hsa-postCard__imgWrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={n.image || "/images/news-fallback-01.webp"}
                            alt={n.title}
                            width={260}
                            height={260}
                            className="hsa-postCard__img hsa-postCard__img--sq"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        <div className="hsa-postCard__meta">
                          <span className="hsa-tag">{n.source}</span>
                          <span className="hsa-level">
                            {n.publishedAt ? clamp(n.publishedAt, 22) : isFr ? "Mis à jour" : "Updated"}
                          </span>
                        </div>

                        <div className="hsa-postCard__title">{clamp(n.title, 74)}</div>
                        <div className="hsa-postCard__desc">{isFr ? "Lire l’article →" : "Read article →"}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </main>
  );
}
