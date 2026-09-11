"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface Props {
  scrollYProgress?: any; // To allow scroll-based manipulation later if passed
}

export default function HeroSystemStructure({ scrollYProgress }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const outerMeshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current || !outerMeshRef.current || !innerMeshRef.current) return;

    // Smooth subtle rotation
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
    outerMeshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    innerMeshRef.current.rotation.y = -t * 0.15;
    innerMeshRef.current.rotation.z = Math.cos(t * 0.1) * 0.1;

    // Mouse parallax interaction (smooth)
    const targetX = (state.pointer.x * Math.PI) / 10;
    const targetY = (state.pointer.y * Math.PI) / 10;
    
    groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (-targetX - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <>
      {/* Premium studio lighting environment */}
      <Environment preset="city" />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#007aff" />
      <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#5856d6" />

      <Float
        speed={prefersReducedMotion ? 0 : 2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <group ref={groupRef}>
          {/* Outer Glass/Crystal Shell */}
          <mesh ref={outerMeshRef} scale={1.8}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshTransmissionMaterial
              backside
              backsideThickness={1}
              thickness={0.5}
              chromaticAberration={0.04}
              anisotropy={0.2}
              distortion={0.2}
              distortionScale={0.3}
              temporalDistortion={prefersReducedMotion ? 0 : 0.1}
              color="#ffffff"
              attenuationColor="#007aff"
              attenuationDistance={2}
              clearcoat={1}
              clearcoatRoughness={0.1}
              roughness={0.05}
              metalness={0.1}
            />
          </mesh>

          {/* Inner Abstract Core */}
          <mesh ref={innerMeshRef} scale={0.9}>
            <octahedronGeometry args={[1, 0]} />
            <meshPhysicalMaterial
              color="#111114"
              emissive="#007aff"
              emissiveIntensity={0.2}
              metalness={0.9}
              roughness={0.2}
              wireframe={true}
              transparent
              opacity={0.8}
            />
          </mesh>
          
          {/* Solid Inner Core */}
          <mesh scale={0.5}>
            <icosahedronGeometry args={[1, 1]} />
            <meshPhysicalMaterial
              color="#ffffff"
              metalness={1}
              roughness={0.1}
              clearcoat={1}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
}
