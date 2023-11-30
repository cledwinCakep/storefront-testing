// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
import Head from "next/head";

const Country: any = {
  WW: {
    values: "Global 146 Countries",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  KH: {
    values: "Cambodia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  USCA: {
    values: "United States/Canada",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AE: {
    values: "United Arab Emirates",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  QA: {
    values: "Qatar",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  SA: {
    values: "Saudi Arabia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  IN: {
    values: "India",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  MX: {
    values: "Mexico",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AR: {
    values: "Argentina",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  BR: {
    values: "Brazil",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  NP: {
    values: "Nepal",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  ZA: {
    values: "South Africa",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AU: {
    values: "Australia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  GU: {
    values: "Guam",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AP: {
    values: "13 Asian Countries",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  CN: {
    values: "China",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  PH: {
    values: "Philippines",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  US: {
    values: "United States",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  MY: {
    values: "Malaysia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  SG: {
    values: "Singapore",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  TH: {
    values: "Thailand",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  JP: {
    values: "Japan",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  TW: {
    values: "Taiwan",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  MO: {
    values: "Macau",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  GUMP: {
    values: "Guam/Saipan",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  DE: {
    values: "Germany",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  FR: {
    values: "France",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  ES: {
    values: "Spain",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  GB: {
    values: "United Kingdom",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  PT: {
    values: "Portugal",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  IT: {
    values: "Italy",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  IE: {
    values: "Ireland",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  SE: {
    values: "Sweden",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  DK: {
    values: "Denmark",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AT: {
    values: "Austria",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  EU: {
    values: "33 European Countries",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  ID: {
    values: "Indonesia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  VN: {
    values: "Vietnam",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  HK: {
    values: "Hong Kong",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  HKMO: {
    values: "Hong Kong/Macau",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  MN: {
    values: "Mongolia",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  KR: {
    values: "South Korea",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  CA: {
    values: "Canada",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
  AUNZ: {
    values: "Australia/New Zealand",
    image: "https://i.ibb.co/RY2Gz3H/Base-Thumbnail.jpg",
  },
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
