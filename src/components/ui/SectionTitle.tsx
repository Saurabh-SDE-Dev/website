"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-4 mb-4"
      >
        <span
          className="text-sm font-mono tracking-widest"
          style={{ color: "var(--color-accent-primary)" }}
        >
          {number}
        </span>
        <div className="glow-line flex-1 max-w-[100px]" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-lg max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
