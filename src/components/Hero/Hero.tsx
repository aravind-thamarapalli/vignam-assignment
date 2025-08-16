"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import Model3D from "./Model3D";
import FallbackModel from "./FallbackModel";

interface Scene3DProps {
  url: string;
  width?: number;
  height?: number;
  size?: number;
  className?: string;
}

function Scene3D({ url, width, height, size = 300, className }: Scene3DProps) {
  const finalWidth = width || size;
  const finalHeight = height || size;
  
  return (
    <div className={className} style={{ width: finalWidth, height: finalHeight }}>
      <Canvas camera={{ position: [-5, 0, 5], fov: 30 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={<FallbackModel />}>
          <Model3D url={url} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 md:px-12 py-5 text-sm">
        {/* Left Logo */}
        <div className="flex items-center space-x-2 font-medium">
          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="6" x2="12" y2="18"></line>
            <line x1="6" y1="12" x2="18" y2="12"></line>
            <line x1="8.5" y1="8.5" x2="15.5" y2="15.5"></line>
            <line x1="15.5" y1="8.5" x2="8.5" y2="15.5"></line>
          </svg>
          <span>Forge</span>
        </div>

        {/* Nav Center */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-600">
          <div className="flex items-center space-x-1">
            <div className="w-80 flex items-center space-x-2">
              <span>🇨🇦</span>
              <span>Canada, Montreal</span>
            </div>
          <div className="flex  gap-4">
            <a href="#" className="hover:text-black underline">Manufacture</a>
            <a href="#" className="hover:text-black underline">Tool library</a>
            <a href="#" className="hover:text-black underline">Get in touch</a>
          </div>
          </div>
        </nav>

        {/* Right Lang Switch */}
        <div className="flex items-center space-x-2 text-gray-600">
          <span>Eng</span>
          <span>/</span>
          <span>Fra</span>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 relative flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-sans leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Precision <span className="italic font-serif font-bold text-teal-900">CNC</span> Parts <br />
          Shipped as Fast as <br /> Tomorrow
        </motion.h1>

        {/* Single central 3D Model */}
        <div>
          <Scene3D url="/assets/model.glb" width={600} height={300} className="" />
        </div>
        {/* Subtext */}
        <motion.p
          className="mt-6 text-xs md:text-base text-black-600 max-w-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Upload your CAD file, and we’ll take care of machining, finishing, and
          shipping — accurate parts delivered fast, no stress.
        </motion.p>

        {/* CTA */}
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Upload Your Design
          </button>
        </motion.div>

      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 flex justify-between items-end px-6 md:px-12 pb-6 text-xs md:text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="uppercase tracking-wide text-gray-600">12+ YEARS OF DELIVERING</div>
          <div className="font-semibold text-black">PERFECT DETAILS</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="uppercase tracking-wide text-gray-600">OVER 100,000 PARTS</div>
          <div className="font-semibold text-black">MANUFACTURED ANNUALLY</div>
        </motion.div>
      </div>
    </section>
  );
}
