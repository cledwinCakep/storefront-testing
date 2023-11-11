import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supera link – eSIM Luar Negeri Beli di Indonesia",
  description:
    "Beli SIM card (eSIM) travel untuk internetan di luar negeri lebih mudah dan praktis. Mau ke Luar Negeri? Beli eSIMnya di BELIESIM dong!",
  openGraph: {
    images: "https://i.ibb.co/1n9y1r6/base-thumbnail.jpg",
  },
};

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import Guide from "@/components/organisms/Guide/Guide";
import CTA from "@/components/template/Landing/CTA";
import Partners from "@/components/template/Landing/Partner";
import Destination from "@/components/template/Landing/Destination";
import Advantage from "@/components/template/Landing/Advantage";
import Hero from "@/components/template/Landing/Hero";

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <>
      <Navbar params={params} />
      <Hero />
      <Advantage />
      <Destination />
      <Partners />
      <Guide />
      <CTA />
    </>
  );
}
