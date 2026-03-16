import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "NBPHS provides behavioral health facility development, operations management, and specialized senior behavioral health programs.",
};

const services = [
  {
    id: "development",
    icon: "🏗",
    title: "Behavioral Health Facility Development",
    subtitle: "Purpose-Built Facilities from Concept to Completion",
    description:
      "We develop behavioral health facilities designed specifically for clinical excellence. Our development process encompasses every stage — from market analysis and site selection through architectural design, construction management, and facility commissioning.",
    features: [
      "Market analysis and feasibility studies",
      "Site selection and acquisition",
      "Purpose-driven architectural design",
      "Construction oversight and project management",
      "Licensing and regulatory compliance",
      "Equipment procurement and facility commissioning",
    ],
  },
  {
    id: "operations",
    icon: "⚙",
    title: "Behavioral Health Facility Operations",
    subtitle: "Clinical Quality Meets Operational Excellence",
    description:
      "Our operations team manages the day-to-day running of behavioral health facilities with a focus on delivering exceptional patient care while maintaining financial sustainability. We bring proven systems and processes that ensure consistent quality across every facility.",
    features: [
      "Clinical program development and management",
      "Staff recruitment, training, and retention",
      "Regulatory compliance and accreditation",
      "Revenue cycle management",
      "Quality assurance and performance metrics",
      "Patient experience optimization",
    ],
  },
  {
    id: "senior",
    icon: "🤝",
    title: "Senior Behavioral Healthcare Solutions",
    subtitle: "Specialized Care for Older Adults",
    description:
      "Older adults face unique behavioral health challenges that require specialized clinical approaches. Our senior behavioral health programs are designed to address the complex intersection of psychiatric conditions, cognitive decline, and medical comorbidities that are common in aging populations.",
    features: [
      "Geriatric psychiatry program design",
      "Evidence-based treatment protocols for seniors",
      "Integration with medical and cognitive care",
      "Family education and engagement programs",
      "Discharge planning and continuity of care",
      "Specialized staff training for geriatric populations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        label="Our Services"
        title="What We Do"
        subtitle="End-to-end behavioral health solutions — from facility development through clinical operations."
      />

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 md:py-24 ${index % 2 === 1 ? "bg-bg-secondary" : ""}`}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="flex flex-col gap-4">
                <span className="text-[2.5rem]">{service.icon}</span>
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] tracking-tight text-primary">
                  {service.title}
                </h2>
                <p className="text-[1.0625rem] font-semibold text-accent">
                  {service.subtitle}
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </div>
              <div className="rounded-2xl border border-accent/10 bg-accent-bg p-7 md:p-9">
                <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-primary">
                  Key Capabilities
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[0.9375rem] leading-snug text-text-secondary"
                    >
                      <span className="mt-px shrink-0 font-bold text-accent">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-linear-to-br from-primary to-primary-light py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-white">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="mt-4 max-w-[540px] text-[1.0625rem] leading-relaxed text-on-dark-muted">
              Whether you&apos;re exploring a new facility development, seeking
              an experienced operational partner, or looking to launch senior
              behavioral health programs — we&apos;re ready to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-white bg-white px-10 py-[18px] text-base font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-bg-secondary hover:shadow-lg sm:w-auto"
              >
                Start a Conversation
              </Link>
              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-10 py-[18px] text-base font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10 sm:w-auto"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
