// app/api/campaigns/route.ts
import { NextResponse } from "next/server";

const CAMPAIGNS = [
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

export async function GET() {
  return NextResponse.json({ campaigns: CAMPAIGNS }, { status: 200 });
}
