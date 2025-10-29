import { Apple, Book, HeartPulse, Leaf } from "lucide-react";
import DonationCategoryCard from "@/src/components/DonationCategoryCard";

const categories = [
  {
    title: "Education",
    text: "Empowering future leaders through access to quality education.",
    href: "/campaigns?category=education",
    icon: <Book className="w-6 h-6 text-emerald-700" />,
  },
  {
    title: "Healthcare",
    text: "Providing clinical care and essential health services.",
    href: "/campaigns?category=healthcare",
    icon: <HeartPulse className="w-6 h-6 text-emerald-700" />,
  },
  {
    title: "Environmental",
    text: "Promoting sustainability and protecting natural resources.",
    href: "/campaigns?category=environmental",
    icon: <Leaf className="w-6 h-6 text-emerald-700" />,
  },
  {
    title: "Hunger",
    text: "Fighting hunger by providing nutritious food to those who need it most.",
    href: "/campaigns?category=hunger",
    icon: <Apple className="w-6 h-6 text-emerald-700" />,
  },
];

export default function DonationCategoriesSection() {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-amber-500">Donation</h3>
        <h2 className="mt-2 text-2xl lg:text-3xl font-bold">
          Your Donation Brings Smiles And Transforms Lives
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <DonationCategoryCard key={cat.title} {...cat} iconBgClass="bg-emerald-50" />
          ))}
        </div>
      </div>
    </section>
  );
}
