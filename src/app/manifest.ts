import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

  return {
    name: "HeavenSeeds Academy",
    short_name: "HeavenSeeds",
    description:
      "Mauritius pre-primary school + online learning programs for non-native English speakers.",
    start_url: "/en",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0F172A", // slate-900 feel (luxury)
    orientation: "portrait-primary",
    scope: "/",
    id: siteUrl,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192-maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
