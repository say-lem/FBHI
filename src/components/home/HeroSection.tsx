import Hero from "@/src/components/Hero";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <Hero
        title={
          <>
            Foundation for Better,
            <br />
            <span className="block">Health International</span>
          </>
        }
        subtitle="Join us in creating lasting impact through collaboration, compassion, and action."
        primaryCta={{ label: "What we do", href: "#" }}
        // secondaryCta={{ label: "Play Video", href: "#" }}
      />
    </section>
  );
}
