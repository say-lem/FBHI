"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavLink = { label: string; href: string };

export interface NavbarProps {
  links?: NavLink[];
  className?: string;
  logoText?: string;
}

/**
 * Reusable Navbar component.
 * - Responsive (desktop nav + mobile slide-over)
 * - Accessible: role, aria-expanded, aria-controls, Escape to close
 */
export default function Navbar({
  links = [
    { label: "Home", href: "/" },
    { label: "About us", href: "#" },
    { label: "Donations", href: "#" },
    { label: "Campaigns", href: "#" },
    { label: "Blogs", href: "#" },
  ],
  className,
  logoText = "FBHI",
}: NavbarProps) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close on navigation

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMobileOpen(false), [pathname]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    if (mobileOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Add small shadow when scrolled (visual polish)
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "w-full top-0 z-40 bg-slate-100 backdrop-blur-sm transition-shadow",
        scrolled ? "shadow-sm" : "",
        className
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Primary Navigation"
      >
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible:outline-none"
            >
              {/* Inline logo svg — replace with Image component + /public/logo.png if you have an asset */}
              <Image src="/logo.png" alt="FBHI Logo" width={36} height={36} />
              <span className="font-bold text-slate-900 text-xl">
                {logoText}
              </span>
            </Link>
          </div>

          {/* Center/desktop: nav links */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium py-2 px-1 transition-colors inline-flex items-center",
                  isActive(l.href)
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-600"
                )}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex">
              <Link href="/donate" prefetch={false}>
                <Button aria-label="Donate now">
                  {/* Button uses your shadcn button */}Donate Now <ArrowUpRight />
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
              type="submit"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (slide down / overlay) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={cn("md:hidden", mobileOpen ? "block" : "hidden")}
      >
        <div
          className="fixed inset-0 z-30 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div className="fixed top-0 right-0 z-40 w-full max-w-xs h-full bg-white shadow-lg p-6 overflow-auto">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-emerald-600">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3C12 3 8 5 6 8C4 11 6 15 12 21C18 15 20 11 18 8C16 5 12 3 12 3Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="font-semibold text-slate-900">{logoText}</span>
            </Link>

            <button
              className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 border-t pt-6 space-y-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block text-base font-medium py-2",
                  isActive(l.href)
                    ? "text-emerald-700"
                    : "text-slate-700 hover:text-emerald-600"
                )}
                aria-current={isActive(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}

            <div className="pt-3">
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                prefetch={false}
              >
                <Button className="w-full">Donate Now</Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t pt-4 text-sm text-slate-500">
            <p className="mb-2">Contact</p>
            <a
              href="mailto:hello@unityinaction.org"
              className="block hover:underline"
            >
              hello@unityinaction.org
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
