// components/DonationsPieClient.tsx (converted to Doughnut)
'use client';

import React, { useMemo } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  data?: number[];
  labels?: string[];
  className?: string;
};

export default function DonationsPieClient({
  data = [37, 20, 17, 13, 12],
  labels = [
    'Healthy Food',
    'Medicine',
    'Pure Water',
    'Excursions',
    'Feeding the poor',
  ],
  className = 'w-56 h-56 lg:w-99 lg:h-99',
}: Props) {
  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data,
          backgroundColor: [
            '#16a34a',
            '#f59e0b',
            '#06b6d4',
            '#fb7185',
            '#f97316',
          ],
          borderColor: 'rgba(255,255,255,0.02)',
          borderWidth: 1,
          hoverOffset: 8,
        },
      ],
    }),
    [data, labels]
  );

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '55%', // adjust to make the ring thinner / thicker
    rotation: Math.PI * -0.5, // start from top
    plugins: {
      legend: {
        position: 'right',
        labels: { boxWidth: 12, padding: 12 },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className={className}>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
