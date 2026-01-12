import type { MetadataRoute } from "next";
import { client as sanityClient } from "@/sanity/lib/client";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://heavenseedacademy.com";

/**
 * Static routes that always exist (per locale)
 */
const STATIC_ROUTES = [
  "",
  "/about",
  "/contact",
  "/blog",
  "/online-learning",
  "/programs-mauritius",
  "/shop",
  "/shop/courses",
  "/shop/merch",
  "/dashboard",
];

/**
 * Helper to generate static pages for a locale
 */
function staticPages(locale: string): MetadataRoute.Sitemap {
  const now = new Date();
  return STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}/${locale}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Base root (redirects to /en typically)
  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  // EN + FR static pages
  entries.push(...staticPages("en"));
  entries.push(...staticPages("fr"));

  /**
   * BLOG POSTS (Sanity)
   * Safe: wrapped in try/catch so sitemap NEVER fails build
   */
  try {
    const posts = await sanityClient.fetch<
      { slug: { current: string }; language?: string; publishedAt?: string }[]
    >(
      `*[_type=="post" && isPublished==true]{
        slug,
        language,
        publishedAt
      }`
    );

    posts.forEach((post) => {
      const lang = post.language === "fr" ? "fr" : "en";
      if (!post.slug?.current) return;

      entries.push({
        url: `${SITE_URL}/${lang}/blog/${post.slug.current}`,
        lastModified: post.publishedAt
          ? new Date(post.publishedAt)
          : now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  } catch {
    // Fail silently — sitemap must never block deployment
  }

  /**
   * COURSES (Sanity)
   * Same safety approach
   */
  try {
    const courses = await sanityClient.fetch<
      { slug: { current: string }; language?: string; _updatedAt?: string }[]
    >(
      `*[_type=="course" && isPublished==true]{
        slug,
        language,
        _updatedAt
      }`
    );

    courses.forEach((course) => {
      const lang = course.language === "fr" ? "fr" : "en";
      if (!course.slug?.current) return;

      entries.push({
        url: `${SITE_URL}/${lang}/course/${course.slug.current}`,
        lastModified: course._updatedAt
          ? new Date(course._updatedAt)
          : now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });
  } catch {
    // silent
  }

  return entries;
}
