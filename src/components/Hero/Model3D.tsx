"use client";

import React, { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import FallbackModel from './FallbackModel';

interface Model3DProps {
  url: string;
}

function LoadedModel({ url }: Model3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  // Add rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={[2, 2, 2]} />
    </group>
  );
}

export default function Model3D({ url }: Model3DProps) {
  return (
    <Suspense fallback={<FallbackModel />}>
      <LoadedModel url={url} />
    </Suspense>
  );
}

// Preload the 3D model
useGLTF.preload('/assets/model.glb');
