import AnimatedSection from "@/components/AnimatedSection";
import Hero from "@/components/Hero";
import Link from "next/link";
import ContactForm from "./contact/ContactForm";

export default function Home() {
  return (
    <>
      <Hero
        size="full"
        align="left"
        image="/hero-image-1.jpg"
        imageAlt="A calm, professional healthcare environment representing behavioral health care."
        overlayClassName="bg-black/60"
        showStats
        title="Expanding Access to Specialized Behavioral Health Care"
        subtitle="National Behavioral & Psychiatric Health System develops and operates behavioral health facilities dedicated to providing specialized psychiatric care for adults and seniors. The standard we hold ourselves to is simple: the care we provide should reflect the care we would want for our own families."
      >
        <Link
          href="/facilities"
          className="inline-flex items-center justify-center rounded-md border-2 border-accent bg-accent px-10 py-[18px] text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-accent-hover hover:bg-accent-hover hover:shadow-md"
        >
          Our Facilities
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-10 py-[18px] text-base font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
        >
          About NBPHS
        </Link>
      </Hero>

      {/* About Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="flex max-w-[800px] flex-col gap-4">
            <AnimatedSection>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                About Us
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                National Behavioral &amp; Psychiatric Health System develops and
                operates inpatient behavioral health facilities dedicated to
                expanding access to specialized psychiatric care in communities
                where services are limited.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Our facilities are structured to support adults and seniors
                experiencing serious behavioral health conditions while
                providing thoughtful environments for both patients and the
                clinical teams who care for them.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Link
                href="/about"
                className="mt-2 inline-flex w-fit items-center justify-center rounded-md border-2 border-border bg-transparent px-8 py-3.5 text-[0.9375rem] font-semibold text-primary transition-all hover:border-primary hover:bg-bg-secondary"
              >
                Learn More
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="bg-bg-dark py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="max-w-[640px]">
            <AnimatedSection>
              <p className="text-[1.0625rem] leading-relaxed text-on-dark-muted">
                NBPHS is actively developing and operating behavioral health
                facilities across multiple states.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-on-dark-muted">
                Each facility is structured to support specialized psychiatric
                care while serving patients, families, and referring healthcare
                providers.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <Link
                href="/facilities"
                className="mt-8 inline-flex items-center justify-center rounded-md border-2 border-white/40 bg-transparent px-8 py-3.5 text-[0.9375rem] font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
              >
                View Facilities
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              <AnimatedSection direction="left">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  Contact
                </span>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.1}>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
                  Get In Touch
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                  National Behavioral &amp; Psychiatric Health System welcomes
                  inquiries from physicians, healthcare partners, and community
                  organizations interested in learning more about our facilities
                  and development initiatives.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.3}>
                <div className="mt-2 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-xl">
                    ✉
                  </span>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-light">
                      Email
                    </h3>
                    <a
                      href="mailto:info@nbphs.com"
                      className="text-base font-medium text-primary transition-colors hover:text-accent"
                    >
                      info@nbphs.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.35}>
                <div className="mt-2 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-xl">
                    ✉
                  </span>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-light">
                      Direct Email
                    </h3>
                    <a
                      href="mailto:sarah.cotterill@gmail.com"
                      className="text-base font-medium text-primary transition-colors hover:text-accent"
                    >
                      sarah.cotterill@gmail.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.4}>
                <div className="mt-2 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-xl">
                    ☎
                  </span>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-light">
                      Phone
                    </h3>
                    <a
                      href="tel:+13179469319"
                      className="text-base font-medium text-primary transition-colors hover:text-accent"
                    >
                      (317) 946-9319
                    </a>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.45}>
                <div className="mt-2 flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-base font-semibold">
                    in
                  </span>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-light">
                      LinkedIn
                    </h3>
                    <a
                      href="https://www.linkedin.com/company/national-behavioral-psychiatric-health-system/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-base font-medium text-primary transition-colors hover:text-accent"
                    >
                      /company/national-behavioral-psychiatric-health-system
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="rounded-2xl border border-border-light bg-white p-7 shadow-lg md:p-10">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
