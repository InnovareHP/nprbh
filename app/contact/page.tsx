import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NBPHS to discuss facility development, operational partnerships, or senior behavioral health programs.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="small"
        align="center"
        label="Get In Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out to discuss how we can work together to advance behavioral healthcare."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-8">
              <h2 className="text-[1.75rem] font-bold leading-[1.2] tracking-tight text-primary">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-[1.0625rem] leading-relaxed text-text-secondary">
                Whether you&apos;re exploring a new facility development,
                looking for an operational partner, or want to learn more about
                our senior behavioral health programs, we&apos;re here to help.
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
                      href="mailto:sarah.cotterill@gmail.com"
                      className="text-base font-medium text-primary transition-colors hover:text-accent"
                    >
                      sarah.cotterill@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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

                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-xl">
                    👤
                  </span>
                  <div>
                    <h3 className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-light">
                      Contact Person
                    </h3>
                    <span className="text-base font-medium text-primary">
                      Sarah Cotterill
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border-light bg-bg-secondary p-6">
                <h3 className="mb-2 text-sm font-bold text-primary">
                  Office Hours
                </h3>
                <p className="text-[0.9375rem] text-text-secondary">
                  Monday – Friday: 8:00 AM – 6:00 PM EST
                </p>
                <p className="mt-2 text-[0.8125rem] italic text-text-light">
                  We respond to all inquiries within one business day.
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
