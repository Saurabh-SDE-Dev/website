"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/* ─── 01. API / SYSTEM ARCHITECTURE (Backend) ─── */
export function ProjectSystemVisual() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1;
    groupRef.current.rotation.x = Math.cos(t * 0.15) * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} scale={1.2}>
        {/* API Gateway */}
        <mesh position={[0, 1.5, 0]}>
          <boxGeometry args={[1.5, 0.4, 0.4]} />
          <meshPhysicalMaterial color="#181D24" metalness={0.8} roughness={0.2} clearcoat={1} />
        </mesh>
        
        {/* Microservices Nodes */}
        {[-1, 0, 1].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshPhysicalMaterial color="#181D24" metalness={0.9} roughness={0.1} clearcoat={1} />
            {/* Glowing inner core */}
            <mesh scale={0.8}>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshBasicMaterial color="#3B82F6" transparent opacity={0.6} />
            </mesh>
          </mesh>
        ))}

        {/* Database */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 1, 32]} />
          <meshPhysicalMaterial color="#12161C" metalness={1} roughness={0.3} clearcoat={1} />
        </mesh>

        {/* Connections */}
        <mesh position={[0, 0.75, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1.1, 8]} />
          <meshBasicMaterial color="#6366F1" transparent opacity={0.5} />
        </mesh>
        <mesh position={[0, -0.75, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
          <meshBasicMaterial color="#6366F1" transparent opacity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

/* ─── 02. OCR / DOCUMENT PROCESSING ─── */
export function ProjectOCRVisual() {
  const scannerRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current || !scannerRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1 - Math.PI / 6;
    groupRef.current.rotation.x = Math.PI / 8;
    
    // Scanning beam sweeping across
    scannerRef.current.position.y = Math.sin(t * 1.5) * 1.2;
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group ref={groupRef} scale={1.5}>
        {/* Document Plane */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[2.5, 3.5]} />
          <meshPhysicalMaterial color="#F5F7FA" metalness={0.1} roughness={0.8} />
        </mesh>

        {/* Extracted Data Nodes on Document */}
        {[-0.8, 0, 0.8].map((y, i) => (
          <mesh key={i} position={[-0.5 + (i * 0.2), y, 0.01]}>
            <boxGeometry args={[1, 0.1, 0.05]} />
            <meshBasicMaterial color="#12161C" transparent opacity={0.2} />
          </mesh>
        ))}

        {/* Scanning Beam */}
        <mesh ref={scannerRef} position={[0, 1.2, 0.05]}>
          <boxGeometry args={[2.6, 0.05, 0.1]} />
          <meshBasicMaterial color="#22D3EE" transparent opacity={0.8} />
          {/* Beam Glow */}
          <mesh position={[0, -0.2, 0]}>
            <planeGeometry args={[2.6, 0.4]} />
            <meshBasicMaterial color="#22D3EE" transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        </mesh>
      </group>
    </Float>
  );
}

/* ─── 03. DATA PROCESSING / AI WORKFLOW ─── */
export function ProjectDataVisual() {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.3;
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <group ref={groupRef} scale={1.4}>
        {/* Transformation Core */}
        <mesh>
          <torusKnotGeometry args={[0.8, 0.15, 128, 16]} />
          <meshPhysicalMaterial 
            color="#0B0D10" 
            metalness={1} 
            roughness={0.1} 
            clearcoat={1} 
            emissive="#3B82F6"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Orbiting Data Blocks */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
          <mesh key={i} position={[Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0]}>
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshPhysicalMaterial color="#F5F7FA" metalness={0.5} roughness={0.1} clearcoat={1} />
          </mesh>
        ))}

        {/* Inner Light */}
        <pointLight color="#22D3EE" intensity={2} distance={3} />
      </group>
    </Float>
  );
}
