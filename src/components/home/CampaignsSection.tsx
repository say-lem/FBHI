import CampaignCard from "@/src/components/CampaignCard";
import Link from "next/link";
import { Campaign } from "@/src/types/campaign";

export default function CampaignsSection({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      <h3 className="text-lg font-semibold text-emerald-600">Campaigns</h3>
      {/* <h2 className="mt-2 text-2xl font-bold">
        Together For Change: Join Our Mission To Make A Difference
      </h2> */}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>

      <div className="text-center mt-5">
        <Link
          href="/campaigns"
          className="bg-emerald-600 text-white rounded-full px-5 py-3 hover:bg-emerald-800 inline-block text-sm font-medium"
        >
          View all campaigns
        </Link>
      </div>
    </section>
  );
}
