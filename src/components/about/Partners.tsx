import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="max-w-7xl mx-auto px-6 lg:px-8 py-10"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 id="about-heading" className="mt-3 text-2xl lg:text-3xl font-bold">
            Our <strong className="text-amber-500">Partners</strong>
          </h2>
          <p className="mt-4 text-slate-600 ">
            We believe sustainable impact is achieved through strong partnerships, which we have forged with local and national governments, implementing organizations, research institutions, and our generous supporters. We look forward to deepening existing and developing new partnerships that will extend the reach and impact of our work.
          </p>
          <p className="mt-3 ">Interested in partnering?</p>

          <div className="mt-6">
            <Link href="/about" prefetch={false}>
              <Button>Become a Partner</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-56 lg:h-72 overflow-hidden">
          <Image
            src="/images/partners.png"
            alt="Children playing and smiling"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
