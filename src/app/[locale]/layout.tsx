import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "HeavenSeeds Academy",
  description: "Mauritius Pre-Primary & Online Learning for non-native English speakers.",
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: "en" | "fr" };
}) {
  return (
    <html lang={params.locale}>
      <body className="min-h-screen bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
