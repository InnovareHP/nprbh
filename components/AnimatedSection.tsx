"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { type ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const initialY = direction === "up" ? 40 : 0;
  const initialX = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const initialState = prefersReducedMotion
    ? { opacity: 1, y: 0, x: 0 }
    : { opacity: 0, y: initialY, x: initialX };
  const animatedState = isInView ? { opacity: 1, y: 0, x: 0 } : initialState;

  return (
    <motion.div
      ref={ref}
      initial={initialState}
      animate={animatedState}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
