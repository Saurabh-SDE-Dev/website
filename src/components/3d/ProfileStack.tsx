"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useWebGL } from "@/hooks/useWebGL";

function StackLayers() {
  const group = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !group.current) return;
    // Extremely slow, elegant rotation
    group.current.rotation.y = state.clock.elapsedTime * 0.03;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  return (
    <group ref={group}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Layer 3: Code / Logic */}
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[2, 0.05, 2]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Connection node */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.6, 16]} />
          <meshStandardMaterial color="#333" metalness={1} roughness={0.2} />
        </mesh>

        {/* Layer 2: Service / API */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 0.1, 2.2]} />
          <meshPhysicalMaterial 
            color="#08090b"
            metalness={0.8}
            roughness={0.2}
            clearcoat={0.5}
          />
        </mesh>
        
        {/* Accent light indicator */}
        <mesh position={[0.8, 0, 1.1]}>
          <boxGeometry args={[0.2, 0.02, 0.05]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.5} />
        </mesh>

        {/* Connection node */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.6, 32]} />
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.5} />
        </mesh>

        {/* Layer 1: Data Storage */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[1.3, 1.3, 0.15, 64]} />
          <meshPhysicalMaterial 
            color="#0a0a0f"
            metalness={1}
            roughness={0.15}
            clearcoat={1}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function ProfileStack() {
  const isWebGLSupported = useWebGL();

  if (!isWebGLSupported) {
    return null;
  }

  return (
    <Canvas
      camera={{ position: [3, 2, 4], fov: 40 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 2]} intensity={1.5} />
      <directionalLight position={[-5, 2, -2]} intensity={0.5} color="#00d4ff" />
      
      <PresentationControls
        global={false}
        cursor={true}
        snap={true}
        speed={1}
        zoom={1}
        rotation={[0, -0.2, 0]}
        polar={[-0.1, 0.1]}
        azimuth={[-0.2, 0.2]}
      >
        <StackLayers />
      </PresentationControls>

      {/* Studio lighting environment for premium reflections */}
      <Environment preset="studio" />
    </Canvas>
  );
}
