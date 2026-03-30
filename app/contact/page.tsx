import Hero from "@/components/Hero";
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact National Behavioral & Psychiatric Health System for inquiries about our behavioral health facilities and development initiatives.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        image="/hero-image-2.jpg"
        imageAlt="A healthcare office environment with team support."
        label="Contact"
        title="Contact Us"
        subtitle="National Behavioral & Psychiatric Health System welcomes inquiries from physicians, healthcare partners, and community organizations interested in learning more about our facilities and development initiatives."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[1.75rem] font-bold leading-[1.2] tracking-tight text-primary">
                Get In Touch
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                For general inquiries regarding NBPHS or our behavioral health
                facilities, please contact:
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
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
                <div className="flex items-start gap-4">
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
                      NBPHS
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border-light bg-bg-secondary p-6">
                <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                  For information about individual behavioral health facilities,
                  please visit the{" "}
                  <Link
                    href="/facilities"
                    className="font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    Facilities page
                  </Link>{" "}
                  where each hospital is linked directly to its website.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-border-light bg-white p-7 shadow-lg md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
