import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.zyk.web.id";
const siteTitle = "Taufik Zaqi — Full Stack Web Developer & Grey Hat";
const siteDescription =
  "Portfolio of Taufik Zaqi — Full Stack Web Developer and Grey Hat based in Payakumbuh, West Sumatra. Web development projects, security research, certificates, and CV.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s — Taufik Zaqi",
  },
  description: siteDescription,
  applicationName: "Taufik Zaqi Portfolio",
  authors: [{ name: "Taufik Zaqi", url: siteUrl }],
  creator: "Taufik Zaqi",
  keywords: [
    "Taufik Zaqi",
    "zyk",
    "full stack web developer",
    "grey hat",
    "ethical hacking",
    "web security",
    "pentest",
    "Next.js developer",
    "portfolio",
    "Payakumbuh",
    "West Sumatra",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Taufik Zaqi",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
