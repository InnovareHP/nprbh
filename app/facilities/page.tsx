import AnimatedSection from "@/components/AnimatedSection";
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
    location: "Pennsylvania",
    status: null,
    image: "/facilities/trbh-logo.png",
    href: "https://trbhcares.com/",
  },
  {
    name: "Three Rivers Residential Care",
    location: "Pennsylvania",
    status: null,
    image: "/facilities/rivers-residence-logo.png",
    href: "https://riversresidence.com/",
  },
  {
    name: "Harmony Behavioral Health",
    location: "Texas",
    status: null,
    image: "/facilities/harmony-health-logo.png",
    href: "https://harmonyfortworth.com/",
  },
  {
    name: "Missions Behavioral Health",
    location: "Indiana",
    status: null,
    image: "/facilities/missions-logo.png",
    href: "https://www.mbhcares.com/",
  },
  {
    name: "Magnolia Behavioral Health Pasadena",
    location: "Texas",
    status: "Opening fall 2026",
    image: "/facilities/magnolia-behavioral-health-pasadena.png",
    href: "#",
  },
  {
    name: "Palm Grove Health Center",
    location: "Florida",
    status: "Opening winter 2027",
    image: "/facilities/palm-grove-health-center.png",
    href: "#",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
              <span className="inline-block text-[0.72rem] font-medium uppercase tracking-[0.42em] text-accent">
                Facilities
              </span>
              <h1 className="mt-5 text-[clamp(2.3rem,5vw,4rem)] font-light uppercase leading-none tracking-[0.08em] text-text-primary">
                Our Behavioral Health Facilities
              </h1>
              <p className="mt-8 max-w-[620px] text-[1rem] leading-8 text-text-secondary sm:text-[1.0625rem]">
                National Behavioral &amp; Psychiatric Health System develops and
                operates behavioral health facilities dedicated to expanding
                access to specialized psychiatric care in the communities we
                serve.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative h-[52svh] min-h-[340px] sm:h-[58svh] sm:min-h-[400px] md:h-[68svh] md:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale md:bg-fixed"
          style={{ backgroundImage: 'url("/hero-facilities.jpg")' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/18" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-1/2 justify-center">
          <a
            href="#facilities-overview"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-light shadow-sm transition-all hover:border-primary/30 hover:text-primary sm:h-12 sm:w-12"
            aria-label="Scroll to facilities content"
          >
            <span className="inline-flex animate-[bounce_1.8s_ease-in-out_infinite]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      <section id="facilities-overview" className="bg-bg-secondary py-14 md:py-18">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-[760px] text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Network
              </span>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-text-secondary">
                Below are the facilities currently operating or in development
                within the NBPHS network.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const hasWebsite = facility.href !== "#";
              const cardClassName = hasWebsite
                ? "flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-border hover:shadow-lg"
                : "flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm";

              const cardContent = (
                <>
                  <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-bg-secondary to-[#e8edf3]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className={`object-contain ${
                        facility.image === "/facilities/missions-logo.png"
                          ? "p-5"
                          : "p-6"
                      }`}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-[1.0625rem] font-bold text-primary">
                      {facility.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-text-secondary">
                      {facility.location}
                    </p>
                    {facility.status && (
                      <span className="mt-3 inline-flex w-fit rounded-full bg-accent-bg px-3 py-1 text-xs font-semibold text-accent">
                        {facility.status}
                      </span>
                    )}
                    {!hasWebsite && (
                      <span className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-text-light">
                        Website Coming Soon
                      </span>
                    )}
                  </div>
                </>
              );

              if (hasWebsite) {
                return (
                  <Link
                    key={facility.name}
                    href={facility.href}
                    className={cardClassName}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article key={facility.name} className={cardClassName}>
                  {cardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
