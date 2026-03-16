import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our portfolio of behavioral health facilities — purpose-built environments designed for clinical excellence and patient care.",
};

const placeholders = [
  { id: 1, label: "Facility Exterior", category: "Exterior" },
  { id: 2, label: "Patient Common Area", category: "Interior" },
  { id: 3, label: "Therapy Room", category: "Clinical" },
  { id: 4, label: "Administrative Wing", category: "Interior" },
  { id: 5, label: "Outdoor Healing Garden", category: "Exterior" },
  { id: 6, label: "Group Session Room", category: "Clinical" },
  { id: 7, label: "Reception & Welcome Area", category: "Interior" },
  { id: 8, label: "Dining Hall", category: "Interior" },
  { id: 9, label: "Facility Aerial View", category: "Exterior" },
  { id: 10, label: "Private Consultation Room", category: "Clinical" },
  { id: 11, label: "Recreation Space", category: "Interior" },
  { id: 12, label: "Building Entrance", category: "Exterior" },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        label="Our Portfolio"
        title="Facility Gallery"
        subtitle="Purpose-built behavioral health environments designed for healing, dignity, and clinical excellence."
      />

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {placeholders.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-xl border border-border-light bg-white transition-all hover:-translate-y-0.5 hover:border-border hover:shadow-lg"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-linear-to-br from-bg-secondary to-[#e8edf3]">
                  <div className="flex flex-col items-center gap-2.5">
                    <span className="text-[1.75rem] opacity-50">📷</span>
                    <span className="px-4 text-center text-xs text-text-light">
                      {item.label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[0.6875rem] font-semibold uppercase tracking-widest text-accent">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-[0.9375rem] font-semibold text-primary">
                    {item.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border-light bg-bg-secondary p-8 text-center">
            <p className="text-[0.9375rem] italic text-text-secondary">
              Facility photography coming soon. This gallery will be updated
              with images from our portfolio of behavioral health facilities
              across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-white">
              Interested in Our Facilities?
            </h2>
            <p className="mt-4 max-w-[480px] text-[1.0625rem] leading-relaxed text-on-dark-muted">
              Contact us to learn more about our facility development process
              and current portfolio.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-10 py-[18px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover hover:shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
