// components/DonationsDoughnut.tsx
'use client';

import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from 'chart.js';
// optional plugin for labels inside arcs:
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export type DonationsDoughnutProps = {
  data?: number[]; // raw values
  labels?: string[]; // same length as data
  colors?: string[]; // CSS color values same length as data
  className?: string;
  showInternalLabels?: boolean; // use plugin to show labels within arcs
};

/**
 * Doughnut with sensible defaults.
 */
export default function DonationsDoughnut({
  data = [37, 20, 17, 13, 12],
  labels = ['Healthy Food', 'Medicine', 'Pure Water', 'Excursions', 'Feeding the poor'],
  colors = ['#16a34a', '#f59e0b', '#06b6d4', '#fb7185', '#f97316'],
  className = 'w-56 h-56 lg:w-64 lg:h-64',
  showInternalLabels = false,
}: DonationsDoughnutProps) {
  // compute percentages once
  const total = data.reduce((s, v) => s + v, 0);
  const percentages = data.map((v) => Math.round((v / (total || 1)) * 100));

  const chartData = useMemo<ChartData<'doughnut'>>(
    () => ({
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors,
          borderColor: 'rgba(255,255,255,0.02)',
          borderWidth: 1,
          hoverOffset: 8, // pull arc outward on hover
        },
      ],
    }),
    [data, labels, colors]
  );

  const options = useMemo<ChartOptions<'doughnut'>>(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%', // thickness — increase value for thinner ring, decrease for thicker
      rotation: Math.PI * -0.5, // start from top
      plugins: {
        legend: {
          position: 'right',
          align: 'center',
          labels: {
            // Use point-style circle in legend and set font / color
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 10,
            padding: 16,
            color: '#0f1724', // legend label text color (override as needed)
            font: {
              size: 13,
            },
            // optionally you can provide a generateLabels callback for custom markup
          },
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label(context) {
              const idx = context.dataIndex ?? 0;
              const value = context.dataset.data[idx] as number;
              const pct = percentages[idx];
              return `${String(context.label)} — ${value} (${pct}%)`;
            },
          },
        },
        // data labels plugin config (labels inside arcs)
        datalabels: showInternalLabels
          ? {
              color: '#fff',
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter: (value: number, ctx: any) => {
                const idx = ctx.dataIndex as number;
                return `${percentages[idx]}%`;
              },
              font: { weight: 'bold', size: 12 },
            }
          : undefined,
      },
    }),
    [percentages, showInternalLabels]
  );

  return (
    <div className={className} aria-hidden={false}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
