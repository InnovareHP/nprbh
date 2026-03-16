import Link from "next/link";
import Hero from "@/components/Hero";

const services = [
  {
    icon: "🏗",
    title: "Facility Development",
    description:
      "From site selection through construction, we develop purpose-built behavioral health facilities designed for clinical excellence and operational efficiency.",
  },
  {
    icon: "⚙",
    title: "Facility Operations",
    description:
      "We operate behavioral health facilities with a focus on clinical quality, regulatory compliance, and sustainable financial performance.",
  },
  {
    icon: "🤝",
    title: "Senior Behavioral Health",
    description:
      "Specialized behavioral health programs designed to meet the unique needs of older adults, integrating evidence-based treatment models.",
  },
];

const leaders = [
  { name: "Sarah Cotterill", title: "Chief Executive Officer", initials: "SC" },
  { name: "James Mitchell", title: "Chief Operating Officer", initials: "JM" },
  { name: "Dr. Rebecca Lin", title: "Chief Medical Officer", initials: "RL" },
];

const stats = [
  { value: "Nationwide", label: "Facility Reach" },
  { value: "Adults & Seniors", label: "Populations Served" },
  { value: "Full-Spectrum", label: "Behavioral Health Services" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        size="full"
        align="left"
        label="Behavioral Healthcare Excellence"
        title="Building the Future of Behavioral & Psychiatric Health"
        subtitle="We develop and operate behavioral health facilities that deliver compassionate, high-quality care for adults and seniors across the nation."
      >
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-10 py-[18px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover hover:shadow-md"
        >
          Partner With Us
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-10 py-[18px] text-base font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
        >
          Learn More
        </Link>
      </Hero>

      {/* Stats Bar */}
      <section className="border-b-[3px] border-accent bg-primary">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 px-6 py-8 md:grid-cols-3 md:gap-8 md:py-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-row items-baseline justify-center gap-3 text-center md:flex-col md:gap-1.5"
            >
              <span className="text-xl font-bold text-white">{stat.value}</span>
              <span className="text-[0.8125rem] font-medium uppercase tracking-widest text-on-dark-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Who We Are
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
                A National Leader in Behavioral Health Development
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                National Behavioral &amp; Psychiatric Health System is dedicated
                to addressing the growing need for behavioral health services
                across the United States. We combine deep healthcare expertise
                with proven operational models to develop and manage facilities
                that make a meaningful difference in the lives of patients and
                communities.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Our integrated approach spans the full lifecycle of behavioral
                health facilities — from strategic development and design
                through day-to-day clinical operations — ensuring every facility
                meets the highest standards of care.
              </p>
              <Link
                href="/about"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-md border-2 border-border bg-transparent px-8 py-3.5 text-[0.9375rem] font-semibold text-primary transition-all hover:border-primary hover:bg-bg-secondary"
              >
                About Our Company
              </Link>
            </div>
            <div className="pt-0 lg:pt-12">
              <div className="rounded-2xl border border-accent/10 bg-accent-bg p-9">
                <span className="mb-4 block text-2xl text-accent">✦</span>
                <h3 className="mb-3 text-lg font-bold text-primary">
                  Our Mission
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                  To expand access to high-quality behavioral health services by
                  developing and operating facilities that prioritize clinical
                  excellence, patient dignity, and community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              What We Do
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">
              We provide end-to-end behavioral health solutions, from facility
              development to clinical operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border-light bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-border hover:shadow-lg"
              >
                <span className="mb-5 block text-[2rem]">{service.icon}</span>
                <h3 className="mb-3 text-[1.1875rem] font-bold text-primary">
                  {service.title}
                </h3>
                <p className="flex-1 text-[0.9375rem] leading-relaxed text-text-secondary">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Leadership
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Meet Our Team
            </h2>
            <p className="mt-5 max-w-[600px] text-lg leading-relaxed text-text-secondary">
              Experienced leaders in behavioral healthcare, facility operations,
              and clinical excellence.
            </p>
          </div>
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-light text-[1.75rem] font-bold tracking-wide text-white">
                  {leader.initials}
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {leader.name}
                </h3>
                <p className="text-sm font-medium text-text-secondary">
                  {leader.title}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/about#leadership"
              className="inline-flex items-center justify-center rounded-md border-2 border-border bg-transparent px-8 py-3.5 text-[0.9375rem] font-semibold text-primary transition-all hover:border-primary hover:bg-bg-secondary"
            >
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="bg-bg-dark py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-[640px]">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
              Our Portfolio
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              Facilities Built for Excellence
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-on-dark-muted">
              Each facility in our portfolio is purpose-designed to support
              evidence-based behavioral health treatment. From therapeutic
              environments to operational infrastructure, every detail is
              planned to promote healing and recovery.
            </p>
            <Link
              href="/gallery"
              className="mt-8 inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-8 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-accent to-accent-hover py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="max-w-[600px] text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-tight text-white">
              Ready to Transform Behavioral Healthcare?
            </h2>
            <p className="mt-4 max-w-[520px] text-[1.0625rem] leading-relaxed text-white/85">
              Whether you&apos;re exploring facility development, seeking an
              operational partner, or looking to expand behavioral health
              services, we&apos;re here to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-white bg-white px-10 py-[18px] text-base font-bold text-primary transition-all hover:-translate-y-0.5 hover:bg-bg-secondary hover:shadow-lg sm:w-auto"
              >
                Contact Us Today
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-10 py-[18px] text-base font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10 sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
