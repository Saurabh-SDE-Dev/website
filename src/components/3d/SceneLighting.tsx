"use client";

import { Environment } from "@react-three/drei";

export function SceneLighting() {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} color="#ffffff" />
      
      {/* KEY LIGHT: Soft white */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        color="#F5F7FA" 
        castShadow
      />
      
      {/* FILL LIGHT: Cool blue */}
      <directionalLight 
        position={[-10, -10, -5]} 
        intensity={0.8} 
        color="#3B82F6" 
      />
      
      {/* RIM LIGHT: Indigo/Violet */}
      <spotLight 
        position={[0, 5, -10]} 
        angle={0.5} 
        penumbra={1} 
        intensity={2.5} 
        color="#6366F1" 
      />
    </>
  );
}
