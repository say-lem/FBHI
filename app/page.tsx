// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CampaignCard from "@/components/CampaignCard";
import DonationForm from "@/components/DonationForm";
import { Button } from "@/components/ui/button";

// Client-only chart component (must be a client component)

import DonationCategoryCard from "@/components/DonationCategoryCard";
import DonationsDoughnut from "@/components/DonationsPie";
import { JSX } from "react/jsx-dev-runtime";
import Footer from "@/components/Footer";
import { Apple, Book, HeartPulse, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Foundation for Better Health International",
  description:
    "The Foundation for Better Health International (FBHI) believes that everyone has the right to proper healthcare and education. Our mission is to improve the health and quality of life in underserved communities, particularly across Africa, by providing accurate diagnoses, effective treatment, disease prevention, and essential health education",
};

type Campaign = {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  progress: number;
};

const FALLBACK_CAMPAIGNS: Campaign[] = [
  {
    id: "1",
    title: "Clean Water, Bright Futures",
    excerpt:
      "Providing safe drinking water to transform lives and bring hope to underserved children.",
    image: "/image3.jpeg",
    progress: 82,
  },
  {
    id: "2",
    title: "Nourishing Hope — One Meal at a Time",
    excerpt:
      "Delivering healthy, nutritious food to children in vulnerable communities.",
    image: "/image4.jpeg",
    progress: 73,
  },
  {
    id: "3",
    title: "Healing Lives, Spreading Smiles",
    excerpt: "Providing essential medical care to children in need.",
    image: "/image5.jpeg",
    progress: 79,
  },
];

/**
 * Build an absolute URL for server-side fetch requests.
 * Priority:
 * 1. NEXT_PUBLIC_BASE_URL (explicit)
 * 2. VERCEL_URL (when running on Vercel) -> https://{VERCEL_URL}
 * 3. http://localhost:3000 (local dev)
 */
function getApiBase(): string {
  if (
    typeof process.env.NEXT_PUBLIC_BASE_URL === "string" &&
    process.env.NEXT_PUBLIC_BASE_URL.length > 0
  ) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  if (
    typeof process.env.VERCEL_URL === "string" &&
    process.env.VERCEL_URL.length > 0
  ) {
    // VERCEL_URL is the deployment domain without scheme
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local development fallback
  return "http://localhost:3000";
}

/**
 * Helper: fetch campaigns from internal API (server-side).
 * Uses absolute URL to avoid URL parsing errors in Node.
 */
async function fetchCampaigns(): Promise<Campaign[]> {
  try {
    const base = getApiBase();
    const url = new URL("/api/campaigns", base).toString();

    const res = await fetch(url, {
      // caching policy for server fetch
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      // In production forward this to your telemetry (Sentry, etc.)
      console.warn("Failed to fetch /api/campaigns, status:", res.status);
      return FALLBACK_CAMPAIGNS;
    }

    const payload = (await res.json()) as { campaigns?: Campaign[] } | null;
    if (!payload || !Array.isArray(payload.campaigns))
      return FALLBACK_CAMPAIGNS;
    return payload.campaigns;
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    return FALLBACK_CAMPAIGNS;
  }
}

/**
 * Page (Server Component)
 */
export default async function Page(): Promise<JSX.Element> {
  const campaigns = await fetchCampaigns();

  const donationData = [37, 20, 17, 13, 12];
  const donationLabels = [
    "Healthy Food",
    "Medicine",
    "Pure Water",
    "Excursions",
    "Feeding the poor",
  ];
  const donationColors = [
    "#16a34a",
    "#f59e0b",
    "#06b6d4",
    "#fb7185",
    "#f97316",
  ];
  const donationTotal = donationData.reduce((s, v) => s + v, 0);
  const percentages = donationData.map((v) =>
    Math.round((v / (donationTotal || 1)) * 100)
  );

  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* HERO */}
        <section
          aria-label="Hero"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-12"
        >
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
            secondaryCta={{ label: "Play Video", href: "#" }}
          />
        </section>

        {/* ABOUT / FEATURE */}
        <section
          aria-labelledby="about-heading"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-amber-500 font-semibold">
                Know About Us
              </p>
              <h2
                id="about-heading"
                className="mt-3 text-2xl lg:text-3xl font-bold tracking-tight"
              >
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
                <Link href="#" prefetch={false} className="inline-block">
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
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </section>

        {/* DONATION CATEGORIES */}
        <section
          aria-labelledby="donation-categories"
          className="bg-slate-50 py-12"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h3
              id="donation-categories"
              className="text-center text-lg font-semibold text-amber-500"
            >
              Donation
            </h3>
            <h2 className="mt-2 text-center text-2xl lg:text-3xl font-bold">
              Your Donation Brings Smiles And
              <br />
              Transforms Lives
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Education",
                  text: "Empowering future leaders through access to quality education.",
                  href: "/campaigns?category=education",
                  icon: <Book className="w-6 h-6 text-(--brand-emerald-700)" />,
                  iconBgClass: "bg-emerald-50",
                },
                {
                  title: "Healthcare",
                  text: "Providing clinical care and essential health services.",
                  href: "/campaigns?category=healthcare",
                  icon: (
                    <HeartPulse className="w-6 h-6 text-(--brand-emerald-700)" />
                  ),
                  iconBgClass: "bg-emerald-50",
                },
                {
                  title: "Environmental",
                  text: "Promoting sustainability and protecting natural resources.",
                  href: "/campaigns?category=environmental",
                  icon: <Leaf className="w-6 h-6 text-(--brand-emerald-700)" />,
                  iconBgClass: "bg-emerald-50",
                },
                {
                  title: "Hunger",
                  text: "Fighting hunger by providing nutritious food to those who need it most.",
                  href: "/campaigns?category=hunger",
                  icon: (
                    <Apple className="w-6 h-6 text-(--brand-emerald-700)" />
                  ),
                  iconBgClass: "bg-emerald-50",
                },
              ].map((cat) => (
                <DonationCategoryCard
                  key={cat.title}
                  title={cat.title}
                  text={cat.text}
                  href={cat.href}
                  icon={cat.icon}
                  iconBgClass={cat.iconBgClass}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CAMPAIGNS GRID */}
        <section
          aria-labelledby="campaigns-heading"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-12"
        >
          <div className="flex items-center">
            <div>
              <h3
                id="campaigns-heading"
                className="text-lg font-semibold text-emerald-600 text-center md:text-start"
              >
                Campaigns
              </h3>
              <h2 className="mt-2 text-lg md:text-2xl font-bold text-center md:text-start">
                Together For Change: Join Our Mission To Make A Difference
              </h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {campaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                id={campaign.id}
                title={campaign.title}
                excerpt={campaign.excerpt}
                image={campaign.image}
                progress={campaign.progress}
              />
            ))}
          </div>

          <div className="text-center mt-5 h-14 w-full">
            <Link
              href="/campaigns"
              prefetch={false}
              className="text-sm font-medium bg-emerald-600 text-white rounded-full px-5 py-3 hover:bg-emerald-800 inline-block"
            >
              View all campaigns
            </Link>
          </div>
        </section>

        {/* WHERE YOUR GIVING GOES (CHART) */}
        <section aria-labelledby="impact-heading" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                id="impact-heading"
                className="text-4xl font-bold text-emerald-900"
              >
                Where Your Giving Goes: <br />
                Transparency & Impact
              </h2>
              <p className="mt-4 text-slate-500 text-sm">
                Every donation is carefully allocated. See a breakdown of how
                funds are distributed across programs.
              </p>

              {/* Horizontal, wrapping legend (swatches + label) */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-700">
                {donationLabels.map((label, idx) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 mr-4"
                    aria-hidden={false}
                  >
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: donationColors[idx] }}
                      aria-hidden="true"
                    />
                    <span className="min-w-0">
                      <span className="font-medium">{percentages[idx]}%</span>
                      <span className="ml-1 truncate">{label}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 w-full">
              {/* Client-side doughnut chart component (same data/colors as legend) */}
              <DonationsDoughnut
                data={donationData}
                labels={donationLabels}
                colors={donationColors}
                className="w-56 h-56 lg:w-95 lg:h-95"
                showInternalLabels={false}
              />
            </div>
          </div>
        </section>

        {/* BLOG PREVIEWS */}
        <section
          aria-labelledby="blog-heading"
          className="max-w-7xl mx-auto px-6 lg:px-8 py-12 bg-slate-50"
        >
          <div className="text-center">
            <h3 className="text-sm font-semibold text-amber-500">
              From The Blog
            </h3>
            <h2 id="blog-heading" className="mt-2 text-2xl font-bold">
              Our Latest News And Articles
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {[
              {
                date: "20 Jan, 2025",
                title:
                  "Providing Food, Clean Water, and Medical Care to Those Who Need",
                slug: "/blog/1",
                img: "/image2.jpeg",
              },
              {
                date: "25 Jan, 2025",
                title: "No One Should Go Hungry, Thirsty, or Without Treatment",
                slug: "/blog/2",
                img: "/image6.jpeg",
              },
              {
                date: "30 Jan, 2025",
                title: "Nutritious Meals, Safe Water, and Healthcare",
                slug: "/blog/3",
                img: "/image7.jpeg",
              },
            ].map((post) => (
              <article
                key={post.slug}
                className="rounded-md overflow-hidden bg-emerald-900 text-white shadow-2xl border border-emerald-800"
              >
                {/* Image area */}
                <div className="relative w-full h-44 md:h-48 lg:h-52">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  {/* date badge */}
                  <div className="absolute left-4 bottom-3">
                    <div className="relative inline-flex items-center bg-white text-slate-800 text-sm font-medium px-3 py-1.5 rounded-full shadow">
                      <span>{post.date}</span>
                      {/* small triangle pointer using SVG */}
                      <svg
                        className="absolute -bottom-2 left-4"
                        width="16"
                        height="8"
                        viewBox="0 0 16 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M0 0L8 8L16 0H0Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <h4 className="text-lg md:text-xl font-semibold leading-tight text-white">
                    {post.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                    Short excerpt for the article to entice readers.
                  </p>

                  {/* thin divider like the screenshot */}
                  <div className="mt-5 border-t border-emerald-800" />

                  <div className="mt-4 text-center">
                    <Link
                      href={post.slug}
                      prefetch={false}
                      className="inline-flex items-center text-sm font-medium text-white hover:underline"
                    >
                      Read more &nbsp;→
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* center button like in screenshot */}
          <div className="text-center mt-8">
            <Link
              href="/blog"
              prefetch={false}
              className="inline-block bg-emerald-600 text-white rounded-full px-6 py-2 text-sm font-medium hover:bg-emerald-700 shadow"
            >
              View All Blogs
            </Link>
          </div>
        </section>

        {/* VOLUNTEER CTA / DONATION FORM STRIP */}
        <section aria-label="Volunteer and donate" className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/dontate.jpeg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/10 " />
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Left text column */}
                <div className="p-8 lg:p-12 bg-white/5 z-10">
                  <div className="z-40">
                    <h3 className="text-xl font-bold">
                      Join as a volunteer or make a donation
                    </h3>
                    <p className="mt-2 text-slate-700 text-sm font-semibold">
                      Your time and contributions help ensure no child is left
                      behind.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link
                      href="/volunteer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 z-30"
                    >
                      Join as a volunteer
                    </Link>

                    <Link
                      href="/donate"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-emerald-600 text-emerald-900 hover:bg-emerald-50 z-30"
                    >
                      Donate
                    </Link>
                  </div>
                </div>

                {/* Right column: Image uses next/image fill for optimization */}
                <div className="relative w-full min-h-80 flex items-center justify-center p-6">
                  <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow">
                    <DonationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
