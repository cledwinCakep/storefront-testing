// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
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

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
