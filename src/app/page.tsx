import { PortfolioPage } from "@/components/portfolio-page";
import { contentByLocale } from "@/lib/content";

export default function Home() {
  return <PortfolioPage locale="en" content={contentByLocale.en} />;
}
