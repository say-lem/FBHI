// components/Footer.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

type SubscribeState = "idle" | "loading" | "success" | "error";

export default function Footer(): React.ReactElement {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      // If you have an /api/subscribe endpoint, this will post to it.
      // If not, the UI will still show success — replace with real endpoint later.
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.message || "Subscription failed");
      }

      setStatus("success");
      setMessage("Thanks — you have been subscribed!");
      setEmail("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Subscribe error", err);
      setStatus("error");
      setMessage(err?.message ?? "Unable to subscribe right now.");
    } finally {
      // small visual delay so success state is noticeable
      setTimeout(() => {
        if (status !== "loading")
          setStatus((s) => (s === "success" ? "idle" : s));
      }, 2500);
    }
  }

  return (
    <footer className="bg-(--teal-dark) text-white">
      <div className="container-narrow px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + about */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/10">
                {/* small inline svg logo */}
                <Image src="/logo.png" alt="FBHI Logo" width={24} height={24} />
              </span>

              <div>
                <span className="block font-semibold text-white">FBHI</span>
                <span className="block text-xs text-white/80">
                  Bringing people together to create lasting change.
                </span>
              </div>
            </div>

            <p className="mt-6 text-sm text-white/80 max-w-[20rem]">
              We deliver essential services — food, water, healthcare — to
              children and families in vulnerable communities.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {/* Social icons */}
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-2 bg-white/10 hover:bg-white/20"
              >
                <Facebook size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full p-2 bg-white/10 hover:bg-white/20"
              >
                <Twitter size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-2 bg-white/10 hover:bg-white/20"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2 grid grid-cols-2 gap-6 md:gap-12">
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/about" className="hover:underline">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="hover:underline">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:underline">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:underline">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white">
              Stay up to date
            </h4>
            <p className="mt-3 text-sm text-white/80">
              Subscribe to our newsletter for updates and impact stories.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                inputMode="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full sm:flex-1 px-3 py-2 rounded-md bg-white/8 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Email address"
              />

              <Button
                type="submit"
                className="whitespace-nowrap bg-(--brand-emerald) hover:bg-(--brand-emerald-700) text-white"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
            </form>

            {message && (
              <p
                role={status === "error" ? "alert" : "status"}
                className={`mt-3 text-sm ${status === "error" ? "text-rose-300" : "text-green-200"}`}
              >
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="container-narrow px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Foundation for Better, Health
            International. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <nav aria-label="Footer social" className="flex items-center gap-3">
              <a href="#" className="text-white/70 hover:text-white text-sm">
                Privacy
              </a>
              <a href="#" className="text-white/70 hover:text-white text-sm">
                Cookies
              </a>
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              {/* small social icons repeated for bottom bar */}
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-1 bg-white/6 hover:bg-white/12"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full p-1 bg-white/6 hover:bg-white/12"
              >
                <Twitter size={14} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-1 bg-white/6 hover:bg-white/12"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
