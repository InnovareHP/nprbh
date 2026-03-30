"use client";

import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieDisclosureBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsEntered(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  function handleDismiss() {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsVisible(false);
    }, 220);
  }

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-60 px-3 pb-3 transition-all duration-300 sm:px-5 sm:pb-5 ${
        isClosing
          ? "translate-y-2 opacity-0"
          : isEntered
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >
      <div
        className="mx-auto max-w-[1200px] overflow-hidden rounded-2xl border border-white/10 bg-bg-darker/95 shadow-[0_-12px_36px_rgba(3,44,101,0.28)] backdrop-blur-md"
      >
        <div className="h-1 w-full bg-linear-to-r from-accent via-primary-light to-gold" />
        <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="max-w-[860px]">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-on-dark">
                <Cookie className="h-4 w-4" />
              </span>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-on-dark">
                Cookie Notice
              </p>
            </div>
            <p className="mt-2.5 max-w-[780px] text-[0.9375rem] leading-7 text-on-dark-muted">
              We use cookies and similar technologies to support essential site
              functionality and improve your browsing experience.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.875rem] text-on-dark-muted">
              <Link
                href="mailto:info@nbphs.com"
                className="font-medium text-on-dark transition-colors hover:text-white"
              >
                Email us
              </Link>
              <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:inline-block" />
              <span>
                Questions?{" "}
              </span>
              <Link
                href="mailto:info@nbphs.com"
                className="font-medium text-on-dark transition-colors hover:text-white"
              >
                info@nbphs.com
              </Link>
            </div>
          </div>

          <div className="flex items-center self-end sm:self-start lg:shrink-0">
            <button
              type="button"
              onClick={handleDismiss}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-white/12 text-on-dark-muted transition-all hover:scale-[1.02] hover:bg-white/8 hover:text-white"
              aria-label="Close cookie notice"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
