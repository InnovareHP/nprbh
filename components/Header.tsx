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
      <div className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6 sm:px-12 lg:px-24">
        <Link
          href="/"
          className="z-50 flex shrink-0 flex-col items-center gap-1"
          aria-label="NBPHS Home"
        >
          <Image
            src="/NBPHS Logo.png"
            alt="NBPHS Logo"
            width={144}
            height={96}
            className="h-auto w-[146px] brightness-0 invert sm:w-[144px]"
          />
        </Link>

        <nav
          className={`${
            mobileOpen
              ? "fixed inset-0 top-0 z-40 flex flex-col items-center justify-center space-y-10 bg-primary"
              : "hidden xl:flex xl:items-center xl:gap-14"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-[0.24em] transition-colors hover:text-white sm:text-xs sm:tracking-[0.2em] ${
                pathname === link.href
                  ? "text-on-dark underline decoration-on-dark/50 underline-offset-8"
                  : "text-on-dark-muted"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md border border-on-dark/40 px-7 py-3 text-sm font-medium uppercase tracking-[0.22em] text-on-dark transition-colors hover:bg-white hover:text-primary sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.2em] xl:ml-2"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>

        <button
          type="button"
          className="z-50 flex flex-col justify-center gap-[7px] xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-7 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-7 bg-on-dark transition-all duration-300 ${
              mobileOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
