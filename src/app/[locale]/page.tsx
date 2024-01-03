"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import Hero from "@/components/template/Landing/Hero";

const Advantage = dynamic(
  () => import("@/components/template/Landing/Advantage")
);
const Partners = dynamic(() => import("@/components/template/Landing/Partner"));
const Destination = dynamic(
  () => import("@/components/template/Landing/Destination")
);
const Guide = dynamic(() => import("@/components/organisms/Guide/Guide"), {
  ssr: false,
});
const CTA = dynamic(() => import("@/components/template/Landing/CTA"), {
  ssr: false,
});

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
