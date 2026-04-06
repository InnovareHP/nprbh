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
    location: "Pennsylvania",
    status: null,
    image: "/facilities/trbh-logo.png",
    href: "https://trbhcares.com/",
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
    image: "/facilities/logo-mbh.png",
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
    image: "/facilities/palm-grove-logo.png",
    href: "https://www.palmgrovehealthcenter.com/",
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
          <AnimatedSection>
            <div className="overflow-hidden rounded-3xl border border-border-light bg-border-light shadow-sm">
              <div className="grid grid-cols-1 gap-px bg-border-light sm:grid-cols-2 lg:grid-cols-3">
                {facilities.map((facility) => {
                  const hasWebsite = facility.href !== "#";
                  const logoClassName =
                    facility.image === "/facilities/logo-mbh.png"
                      ? "scale-100 p-3"
                      : facility.image === "/facilities/trbh-logo.png"
                      ? "scale-95 p-4"
                      : facility.image === "/facilities/harmony-health-logo.png"
                      ? "scale-95 p-4"
                      : facility.image === "/facilities/palm-grove-logo.png"
                      ? "scale-150 p-3"
                      : "scale-90 p-5";

                  if (hasWebsite) {
                    return (
                      <Link
                        key={facility.name}
                        href={facility.href}
                        className="group flex min-h-[220px] items-center justify-center bg-white p-8 transition-colors hover:bg-bg-secondary/70"
                      >
                        <div className="relative h-full min-h-[110px] w-full max-w-[280px]">
                          <Image
                            src={facility.image}
                            alt={facility.name}
                            fill
                            className={`object-contain transition-transform duration-300 group-hover:scale-[1.02] ${logoClassName}`}
                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </Link>
                    );
                  }

                  return (
                    <article
                      key={facility.name}
                      className="flex min-h-[220px] flex-col items-center justify-center bg-white px-8 py-10 text-center"
                    >
                      <h3 className="max-w-[18ch] text-[1.125rem] font-semibold leading-tight text-primary">
                        {facility.name}
                      </h3>
                      {facility.status && (
                        <span className="mt-4 inline-flex rounded-full bg-accent-bg px-3 py-1 text-xs font-semibold text-accent">
                          {facility.status}
                        </span>
                      )}
                      <span className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-text-light">
                        Coming Soon
                      </span>
                    </article>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
