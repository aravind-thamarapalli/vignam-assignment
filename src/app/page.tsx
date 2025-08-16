"use client";

import dynamic from "next/dynamic";
import VideoSection from "@/components/VideoSection/VideoSection";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection/TestimonialsSection";
import ContactSection from "@/components/ContactSection/ContactSection";

// Dynamically import Hero component to avoid SSR issues with 3D models
const DynamicHero = dynamic(() => import("@/components/Hero/Hero"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <div className="text-white text-xl">Loading 3D Experience...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main>
      <DynamicHero />
      <VideoSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
