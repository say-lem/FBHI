import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-black/60 text-white">
      <Image
        src="/images/aboutus.png"
        alt="About Us background"
        fill
        className="object-cover"
        priority
      />
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold uppercase tracking-wide">About Us</h1>
      </div>
    </section>
  );
}
