import React from "react"
import Link from "next/link"
import Image from "next/image"
import DonationForm from "../DonationForm";

export default function VolunteerSection() {
  return (
    <section aria-label="Volunteer and donate" className="py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="relative rounded-xl shadow-lg overflow-hidden">
              <Image
                src="/dontate.jpeg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-black/10 " />
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                {/* Left text column */}
                <div className="p-8 lg:p-12 bg-white/5 z-10">
                  <div className="z-40">
                    <h3 className="text-xl font-bold">
                      Join as a volunteer or make a donation
                    </h3>
                    <p className="mt-2 text-slate-700 text-sm font-semibold">
                      Your time and contributions help ensure no child is left
                      behind.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <Link
                      href="/volunteer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 z-30"
                    >
                      Join as a volunteer
                    </Link>

                    <Link
                      href="/donate"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium border border-emerald-600 text-emerald-900 hover:bg-emerald-50 z-30"
                    >
                      Donate
                    </Link>
                  </div>
                </div>

                {/* Right column: Image uses next/image fill for optimization */}
                <div className="relative w-full min-h-80 flex items-center justify-center p-6">
                  <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow">
                    <DonationForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
