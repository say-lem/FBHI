import HeroAbout from "@/src/components/about/HeroAbout";
import MissionSection from "@/src/components/about/MissionSection";
import ObjectivesSection from "@/src/components/about/ObjectivesSection";
import MembersSection from "@/src/components/about/MembersSection";
import Partners from "@/src/components/about/Partners";

export const metadata = {
  title: "About Us | Foundation for Better Health International",
  description:
    "Learn more about the Foundation for Better Health International’s mission, objectives, and dedicated team members.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <HeroAbout />
      <MissionSection />
      <ObjectivesSection />
      <MembersSection />
      <Partners />
    </main>
  );
}
