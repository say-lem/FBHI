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
          <p className="text-sm text-amber-500 font-semibold">Know About Us</p>
          <h2 id="about-heading" className="mt-3 text-2xl lg:text-3xl font-bold">
            Creating a Safe Haven for Children with Special Needs
          </h2>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            The Foundation for Better Health International (FBHI) believes
                that everyone has the right to proper healthcare and education.
                Our mission is to improve the health and quality of life in
                underserved communities, particularly across Africa, by
                providing accurate diagnoses, effective treatment, disease
                prevention, and essential health education. We collaborate with
                both local and international partners, including World Medical
                Mission, World Vision, and Médecins Sans Frontières, to deliver
                medical care to rural communities, regardless of race, religion,
                or nationality. Many health systems in Africa face serious
                challenges, including poor infrastructure, limited access to
                clean water, underpaid health workers, and the loss of trained
                professionals to more developed countries. We believe that these
                issues can be addressed with well-structured, community-focused
                programs. Our vision is to help build a future where everyone
                has access to quality healthcare, no matter where they live
          </p>

          <div className="mt-6">
            <Link href="/about" prefetch={false}>
              <Button>Learn more</Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 md:h-56 lg:h-72 overflow-hidden rounded-xl shadow-sm">
          <Image
            src="/image1.jpeg"
            alt="Children playing and smiling"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
