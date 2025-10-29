"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavLink = { label: string; href: string };

export interface NavbarProps {
  links?: NavLink[];
  className?: string;
  logoText?: string;
}

export default function Navbar({
  links = [
    { label: "About us", href: "/about" },
    { label: "What We Do", href: "/donate" },
    { label: "Campaigns", href: "/campaigns" },
    { label: "News Letter", href: "/blog" },
  ],
  className,
  logoText = "FBHI",
}: NavbarProps) {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close on navigation
  useEffect(() => setMobileOpen(false), [pathname]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Add small shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
      {/* Desktop Nav */}
      <nav className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FBHI Logo" width={36} height={36} />
          <span className="font-bold text-slate-900 text-lg">{logoText}</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isActive(l.href)
                  ? "text-emerald-700"
                  : "text-slate-700 hover:text-emerald-600"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div>
        
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header Row inside menu */}
        <div className="flex z-50 bg-white  items-center justify-between p-6 border-b">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <Image src="/logo.png" alt="FBHI Logo" width={36} height={36} />
            <span className="font-bold text-slate-900 text-lg">{logoText}</span>
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-md text-slate-700 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex-1 z-50 bg-white  flex flex-col items-start px-6 py-8 space-y-6 text-lg font-medium text-slate-700">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "transition-colors",
                isActive(l.href)
                  ? "text-emerald-700"
                  : "hover:text-emerald-600"
              )}
            >
              {l.label}
            </Link>
          ))}

        </div>

      </div>
    </header>
  );
}
