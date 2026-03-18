import Hero from "@/components/Hero";
import type { Metadata } from "next";

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
  },
  {
    name: "Three Rivers Residential Care",
    location: "Pennsylvania",
    status: null,
  },
  {
    name: "Harmony Behavioral Health",
    location: "Texas",
    status: null,
  },
  {
    name: "Missions Behavioral Health",
    location: "Indiana",
    status: null,
  },
  {
    name: "Magnolia Behavioral Health Pasadena",
    location: "Texas",
    status: "Opening fall 2026",
  },
  {
    name: "Palm Grove Health Center",
    location: "Florida",
    status: "Opening winter 2027",
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
        label="Our Facilities"
        title="Our Behavioral Health Facilities"
        subtitle="National Behavioral & Psychiatric Health System develops and operates behavioral health facilities dedicated to expanding access to specialized psychiatric care in the communities we serve."
      />

      {/* Facilities Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <p className="mx-auto mb-14 max-w-[700px] text-center text-[1.0625rem] leading-relaxed text-text-secondary">
            Below are the facilities currently operating or in development
            within the NBPHS network.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-border-light bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-border hover:shadow-lg"
              >
                <div className="flex aspect-16/10 items-center justify-center bg-linear-to-br from-bg-secondary to-[#e8edf3]">
                  <div className="flex flex-col items-center gap-2.5">
                    <span className="text-[2rem] opacity-50">🏥</span>
                    <span className="px-4 text-center text-xs text-text-light">
                      {facility.name}
                    </span>
                  </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
