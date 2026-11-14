import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.zyk.web.id",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.zyk.web.id",
          id: "https://www.zyk.web.id/id",
        },
      },
    },
    {
      url: "https://www.zyk.web.id/id",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://www.zyk.web.id",
          id: "https://www.zyk.web.id/id",
        },
      },
    },
  ];
}
