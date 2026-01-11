import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "HeavenSeeds Academy",
  description: "Mauritius Pre-Primary & Online Learning for non-native English speakers.",
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { children, params } = props;

  const p = await params;
  const locale = p?.locale === "fr" ? "fr" : "en";

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}

