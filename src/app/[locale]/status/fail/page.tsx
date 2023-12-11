//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import CTA from "@/components/template/Landing/CTA";

import { PaymentCardFailed } from "@/components/molecules/PaymentCard/PaymentCard";
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
  return (
    <>
      <Navbar params={params} />
      <div className="flex h-screen flex-col">
        <div className="flex h-fit w-full grow flex-col items-center justify-center bg-black px-4 pb-[135px] pt-[149px] md:h-full">
          <PaymentCardFailed />
        </div>
        <div className="bottom-0 flex-none">
          <CTA CtaSection={false} />
        </div>
      </div>
    </>
  );
}
