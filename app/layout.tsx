import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import CookieDisclosureBanner from "@/components/CookieDisclosureBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import {
  organizationJsonLd,
  SITE_NAME,
  SITE_URL,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NBPHS | National Behavioral & Psychiatric Health System",
    template: "%s | NBPHS",
  },
  description:
    "National Behavioral & Psychiatric Health System develops and operates behavioral health facilities serving adults and seniors nationwide.",
  applicationName: SITE_NAME,
  keywords: [
    "behavioral health",
    "psychiatric health",
    "mental health facilities",
    "senior behavioral health",
    "geriatric psychiatry",
    "inpatient behavioral health",
    "behavioral health operations",
    "healthcare development",
  ],
  authors: [{ name: "National Behavioral & Psychiatric Health System" }],
  creator: "National Behavioral & Psychiatric Health System",
  publisher: "National Behavioral & Psychiatric Health System",
  alternates: { canonical: "/" },
  category: "Healthcare",
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "National Behavioral & Psychiatric Health System",
    description:
      "Developing and operating behavioral health facilities serving adults and seniors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Behavioral & Psychiatric Health System",
    description:
      "Developing and operating behavioral health facilities serving adults and seniors.",
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasAccepted = cookieStore.get("cookie_consent")?.value === "true";

  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieDisclosureBanner hasAccepted={!!hasAccepted} />
      </body>
    </html>
  );
}
