import { siteConfig } from "./site";

const schoolId = `${siteConfig.url}/#school`;
const websiteId = `${siteConfig.url}/#website`;
const localBusinessId = `${siteConfig.url}/#localbusiness`;

const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.locality}, ${siteConfig.address.postalCode}, ${siteConfig.address.region}, ${siteConfig.address.country}`;

const servicesOffered = [
  "Nursery education",
  "Pre-primary education",
  "Inclusive education",
  "Inclusive nursery",
  "Early childhood education",
  "Social development support",
  "Emotional learning support",
  "Communication development support",
  "Social communication support",
  "Occupational therapy support",
  "Speech therapy guidance",
  "Adapted pedagogical approach",
  "Adapted learning needs support",
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
    "Heaven’s Seed International School is an inclusive early childhood learning community in Mauritius offering nursery education, pre-primary education, inclusive education, social development, emotional learning, communication development, occupational therapy support and speech therapy guidance in a safe, caring environment.",

  slogan:
    "Nurturing social, emotional, communication and early learning development.",

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
    "inclusive nursery Mauritius",
    "nursery in inclusive setup Mauritius",
    "pre-primary school Mauritius",
    "early childhood education Mauritius",
    "inclusive education Mauritius",
    "occupational therapy support Mauritius",
    "speech therapy support Mauritius",
    "speech therapy guidance Mauritius",
    "social development children Mauritius",
    "emotional learning children Mauritius",
    "communication development children Mauritius",
    "adapted pedagogy Mauritius",
    "adapted pedagogical approach Mauritius",
    "different learning needs Mauritius",
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
    "Official website of Heaven’s Seed International School, an inclusive early childhood learning community offering nursery education, pre-primary education, inclusive education, social development, emotional learning, communication development, occupational therapy support and speech therapy guidance in Mauritius.",

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
    "Heaven’s Seed International School provides nursery and pre-primary education in an inclusive setup, supporting each child’s social, emotional, communication and early learning development through adapted pedagogical approaches, occupational therapy support and speech therapy guidance.",

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
