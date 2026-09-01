"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, Line } from "@react-three/drei";
import { useWebGL } from "@/hooks/useWebGL";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function SystemNode({ 
  position, 
  label, 
  isGlass = false 
}: { 
  position: [number, number, number], 
  label: string, 
  isGlass?: boolean 
}) {
  return (
    <group position={position}>
      {/* Structural Node */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.4, 1.2]} />
        {isGlass ? (
          <meshPhysicalMaterial 
            color="#08090B"
            metalness={0.9}
            roughness={0.1}
            transmission={0.9} // Glass effect
            thickness={0.5}
            clearcoat={1}
            envMapIntensity={2}
          />
        ) : (
          <meshStandardMaterial 
            color="#111214"
            metalness={0.8}
            roughness={0.4}
            envMapIntensity={1}
          />
        )}
      </mesh>
      
      {/* Node Label */}
      <Html position={[0, 0, 0.7]} center className="pointer-events-none">
        <span className="text-[0.45rem] font-mono tracking-widest text-[#9A9AA0] uppercase opacity-70">
          {label}
        </span>
      </Html>
    </group>
  );
}

function ConnectionLine({ start, end }: { start: [number, number, number], end: [number, number, number] }) {
  return (
    <Line 
      points={[start, end]} 
      color="#333" 
      transparent 
      opacity={0.5} 
      lineWidth={1} 
    />
  );
}

function AbstractStructure() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    // Very slow, subtle rotation
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    
    // Subtle mouse parallax
    const mouseX = (state.pointer.x * Math.PI) / 10;
    const mouseY = (state.pointer.y * Math.PI) / 10;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouseY, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouseX * 0.2, 0.05);
  });

  return (
    <group ref={groupRef} rotation={[0.4, -0.5, 0]}>
      <Float speed={prefersReducedMotion ? 0 : 1.5} rotationIntensity={0} floatIntensity={prefersReducedMotion ? 0 : 0.5}>
        
        {/* Nodes */}
        <SystemNode position={[0, 1.5, 0]} label="API GATEWAY" isGlass />
        <SystemNode position={[-1, 0, 1]} label="MICROSERVICE" />
        <SystemNode position={[1, 0, -1]} label="BACKGROUND JOB" />
        <SystemNode position={[0, -1.5, 0]} label="POSTGRESQL" />

        {/* Connections */}
        <ConnectionLine start={[0, 1.3, 0]} end={[-1, 0.2, 1]} />
        <ConnectionLine start={[0, 1.3, 0]} end={[1, 0.2, -1]} />
        <ConnectionLine start={[-1, -0.2, 1]} end={[0, -1.3, 0]} />
        <ConnectionLine start={[1, -0.2, -1]} end={[0, -1.3, 0]} />
        
      </Float>
    </group>
  );
}

export function HeroSystemStructure() {
  const isWebGLSupported = useWebGL();

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center border border-[var(--border)] rounded-sm bg-[var(--surface)]">
        <p className="text-xs font-mono tracking-widest text-[var(--text-tertiary)] uppercase text-center px-4">
          SYSTEM ARCHITECTURE
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Soft studio lighting to catch metal edges */}
        <Environment preset="studio" />
        
        <AbstractStructure />
      </Canvas>
    </div>
  );
}
