import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Foundation for Better Health International",
  description:
    "The Foundation for Better Health International (FBHI) believes that everyone has the right to proper healthcare and education. Our mission is to improve the health and quality of life in underserved communities, particularly across Africa, by providing accurate diagnoses, effective treatment, disease prevention, and essential health education",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900 bg-white">{children}</body>
    </html>
  );
}
