"use client";

import { registerCookie } from "@/app/action/register-cookie";
import { Info, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CookieDisclosureBannerProps {
  hasAccepted: boolean;
}
export default function CookieDisclosureBanner({
  hasAccepted,
}: CookieDisclosureBannerProps) {
  const [isDesktopVisible, setIsDesktopVisible] = useState(false);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileClosing, setIsMobileClosing] = useState(false);
  const [isDesktopClosing, setIsDesktopClosing] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // prevent flicker

  useEffect(() => {
    if (hasAccepted) {
      setIsChecked(true);
    } else {
      setIsDesktopVisible(true);
      setIsMobileVisible(true);

      const animationFrame = window.requestAnimationFrame(() => {
        setIsEntered(true);
      });

      return () => window.cancelAnimationFrame(animationFrame);
    }

    setIsChecked(true);
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

  async function handleAccept() {
    await registerCookie();
    closeMobileBanner();
    closeDesktopBanner();
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
        className={`w-full rounded-2xl border border-white/8 text-white shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-md ${
          className ?? ""
        }`}
        style={{ backgroundColor: "rgba(37, 37, 37, 0.96)" }}
      >
        <div className="relative p-4 sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="group absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/8 text-white/75 transition-all hover:scale-[1.02] hover:bg-white/8 hover:text-white"
          >
            <X className="h-[18px] w-[18px]" />
          </button>

          <div className="pr-12">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/6">
                <Info className="h-[16px] w-[16px]" />
              </span>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em]">
                Cookie Notice
              </p>
            </div>

            <p className="mt-3 text-[0.92rem] leading-7 text-white/88">
              We use cookies to support essential site functionality and improve
              your browsing experience.
            </p>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleAccept}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Accept
              </button>

              <button
                onClick={onClose}
                className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                Decline
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.875rem] text-white/65">
              <Link
                href="mailto:info@nbphs.com"
                className="font-medium text-white/92 hover:text-white"
              >
                Email us
              </Link>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline-block" />
              <span>info@nbphs.com</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Prevent rendering before cookie check
  if (!isChecked && !isDesktopVisible && !isMobileVisible) return null;

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
      {/* Mobile floating button */}
      {isMobileVisible && (
        <div className="fixed bottom-4 right-4 z-60 sm:hidden">
          <button
            onClick={openMobileBanner}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white shadow transition ${
              isMobileOpen ? "opacity-0 scale-95" : "opacity-100"
            }`}
            style={{ backgroundColor: "rgba(37, 37, 37, 0.96)" }}
          >
            <Info className="h-[18px] w-[18px]" />
          </button>
        </div>
      )}

      {/* Mobile banner */}
      {isMobileVisible && (
        <div
          className={`fixed bottom-0 left-4 right-4 z-60 pb-4 transition-all sm:hidden ${mobilePanelState}`}
        >
          {renderBanner({ onClose: closeMobileBanner })}
        </div>
      )}

      {/* Desktop banner */}
      {isDesktopVisible && (
        <div
          className={`fixed bottom-0 right-6 z-60 hidden w-[min(420px,calc(100vw-3rem))] pb-6 transition-all sm:block ${desktopPanelState}`}
        >
          {renderBanner({ onClose: closeDesktopBanner })}
        </div>
      )}
    </>
  );
}
