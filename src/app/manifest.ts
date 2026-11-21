import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taufik Zaqi Portfolio",
    short_name: "Taufik Zaqi",
    description:
      "Portfolio of Taufik Zaqi — Full Stack Web Developer and Grey Hat.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}