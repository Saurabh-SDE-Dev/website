"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useWebGL } from "@/hooks/useWebGL";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ─── Profile Section 3D: Subtle Abstract Geometry ─── */
function ProfileGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame(() => {
    if (!meshRef.current || prefersReducedMotion) return;
    // Scroll-based rotation
    const scrollY = window.scrollY;
    meshRef.current.rotation.y = scrollY * 0.002;
    meshRef.current.rotation.x = scrollY * 0.001;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.9}
          thickness={0.5}
        />
      </mesh>
    </Float>
  );
}

export function ProfileVisual3D() {
  const isWebGLSupported = useWebGL();
  if (!isWebGLSupported) return null;

  return (
    <div className="w-full h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#007aff" />
        <ProfileGeometry />
      </Canvas>
    </div>
  );
}

/* ─── Contact 3D: Clean Sphere ─── */
function ContactSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();
  
  useFrame(() => {
    if (!meshRef.current || prefersReducedMotion) return;
    const scrollY = window.scrollY;
    meshRef.current.rotation.y = scrollY * 0.002;
  });

  return (
    <Float speed={1} floatIntensity={0.1}>
      <mesh ref={meshRef} scale={2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color="#0a0a0c"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export function ContactVisual3D() {
  const isWebGLSupported = useWebGL();
  if (!isWebGLSupported) return null;

  return (
    <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none hidden lg:block opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Environment preset="studio" />
        <ambientLight intensity={0.2} />
        <spotLight position={[5, 5, 5]} intensity={2} color="#007aff" />
        <spotLight position={[-5, -5, 5]} intensity={1} color="#5856d6" />
        <ContactSphere />
      </Canvas>
    </div>
  );
}
