import type { Metadata } from "next";
import { siteConfig } from "./site";

type SeoInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return `${siteConfig.url}${pathOrUrl}`;
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.assets.ogImage,
  noIndex = false,
}: SeoInput): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const pageDescription = description ?? siteConfig.description;
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`;
  const ogImageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.url),

    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,

    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "Education",

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-MU": canonicalUrl,
        "fr-MU": canonicalUrl,
      },
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${pageTitle} - Nursery, inclusive education, primary support and speech delay support in Mauritius`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
      countryName: "Mauritius",
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}