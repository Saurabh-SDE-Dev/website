"use client";

import { Canvas } from "@react-three/fiber";
import { useWebGL } from "@/hooks/useWebGL";
import { ReactNode, Suspense } from "react";

interface Canvas3DProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  camera?: Record<string, unknown>;
}

export function Canvas3D({ children, fallback, className = "", camera = { position: [0, 0, 5], fov: 45 } }: Canvas3DProps) {
  const isWebGLSupported = useWebGL();

  if (!isWebGLSupported) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className={`flex items-center justify-center bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-xl ${className}`}>
        <p className="text-[var(--color-text-secondary)] font-mono text-sm text-center px-4">
          WebGL is not supported in your browser.<br />
          Experience limited to 2D UI.
        </p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Canvas
        camera={camera}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full outline-none"
      >
        <Suspense fallback={null}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
