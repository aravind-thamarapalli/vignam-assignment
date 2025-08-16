"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import Model3D from './Model3D';
import FallbackModel from './FallbackModel';

function Scene3D() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 40 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[0, 10, 0]} intensity={0.8} />
        
        <Suspense fallback={<FallbackModel />}>
          <Model3D url="/assets/model.glb" />
          <Environment preset="studio" />
          <ContactShadows opacity={0.4} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minDistance={4}
          maxDistance={10}
        />
      </Canvas>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-white">
                Precision
              </span>
              <br />
              <span className="text-blue-400 italic">
                CNC
              </span>
              <span className="text-white">
                {" "}Parts
              </span>
              <br />
              <span className="text-white">
                Shipped as Fast as
              </span>
              <br />
              <span className="text-white">
                Tomorrow
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                UPLOAD YOUR DESIGN
              </button>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-6 sm:pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">10+ YEARS OF DELIVERING</div>
                <div className="text-white font-semibold text-sm sm:text-base">PERFECT DETAILS</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mb-1">OVER 100,000 PARTS</div>
                <div className="text-white font-semibold text-sm sm:text-base">MANUFACTURED ANNUALLY</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <Scene3D />
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-lg p-3 sm:p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-xs sm:text-sm font-semibold text-blue-300">AI Powered</div>
            </motion.div>
            
            <motion.div
              className="absolute bottom-4 sm:bottom-6 md:bottom-10 right-4 sm:right-6 md:right-10 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-3 sm:p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <div className="text-xs sm:text-sm font-semibold text-purple-300">3D Interactive</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
