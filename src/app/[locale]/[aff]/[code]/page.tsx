"use client";

import React from "react";
import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

// export const metadata: Metadata = {
//   title: "Superalink – Local eSIM for Traveler",
//   description:
//     "Data packs with local rates. Buy the affordable eSIM package in Superalink.",
//   openGraph: {
//     images: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
//   },
// };

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import Guide from "@/components/organisms/Guide/Guide";
import CTA from "@/components/template/Landing/CTA";
import Partners from "@/components/template/Landing/Partner";
import Destination from "@/components/template/Landing/Destination";
import Advantage from "@/components/template/Landing/Advantage";
import Hero from "@/components/template/Landing/Hero";

export default function AffLink({
  params,
}: {
  params: { locale: string; code: string };
}) {
  const code = location.pathname.split("/aff/")[1] ?? params.code;

  useEffect(() => {
    localStorage.setItem("affiliate_code", code);
  }, [code]);
  
  console.log(params);

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
