// src/lib/baseUrl.ts
import { headers } from "next/headers";

function ensureProto(url: string) {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
}

// Next 16: headers() is async
export async function getBaseUrl() {
  const h = await headers();

  const host = h.get("x-forwarded-host") || h.get("host");
  const proto = h.get("x-forwarded-proto") || "https"; // default https on prod

  if (host) return `${proto}://${host}`;

  const env =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    "";

  if (env) return ensureProto(env);

  return "http://localhost:3000";
}
