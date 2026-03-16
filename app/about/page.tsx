import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NBPHS — our mission, vision, and leadership in behavioral healthcare facility development and operations.",
};

const leaders = [
  {
    name: "Sarah Cotterill",
    title: "Chief Executive Officer",
    initials: "SC",
    bio: "A seasoned healthcare executive with extensive experience in behavioral health facility development and operations. Sarah leads NBPHS with a vision for expanding access to quality behavioral healthcare nationwide.",
  },
  {
    name: "James Mitchell",
    title: "Chief Operating Officer",
    initials: "JM",
    bio: "Brings decades of healthcare operations expertise to NBPHS. James oversees day-to-day facility operations, ensuring clinical quality and operational excellence across all locations.",
  },
  {
    name: "Dr. Rebecca Lin",
    title: "Chief Medical Officer",
    initials: "RL",
    bio: "A board-certified psychiatrist with deep clinical experience in adult and geriatric behavioral health. Dr. Lin shapes the clinical programs and treatment protocols across all NBPHS facilities.",
  },
  {
    name: "David Thornton",
    title: "VP of Business Development",
    initials: "DT",
    bio: "Leads strategic growth initiatives, identifying new markets and partnership opportunities. David drives the expansion of NBPHS facilities into communities with the greatest need.",
  },
  {
    name: "Maria Gonzalez",
    title: "VP of Clinical Programs",
    initials: "MG",
    bio: "An experienced behavioral health clinician and administrator who develops and implements evidence-based treatment programs tailored to adult and senior populations.",
  },
];

const values = [
  {
    title: "Clinical Excellence",
    text: "Every decision we make is guided by the pursuit of the best possible patient outcomes.",
  },
  {
    title: "Community Impact",
    text: "We develop facilities where they are needed most, addressing gaps in behavioral health access.",
  },
  {
    title: "Operational Integrity",
    text: "We operate with transparency, accountability, and a commitment to regulatory compliance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        label="About NBPHS"
        title="Who We Are"
        subtitle="A national behavioral health organization committed to developing facilities and delivering care that transforms lives."
      />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-border-light bg-bg-secondary p-10 md:p-12">
              <span className="mb-5 block text-2xl text-accent">◆</span>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Our Mission
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                To expand access to high-quality behavioral health services by
                developing and operating purpose-built facilities that
                prioritize clinical excellence, patient dignity, and measurable
                outcomes for adults and seniors across the nation.
              </p>
            </div>
            <div className="rounded-2xl border border-border-light bg-bg-secondary p-10 md:p-12">
              <span className="mb-5 block text-2xl text-accent">◇</span>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Our Vision
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                To be the nation&apos;s most trusted behavioral health
                organization — recognized for building facilities and programs
                that set the standard for compassionate, evidence-based
                psychiatric care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Our Story
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
                Built on a Foundation of Purpose
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                National Behavioral &amp; Psychiatric Health System was founded
                to address a critical gap in the American healthcare landscape:
                the shortage of specialized behavioral health facilities
                equipped to serve adults and seniors with complex psychiatric
                needs.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Our founding team recognized that too many communities lacked
                access to dedicated behavioral health services. Patients were
                being treated in settings that weren&apos;t designed for their
                needs, leading to suboptimal outcomes and unnecessary
                hospitalizations.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                NBPHS was created to change that. We bring together expertise in
                healthcare real estate development, clinical program design, and
                facility operations to create behavioral health centers that are
                purpose-built from the ground up. Every facility we develop is
                designed around the patient experience — from therapeutic
                environments that promote healing to operational systems that
                ensure consistent, high-quality care.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Today, NBPHS continues to expand its footprint, bringing
                critically needed behavioral health services to communities
                across the United States.
              </p>
            </div>
            <div className="flex flex-col gap-5 pt-0 lg:pt-12">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border-l-[3px] border-l-accent bg-white p-7 shadow-sm"
                >
                  <h3 className="mb-2 text-base font-bold text-primary">
                    {value.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24" id="leadership">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Leadership
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Our Leadership Team
            </h2>
            <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">
              Experienced professionals in behavioral healthcare, facility
              development, and clinical operations.
            </p>
          </div>
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
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-secondary">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-dark py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-tight text-white">
              Interested in Working With Us?
            </h2>
            <p className="mt-4 max-w-[500px] text-[1.0625rem] leading-relaxed text-on-dark-muted">
              We&apos;re always looking for partners who share our commitment to
              behavioral health excellence.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-10 py-[18px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover hover:shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
