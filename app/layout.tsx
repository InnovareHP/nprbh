import CookieDisclosureBanner from "@/components/CookieDisclosureBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
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
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieDisclosureBanner hasAccepted={!!hasAccepted} />
      </body>
    </html>
  );
}
