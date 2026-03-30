"use client";

import { Info, X } from "lucide-react";
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
      className={`fixed inset-x-0 bottom-0 z-60 transition-all duration-300 ${
        isClosing
          ? "translate-y-2 opacity-0"
          : isEntered
          ? "translate-y-0 opacity-100"
          : "translate-y-3 opacity-0"
      }`}
    >
      <div className="border-t border-white/10 bg-primary text-white shadow-[0_-10px_30px_rgba(3,44,101,0.22)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Info className="h-[18px] w-[18px] shrink-0 text-white/75" />

            <p className="text-[11px] leading-snug text-white/92 sm:text-xs md:text-sm">
              We use cookies and similar technologies to support essential site
              functionality and improve your browsing experience. Email us at{" "}
              <Link
                href="mailto:info@nbphs.com"
                className="font-semibold text-white underline transition-colors hover:text-white/80"
              >
                info@nbphs.com
              </Link>{" "}
              if you encounter any issues.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="group flex shrink-0 cursor-pointer items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-white/10"
            aria-label="Close cookie notice"
          >
            <span className="hidden text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:text-white sm:inline">
              Close
            </span>
            <X className="h-[18px] w-[18px] text-white/90" />
          </button>
        </div>
      </div>
    </div>
  );
}
