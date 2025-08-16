"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export default function FallbackModel() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <group>
      {/* Main cylindrical part */}
      <mesh ref={meshRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <cylinderGeometry args={[0.8, 1, 1.5, 8]} />
        <meshStandardMaterial 
          color="#6b7280" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#374151"
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Top flange */}
      <mesh position={[0, 1.2, 0]} scale={[1.5, 1.5, 1.5]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 8]} />
        <meshStandardMaterial 
          color="#4b5563" 
          metalness={0.95} 
          roughness={0.05}
        />
      </mesh>
      
      {/* Mounting holes */}
      {[0, 1, 2, 3].map((i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos((i * Math.PI) / 2) * 0.8,
            1.2,
            Math.sin((i * Math.PI) / 2) * 0.8
          ]}
          scale={[1.5, 1.5, 1.5]}
        >
          <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
          <meshStandardMaterial 
            color="#1f2937" 
            metalness={0.8} 
            roughness={0.3}
          />
        </mesh>
      ))}
      
      {/* Bottom connector */}
      <mesh position={[0, -1, 0]} scale={[1.5, 1.5, 1.5]}>
        <cylinderGeometry args={[0.6, 0.6, 0.8, 6]} />
        <meshStandardMaterial 
          color="#374151" 
          metalness={0.85} 
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}
