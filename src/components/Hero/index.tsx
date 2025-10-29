// components/Hero/index.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";

type Cta = { label: string; href: string };

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageSrc = "/hero.png",
}: {
  title: React.ReactNode;
  subtitle?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  imageSrc?: string;
}) {
  return (
    <div className="container-narrow px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: text */}
        <div className="pt-6 lg:mt-30 md:mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-[48ch]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-(--muted-text) max-w-[60ch]">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <Link href={primaryCta.href} className="inline-block">
                <Button
                  size="lg"
                  className="bg-(--brand-emerald) text-white shadow-sm px-6 py-3 rounded-xs"
                >
                  {primaryCta.label}
                </Button>
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center px-4 py-2 text-sm border border-green-700 font-medium text-(--brand-emerald-700) hover:underline"
              >
                <div className="w-5 h-5 rounded-full bg-slate-200 mr-2"></div>
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </div>

        {/* Right: image + round avatar + stat card */}
        <div className="relative flex items-start justify-end">
          <div className="w-[560px] lg:w-[470px] relative rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Children smiling"
              width={560}
              height={470}
              className="object-cover "
            />
          </div>

          {/* small stat card overlapping bottom-left of image */}
          <div className="absolute right-[57.5%] top-[66%] transform translate-x-2 translate-y-2 bg-stone-50 shadow p-3 rounded-lg justify-center items-start gap-3 w-40 h-32 flex flex-col z-50">
            <div className="">
              <div className="text-5xl font-bold text-(--brand-emerald-700)">
                150
              </div>
              <div className="text-sm font-bold text-(--muted-text)">
                Happy Volunteers
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="inline-flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-white" />
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-white" />
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-white" />
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-white" />
                <div className="w-7 h-7 rounded-full bg-slate-200 border border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
