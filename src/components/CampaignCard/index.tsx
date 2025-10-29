import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  progress?: number;
};

export default function CampaignCard({
  id,
  title,
  excerpt,
  image,
  progress = 0,
}: Props) {
  return (
    <article className="rounded-lg bg-white w-full md:w-90 flex flex-col justify-center items-center pt-6 shadow">
      <div className="p-4">
        <h4 className="text-[18px] text-center font-bold">{title}</h4>
        <div className="relative w-full h-44 mt-3">
          <Image
            src={image ?? "/campaigns/placeholder.jpg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-sm text-slate-600">{excerpt}</p>

        <div className="mt-8">
          <div className="flex justify-between mb-1">
            <p className="text-sm font-semibold">Goal</p>
            <p className="text-sm font-semibold">{progress}%</p>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className={cn(
                "h-2 rounded-full transition-[width] duration-300 ease-in-out",
                progress >= 75 ? "bg-emerald-600" : "bg-amber-500"
              )}
              style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
            />
          </div>

          <div className="mt-6 mb-5 flex items-center justify-center text-sm">
            <Link
              href={`/campaigns/${id}`}
              className="text-emerald-600 font-medium hover:underline"
              prefetch={false}
            >
              Donate Now →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
