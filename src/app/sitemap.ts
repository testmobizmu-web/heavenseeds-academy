import type { MetadataRoute } from "next";

const siteUrl = "https://heavenseedsacademy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programmes",
    "/admissions",
    "/gallery",
    "/blog",
    "/blog/calm-morning-routine-pre-primary-children",
    "/blog/parent-teacher-communication-confidence",
    "/blog/outdoor-play-early-childhood",
    "/blog/spotting-learning-needs-early",
    "/blog/sensory-play-calm-focus-language",
    "/blog/love-for-books-early-age",
    "/blog/safe-happy-school-transitions",
    "/blog/inclusive-caring-classroom",
    "/blog/helping-children-express-themselves",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/blog" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/admissions" || route === "/contact"
          ? 0.9
          : route === "/programmes" || route === "/about"
            ? 0.85
            : route.startsWith("/blog/")
              ? 0.7
              : 0.75,
  }));
}
