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
        image="/hero-image-3.jpg"
        imageAlt="A calm, professional healthcare environment representing behavioral health care."
        overlayClassName="bg-black/35"
        imageClassName="grayscale object-right sm:object-[82%_center] md:object-[72%_center] lg:object-center"
        typewriterLines={[
          "Expanding Access to",
          "Specialized Behavioral",
          "Health Care",
        ]}
        scrollTargetId="who-we-are"
      />

      <section id="who-we-are" className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <AnimatedSection>
            <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <span className="inline-block text-[1rem] font-semibold uppercase tracking-[0.3em] text-accent">
                  Who We Are
                </span>
                <h2 className="mt-5 max-w-[26ch] text-[clamp(2rem,4.6vw,3.75rem)] font-light uppercase leading-[1.08] tracking-[0.08em] text-text-primary">
                  Specialized behavioral health care with a patient-first
                  standard.
                </h2>
              </div>
              <p className="mt-8 max-w-[56ch] text-[1rem] leading-8 text-text-secondary sm:text-[1.0625rem]">
                National Behavioral &amp; Psychiatric Health System develops and
                operates behavioral health facilities dedicated to providing
                specialized psychiatric care for adults and seniors. We measure
                our work against a simple standard: the care we provide should
                reflect the care we would want for our own families.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* Facilities Preview */}
      <section className="bg-bg-dark py-16 text-on-dark md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
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
      <section className="pb-16 md:pb-24">
        <AnimatedSection>
          <div className="border-y border-border-light bg-white px-[5vw] py-12 text-center text-text-primary sm:px-6 md:py-14">
            <div className="mx-auto max-w-[760px]">
              <span className="inline-block text-[1rem] font-medium uppercase tracking-[0.45em] text-accent">
                Get In Touch
              </span>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.6rem)] font-semibold tracking-tight text-text-primary">
                Contact Our Team
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[0.98rem] leading-8 text-text-secondary">
                For any inquiries, please email us at{" "}
                <a
                  href="mailto:info@nbphs.com"
                  className="font-semibold text-primary underline-offset-4 hover:text-accent hover:underline"
                >
                  info@nbphs.com
                </a>{" "}
                or submit the contact form below.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-[1200px] px-[5vw] pt-12 sm:px-6 md:pt-16">
          <AnimatedSection delay={0.15}>
            <div className="mx-auto max-w-[760px] rounded-2xl bg-bg-secondary/45 px-5 py-6 sm:px-8 sm:py-8">
              <ContactForm variant="homeMinimal" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
