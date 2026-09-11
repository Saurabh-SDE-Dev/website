"use client";

import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function DataStream() {
  const pointsRef = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();
  const count = 300;

  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8; // width spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // height spread (vertical stream)
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2; // depth (pushed back)
    }
    return pos;
  });

  const [colors] = useState(() => {
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color("#3B82F6"), // Blue
      new THREE.Color("#6366F1"), // Indigo
      new THREE.Color("#22D3EE"), // Cyan
      new THREE.Color("#F5F7FA"), // White
    ];
    
    for (let i = 0; i < count; i++) {
      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return col;
  });

  useFrame(() => {
    if (!pointsRef.current || prefersReducedMotion) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Move particles upwards to simulate data stream
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += 0.02 + Math.random() * 0.01;
      if (positions[i * 3 + 1] > 7.5) {
        positions[i * 3 + 1] = -7.5; // Reset to bottom
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle overall drift based on scroll
    const scrollY = window.scrollY;
    pointsRef.current.position.y = scrollY * 0.001;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        vertexColors 
        transparent 
        opacity={0.4} 
        sizeAttenuation 
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
