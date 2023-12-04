"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import CTA from "@/components/template/Landing/CTA";

import { PaymentCardSuccess } from "@/components/molecules/PaymentCard/PaymentCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superalink – Local eSIM for Traveler",
  description:
    "Data packs with local rates. Buy the affordable eSIM package in Superalink.",
  openGraph: {
    images: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
};
export default function Status({ params }: { params: { locale: string } }) {
  const router = useRouter()
  useEffect(() => {
    const handleReplaceHistory = () => {
      router.replace('/');
    };

    handleReplaceHistory();
  }, []);
  return (
    <>
      <Navbar params={params} />
      <div className="flex h-full items-center justify-center bg-black px-4 pb-[135px] pt-[149px]">
        <PaymentCardSuccess />
      </div>
      <CTA CtaSection={false} />
    </>
  );
}
