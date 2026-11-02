import CookieDisclosureBanner from "@/components/CookieDisclosureBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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

export const metadata: Metadata = {
  title: {
    default: "NBPHS | National Behavioral & Psychiatric Health System",
    template: "%s | NBPHS",
  },
  description:
    "National Behavioral & Psychiatric Health System develops and operates behavioral health facilities serving adults and seniors nationwide.",
  keywords: [
    "behavioral health",
    "psychiatric health",
    "mental health facilities",
    "senior behavioral health",
    "behavioral health operations",
    "healthcare development",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "NBPHS",
    title: "National Behavioral & Psychiatric Health System",
    description:
      "Developing and operating behavioral health facilities serving adults and seniors.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MVQG22CNKQ"
        />
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static Google Analytics snippet, no user input
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MVQG22CNKQ');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieDisclosureBanner />
      </body>
    </html>
  );
}
