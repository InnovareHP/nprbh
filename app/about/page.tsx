import AnimatedSection from "@/components/AnimatedSection";
import AboutStatsBand from "@/components/AboutStatsBand";
import type { Metadata } from "next";
import Link from "next/link";

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

const leaderCardBackgrounds = [
  "from-slate-500 via-slate-400 to-stone-300",
  "from-neutral-500 via-stone-400 to-zinc-200",
  "from-slate-600 via-slate-400 to-emerald-100",
  "from-sky-700 via-slate-500 to-slate-200",
  "from-stone-700 via-stone-500 to-neutral-200",
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

const overviewStats = [
  { value: "6", label: "Behavioral Health Facilities" },
  { value: "4", label: "States Served" },
  {
    value: "Decades",
    label: "Healthcare Development & Operations Experience",
  },
  { value: "Focused Care", label: "Adults & Seniors" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
              <span className="inline-block text-[0.72rem] font-medium uppercase tracking-[0.42em] text-accent">
                About NBPHS
              </span>
              <h1 className="mt-5 text-[clamp(2.3rem,5vw,4rem)] font-light uppercase leading-none tracking-[0.08em] text-text-primary">
                About Us
              </h1>
              <p className="mt-8 max-w-[620px] text-[1rem] leading-8 text-text-secondary sm:text-[1.0625rem]">
                National Behavioral &amp; Psychiatric Health System (NBPHS)
                develops and operates inpatient behavioral health facilities
                dedicated to providing specialized psychiatric care for adults and
                seniors. We were formed to help address a clear gap in behavioral
                health care by developing facilities specifically structured for
                this level of care.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative h-[52svh] min-h-[340px] sm:h-[58svh] sm:min-h-[400px] md:h-[68svh] md:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale md:bg-fixed"
          style={{ backgroundImage: 'url("/hero-about-2.jpg")' }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/18" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex -translate-y-1/2 justify-center">
          <a
            href="#about-content"
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-light shadow-sm transition-all hover:border-primary/30 hover:text-primary sm:h-12 sm:w-12"
            aria-label="Scroll to about content"
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
        <div className="absolute inset-x-0 bottom-0 z-10">
          <AboutStatsBand stats={overviewStats} />
        </div>
      </section>
      {/* Main Description */}
      <section id="about-content" className="bg-white pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto flex max-w-[800px] flex-col gap-5">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Purpose
              </span>
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-[860px] rounded-2xl border border-border-light bg-bg-secondary px-8 py-10 text-center shadow-sm md:px-12 md:py-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Standard
              </span>
              <p className="mt-5 text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-[1.35] tracking-tight text-primary">
                The standard we hold ourselves to is simple: the care we provide
                should reflect the care we would want for our own families.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-bg-secondary py-16 md:py-24" id="leadership">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mb-6 flex flex-col items-center text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Leadership
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
                Leadership Team
              </h2>
            </div>
            <p className="mx-auto mb-6 max-w-[700px] text-center text-[1.0625rem] leading-relaxed text-text-secondary">
              National Behavioral &amp; Psychiatric Health System is led by a team
              with extensive experience in healthcare development, behavioral
              health operations, and hospital management.
            </p>
            <p className="mx-auto mb-14 max-w-[700px] text-center text-[0.9375rem] leading-relaxed text-text-secondary">
              Together, the NBPHS leadership team and its affiliated operational
              partners bring decades of experience supporting the development and
              operation of healthcare facilities across multiple markets.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <AnimatedSection
                key={leader.name}
                delay={index * 0.08}
              >
                <div
                  className="group relative overflow-hidden rounded-sm bg-white shadow-sm"
                >
                  <div
                    className={`relative aspect-square bg-linear-to-br ${leaderCardBackgrounds[index % leaderCardBackgrounds.length]}`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.28),transparent_32%),linear-gradient(to_top,rgba(0,0,0,0.38),rgba(0,0,0,0.02))]" />
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 md:group-hover:bg-black/35" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[4.5rem] font-semibold tracking-[0.08em] text-white/88 transition-transform duration-500 md:group-hover:scale-105">
                        {leader.initials}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/82 via-black/35 to-transparent p-5 text-white transition-all duration-300 md:translate-y-6 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                      <h3 className="text-lg font-semibold leading-tight">
                        {leader.name}
                      </h3>
                      <p className="mt-2 text-[0.72rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-white/85">
                        {leader.title}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border-light bg-white px-5 py-4 text-center md:hidden">
                    <h3 className="text-lg font-semibold leading-tight text-primary">
                      {leader.name}
                    </h3>
                    <p className="mt-2 text-[0.72rem] font-medium uppercase leading-relaxed tracking-[0.14em] text-accent">
                      {leader.title}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
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
                    <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Each facility is structured to support both patients and the
                clinicians who care for them.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
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
          </AnimatedSection>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mb-14 flex flex-col items-center text-center">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Principles
              </span>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
                Our Principles
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.08}>
                <div className="rounded-2xl border border-border-light bg-white p-8 shadow-sm">
                  <h3 className="mb-3 text-[1.1875rem] font-bold text-primary">
                    {principle.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                    {principle.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Platform */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
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
                    <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto max-w-[860px] rounded-2xl border border-border-light bg-bg-secondary px-8 py-10 text-center shadow-sm md:px-12 md:py-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Continue Exploring
              </span>
              <h2 className="mt-4 text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.15] tracking-tight text-text-primary">
                Learn more about our facilities and how we expand access to care.
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-[1rem] leading-relaxed text-text-secondary">
                Explore our facilities or contact our team to learn more about
                our behavioral health development and operational approach.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/facilities"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  View Facilities
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-white px-7 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-bg-primary"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
