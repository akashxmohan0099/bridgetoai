import type { MetadataRoute } from "next";
import { serviceAreas } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const services = serviceAreas.map((area) => ({
    url: `https://bridgetoai.com.au/services/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://bridgetoai.com.au",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services,
  ];
}
