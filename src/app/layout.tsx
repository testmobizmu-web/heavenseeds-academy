import type { Metadata, Viewport } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HeavenSeeds Academy",
    template: "%s | HeavenSeeds Academy",
  },
  description:
    "Mauritius pre-primary school + online learning programs for non-native English speakers. Warm, inclusive, trust-driven education.",
  applicationName: "HeavenSeeds Academy",
  authors: [{ name: "HeavenSeeds Academy" }],
  creator: "HeavenSeeds Academy",
  publisher: "HeavenSeeds Academy",

  // ✅ PWA
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "HeavenSeeds Academy",
    statusBarStyle: "default",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "HeavenSeeds Academy",
    title: "HeavenSeeds Academy",
    description:
      "Mauritius pre-primary school + online learning programs for non-native English speakers.",
    images: [
      {
        url: "/hero-rainbow-seed-classroom.webp",
        width: 1200,
        height: 630,
        alt: "HeavenSeeds Academy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HeavenSeeds Academy",
    description:
      "Mauritius pre-primary school + online learning programs for non-native English speakers.",
    images: ["/hero-rainbow-seed-classroom.webp"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="rp-html" suppressHydrationWarning>
      <body className="rp-body">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
