"use client";

export function WebGLFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-[var(--color-bg-primary)] p-8 text-center">
      <div className="w-16 h-16 border border-[var(--color-border-accent)] rounded-full flex items-center justify-center mb-6">
        <span className="text-[var(--color-accent-primary)] font-mono text-xl">2D</span>
      </div>
      <h3 className="text-2xl font-bold tracking-tight mb-2">3D Experience Unavailable</h3>
      <p className="text-[var(--color-text-secondary)] max-w-md mx-auto">
        Your device or browser doesn&apos;t support WebGL, or hardware acceleration is disabled. 
        You are viewing the optimized 2D experience.
      </p>
    </div>
  );
}
