"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass-surface rounded-xl p-6 ${
        hover ? "transition-all duration-300 hover:border-[var(--color-border-accent)]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
