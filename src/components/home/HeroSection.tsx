import Hero from "@/src/components/Hero";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <Hero
        title={
          <>
            Ensuring improved healthcare outcomes
            <br />
            <span className="block">for the disadvataged</span>
          </>
        }
        subtitle="Join us in creating lasting impact through collaboration, compassion, and action."
        primaryCta={{ label: "Who we are", href: "/about" }}
        // secondaryCta={{ label: "Play Video", href: "#" }}
      />
    </section>
  );
}
