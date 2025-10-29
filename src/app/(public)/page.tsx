import { Metadata } from "next";
import PageClient from "./page.client";
import { fetchCampaigns } from "@/src/components/home/helpers/fetchCampaigns";
import { Campaign } from "@/src/types/campaign";

export const metadata: Metadata = {
  title: "Foundation for Better Health International",
  description:
    "FBHI provides healthcare and education to underserved communities across Africa.",
};

export default async function Page() {
  const campaigns: Campaign[] = await fetchCampaigns();

  return <PageClient campaigns={campaigns} />;
}
