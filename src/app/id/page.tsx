import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { contentByLocale } from "@/lib/content";

const title = "Taufik Zaqi — Full Stack Web Developer & Grey Hat";
const description =
  "Portofolio Taufik Zaqi — Full Stack Web Developer dan Grey Hat asal Payakumbuh, Sumatera Barat. Proyek pengembangan web, riset keamanan, sertifikat, dan CV.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  keywords: [
    "Taufik Zaqi",
    "zyk",
    "full stack web developer",
    "grey hat",
    "ethical hacking",
    "keamanan web",
    "pentest",
    "jasa pembuatan website",
    "portofolio",
    "Payakumbuh",
    "Sumatera Barat",
  ],
  alternates: {
    canonical: "/id",
    languages: {
      en: "/",
      id: "/id",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/id",
    siteName: "Taufik Zaqi",
    title,
    description,
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function HomeId() {
  return <PortfolioPage locale="id" content={contentByLocale.id} />;
}
