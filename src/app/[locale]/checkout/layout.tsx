// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Superalink – Local eSIM for Traveler",
  description:
    "Data packs with local rates. Buy the affordable eSIM package in Superalink.",
  openGraph: {
    images: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
