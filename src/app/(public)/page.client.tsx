// app/page.client.tsx
"use client";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/home/HeroSection";
import AboutSection from "@/src/components/home/AboutSection";
import DonationCategoriesSection from "@/src/components/home/DonationCategoriesSection";
import CampaignsSection from "@/src/components/home/CampaignsSection";
import ImpactSection from "@/src/components/home/ImpactSection";
import BlogSection from "@/src/components/home/BlogSection";
import VolunteerSection from "@/src/components/home/VolunteerSection";
import { Campaign } from "@/src/types/campaign";

export interface PageClientProps {
  campaigns: Campaign[];
}

export default function PageClient({ campaigns }: PageClientProps) {
  return (
    <main>
      {/* <Navbar /> */}
      <div className="bg-white">
        <HeroSection />
        <AboutSection />
        <DonationCategoriesSection />
        <CampaignsSection campaigns={campaigns} />
        <ImpactSection />
        <BlogSection />
        <VolunteerSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
