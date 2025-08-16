"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Container with proper aspect ratio */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E1czmX6bjFA?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&start=10"
              title="FORGE Manufacturing Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Optional overlay content positioned over video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-start p-4 sm:p-6 md:p-8 pointer-events-none rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                Precision Manufacturing
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                Experience our state-of-the-art CNC machining capabilities in action.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
