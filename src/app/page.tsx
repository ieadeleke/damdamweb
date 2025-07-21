'use client';

import AppLayout from "@/components/layout/Layout";
import TestimonialCarousel from "@/components/testimonial";
import HomeHero from "@/components/landing/HomeHero";
import WhatWeDo from "@/components/landing/WhatWeDo";
import OurVision from "@/components/landing/OurVision";
import PortfolioPage from "@/components/landing/Portfolio";

export default function Home() {
  return (
    <AppLayout blurry={true}>
      <HomeHero />
      <div className="bg-blue w-full h-[90px]"></div>
      <WhatWeDo />
      <OurVision />
      <PortfolioPage />
      <TestimonialCarousel />
    </AppLayout>
  );
}