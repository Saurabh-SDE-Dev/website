"use client";

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, children, className = "", fullHeight = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${fullHeight ? "min-h-screen" : ""} ${className}`}
      aria-label={id.replace(/-/g, " ")}
    >
      {children}
    </section>
  );
}
