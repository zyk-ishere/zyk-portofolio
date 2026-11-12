import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.zyk.web.id/sitemap.xml",
    host: "https://www.zyk.web.id",
  };
}
