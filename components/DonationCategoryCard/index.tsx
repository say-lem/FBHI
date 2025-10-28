// components/DonationCategoryCard/index.tsx
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export type DonationCategoryCardProps = {
  title: string;
  text: string;
  href?: string;
  /**
   * Prefer one of:
   *  - icon: a React node (e.g. a lucide-react icon) to be shown in a circular badge
   *  - imageSrc: optional future fallback for an image (not used here)
   */
  icon?: React.ReactNode;
  iconBgClass?: string; // tailwind classes for background color of icon badge
};

export default function DonationCategoryCard({
  title,
  text,
  href = '/campaigns',
  icon,
  iconBgClass = 'bg-emerald-50',
}: DonationCategoryCardProps): React.ReactElement {
  const id = `donation-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article
      role="group"
      aria-labelledby={id}
      className="rounded-lg bg-white p-6 shadow-sm hover:shadow-md flex flex-col items-center text-center hover:border hover:border-amber-400 transition-all duration-200"
    >
      {/* Icon badge */}
      {icon && (
        <div className="mb-4">
          <span
            className={clsx(
              'inline-flex items-center justify-center w-16 h-16 rounded-full',
              iconBgClass
            )}
            aria-hidden
          >
            {/* ensure icons receive sizing via className passed in the mapping */}
            {icon}
          </span>
        </div>
      )}

      <h3 id={id} className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-(--muted-text)">{text}</p>

      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:underline"
          prefetch={false}
        >
          See All Campaigns →
        </Link>
      </div>
    </article>
  );
}
