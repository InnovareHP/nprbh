"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

function CountUpNumber({
  target,
  isInView,
}: {
  target: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <>{count}</>;
}

export default function AboutStatsBand({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative z-0 bg-transparent py-8 text-on-dark md:bg-primary/55 md:py-10">
      <div ref={ref} className="mx-auto max-w-[1200px] px-[5vw] sm:px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {stats.map((stat, index) => {
            const numericValue = Number.parseInt(stat.value, 10);
            const isNumber = !Number.isNaN(numericValue);

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: -22 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -22 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex min-h-[128px] flex-col items-center justify-start text-center"
              >
                <div className="flex min-h-[3.2rem] items-center justify-center sm:min-h-16">
                  <span
                    className={`font-light uppercase leading-none tracking-tight text-white ${
                      isNumber
                        ? "text-[1.85rem] sm:text-[2.8rem]"
                        : "whitespace-nowrap text-[1.5rem] sm:text-[2.8rem]"
                    }`}
                  >
                    {isNumber ? (
                      <CountUpNumber target={numericValue} isInView={isInView} />
                    ) : (
                      stat.value
                    )}
                  </span>
                </div>
                <div className="mt-4 flex min-h-19 items-start justify-center">
                  <span className="inline-flex h-19 w-full max-w-34 items-center justify-center bg-bg-darker/70 px-3 text-center text-[0.64rem] font-medium uppercase leading-[1.35] tracking-[0.12em] text-on-dark sm:text-[0.7rem]">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
