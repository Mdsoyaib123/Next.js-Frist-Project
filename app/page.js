"use client"
import HeroSection from "./Component/HeroSection";
import FeaturedCoursed from "./Component/FeaturedCoursed";

export default function Home() {
  return (
    <main className="min-h-screen bg-block/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection></HeroSection>
      <FeaturedCoursed></FeaturedCoursed>
    </main>
  );
}
