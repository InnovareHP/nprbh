import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#development", label: "Facility Development" },
  { href: "/services#operations", label: "Facility Operations" },
  { href: "/services#senior", label: "Senior Behavioral Health" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#032c66] pt-20 text-on-dark-muted">
      <div className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
        <div className="grid grid-cols-1 gap-10 pb-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="NBPHS Logo"
                width={150}
                height={150}
              />
            </div>
            <p className="max-w-xs text-[0.9375rem] leading-relaxed text-on-dark-muted">
              Developing and operating behavioral health facilities that deliver
              exceptional care for adults and seniors across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[0.8125rem] font-bold uppercase tracking-widest text-on-dark">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] text-on-dark-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[0.8125rem] font-bold uppercase tracking-widest text-on-dark">
              Services
            </h4>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] text-on-dark-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="mb-1 text-[0.8125rem] font-bold uppercase tracking-widest text-on-dark">
              Contact
            </h4>
            <a
              href="mailto:sarah.cotterill@gmail.com"
              className="text-[0.9375rem] text-on-dark-muted transition-colors hover:text-white"
            >
              sarah.cotterill@gmail.com
            </a>
            <a
              href="tel:+13179469319"
              className="text-[0.9375rem] text-on-dark-muted transition-colors hover:text-white"
            >
              (317) 946-9319
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-[0.8125rem] text-on-dark-muted">
          <p>
            &copy; {year} National Behavioral &amp; Psychiatric Health System.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
