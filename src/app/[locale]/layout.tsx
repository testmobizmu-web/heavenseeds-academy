import type { Metadata } from "next";
import HsaHeader from "@/components/HsaHeader";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

export async function generateMetadata(props: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> {
  const p = await props.params;
  const locale = safeLocale(p?.locale);

  const canonical = `${SITE_URL}/${locale}`;
  const altEn = `${SITE_URL}/en`;
  const altFr = `${SITE_URL}/fr`;

  return {
    alternates: {
      canonical,
      languages: { en: altEn, fr: altFr },
    },
  };
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const p = await props.params;
  const locale = safeLocale(p?.locale);
  const isFr = locale === "fr";

  const t = {
    home: isFr ? "Accueil" : "Home",
    about: isFr ? "À propos" : "About",
    international: isFr ? "Académie Internationale" : "International Academy",
    mauritius: isFr ? "Programmes Maurice" : "Mauritius Programs",
    blog: "Blog",
    contact: "Contact",
    cta: isFr ? "S’inscrire" : "Enroll Now",
  };

  const menu = [
    { label: t.home, href: `/${locale}` },
    { label: t.about, href: `/${locale}/about` },
    { label: t.international, href: `/${locale}/online-learning` },
    { label: t.mauritius, href: `/${locale}/programs-mauritius` },
    { label: t.blog, href: `/${locale}/blog` },
    { label: t.contact, href: `/${locale}/contact` },
  ];

  const waText = isFr
    ? "Bonjour 👋 Je souhaite des informations sur HeavenSeeds Academy (École à Maurice + académie internationale)."
    : "Hello 👋 I’d like information about HeavenSeeds Academy (Mauritius school + international academy).";

  const waHref = `https://wa.me/23058204613?text=${encodeURIComponent(waText)}`;
  const year = new Date().getFullYear();

  // ✅ IMPORTANT: no <html> or <body> here.
  return (
    <div data-locale={locale} className="hsa-page">
      <HsaHeader locale={locale} menu={menu} ctaText={t.cta} ctaHref={waHref} />

      <main className="hsa-content">{props.children}</main>

      <Footer locale={locale} year={year} />
    </div>
  );
}
