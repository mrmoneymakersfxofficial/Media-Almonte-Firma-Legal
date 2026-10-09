import { createClient } from "next-sanity";
import { defineLive } from "next-sanity/live";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2s166aaj";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token =
  process.env.SANITY_API_READ_TOKEN ||
  process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN ||
  "sk5g5YCCGcEbAJglIEH18MbyfVCNskNyzT2lC3wFI63K2asfQhw000nOCKKCyiAOQ4xKvd9pQxKXaOOMExy3niYgaHDV8MsHUjdhNZnMf5Qr86OCwhCaq9h8IM9XwTqGl9noXzwv66KJDE7QrzVkAEPibIxV1FrUOrUClLPsybs9Yxhfeljt";

const standardClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-01-01",
      useCdn: false,
      perspective: "published",
      stega: {
        studioUrl: "/admin",
      },
    })
  : null;

const liveInstance = (projectId && token)
  ? defineLive({
      client: createClient({
        projectId,
        dataset,
        apiVersion: "2025-01-01",
        useCdn: false,
        perspective: "previewDrafts",
        token: token,
        stega: { enabled: true, studioUrl: "/admin" },
      }),
      serverToken: token,
      browserToken: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
    })
  : null;

export const sanityFetch = async <T = any>({
  query,
  params,
}: {
  query: string;
  params?: Record<string, unknown>;
}): Promise<{ data: T; sourceMap: unknown; tags: string[] }> => {
  try {
    if (liveInstance) {
      return await (liveInstance.sanityFetch as any)({ query, params });
    }
    if (standardClient) {
      const data = await standardClient.fetch(query, params || {});
      return { data, sourceMap: null, tags: [] };
    }
  } catch (error) {
    console.warn("[Sanity Live] Fetch fallback triggered:", (error as Error)?.message || error);
  }
  return { data: null as unknown as T, sourceMap: null, tags: [] };
};
