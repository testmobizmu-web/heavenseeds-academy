import { NextRequest, NextResponse } from "next/server";
import { client as sanityClient } from "../../../../sanity/lib/client";

type Row = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  category?: "mauritius" | "international";
};

function safeLocale(input?: string) {
  return input === "fr" ? "fr" : "en";
}

function safeCategory(input?: string) {
  if (input === "mauritius" || input === "international") return input;
  return null;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const locale = safeLocale(searchParams.get("locale") || undefined);
    const category = safeCategory(searchParams.get("category") || undefined);

    const page = Math.max(1, Number(searchParams.get("page") || "1"));
    const pageSize = Math.min(24, Math.max(6, Number(searchParams.get("pageSize") || "12")));

    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    /**
     * ✅ CATEGORY NOTE
     * This assumes you have a field `category` on post (mauritius/international).
     * If you don't yet, everything will still work (category will be null),
     * but tabs will show fewer results until you add it.
     */
    const filterParts = [`_type=="post"`];

    // Optional language field if you add later:
    // filterParts.push(`language==$lang`);

    if (category) filterParts.push(`category==$cat`);

    const filter = filterParts.join(" && ");

    const query = `
      *[${filter}] | order(publishedAt desc)[${start}..${end}]{
        _id,
        title,
        slug,
        publishedAt,
        category
      }
    `;

    const countQuery = `count(*[${filter}])`;

    const [rows, total] = await Promise.all([
      sanityClient.fetch<Row[]>(query, { lang: locale, cat: category }),
      sanityClient.fetch<number>(countQuery, { lang: locale, cat: category }),
    ]);

    const posts = (rows || []).map((r) => ({
      _id: r._id,
      title: r.title,
      slug: r.slug?.current || "",
      publishedAt: r.publishedAt,
      category: r.category || undefined,
    }));

    const hasMore = start + posts.length < (total || 0);

    return NextResponse.json({ ok: true, posts, hasMore, total });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, posts: [], hasMore: false, error: e?.message || "Error" },
      { status: 200 }
    );
  }
}
