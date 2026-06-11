import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import PreloadResources from "@/components/layout/PreloadResources";
import { siteConfig } from "@/lib/seo/site";
import {
  localBusinessSchema,
  schoolSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Heaven’s Seed International School",

  title: {
    default:
      "Heaven’s Seed International School | Nursery, Pre-Primary & Inclusive Education",
    template: "%s | Heaven’s Seed International School",
  },

  description:
    "Heaven’s Seed International School is an inclusive early childhood learning community in Mauritius offering nursery education, pre-primary education, inclusive education, social development, emotional learning, communication development, occupational therapy support and speech therapy guidance in a safe, caring environment.",

  keywords: [
    "Heaven’s Seed International School",
    "Heaven Seeds Academy",
    "Heaven Seed Mauritius",
    "Heaven Seeds Mauritius",
    "Heaven’s Seed School Mauritius",
    "Heaven’s Seed International School Mauritius",

    "inclusive nursery Mauritius",
    "nursery in inclusive setup Mauritius",
    "inclusive nursery Quatre Bornes",
    "nursery school Mauritius",
    "nursery Mauritius",
    "nursery Quatre Bornes",
    "nursery school Quatre Bornes",
    "safe nursery Mauritius",
    "private nursery Mauritius",
    "nursery admissions Mauritius",

    "pre-primary school Mauritius",
    "pre-primary school Quatre Bornes",
    "pre primary Mauritius",
    "pre-primary education Mauritius",
    "pre-primary admissions Mauritius",
    "preschool Mauritius",
    "preschool Quatre Bornes",
    "kindergarten Mauritius",
    "early childhood education Mauritius",
    "early childhood education Quatre Bornes",
    "early learning Mauritius",
    "early years education Mauritius",
    "childcare Mauritius",
    "children learning Mauritius",

    "inclusive education Mauritius",
    "inclusive education Quatre Bornes",
    "inclusive school Mauritius",
    "inclusive learning Mauritius",
    "inclusive early childhood education Mauritius",
    "adapted learning Mauritius",
    "adapted learning needs Mauritius",
    "adapted pedagogy Mauritius",
    "adapted pedagogical approach Mauritius",
    "different learning needs Mauritius",
    "children with different learning needs Mauritius",
    "learning support Mauritius",
    "child learning support Mauritius",
    "supportive school Mauritius",

    "social development children Mauritius",
    "social development Mauritius",
    "social skills children Mauritius",
    "social communication children Mauritius",
    "communication development children Mauritius",
    "communication support children Mauritius",
    "language development children Mauritius",
    "child communication support Mauritius",
    "communication skills children Mauritius",

    "emotional learning children Mauritius",
    "emotional development children Mauritius",
    "emotional support children Mauritius",
    "child emotional support Mauritius",
    "child behaviour support Mauritius",
    "behaviour support children Mauritius",
    "child development support Mauritius",
    "child confidence building Mauritius",
    "holistic child development Mauritius",
    "holistic development children Mauritius",

    "occupational therapy support Mauritius",
    "occupational therapy children Mauritius",
    "occupational therapy support for children Mauritius",
    "speech therapy support Mauritius",
    "speech therapy guidance Mauritius",
    "speech therapy children Mauritius",
    "speech support Mauritius",
    "speech and language support Mauritius",
    "language support children Mauritius",

    "parent support Mauritius",
    "family learning support Mauritius",
    "teacher parent partnership Mauritius",
    "admissions nursery Mauritius",
    "admissions inclusive nursery Mauritius",
    "admissions inclusive education Mauritius",
    "school admissions Mauritius",
    "Quatre Bornes school",
    "Quatre Bornes nursery",
    "Quatre Bornes pre-primary",
    "Quatre Bornes inclusive education",
    "Quatre Bornes early childhood education",
    "Malartic Avenue Quatre Bornes",
  ],

  authors: [{ name: "Heaven’s Seed International School" }],
  creator: "Heaven’s Seed International School",
  publisher: "Heaven’s Seed International School",

  category: "education",

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-MU": siteUrl,
      "fr-MU": siteUrl,
    },
  },

  openGraph: {
    title:
      "Heaven’s Seed International School | Nursery, Pre-Primary & Inclusive Education",
    description:
      "An inclusive early childhood learning community in Mauritius offering nursery education, pre-primary education, inclusive education, social development, emotional learning, communication development, occupational therapy support and speech therapy guidance.",
    url: siteUrl,
    siteName: "Heaven’s Seed International School",
    images: [
      {
        url: "/images/og/heaven-seeds-og.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven’s Seed International School nursery pre-primary and inclusive early childhood education in Mauritius",
      },
    ],
    locale: "en_MU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Heaven’s Seed International School | Inclusive Early Childhood Education in Mauritius",
    description:
      "Nursery, pre-primary education, inclusive education, social development, emotional learning, occupational therapy support and speech therapy guidance in Mauritius.",
    images: ["/images/og/heaven-seeds-og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MU"
      data-scroll-behavior="smooth"
      className={`${openSans.variable} scroll-smooth`}
    >
      <head>
        <PreloadResources />
      </head>

      <body className="min-h-screen bg-white text-[#183528] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              schoolSchema,
              websiteSchema,
              localBusinessSchema,
            ]),
          }}
        />

        <Header />

        <main className="hsa-page-bg min-h-screen flex-1">{children}</main>

        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
