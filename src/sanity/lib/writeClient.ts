import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  // Not throwing here avoids breaking build if env missing locally;
  // API route will return a clean error instead.
  // eslint-disable-next-line no-console
  console.warn("Missing SANITY_API_WRITE_TOKEN (required for lead storage).");
}

export const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
