import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about National Behavioral & Psychiatric Health System — our mission, approach, and leadership in behavioral healthcare facility development and operations.",
};

const principles = [
  {
    title: "Respect for every patient",
    text: "Behavioral health care begins with recognizing the dignity and life experience of every individual we serve.",
  },
  {
    title: "Thoughtful environments support healing",
    text: "Facilities should be structured around the realities of psychiatric care and the needs of both patients and clinical teams.",
  },
  {
    title: "Care that families can trust",
    text: "We measure our work against a simple standard: the care provided should reflect the care we would want for our own families.",
  },
];

const leaders = [
  {
    name: "Morris D. Long",
    title: "Founder & Chief Executive Officer",
    initials: "ML",
  },
  {
    name: "Kyle D. Small",
    title: "Founder & Chief Financial Officer",
    initials: "KS",
  },
  {
    name: "Sarah Dansker Cotterill",
    title: "General Counsel & Vice President, Strategic Initiatives",
    initials: "SC",
  },
  {
    name: "Elizabeth Jachim",
    title: "Chief Nursing Officer",
    initials: "EJ",
  },
  {
    name: "Randy Holland",
    title: "Chief Facilities Officer",
    initials: "RH",
  },
];

const operationalServices = [
  "Behavioral health hospital management",
  "Billing and revenue cycle management",
  "Utilization review and payer coordination",
  "Clinical compliance and regulatory oversight",
  "Facility development and operational support",
];

const approachItems = [
  "Developing purpose-built behavioral health facilities",
  "Supporting clinical teams that specialize in complex psychiatric populations",
  "Creating therapeutic environments that prioritize safety and stability",
  "Partnering with physicians, hospitals, and communities to expand access to care",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        image="/hero-about.jpg"
        imageAlt="Healthcare professionals collaborating in a clinical setting."
        label="About NBPHS"
        title="National Behavioral & Psychiatric Health System"
      />

      {/* Main Description */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto max-w-[800px] flex flex-col gap-5">
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              National Behavioral &amp; Psychiatric Health System (NBPHS)
              develops and operates inpatient behavioral health facilities
              dedicated to providing specialized psychiatric care for adults and
              seniors.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Across the country, families and healthcare providers struggle to
              find appropriate care for individuals experiencing serious
              behavioral health conditions. The shortage of inpatient
              psychiatric capacity is particularly acute for older adults, who
              often face both psychiatric and medical complexities.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              NBPHS was formed to help address that gap by developing facilities
              specifically structured to provide this level of care.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Our team has spent years working in healthcare systems where
              families were trying to find the right place for a loved one and
              simply could not. NBPHS was created to help change that.
            </p>
            <p className="text-[1.0625rem] font-semibold leading-relaxed text-primary">
              The standard we hold ourselves to is simple: the care we provide
              should reflect the care we would want for our own families.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto max-w-[800px] flex flex-col gap-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Why It Matters
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Why It Matters
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Behavioral health crises affect entire families. When appropriate
              care is not available, patients are often treated in settings that
              were never structured to meet their needs.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              For seniors, the challenge can be even greater. Cognitive decline,
              depression, medical illness, and psychiatric conditions often
              occur together, yet the healthcare system rarely provides
              environments structured to treat these needs in an integrated way.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              We believe older adults deserve thoughtful, specialized care
              delivered in environments that respect their dignity and life
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto max-w-[800px] flex flex-col gap-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our Approach
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Our Approach
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              NBPHS brings together healthcare development experience,
              behavioral health operations, and clinical collaboration to create
              facilities structured around the realities of psychiatric care.
            </p>
            <p className="text-[1.0625rem] font-semibold leading-relaxed text-primary">
              Our work focuses on:
            </p>
            <ul className="flex flex-col gap-3.5">
              {approachItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-text-secondary"
                >
                  <span className="mt-px shrink-0 font-bold text-accent">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Each facility is structured to support both patients and the
              clinicians who care for them.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto max-w-[800px] flex flex-col gap-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Our Commitment
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Our Commitment
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Behavioral health care requires patience, experience, and
              consistency. Facilities must be structured carefully, staffed
              thoughtfully, and operated with a clear understanding of the needs
              of patients, families, and clinical teams.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              NBPHS is building a network of behavioral health facilities with a
              long-term perspective focused on providing care that communities
              can rely on and environments where patients are treated with
              respect.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              Our goal is not simply to add capacity to the healthcare system,
              but to contribute to a more thoughtful and effective approach to
              inpatient behavioral health care.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Principles
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Our Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-border-light bg-white p-8 shadow-sm"
              >
                <h3 className="mb-3 text-[1.1875rem] font-bold text-primary">
                  {principle.title}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-bg-secondary py-16 md:py-24" id="leadership">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mb-6 flex flex-col items-center text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Leadership
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Leadership Team
            </h2>
          </div>
          <p className="mx-auto mb-14 max-w-[700px] text-center text-[1.0625rem] leading-relaxed text-text-secondary">
            National Behavioral &amp; Psychiatric Health System is led by a team
            with extensive experience in healthcare development, behavioral
            health operations, and hospital management.
          </p>
          <p className="mx-auto mb-14 max-w-[700px] text-center text-[0.9375rem] leading-relaxed text-text-secondary">
            Together, the NBPHS leadership team and its affiliated operational
            partners bring decades of experience supporting the development and
            operation of healthcare facilities across multiple markets.
          </p>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col items-center gap-5 text-center"
              >
                <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-light text-[2rem] font-bold tracking-wide text-white">
                  {leader.initials}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[1.1875rem] font-bold text-primary">
                    {leader.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Platform */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto max-w-[800px] flex flex-col gap-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Operational Platform
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Operational Platform
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
              NBPHS facilities are supported by experienced operational
              infrastructure providing services including:
            </p>
            <ul className="flex flex-col gap-3.5">
              {operationalServices.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-text-secondary"
                >
                  <span className="mt-px shrink-0 font-bold text-accent">
                    ✓
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
