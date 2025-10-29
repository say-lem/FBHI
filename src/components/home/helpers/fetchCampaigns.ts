import { Campaign } from "@/src/types/campaign";
import { getApiBase } from "./getApiBase";
import { FALLBACK_CAMPAIGNS } from "./constants";

export async function fetchCampaigns(): Promise<Campaign[]> {
  try {
    const base = getApiBase();
    const url = new URL("/api/campaigns", base).toString();

    const res = await fetch(url, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.warn("Failed to fetch /api/campaigns:", res.status);
      return FALLBACK_CAMPAIGNS;
    }

    const payload = await res.json();
    return Array.isArray(payload.campaigns)
      ? payload.campaigns
      : FALLBACK_CAMPAIGNS;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return FALLBACK_CAMPAIGNS;
  }
}
