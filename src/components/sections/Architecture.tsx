"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring } from "framer-motion";
import { IMPACT_METRICS } from "@/data/architecture";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(prefersReducedMotion ? value : 0);

  const spring = useSpring(0, { stiffness: 40, damping: 15, mass: 1 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (inView) spring.set(value);
  }, [inView, spring, value, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    return spring.onChange((latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [spring, prefersReducedMotion]);

  return (
    <span ref={ref} className="text-[clamp(4rem,10vw,8rem)] font-bold tracking-tighter text-[#111111] leading-none inline-block">
      {displayValue}
      <span className="text-[clamp(2rem,5vw,4rem)] ml-1 text-[#007aff]">{suffix}</span>
    </span>
  );
}

export function Architecture() {
  return (
    <section id="impact" className="theme-offwhite relative w-full py-32 md:py-48 border-t border-black/5">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-24 flex items-center gap-6">
          <p className="editorial-label">04 — IMPACT</p>
          <div className="h-[1px] w-24 bg-black/10" />
        </div>

        {/* Metrics Grid (Editorial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col relative border-t border-black/10 pt-8">
              <Counter value={metric.value} suffix={metric.suffix} />
              
              <div className="mt-8 flex flex-col gap-2">
                <h3 className="text-sm font-bold text-[#111111] uppercase tracking-widest">
                  {metric.label}
                </h3>
                {/* Description added to make it feel like a real case study detail */}
                <p className="text-sm text-[#888888]">
                  Driven by optimized architecture and highly scalable backend infrastructure.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
