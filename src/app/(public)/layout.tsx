// app/layout.tsx
import type { Metadata } from "next";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Foundation for Better Health International",
    description:
        "FBHI provides healthcare and education to underserved communities across Africa.",
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default PublicLayout;
