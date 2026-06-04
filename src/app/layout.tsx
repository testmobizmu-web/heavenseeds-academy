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
      "Heaven’s Seed International School | Nursery, Inclusive & Primary Support",
    template: "%s | Heaven’s Seed International School",
  },

  description:
    "Heaven’s Seed International School is an inclusive learning community in Mauritius offering nursery education, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support in a safe, caring and flexible environment.",

  keywords: [
    "Heaven’s Seed International School",
    "Heaven Seeds Academy",
    "Heaven Seed Mauritius",
    "Heaven Seeds Mauritius",
    "Heaven’s Seed School Mauritius",
    "Heaven’s Seed International School Mauritius",

    "nursery school Mauritius",
    "nursery Mauritius",
    "nursery Quatre Bornes",
    "nursery school Quatre Bornes",
    "pre-primary school Mauritius",
    "pre primary Mauritius",
    "preschool Mauritius",
    "kindergarten Mauritius",
    "early childhood education Mauritius",
    "early learning Mauritius",
    "childcare Mauritius",
    "children learning Mauritius",

    "primary support Mauritius",
    "primary learning support Mauritius",
    "primary school support Mauritius",
    "primary tuition Mauritius",
    "primary education support Mauritius",
    "home learning support Mauritius",
    "online learning Mauritius",
    "online education Mauritius",
    "online school Mauritius",
    "flexible education Mauritius",

    "inclusive education Mauritius",
    "inclusive school Mauritius",
    "inclusive learning Mauritius",
    "special needs education Mauritius",
    "different learning needs Mauritius",
    "learning support Mauritius",
    "child learning support Mauritius",
    "personalised learning Mauritius",
    "individual learning support Mauritius",
    "supportive school Mauritius",

    "speech delay support Mauritius",
    "speech delay Mauritius",
    "speech therapy Mauritius",
    "speech therapy guidance Mauritius",
    "speech support Mauritius",
    "language delay support Mauritius",
    "communication support children Mauritius",
    "speech and language support Mauritius",
    "child communication support Mauritius",

    "child psychology support Mauritius",
    "child psychology Mauritius",
    "child emotional support Mauritius",
    "child behaviour support Mauritius",
    "child development support Mauritius",
    "child confidence building Mauritius",
    "emotional development children Mauritius",
    "social development children Mauritius",
    "holistic child development Mauritius",

    "parent support Mauritius",
    "family learning support Mauritius",
    "teacher parent partnership Mauritius",
    "admissions nursery Mauritius",
    "admissions inclusive school Mauritius",
    "admissions primary support Mauritius",
    "school admissions Mauritius",
    "Quatre Bornes school",
    "Quatre Bornes nursery",
    "Quatre Bornes inclusive education",
    "Malartic Avenue Quatre Bornes",
  ],

  authors: [{ name: "Heaven’s Seed International School" }],
  creator: "Heaven’s Seed International School",
  publisher: "Heaven’s Seed International School",

  category: "education",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Heaven’s Seed International School | Nursery, Inclusive & Primary Support",
    description:
      "An inclusive learning community in Mauritius offering nursery education, primary support, speech delay support, speech therapy guidance and child psychology support.",
    url: siteUrl,
    siteName: "Heaven’s Seed International School",
    images: [
      {
        url: "/images/og/heaven-seeds-og.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven’s Seed International School inclusive learning community in Mauritius",
      },
    ],
    locale: "en_MU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Heaven’s Seed International School | Inclusive Learning in Mauritius",
    description:
      "Nursery, inclusive education, primary support, speech delay support and child psychology support in Mauritius.",
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