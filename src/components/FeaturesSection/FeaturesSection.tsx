"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const features = [
  {
    title: "Custom Brackets",
    description:
      "Precision-machined brackets for any application, manufactured to your exact specifications.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    icon: "01",
  },
  {
    title: "Steel Adapters",
    description:
      "High-strength steel adapters engineered for durability and perfect fit.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&q=80",
    icon: "02",
  },
  {
    title: "Motor Mounts",
    description:
      "Custom motor mounts designed for optimal performance and vibration control.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&q=80",
    icon: "03",
  },
  {
    title: "Enclosures",
    description:
      "Protective enclosures crafted with precision for electronics and mechanical components.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80",
    icon: "04",
  },
];

// Dummy 3D models
function DummyModel({ type }: { type: string }) {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      {type === "box" && <boxGeometry args={[1, 1, 1]} />}
      {type === "sphere" && <sphereGeometry args={[0.7, 32, 32]} />}
      {type === "cone" && <coneGeometry args={[0.7, 1.2, 32]} />}
      {type === "cylinder" && <cylinderGeometry args={[0.5, 0.5, 1.2, 32]} />}
      {type === "torus" && <torusGeometry args={[0.6, 0.2, 16, 100]} />}
      <meshStandardMaterial
        color={"#2563eb"}
        metalness={0.3}
        roughness={0.5}
      />
    </mesh>
  );
}

export default function FeaturesSection() {
  const models = ["box", "sphere", "cone", "cylinder", "torus"];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-2">
              <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionizing
                <br />
                Manufacturing with
                <br />
                Speed and <span className="italic text-blue-600">Precision</span>
              </h2>
            </div>

            {/* Feature List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Ayrton Senna"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">Ayrton Senna</h3>
                <p className="text-sm text-blue-600 mb-3">
                  CEO & Senior Partner at Forge
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  At Forge, we believe that getting custom CNC parts should be
                  fast, reliable, and effortless. That's why we built a fully
                  streamlined platform that turns your CAD files into
                  production-ready parts—delivered in as fast as one day. Whether
                  you're prototyping or scaling, we remove the friction from
                  manufacturing so you can focus on building what matters.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  We operate high-performance CNC machines backed by in-house
                  automation and a trusted network of suppliers. From one-off
                  prototypes to small production runs, our system is built to
                  deliver precision, high-quality parts with speed. You can even
                  see your own dedicated CNC machine through our live Reserved
                  Machines offering—your own production line, without the
                  overhead.
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    EVERY DETAIL MATTERS — WE CRAFT EACH PART WITH CARE,
                    ACCURACY, AND A TOUCH THAT FEELS JUST RIGHT.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Parts Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gray-100 rounded-3xl p-12 relative overflow-hidden">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                High-Precision CNC Parts
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From complex geometries to simple brackets, we manufacture every
                part with exceptional precision and attention to detail.
              </p>
            </div>

            {/* 3D Dummy Parts */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
              {models.map((model, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-white rounded-xl shadow-lg p-4 flex items-center justify-center"
                >
                  <Canvas camera={{ position: [2, 2, 2] }}>
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[2, 2, 2]} intensity={1} />
                    <DummyModel type={model} />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                  </Canvas>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
