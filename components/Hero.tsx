"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  label?: string;
  children?: React.ReactNode;
  size?: "full" | "medium" | "small";
  align?: "left" | "center";
  image?: string;
  imageAlt?: string;
  overlayClassName?: string;
  showStats?: boolean;
}

const sizeClasses = {
  full: "min-h-[520px] pt-24 pb-16 sm:min-h-[620px] sm:pt-28 sm:pb-20 lg:h-[60vh] lg:min-h-0 lg:pt-32 lg:pb-24",
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

export default function Hero({
  title,
  subtitle,
  label: _label,
  children,
  size = "medium",
  align = "center",
  image = "/hero-home.jpeg",
  imageAlt = "",
  overlayClassName = "bg-black/45",
  showStats = false,
}: HeroProps) {
  const isCenter = align === "center";

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
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(137, 168, 235, 0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(196,154,108,0.1)_0%,transparent_50%)]" />

      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <section
        className={`relative flex items-center overflow-hidden ${sizeClasses[size]}`}
      >
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
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mb-2 max-w-[560px] text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-white/95 drop-shadow-sm"
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
      </section>

      {showStats && (
        <section className="relative py-16">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-[0.12em] text-white sm:text-6xl">
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
                    className="flex min-h-[170px] flex-col items-center justify-start px-8 pb-8 pt-10 text-center sm:min-h-[220px] sm:px-12 sm:pb-12 sm:pt-14"
                  >
                    <span
                      className={`mb-2 inline-flex min-h-[1em] items-center justify-center font-bold uppercase leading-none tracking-tight text-white tabular-nums ${
                        isFocusedCare ? "text-3xl sm:text-5xl" : "text-4xl sm:text-6xl"
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
                    <div className="mb-3 hidden h-px w-8 bg-white/40 sm:block" />
                    <span className="max-w-[220px] text-[0.875rem] font-bold uppercase tracking-[0.15em] leading-relaxed text-white/90 sm:text-[1rem]">
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
