"use client";

//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import CTA from "@/components/template/Landing/CTA";

import { PaymentCardSuccess } from "@/components/molecules/PaymentCard/PaymentCard";

export default function Status({ params }: { params: { locale: string } }) {
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
