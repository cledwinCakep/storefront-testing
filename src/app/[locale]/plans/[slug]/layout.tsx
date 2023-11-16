// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
import Head from "next/head";

const Country: any = {
  MY: {
    values: "Malaysia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  CN: { values: "China", image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg" },
  SG: {
    values: "Singapore",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  TH: {
    values: "Thailand",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  JP: {
    values: "Jepang",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  KR: { values: "Korea", image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg" },
};
export function generateMetadata({ params }: { params: any }) {
  const title = `eSIM ${
    Country[params.slug].values
  } UNLIMITED – Superalink – Local eSIM for Traveler.`;
  const description = `Data packs with local rates. Buy the affordable eSIM package for ${
    Country[params.slug].values
  } .`;
  const imageUrl = Country[params.slug].image;

  return {
    title,
    description,
    openGraph: {
      images: [{ url: imageUrl, width: 1800, height: 1600 }],
    },
  };
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
