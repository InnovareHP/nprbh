import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "NBPHS develops and operates behavioral health facilities dedicated to expanding access to specialized psychiatric care.",
};

const facilities = [
  {
    name: "Three Rivers Behavioral Health",
    location: "",
    status: null,
    image: "/facilities/trbh-logo.png",
    href: "https://trbhcares.com/",
    mapUrl: "https://maps.app.goo.gl/uZ1PCCgprHCaqLJ36",
  },
  {
    name: "Harmony Behavioral Health",
    location: "",
    status: null,
    image: "/facilities/harmony-health-logo.png",
    href: "https://harmonyfortworth.com/",
    mapUrl:
      "https://www.google.com/maps?ll=32.648843,-97.428192&z=19&t=m&hl=en&gl=US&mapclient=embed&cid=11521213712025288584",
  },
  {
    name: "Missions Behavioral Health",
    location: "",
    status: null,
    image: "/facilities/logo-mbh.png",
    href: "https://www.mbhcares.com/",
    mapUrl: "https://maps.app.goo.gl/TnMoNXkFzwQXFTmYA",
  },
  {
    name: "Magnolia Behavioral Health",
    status: "Opening fall 2026",
    image: "/facilities/magnolia-logo-3.png",
    href: "#",
    mapUrl: "https://maps.app.goo.gl/Nnnrd316vMHSZsjs6",
  },
  {
    name: "Palm Grove Health Center",
    status: "Opening winter 2026",
    image: "/facilities/palm-grove-logo.png",
    href: "#",
    mapUrl: null,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        image="/hero-facilities.jpg"
        imageAlt="Exterior view of a modern behavioral health facility."
        imageClassName="grayscale"
        title="Our Behavioral Health Facilities"
      />

      <section
        id="facilities-overview"
        className="bg-bg-secondary py-14 md:py-18"
      >
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-[760px] text-center">
              <span className="inline-block text-[1rem] font-medium uppercase tracking-[0.42em] text-accent">
                Our Network
              </span>
              <p className="mt-5 text-[1rem] leading-8 text-text-secondary sm:text-[1.0625rem]">
                National Behavioral &amp; Psychiatric Health System develops and
                operates behavioral health facilities dedicated to expanding
                access to specialized psychiatric care in the communities we
                serve.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <p className="mx-auto mb-14 max-w-[700px] text-center text-[1.0625rem] leading-relaxed text-text-secondary">
              Below are the facilities currently operating or in development
              within the NBPHS network.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-col gap-6 md:gap-8">
              {facilities.map((facility) => {
                const hasWebsite = facility.href !== "#";
                const logoClassName =
                  facility.image === "/facilities/logo-mbh.png"
                    ? "scale-90 p-3"
                    : facility.image === "/facilities/trbh-logo.png"
                    ? "scale-[0.85] p-4"
                    : facility.image === "/facilities/harmony-health-logo.png"
                    ? "scale-[0.85] p-4"
                    : facility.image === "/facilities/palm-grove-logo.png"
                    ? "scale-150 p-3"
                    : facility.image === "/facilities/magnolia-logo-3.png"
                    ? "scale-110 p-3"
                    : "scale-80 p-5";

                const imageBlock = (
                  <div className="relative h-full min-h-[140px] w-full max-w-[320px] transition-transform duration-300 group-hover:scale-[1.05]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className={`object-contain ${logoClassName}`}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                );

                const logoSide = hasWebsite ? (
                  <Link
                    href={facility.href}
                    className="group flex min-h-[240px] items-center justify-center bg-white p-8"
                  >
                    {imageBlock}
                  </Link>
                ) : (
                  <div className="group flex min-h-[240px] items-center justify-center bg-white p-8">
                    {imageBlock}
                  </div>
                );

                return (
                  <article
                    key={facility.name}
                    className="overflow-hidden rounded-3xl border border-border-light bg-white shadow-sm"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {logoSide}
                      <div className="flex min-h-[240px] flex-col justify-center gap-3 border-t border-border-light bg-bg-secondary/40 p-8 md:border-t-0 md:border-l">
                        <h3 className="text-[1.25rem] font-semibold leading-tight text-primary">
                          {facility.name}
                        </h3>
                        {facility.status && (
                          <div className="mt-2 flex flex-wrap items-center gap-3">
                            <span className="text-xs font-medium uppercase tracking-[0.12em] text-text-light">
                              Coming Soon
                            </span>
                            <span className="inline-flex rounded-full bg-accent-bg px-3 py-1 text-xs font-semibold text-accent">
                              {facility.status}
                            </span>
                          </div>
                        )}
                        {facility.mapUrl && (
                          <a
                            href={facility.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-primary"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4 shrink-0"
                            >
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            View on Google Maps
                            <span aria-hidden="true">→</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
