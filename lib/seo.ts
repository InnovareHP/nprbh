import type { Metadata } from "next";

/**
 * Canonical production origin. Override via NEXT_PUBLIC_SITE_URL at build time
 * (e.g. preview deployments) without touching source.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.nbphsystem.com"
).replace(/\/$/, "");

export const SITE_NAME = "NBPHS";
export const ORG_LEGAL_NAME = "National Behavioral & Psychiatric Health System";
export const ORG_LINKEDIN =
  "https://www.linkedin.com/company/national-behavioral-psychiatric-health-system/";

/** Absolute URL helper for canonicals, OG images, structured data. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Per-page metadata builder. Sets canonical, OpenGraph, and Twitter card
 * consistently so every route is self-describing for crawlers and social.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  // Root template appends " | NBPHS"; OG title carries the full brand itself.
  const ogTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}

/**
 * Organization-level structured data. Rendered once site-wide so search
 * engines associate brand, logo, and profiles with every page.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: ORG_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/NBPHS Logo.png"),
    description:
      "National Behavioral & Psychiatric Health System develops and operates inpatient behavioral health facilities providing specialized psychiatric care for adults and seniors.",
    medicalSpecialty: ["Psychiatric", "Geriatric"],
    areaServed: "US",
    sameAs: [ORG_LINKEDIN],
  };
}

/** WebSite node — enables sitelinks/site name treatment in search. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: ORG_LEGAL_NAME,
    alternateName: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Breadcrumb trail for a single route. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
