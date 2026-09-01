"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-[var(--color-border-accent)] text-[var(--color-accent-primary)]"
      : "border-[var(--color-border-subtle)] text-[var(--color-text-secondary)]";

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-mono tracking-wider border ${styles}`}
    >
      {children}
    </span>
  );
}
