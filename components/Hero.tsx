"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  label?: string;
  children?: React.ReactNode;
  size?: "full" | "medium" | "small";
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  overlayClassName?: string;
  imageClassName?: string;
  showStats?: boolean;
  typewriterLines?: string[];
  scrollTargetId?: string;
}

const sizeClasses = {
  full:
    "h-[calc(100dvh-8rem)] min-h-[22rem] px-0 py-2 sm:h-[calc(100dvh-10rem)] sm:min-h-[24rem] sm:py-3 md:py-4",
  medium:
    "min-h-[460px] pt-24 pb-16 sm:min-h-[520px] sm:pt-28 sm:pb-20 md:min-h-[500px] md:pt-32 md:pb-20",
  small:
    "min-h-[300px] pt-20 pb-12 sm:min-h-[340px] sm:pt-24 sm:pb-14 md:min-h-[320px]",
};

const stats = [
  { value: "6", label: "Behavioral Health Facilities" },
  { value: "4", label: "States Served" },
  { value: "Decades", label: "Healthcare Development & Operations Experience" },
  { value: "Focused Care", label: "Adults & Seniors" },
];

function getMobileStatLabelLines(stat: { value: string; label: string }) {
  if (stat.value === "6") return ["Behavioral Health", "Facilities"];
  if (stat.value === "4") return ["States", "Served"];
  if (stat.value === "Decades") return ["Healthcare Development", "& Operations Experience"];
  if (stat.value === "Focused Care") return ["Adults", "& Seniors"];
  return [stat.label];
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CountUpNumber({
  target,
  delay = 0,
}: {
  target: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [started, target]);

  return <span>{count}</span>;
}

function ScrollCueButton({
  scrollTargetId,
}: {
  scrollTargetId: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        document
          .getElementById(scrollTargetId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      className="group inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/45 bg-black/10 text-white transition-all hover:border-white/80 hover:bg-white/10 sm:h-12 sm:w-12"
      aria-label="Scroll to next section"
    >
      <motion.span
        animate={{ y: [-4, 6, -4] }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="inline-flex"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.span>
    </button>
  );
}

export default function Hero({
  title,
  subtitle,
  label: _label,
  children,
  size = "medium",
  align = "center",
  image = "/hero-image-1.jpg",
  imageAlt = "",
  overlayClassName = "bg-black/45",
  imageClassName = "",
  showStats = false,
  typewriterLines,
  scrollTargetId,
}: HeroProps) {
  const isCenter = align === "center";
  const isFull = size === "full";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease },
    },
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(137, 168, 235, 0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(196,154,108,0.1)_0%,transparent_50%)]" />

      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={isFull}
          className={`object-cover object-[center_58%] sm:object-[center_52%] md:object-center ${imageClassName}`}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <section
        className={`relative overflow-hidden ${sizeClasses[size]} ${
          isFull ? "flex items-center" : "flex items-center"
        }`}
      >
        {isFull ? (
          <>
            <div className="mx-auto flex h-full w-full max-w-[1100px] flex-col justify-end px-6 pb-16 pt-3 sm:justify-center sm:px-12 sm:pb-16 sm:pt-4 lg:px-24">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`relative w-full ${
                  isCenter
                    ? "mx-auto flex max-w-[980px] flex-col items-center text-center"
                    : "max-w-[760px]"
                }`}
              >
                {typewriterLines?.length ? (
                  <div className="w-full">
                    {typewriterLines.map((line, index) => (
                      <div key={line} className="overflow-hidden">
                        <motion.span
                          initial={{ clipPath: "inset(0 100% 0 0)" }}
                          animate={{ clipPath: "inset(0 0% 0 0)" }}
                          transition={{
                            duration: 0.8,
                            delay: 0.25 + index * 0.35,
                            ease,
                          }}
                          className="block text-[clamp(2rem,10vw,4.85rem)] font-black uppercase leading-[0.88] tracking-[0.06em] text-white drop-shadow-sm"
                        >
                          {line}
                        </motion.span>
                      </div>
                    ))}
                  </div>
                ) : (
                  title && (
                    <motion.h1
                      variants={itemVariants}
                      className="mb-4 max-w-[800px] text-[clamp(1.75rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-white drop-shadow-sm"
                    >
                      {title}
                    </motion.h1>
                  )
                )}
                {subtitle && (
                  <motion.p
                    variants={itemVariants}
                    className="mb-2 max-w-[700px] text-[1rem] leading-relaxed text-white/95 drop-shadow-sm sm:text-[1.0625rem]"
                  >
                    {subtitle}
                  </motion.p>
                )}
                {children && (
                  <motion.div
                    variants={itemVariants}
                    className={`mt-5 flex flex-wrap gap-3 max-md:w-full max-md:max-w-xs max-md:flex-col max-md:items-stretch ${
                      isCenter ? "justify-center" : ""
                    }`}
                  >
                    {children}
                  </motion.div>
                )}
              </motion.div>

              {showStats && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45, ease }}
                  className="relative mt-9 w-full max-w-[760px] self-center pt-1.5 sm:mt-8 sm:pt-2.5 lg:mt-7"
                >
                  <div className="flex flex-col gap-4 sm:hidden">
                    {stats.map((stat, i) => {
                      const numericValue = Number.parseInt(stat.value, 10);
                      const isNumber = !Number.isNaN(numericValue);
                      const labelLines = getMobileStatLabelLines(stat);

                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.45, delay: 0.55 + i * 0.08 }}
                          className="grid grid-cols-[72px_1fr] items-center gap-4"
                        >
                          <span
                            className={`text-right font-light leading-none tracking-tight text-white ${
                              isNumber ? "text-[3.15rem]" : "text-[2.1rem]"
                            }`}
                          >
                            {isNumber ? (
                              <CountUpNumber
                                target={numericValue}
                                delay={0.7 + i * 0.1}
                              />
                            ) : (
                              stat.value
                            )}
                          </span>
                          <div className="flex flex-col items-start gap-2">
                            {labelLines.map((line) => (
                              <span
                                key={`${stat.label}-${line}`}
                                className="inline-flex bg-[#252525]/92 px-3 py-2 text-[0.86rem] font-medium leading-none tracking-[0.02em] text-white"
                              >
                                {line}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="relative hidden grid-cols-2 gap-0 sm:grid">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/30" />
                    <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/30" />

                    {stats.map((stat, i) => {
                      const numericValue = Number.parseInt(stat.value, 10);
                      const isNumber = !Number.isNaN(numericValue);
                      const isBottomRow = i >= 2;

                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.45, delay: 0.55 + i * 0.08 }}
                          className="flex min-h-[86px] flex-col items-center justify-center px-3 py-3 text-center sm:min-h-[102px] sm:px-4 sm:py-4 lg:min-h-[114px] lg:px-5 lg:py-5"
                        >
                          <div className="grid w-full justify-items-center">
                            <span
                              className={`inline-flex items-center justify-center font-bold uppercase leading-none tracking-tight text-white tabular-nums ${
                                isBottomRow
                                  ? "min-h-[1.35em] sm:min-h-[1.45em] lg:min-h-[1.55em]"
                                  : "min-h-[1.2em] sm:min-h-[1.3em] lg:min-h-[1.4em]"
                              } ${
                                isNumber
                                  ? "text-[1.55rem] sm:text-[1.9rem] lg:text-[2.15rem]"
                                  : "text-[1.2rem] sm:text-[1.45rem] lg:text-[1.7rem]"
                              }`}
                            >
                              {isNumber ? (
                                <CountUpNumber
                                  target={numericValue}
                                  delay={0.7 + i * 0.1}
                                />
                              ) : (
                                stat.value
                              )}
                            </span>
                            <div className="my-1.5 hidden h-px w-4 bg-white/40 sm:block lg:w-5" />
                            <span
                              className={`flex items-start justify-center text-[0.54rem] font-bold uppercase tracking-[0.12em] leading-snug text-white/90 sm:text-[0.6rem] lg:text-[0.68rem] ${
                                isBottomRow
                                  ? "min-h-[3.3em] max-w-[168px]"
                                  : "min-h-[2.2em] max-w-[150px]"
                              }`}
                            >
                              {stat.label}
                            </span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {scrollTargetId && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 1.35, ease }}
                className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center sm:bottom-6"
              >
                <div className="pointer-events-auto">
                  <ScrollCueButton scrollTargetId={scrollTargetId} />
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`relative w-full px-[5vw] sm:px-6 ${
              isCenter
                ? "mx-auto flex max-w-[1200px] flex-col items-center text-center"
                : "mx-auto max-w-[800px] lg:ml-[max(24px,calc((100%-1200px)/2+24px))]"
            }`}
          >
            {title && (
              <motion.h1
                variants={itemVariants}
                className={`mb-6 max-w-[800px] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm ${
                  size === "small"
                    ? "text-[clamp(1.75rem,4vw,2.75rem)]"
                    : "text-[clamp(2.25rem,5.5vw,4rem)]"
                }`}
              >
                {title}
              </motion.h1>
            )}
            {subtitle && (
              <motion.p
                variants={itemVariants}
                className="mb-2 max-w-[560px] text-[1rem] leading-relaxed text-white/95 drop-shadow-sm sm:text-[1.0625rem]"
              >
                {subtitle}
              </motion.p>
            )}
            {children && (
              <motion.div
                variants={itemVariants}
                className={`mt-8 flex flex-wrap gap-4 max-md:w-full max-md:max-w-xs max-md:flex-col max-md:items-stretch ${
                  isCenter ? "justify-center" : ""
                }`}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        )}
      </section>

      {showStats && !isFull && (
        <section className="relative py-10 sm:py-12 lg:py-14">
          <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:max-w-[860px]">
            <h2 className="mb-7 text-center text-3xl font-bold uppercase tracking-[0.11em] text-white sm:mb-9 sm:text-5xl">
              At a Glance
            </h2>

            {/* The 2x2 Grid with Cross-lines */}
            <div className="relative grid grid-cols-2 gap-0">
              {/* Vertical Line */}
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/30" />
              {/* Horizontal Line */}
              <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-white/30" />

              {stats.map((stat, i) => {
                const numericValue = Number.parseInt(stat.value, 10);
                const isNumber = !Number.isNaN(numericValue);
                const isFocusedCare = stat.value === "Focused Care";

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    className="flex min-h-[128px] flex-col items-center justify-start px-4 pb-4 pt-6 text-center sm:min-h-[160px] sm:px-6 sm:pb-6 sm:pt-8 lg:min-h-[146px] lg:px-5 lg:pb-5 lg:pt-7"
                  >
                    <span
                      className={`mb-2 inline-flex min-h-[1em] items-center justify-center font-bold uppercase leading-none tracking-tight text-white tabular-nums ${
                        isFocusedCare
                          ? "text-2xl sm:text-4xl"
                          : isNumber
                          ? "text-4xl sm:text-6xl"
                          : "text-3xl sm:text-5xl"
                      }`}
                    >
                      {isNumber ? (
                        <CountUpNumber
                          target={numericValue}
                          delay={0.8 + i * 0.15}
                        />
                      ) : (
                        stat.value
                      )}
                    </span>
                    <div className="mb-2 hidden h-px w-6 bg-white/40 sm:block" />
                    <span className="max-w-[180px] text-[0.72rem] font-bold uppercase tracking-[0.14em] leading-relaxed text-white/90 sm:text-[0.82rem]">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
