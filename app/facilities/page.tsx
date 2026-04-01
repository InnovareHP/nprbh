import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";

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
              <span className="inline-block text-[0.72rem] font-medium uppercase tracking-[0.42em] text-accent">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => {
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
                  <AnimatedSection
                    key={facility.name}
                    delay={index * 0.08}
                    direction={index % 2 === 0 ? "up" : "none"}
                  >
                    <Link href={facility.href} className={cardClassName}>
                      {cardContent}
                    </Link>
                  </AnimatedSection>
                );
              }

              return (
                <AnimatedSection
                  key={facility.name}
                  delay={index * 0.08}
                  direction={index % 2 === 0 ? "up" : "none"}
                >
                  <article className={cardClassName}>{cardContent}</article>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
