import { siteConfig } from "./site";

const schoolId = `${siteConfig.url}/#school`;
const websiteId = `${siteConfig.url}/#website`;
const localBusinessId = `${siteConfig.url}/#localbusiness`;

const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.postalCode}, ${siteConfig.address.region}, ${siteConfig.address.country}`;

const servicesOffered = [
  "Nursery education",
  "Inclusive education",
  "Primary learning support",
  "Speech delay support",
  "Speech therapy guidance",
  "Child psychology support",
  "Child emotional support",
  "Communication support",
  "Different learning needs support",
  "Flexible online learning",
  "Holistic child development",
  "Parent guidance and family support",
];

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "School"],
  "@id": schoolId,

  name: "Heaven’s Seed International School",
  alternateName: [
    "Heaven Seeds Academy",
    "Heaven’s Seed Academy",
    "Heaven Seed International School",
    siteConfig.shortName,
  ],

  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.assets.logo}`,
  image: `${siteConfig.url}${siteConfig.assets.ogImage}`,

  description:
    "Heaven’s Seed International School is an inclusive learning community in Mauritius offering nursery education, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support in a safe, caring and flexible environment.",

  slogan: "Nurturing little minds online and beyond.",

  telephone: siteConfig.contact.whatsapp,
  email: siteConfig.contact.email,

  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },

  areaServed: [
    {
      "@type": "Country",
      name: "Mauritius",
    },
    {
      "@type": "Place",
      name: "Quatre Bornes",
    },
  ],

  keywords: [
    "nursery school Mauritius",
    "inclusive education Mauritius",
    "primary learning support Mauritius",
    "speech delay support Mauritius",
    "speech therapy guidance Mauritius",
    "child psychology support Mauritius",
    "online learning Mauritius",
    "different learning needs Mauritius",
    "child development support Mauritius",
    "Quatre Bornes nursery",
    "Heaven’s Seed International School",
  ],

  knowsAbout: servicesOffered,

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heaven’s Seed International School Programmes",
    itemListElement: servicesOffered.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: {
          "@id": schoolId,
        },
        areaServed: {
          "@type": "Country",
          name: "Mauritius",
        },
      },
    })),
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.whatsapp,
      contactType: "Admissions and parent enquiries",
      email: siteConfig.contact.email,
      areaServed: "MU",
      availableLanguage: ["English", "French"],
    },
  ],

  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,

  name: "Heaven’s Seed International School",
  alternateName: "Heaven Seeds Academy",
  url: siteConfig.url,

  description:
    "Official website of Heaven’s Seed International School, an inclusive learning community offering nursery, primary support, speech delay support, speech therapy guidance and child psychology support.",

  publisher: {
    "@id": schoolId,
  },

  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },

  inLanguage: "en-MU",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EducationalOrganization"],
  "@id": localBusinessId,

  name: "Heaven’s Seed International School",
  alternateName: "Heaven Seeds Academy",

  image: `${siteConfig.url}${siteConfig.assets.ogImage}`,
  logo: `${siteConfig.url}${siteConfig.assets.logo}`,
  url: siteConfig.url,

  description:
    "Heaven’s Seed International School provides nursery education, inclusive education, primary learning support, speech delay support, speech therapy guidance and child psychology support in Mauritius.",

  telephone: siteConfig.contact.whatsapp,
  email: siteConfig.contact.email,

  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.locality,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },

  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`,

  areaServed: {
    "@type": "Country",
    name: "Mauritius",
  },

  priceRange: "$$",

  knowsAbout: servicesOffered,

  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};