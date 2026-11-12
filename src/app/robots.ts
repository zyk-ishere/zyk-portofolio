import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://zyk.web.id/sitemap.xml",
    host: "https://zyk.web.id",
  };
}
