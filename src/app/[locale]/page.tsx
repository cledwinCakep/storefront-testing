"use client";

import React, { useEffect } from "react";

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import Guide from "@/components/organisms/Guide/Guide";
import CTA from "@/components/template/Landing/CTA";
import Partners from "@/components/template/Landing/Partner";
import Destination from "@/components/template/Landing/Destination";
import Advantage from "@/components/template/Landing/Advantage";
import Hero from "@/components/template/Landing/Hero";

export default function Home({ params }: { params: { locale: string } }) {
  useEffect(() => {
    if (localStorage.getItem("affiliate_code")) {
      localStorage.removeItem("affiliate_code");
    }
  }, []);
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
