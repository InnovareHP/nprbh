"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: string;
  label: string;
}

function CountUpNumber({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - (1 - progress) ** 3;
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <>{count}</>;
}

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="border-b-[3px] border-accent bg-primary">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 md:gap-8 md:py-10"
      >
        {stats.map((stat, i) => {
          const numericValue = Number.parseInt(stat.value, 10);
          const isNumber = !Number.isNaN(numericValue);

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center gap-1.5 text-center"
            >
              <span className="text-xl font-bold text-white">
                {isNumber ? (
                  <CountUpNumber target={numericValue} isInView={isInView} />
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
  );
}
