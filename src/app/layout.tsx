import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="rp-html" suppressHydrationWarning>
      <body className="rp-body">{children}</body>
    </html>
  );
}
