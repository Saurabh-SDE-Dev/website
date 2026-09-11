"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function IdentityCore({ isMiniature = false }: { isMiniature?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  // Orbital particles for data representation
  const particleCount = isMiniature ? 10 : 40;
  const [particles] = useState(() => {
    return Array.from({ length: particleCount }).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3.5,
        (Math.random() - 0.5) * 3.5
      ),
      speed: 0.2 + Math.random() * 0.5,
      radius: 1.5 + Math.random() * 1.5,
      angle: Math.random() * Math.PI * 2,
      axis: new THREE.Vector3(Math.random(), Math.random(), Math.random()).normalize()
    }));
  });

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current || !coreRef.current) return;

    const t = state.clock.getElapsedTime();
    
    // Core slow rotation
    coreRef.current.rotation.y = t * 0.2;
    coreRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    
    // Group parallax if not miniature
    if (!isMiniature) {
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.z += (-targetX - groupRef.current.rotation.z) * 0.05;
    } else {
      groupRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Float 
      speed={prefersReducedMotion ? 0 : isMiniature ? 1 : 2} 
      rotationIntensity={isMiniature ? 0.1 : 0.2} 
      floatIntensity={isMiniature ? 0.1 : 0.4}
    >
      <group ref={groupRef} scale={isMiniature ? 1 : 1.5}>
        
        {/* Central Core: Premium Glass/Metallic */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshTransmissionMaterial
            backside
            backsideThickness={1}
            thickness={0.5}
            chromaticAberration={0.03}
            anisotropy={0.3}
            distortion={0.1}
            distortionScale={0.2}
            temporalDistortion={prefersReducedMotion ? 0 : 0.1}
            color="#E8EDF3"
            attenuationColor="#3B82F6"
            attenuationDistance={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            roughness={0.05}
            metalness={0.2}
          />
        </mesh>

        {/* Inner Processing Node */}
        <mesh scale={0.4}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial
            color="#ffffff"
            emissive="#22D3EE"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>

        {/* Orbital Rings (Systems/Architecture) */}
        {!isMiniature && (
          <>
            <mesh rotation={[Math.PI / 3, 0, 0]} scale={1.8}>
              <torusGeometry args={[1, 0.005, 16, 100]} />
              <meshBasicMaterial color="#6366F1" transparent opacity={0.3} />
            </mesh>
            <mesh rotation={[0, Math.PI / 4, 0]} scale={2.2}>
              <torusGeometry args={[1, 0.005, 16, 100]} />
              <meshBasicMaterial color="#3B82F6" transparent opacity={0.2} />
            </mesh>
          </>
        )}

        {/* Data Nodes */}
        {particles.map((p, i) => (
          <mesh key={i} position={p.position} scale={isMiniature ? 0.02 : 0.04}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color={i % 3 === 0 ? "#6366F1" : i % 2 === 0 ? "#22D3EE" : "#ffffff"} transparent opacity={0.6} />
          </mesh>
        ))}

      </group>
    </Float>
  );
}
