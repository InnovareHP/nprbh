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
  showStats?: boolean;
}

const sizeClasses = {
  full: "h-[60vh]",
  medium: "min-h-[500px] pt-36 pb-24 md:pt-32 md:pb-20",
  small: "min-h-[340px] pt-28 pb-16 md:min-h-[280px] md:pt-24 md:pb-14",
};

const stats = [
  { value: "6", label: "Behavioral Health Facilities" },
  { value: "4", label: "States Served" },
  { value: "Decades", label: "Healthcare Development & Operations Experience" },
  { value: "Focused Care", label: "Adults and Seniors" },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CountUpNumber({
  target,
  delay = 0,
}: { target: number; delay?: number }) {
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
  label,
  children,
  size = "medium",
  align = "center",
  image = "/bg.jpeg",
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(13,115,119,0.15)_0%,transparent_60%),radial-gradient(ellipse_at_80%_20%,rgba(196,154,108,0.1)_0%,transparent_50%)]" />

      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Header background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <section
        className={`relative flex items-center overflow-hidden ${sizeClasses[size]}`}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`relative w-full px-6 ${
            isCenter
              ? "mx-auto flex max-w-[1200px] flex-col items-center text-center"
              : "mx-auto max-w-[800px] lg:ml-[max(24px,calc((100%-1200px)/2+24px))]"
          }`}
        >
          {label && (
            <motion.span
              variants={itemVariants}
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
            >
              {label}
            </motion.span>
          )}
          <motion.h1
            variants={itemVariants}
            className={`mb-6 max-w-[800px] font-bold leading-[1.1] tracking-tight text-white ${
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
              className="mb-2 max-w-[560px] text-[clamp(1rem,2vw,1.25rem)] leading-relaxed text-on-dark-muted"
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
        <section className="border-b-[3px] border-accent">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:gap-8 md:py-10">
            {stats.map((stat, i) => {
              const numericValue = Number.parseInt(stat.value, 10);
              const isNumber = !Number.isNaN(numericValue);

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + i * 0.15,
                    ease,
                  }}
                  className="flex flex-col items-center gap-1.5 text-center"
                >
                  <span className="text-4xl font-bold text-white">
                    {isNumber ? (
                      <CountUpNumber
                        target={numericValue}
                        delay={0.8 + i * 0.15 + 0.3}
                      />
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="text-[0.8125rem] font-medium uppercase tracking-widest text-on-dark-muted">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
