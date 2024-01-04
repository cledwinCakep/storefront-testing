"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import Hero from "@/components/template/Landing/Hero";

import Advantage from "@/components/template/Landing/Advantage";
import Partners from "@/components/template/Landing/Partner";
import Destination from "@/components/template/Landing/Destination";
import Guide from "@/components/organisms/Guide/Guide";
import CTA from "@/components/template/Landing/CTA";

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
