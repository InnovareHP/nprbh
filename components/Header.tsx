"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-border-light bg-white/97 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="NBPHS Home"
        >
          <span className="rounded-md bg-primary px-3 py-2 text-[0.8125rem] font-extrabold tracking-wide text-white">
            NBPHS
          </span>
          <span className="hidden text-[0.6875rem] font-semibold leading-tight text-primary md:block">
            National Behavioral &<br />
            Psychiatric Health System
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`${
            mobileOpen
              ? "fixed inset-x-0 top-20 bottom-0 flex translate-x-0 flex-col bg-white px-6 py-4"
              : "fixed inset-x-0 top-20 bottom-0 flex translate-x-full flex-col bg-white px-6 py-4 md:static md:flex md:translate-x-0 md:flex-row md:items-center md:gap-1 md:bg-transparent md:p-0"
          } transition-transform duration-300 md:static md:flex md:translate-x-0 md:flex-row md:items-center md:gap-1 md:bg-transparent md:p-0`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-bg-secondary hover:text-primary md:border-0 ${
                pathname === link.href
                  ? "font-semibold text-primary"
                  : "text-text-secondary"
              } border-b border-border-light py-4 text-[1.0625rem] md:border-0 md:py-2 md:text-sm`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-6 rounded-md bg-accent px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-md md:mt-0 md:ml-3"
            onClick={() => setMobileOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="flex flex-col justify-center gap-[5px] p-1 md:hidden"
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
