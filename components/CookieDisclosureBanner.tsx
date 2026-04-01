"use client";

import { Info, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieDisclosureBanner() {
  const [isDesktopVisible, setIsDesktopVisible] = useState(true);
  const [isMobileVisible, setIsMobileVisible] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileClosing, setIsMobileClosing] = useState(false);
  const [isDesktopClosing, setIsDesktopClosing] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsEntered(true);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  function closeMobileBanner() {
    setIsMobileClosing(true);
    window.setTimeout(() => {
      setIsMobileOpen(false);
      setIsMobileVisible(false);
      setIsMobileClosing(false);
    }, 220);
  }

  function closeDesktopBanner() {
    setIsDesktopClosing(true);
    window.setTimeout(() => {
      setIsDesktopVisible(false);
      setIsDesktopClosing(false);
    }, 220);
  }

  function openMobileBanner() {
    setIsMobileClosing(false);
    setIsMobileOpen(true);
  }

  function renderBanner({
    onClose,
    className,
  }: {
    onClose: () => void;
    className?: string;
  }) {
    return (
      <div
        className={`w-full rounded-2xl border border-white/8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-md ${className ?? ""}`}
        style={{ backgroundColor: "rgba(37, 37, 37, 0.96)" }}
      >
        <div className="h-1 w-full rounded-t-2xl bg-linear-to-r from-[#5d5d5d] via-white/40 to-[#8a8a8a]" />
        <div className="relative p-4 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="group absolute right-3 top-3 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/8 text-white/75 transition-all hover:scale-[1.02] hover:bg-white/8 hover:text-white sm:right-4 sm:top-4"
            aria-label="Close cookie notice"
          >
            <X className="h-[18px] w-[18px]" />
          </button>

          <div className="pr-12 sm:pr-14">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/6 text-white/92">
                <Info className="h-[16px] w-[16px]" />
              </span>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/82">
                Cookie Notice
              </p>
            </div>

            <p className="mt-3 text-[0.92rem] leading-7 text-white/88 sm:text-[0.95rem]">
              We use cookies to support essential site functionality and improve
              your browsing experience.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.875rem] text-white/65">
              <Link
                href="mailto:info@nbphs.com"
                className="font-medium text-white/92 transition-colors hover:text-white"
              >
                Email us
              </Link>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span className="text-white/72">info@nbphs.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mobilePanelState =
    isMobileOpen && !isMobileClosing
      ? "translate-y-0 opacity-100"
      : "translate-y-3 opacity-0 pointer-events-none";
  const desktopPanelState = isDesktopClosing
    ? "translate-y-2 opacity-0"
    : isEntered
      ? "translate-y-0 opacity-100"
      : "translate-y-3 opacity-0";

  return (
    <>
      {isMobileVisible && (
        <div className="fixed bottom-4 right-4 z-60 sm:hidden">
          <button
            type="button"
            onClick={openMobileBanner}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white shadow-[0_14px_32px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/8 ${
              isMobileOpen
                ? "pointer-events-none scale-95 opacity-0"
                : "opacity-100"
            } ${isEntered ? "translate-y-0" : "translate-y-2"}`}
            style={{ backgroundColor: "rgba(37, 37, 37, 0.96)" }}
            aria-label="Open cookie notice"
          >
            <Info className="h-[18px] w-[18px]" />
          </button>
        </div>
      )}

      {isMobileVisible && (
        <div
          className={`fixed bottom-0 left-4 right-4 z-60 pb-4 transition-all duration-300 sm:hidden ${mobilePanelState}`}
        >
          {renderBanner({ onClose: closeMobileBanner })}
        </div>
      )}

      {isDesktopVisible && (
        <div
          className={`fixed bottom-0 left-4 right-4 z-60 hidden pb-4 transition-all duration-300 sm:left-auto sm:right-6 sm:block sm:w-[min(420px,calc(100vw-3rem))] sm:pb-6 ${desktopPanelState}`}
        >
          {renderBanner({ onClose: closeDesktopBanner })}
        </div>
      )}
    </>
  );
}
