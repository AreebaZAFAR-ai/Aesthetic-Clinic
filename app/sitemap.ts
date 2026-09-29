import type { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/treatments", "/results", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...treatments.map((t) => ({ url: `${site.url}/treatments/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
