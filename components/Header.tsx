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
    <header className="sticky top-0 z-50 h-24 border-b border-border-light bg-white/97 backdrop-blur-sm sm:h-28">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="z-50 flex shrink-0 items-center gap-3"
          aria-label="NBPHS Home"
        >
          <Image
            src="/NBPHS Logo.png"
            alt="NBPHS Logo"
            width={140}
            height={140}
            className="h-auto w-[124px] sm:w-[146px] lg:w-[152px]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`${
            mobileOpen
              ? "pointer-events-auto fixed inset-x-0 top-24 h-[calc(100dvh-6rem)] translate-x-0 overflow-y-auto bg-white px-6 py-4 sm:top-28 sm:h-[calc(100dvh-7rem)] xl:static xl:ml-auto xl:h-auto xl:overflow-visible xl:bg-transparent xl:p-0"
              : "pointer-events-none fixed inset-x-0 top-24 h-[calc(100dvh-6rem)] translate-x-full overflow-y-auto bg-white px-6 py-4 sm:top-28 sm:h-[calc(100dvh-7rem)] xl:pointer-events-auto xl:static xl:ml-auto xl:h-auto xl:translate-x-0 xl:overflow-visible xl:flex-row xl:items-center xl:gap-1 xl:bg-transparent xl:p-0"
          } flex flex-col transition-transform duration-300 xl:flex xl:translate-x-0 xl:flex-row xl:items-center xl:gap-1 xl:bg-transparent xl:p-0`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md border-b border-border-light px-4 py-4 text-[1.0625rem] font-medium transition-colors hover:bg-bg-secondary hover:text-primary xl:border-0 xl:px-3 xl:py-2 xl:text-sm ${
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-text-secondary"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 rounded-md bg-accent px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md xl:mt-0 xl:ml-3"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="flex flex-col justify-center gap-[5px] p-1 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-7 rounded-full bg-primary transition-transform ${
              mobileOpen ? "translate-x-0 translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full bg-primary transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 rounded-full bg-primary transition-transform ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
