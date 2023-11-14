//Component
import Navbar from "@/components/organisms/Navbar/Navbar";
import CTA from "@/components/template/Landing/CTA";

import { PaymentCardFailed } from "@/components/molecules/PaymentCard/PaymentCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BELIESIM – eSIM Luar Negeri Beli di Indonesia – Beli eSIM Luar Negeri? belinya di BELIESIM dong!",
  description:
    "Beli SIM card (eSIM) travel untuk internetan di luar negeri lebih mudah dan praktis. Mau ke Luar Negeri? Beli eSIMnya di BELIESIM dong!",
  openGraph: {
    images: "/base_thumbnail.png",
  },
};
export default function Status({ params }: { params: { locale: string } }) {
  return (
    <>
      <Navbar params={params} />
      <div className="flex h-full items-center justify-center bg-black px-4 pb-[135px] pt-[149px]">
        <PaymentCardFailed />
      </div>
      <CTA CtaSection={false} />
    </>
  );
}
