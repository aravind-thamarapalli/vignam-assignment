"use client";

import React, { Suspense, useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import FallbackModel from './FallbackModel';

interface Model3DProps {
  url: string;
}

function LoadedModel({ url }: Model3DProps) {
  const meshRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions, mixer } = useAnimations(animations, meshRef);

  // Play embedded animations
  useEffect(() => {
    // Play all available animations
    if (actions && Object.keys(actions).length > 0) {
      console.log('Available animations:', Object.keys(actions));
      Object.values(actions).forEach((action, index) => {
        if (action) {
          action.reset();
          action.play();
          // Loop the animation
          action.setLoop(THREE.LoopRepeat, Infinity);
          // Optionally set different time scales for variety
          action.timeScale = 1;
        }
      });
    } else {
      console.log('No animations found in the model');
    }
    
    return () => {
      // Cleanup animations on unmount
      if (actions) {
        Object.values(actions).forEach((action) => {
          if (action) {
            action.stop();
          }
        });
      }
    };
  }, [actions]);

  // Update animation mixer
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
    
    // Add subtle floating motion
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={[1, 1, 1]} />
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
