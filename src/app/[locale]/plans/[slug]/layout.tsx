// utils
import { capitalizeSentences } from "@/lib/utils/capitalize";
import Head from "next/head";

const Country: any = {
  MY: { values: "Malaysia", image: "https://i.ibb.co/JcPKshv/MY-thumbnail.jpg" },
  CN: { values: "China", image: "https://i.ibb.co/XDnmsnF/CN-thumbnail.jpg" },
  SG: { values: "Singapore", image: "https://i.ibb.co/Pwgq5vx/SG-thumbnail.jpg" },
  TH: { values: "Thailand", image: "https://i.ibb.co/DQWs3XK/TH-thumbnail.jpg" },
  JP: { values: "Jepang", image: "https://i.ibb.co/vLQJffX/JP-thumbnail.jpg" },
  KR: { values: "Korea", image: "https://i.ibb.co/syV1vqx/KR-thumbnail.jpg" },
};
export function generateMetadata({ params }: { params: any }) {
  const title = `eSIM ${
    Country[params.slug].values
  } UNLIMITED – BELIESIM – eSIM Luar Negeri Beli di Indonesia – Beli eSIM Luar Negeri? belinya di BELIESIM dong!`;
  const description = `Beli SIM card (eSIM) travel untuk internetan di ${
    Country[params.slug].values
  } lebih mudah dan praktis. Mau ke Luar Negeri? Beli eSIMnya di BELIESIM dong!`;
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
