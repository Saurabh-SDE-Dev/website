"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGL } from "@/hooks/useWebGL";

function StackLayers() {
  const group = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !group.current) return;
    // Extremely slow, elegant rotation
    group.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Layer 4: API Gateway (Top) */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[3, 0.05, 3]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Connection node */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.7, 16]} />
          <meshStandardMaterial color="#333" metalness={1} roughness={0.2} />
        </mesh>

        {/* Layer 3: Services */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[3.2, 0.15, 3.2]} />
          <meshPhysicalMaterial 
            color="#08090b"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.5}
          />
        </mesh>
        
        <mesh position={[0, 0.5, 1.6]}>
          <boxGeometry args={[0.8, 0.02, 0.05]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
        </mesh>

        {/* Connection node */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.8, 32]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.5} />
        </mesh>

        {/* Layer 2: Data Store */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[1.8, 1.8, 0.25, 64]} />
          <meshPhysicalMaterial 
            color="#0a0a0f"
            metalness={1}
            roughness={0.15}
            clearcoat={1}
          />
        </mesh>
        
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[1.82, 1.82, 0.02, 64]} />
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" emissiveIntensity={1} />
        </mesh>

        {/* Base Layer: Cloud Infrastructure */}
        <mesh position={[0, -1.2, 0]}>
          <boxGeometry args={[4, 0.1, 4]} />
          <meshPhysicalMaterial 
            color="#111214"
            metalness={0.6}
            roughness={0.4}
            transmission={0.5}
            thickness={0.5}
          />
        </mesh>
        
        <mesh position={[1.5, -1.15, 1.5]}>
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function SystemStack() {
  const isWebGLSupported = useWebGL();

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center border border-[var(--color-border-subtle)] rounded-full bg-[var(--color-bg-card)]">
        <span className="text-xs font-mono text-[var(--color-text-tertiary)]">SYSTEM ARCHITECTURE</span>
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [5, 3, 5], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#00d4ff" />
      
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0, 0, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.5, 0.5]}
      >
        <StackLayers />
      </PresentationControls>

      <ContactShadows 
        position={[0, -2.5, 0]} 
        opacity={0.4} 
        scale={10} 
        blur={2} 
        far={4} 
        color="#000000"
      />
      
      {/* Studio lighting environment */}
      <Environment preset="studio" />
    </Canvas>
  );
}
