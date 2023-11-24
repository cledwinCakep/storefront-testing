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
import Head from "next/head";

export default function Home({ params }: { params: { locale: string } }) {
  useEffect(() => {
    if (localStorage.getItem("affiliate_code")) {
      localStorage.removeItem("affiliate_code");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Superalink – Local eSIM for Traveler</title>
        <meta
          name="description"
          content="Data packs with local rates. Buy the affordable eSIM package in Superalink."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg"
        />
      </Head>
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
