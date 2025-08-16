"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function VideoSection() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Note: Due to iframe restrictions, we'll need to reload the iframe with new mute parameter
    const iframe = document.querySelector('#youtube-video') as HTMLIFrameElement;
    if (iframe) {
      const currentSrc = iframe.src;
      const newSrc = currentSrc.replace(
        isMuted ? 'mute=1' : 'mute=0', 
        isMuted ? 'mute=0' : 'mute=1'
      );
      iframe.src = newSrc;
    }
  };

  const openYouTube = () => {
    window.open('https://www.youtube.com/watch?v=E1czmX6bjFA', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-black">
      {/* Full Screen Video Container */}
      <div className="absolute inset-0">
        <iframe
          id="youtube-video"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/E1czmX6bjFA?autoplay=0&mute=${isMuted ? 1 : 0}&controls=0&rel=0&modestbranding=1&start=10&loop=1&playlist=E1czmX6bjFA`}
          title="FORGE Manufacturing Demo"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Top Corner Buttons */}
      <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
        {/* Sound On/Off Button - Top Left */}
        <motion.button
          onClick={toggleMute}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-sm text-black p-3 rounded-lg hover:bg-white/70 transition-all duration-300 flex items-center gap-2"
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
          <span className="text-sm font-medium hidden sm:block">
            {isMuted ? 'SOUND ON' : 'SOUND OFF'}
          </span>
        </motion.button>

        {/* Check out on YouTube Button - Top Right */}
        <motion.button
          onClick={openYouTube}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-sm text-black-600 p-3 rounded-lg hover:bg-white-600 transition-all duration-300 flex items-center gap-1"
        >
          <span className="text-sm font-medium hidden sm:block">
            CHECK OUT ON YOUTUBE
          </span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </motion.button>
      </div>

      {/* Center Play Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.button
          onClick={openYouTube}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/80 backdrop-blur-sm border-2 border-white/90 rounded-full p-6 hover:bg-white/30 transition-all duration-300 group"
        >
          <svg className="w-12 h-12 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
