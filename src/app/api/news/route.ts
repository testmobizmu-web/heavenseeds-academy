import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const WEEK = 60 * 60 * 24 * 7;

type FeedSource = { name: string; url: string };

type NewsItem = {
  title: string;
  link: string;
  source: string;
  publishedAt?: string;
  image?: string;
};

let MEM_CACHE: { ts: number; items: NewsItem[] } | null = null;

function stripTags(s: string) {
  return (s || "")
    .replace("<![CDATA[", "")
    .replace("]]>", "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}

function findFirstImg(xmlBlock: string): string | undefined {
  // 1) <enclosure url="...">
  const enc = xmlBlock.match(/<enclosure[^>]*url=["']([^"']+)["'][^>]*>/i)?.[1];
  if (enc) return enc;

  // 2) media:content / media:thumbnail
  const media1 = xmlBlock.match(/<media:content[^>]*url=["']([^"']+)["'][^>]*>/i)?.[1];
  if (media1) return media1;

  const media2 = xmlBlock.match(/<media:thumbnail[^>]*url=["']([^"']+)["'][^>]*>/i)?.[1];
  if (media2) return media2;

  // 3) img tag inside description/content
  const img = xmlBlock.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/i)?.[1];
  if (img) return img;

  return undefined;
}

function parseRss(xml: string, sourceName: string): NewsItem[] {
  const items: NewsItem[] = [];

  // RSS <item>
  const blocks = xml.match(/<item[\s\S]*?<\/item>/gi) || [];
  for (const b of blocks) {
    const title = stripTags(b.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
    const link = stripTags(b.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1] || "");
    const pubDate = stripTags(b.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)?.[1] || "");

    const image = findFirstImg(b);

    if (title && link) items.push({ title, link, source: sourceName, publishedAt: pubDate || undefined, image });
  }

  // Atom <entry> fallback
  if (items.length === 0) {
    const entries = xml.match(/<entry[\s\S]*?<\/entry>/gi) || [];
    for (const e of entries) {
      const title = stripTags(e.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
      const href = e.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i)?.[1] || "";
      const updated = stripTags(e.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i)?.[1] || "");
      const image = findFirstImg(e);

      if (title && href) items.push({ title, link: href, source: sourceName, publishedAt: updated || undefined, image });
    }
  }

  return items;
}

async function fetchFeed(src: FeedSource): Promise<NewsItem[]> {
  try {
    const res = await fetch(src.url, {
      next: { revalidate: WEEK },
      headers: {
        "user-agent": "HeavenSeedsAcademyBot/1.0",
        accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8, */*;q=0.7",
      },
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRss(xml, src.name);
  } catch {
    return [];
  }
}

export async function GET(req: Request) {
  // memory cache
  if (MEM_CACHE && Date.now() - MEM_CACHE.ts < WEEK * 1000) {
    return NextResponse.json(
      { items: MEM_CACHE.items },
      { headers: { "Cache-Control": `s-maxage=${WEEK}, stale-while-revalidate=86400` } }
    );
  }

  const sources: FeedSource[] = [
    // ✅ Mauritius
    { name: "L’Express (MU)", url: "https://lexpress.mu/rss" },
    { name: "Le Mauricien", url: "https://www.lemauricien.com/rss/" },
    { name: "Gov MU (News)", url: "https://www.govmu.org/EN/Pages/RSS.aspx" },

    // ✅ Education / International
    { name: "UNESCO", url: "https://www.unesco.org/en/rss.xml" },
    { name: "BBC Education", url: "https://feeds.bbci.co.uk/news/education/rss.xml" },
    { name: "EdSurge", url: "https://www.edsurge.com/feed" },
  ];

  const all = await Promise.all(sources.map(fetchFeed));
  const flat = all.flat();

  // dedupe by link
  const seen = new Set<string>();
  const deduped = flat.filter((x) => {
    if (!x.link || seen.has(x.link)) return false;
    seen.add(x.link);
    return true;
  });

  const items = deduped.slice(0, 30);

  MEM_CACHE = { ts: Date.now(), items };

  return NextResponse.json(
    { items },
    { headers: { "Cache-Control": `s-maxage=${WEEK}, stale-while-revalidate=86400` } }
  );
}
