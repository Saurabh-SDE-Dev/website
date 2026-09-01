"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html } from "@react-three/drei";
import { useWebGL } from "@/hooks/useWebGL";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function DocumentProcessing({ isHovered }: { isHovered: boolean }) {
  const docRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state) => {
    if (prefersReducedMotion || !docRef.current) return;
    
    // Subtle float and hover response
    const targetZ = isHovered ? 0.5 : 0;
    const targetRotX = isHovered ? -0.1 : 0;
    
    docRef.current.position.z = THREE.MathUtils.lerp(docRef.current.position.z, targetZ, 0.05);
    docRef.current.rotation.x = THREE.MathUtils.lerp(docRef.current.rotation.x, targetRotX, 0.05);
    
    // Subtle continuous idle movement
    docRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
  });

  return (
    <group ref={docRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      
      {/* Paper Mesh */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2.8, 0.02]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Abstract Lines on Paper */}
      <group position={[0, 0, 0.02]}>
        <mesh position={[0, 0.8, 0]}>
          <planeGeometry args={[1.4, 0.1]} />
          <meshBasicMaterial color="#111214" opacity={0.8} transparent />
        </mesh>
        <mesh position={[-0.2, 0.5, 0]}>
          <planeGeometry args={[1.0, 0.05]} />
          <meshBasicMaterial color="#333" opacity={0.6} transparent />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <planeGeometry args={[1.4, 0.05]} />
          <meshBasicMaterial color="#333" opacity={0.6} transparent />
        </mesh>
        <mesh position={[-0.2, 0.1, 0]}>
          <planeGeometry args={[1.0, 0.05]} />
          <meshBasicMaterial color="#333" opacity={0.6} transparent />
        </mesh>
      </group>

      {/* Processing Overlay Grid (Active on hover) */}
      <mesh position={[0, 0, 0.03]}>
        <planeGeometry args={[2, 2.8]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={isHovered && !prefersReducedMotion ? 0.1 : 0} 
          wireframe 
        />
      </mesh>
    </group>
  );
}

function PipelineIndicators({ isHovered }: { isHovered: boolean }) {
  const steps = ["DOCUMENT", "OCR", "AI EXTRACTION", "VALIDATION", "STRUCTURED DATA"];
  
  return (
    <group position={[2.5, 1, 0]}>
      {steps.map((step, i) => (
        <group key={step} position={[0, -i * 0.5, 0]}>
          <mesh>
            <circleGeometry args={[0.05, 16]} />
            <meshBasicMaterial color={isHovered ? "#3b82f6" : "#9A9AA0"} />
          </mesh>
          <Html position={[0.2, -0.05, 0]} className="pointer-events-none whitespace-nowrap">
            <span className={`text-[0.45rem] font-mono tracking-widest uppercase transition-colors duration-300 ${isHovered ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
              {step}
            </span>
          </Html>
          {/* Connection Line */}
          {i < steps.length - 1 && (
            <mesh position={[0, -0.25, 0]}>
              <planeGeometry args={[0.01, 0.5]} />
              <meshBasicMaterial color={isHovered ? "#3b82f6" : "#333"} opacity={isHovered ? 0.5 : 0.2} transparent />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

export default function AutolexVisual({ isHovered = false }: { isHovered?: boolean }) {
  const isWebGLSupported = useWebGL();

  if (!isWebGLSupported) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] rounded-sm">
        <p className="text-[0.55rem] font-mono tracking-widest text-[var(--text-secondary)] uppercase">
          DOCUMENT PIPELINE
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full pointer-events-none bg-[var(--surface)] border border-[var(--border)] rounded-sm overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        
        <Environment preset="studio" />
        
        <group position={[-1, 0, 0]}>
          <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <DocumentProcessing isHovered={isHovered} />
          </Float>
          <PipelineIndicators isHovered={isHovered} />
        </group>
      </Canvas>
    </div>
  );
}
