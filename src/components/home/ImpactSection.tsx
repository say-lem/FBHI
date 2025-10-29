import React from "react"
import DonationsDoughnut from "../DonationsPie";

export default function ImpactSection() {
  const stats = [
    { label: "Lives Impacted", value: "12,400+" },
    { label: "Communities Reached", value: "85+" },
    { label: "Volunteers Engaged", value: "230+" },
    { label: "Projects Completed", value: "47" },
  ]

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
  )
}
