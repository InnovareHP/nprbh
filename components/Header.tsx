"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/facilities", label: "Facilities" },
  { href: "/services", label: "Services" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 h-32 bg-primary sm:h-40">
      {/* max-w-[1100px] ensures the content stays centered.
        px-12 and lg:px-24 provide the large margins on the left and right.
      */}
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-12 lg:px-24">
        {/* Logo Section */}
        <Link
          href="/"
          className="z-50 flex shrink-0 flex-col items-center gap-1"
          aria-label="NBPHS Home"
        >
          <Image
            src="/NBPHS Logo.png"
            alt="NBPHS Logo"
            /* Enlarged by 20% (120 * 1.2 = 144) */
            width={144}
            height={96}
            /* Invert keeps the logo readable against the dark navbar background. */
            className="h-auto w-[124px] brightness-0 invert sm:w-[144px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`${
            mobileOpen
              ? "fixed inset-0 top-0 z-40 flex flex-col items-center justify-center space-y-8 bg-primary"
              : "hidden xl:flex xl:items-center xl:gap-14"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-white ${
                pathname === link.href
                  ? "text-on-dark underline underline-offset-8 decoration-on-dark/50"
                  : "text-on-dark-muted"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-on-dark/40 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-on-dark transition-colors hover:bg-white hover:text-primary xl:ml-2"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile Toggle Button (Hamburger) */}
        <button
          type="button"
          className="z-50 flex flex-col justify-center gap-[6px] xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
