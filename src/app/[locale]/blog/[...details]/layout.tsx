import { headers } from "next/headers";

const news = [
  {
    id: 0,
    link: "/blog/South Korea introduces 2 numbers in 1 phone service with eSIM",
    topic: "Trending",
    date: "31 August 2022",
    title: "South Korea introduces 2 numbers in 1 phone service with eSIM",
    desc: "South Korea will begin embedded subscriber identity module, known as eSIM, services from Thursday, allowing Koreans to have two different numbers in one mobile device, the Ministry of Science and ICT said Wednesday. The eSIM service, an upgrade from the universal subscriber identity module, is based on downloading the electronic profile of subscribers to each device. Therefore, it does not require a physical USIM card change. The ministry said Koreans can now choose between the two types of SIM cards, but eSIM offers faster and more convenient services as the entire purchasing process can be done online. The price of getting a new eSIM is 2,750 won ($2), much cheaper than buying a USIM at the minimum cost of 7,700 won, it added. With the introduction of eSIM services, users can have two different phone numbers in one device -- one for USIM and another for eSIM. According to the ministry, eSIM needs to be installed in smartphones from the production stage. Currently, Samsung Electronics' Galaxy Z Fold4 and Z Flip4, along with Apple's smartphone lineups beyond the iPhone XS, which hit the domestic market in 2018, have built-in eSIM services. The ministry said it will cooperate with phone manufacturers and telecommunication operators to expand the list of mobile devices that can provide eSIM services. The country's three major mobile carriers -- SK Telecom, KT and LG Uplus -- are holding promotions to offer eSIM free of charge for customers who buy eSIM services for the first time through December. According to an intelligence report from GSMA, a global mobile communications organization, commercial eSIM services had been launched in at least 88 countries around the world as of June this year.",
    image: "/assets/introduces.jpeg",
    author: "The Korea Herald",
  },
  {
    id: 1,
    link: "/blog/South Korea's LG U+ Launches Innovative eSIM Promotion",
    topic: "Hot",
    date: "31 May 2023",
    title: "South Korea's LG U+ Launches Innovative eSIM Promotion",
    desc: "LG U+, a leading telecommunications enterprise in South Korea, is launching a marketing campaign featuring a complimentary T-Money card for all travelers in South Korea who obtain a prepaid eSIM via its official web portal (https://www.lguplus.com/ib-roaming/pc/eng). The eSIM is a downloadable service that enables dual numbering without the hassle of replacing the current SIM card. LG U+'s eSIM, a data product of unparalleled convenience, can be swiftly utilized in Korea by scanning the QR code delivered via email upon purchase, eliminating the need to visit physical retail outlets such as airport counters. Customers are presented with the opportunity to choose a plan duration ranging from a minimum of 5 days to a maximum of 60 days, with unlimited data usage available for the entire plan period. Moreover, customers have the flexibility to extend the term at any point during its usage via the homepage. Should the period reach its conclusion, they retain the option to apply for an extension once more within three days. Starting May 20, 2023, LG U+ is implementing a special campaign where each customer purchasing an eSIM through the website will receive a T-Money card. This transportation card is valid across all public transit systems in Korea and is an essential commodity for travel within the nation. This special deal grants customers the privilege of a 10% discount on their purchase, saving them the inconvenience of acquiring a separate T-Money card. The T-Money card can be obtained from the LG U+ Customer Center at the airport by presenting the email received after the website purchase.",
    image: "/assets/korean-esim-news.jpeg",
    author: "The Fast Mode",
  },
  {
    id: 2,
    link: "/blog/China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
    topic: "Technology",
    date: "22 November 2023",
    title:
      "China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
    desc: "Chinese consumer electronics company Xiaomi on Thursday detailed plans to enter China's oversaturated electric vehicle market and compete with automaker giants Tesla and Porsche with a car model it says it spent more than 10 billion yuan ($1.4 billion) to develop. The company's car model, known as Xiaomi SU7, “is in trial production and it will hit the domestic market in a few months,” CEO Lei Jun said in a Tuesday post on the X social media platform, formerly known as Twitter. “The price has not been finalized yet.” Pronounced “Sue Qi” in Mandarin, the Xiaomi SU7 beats Porsche's Taycan and Tesla's Model S on acceleration and other metrics, Lei said during a three-hour presentation Thursday. He laid out bold ambitions to become an industry leader, including in autonomous driving and noted that the SU7 design team previously worked at BMW and Mercedes-Benz. Sales are due to begin in 2024, after more than three years of development — during which electric vehicles have taken off in China's highly competitive market, and domestic automakers have begun to differentiate their products through ambitious offerings of car-compatible tech. This is an area of potential advantage for Xiaomi, which is best known for its smartphones and home appliances and previously said it wants to create a ”'Human x Car x Home' smart ecosystem.” The SU7 is integrated with Xiaomi's smartphones and internet-connected home appliances, Lei announced Thursday. He emphasized the company's efforts to ensure data privacy among the devices and create a car that surpasses U.S. safety standards for rear-end collisions. Lei said the vehicle will also be compatible with Apple's iPhone, iPad, CarPlay and AirPlay. The U.S. giant has yet to release a car despite widespread speculation about such plans.",
    image: "/assets/chinas.webp",
    author: "CNBC | Evelyn Cheng",
  },
  {
    id: 3,
    link: "/blog/Ooredoo Launches eSIM Service in Myanmar",
    topic: "Market",
    date: "17 January 2024",
    title: "Ooredoo Launches eSIM Service in Myanmar",
    desc: "Ooredoo Myanmar has announced the launch of its eSIM service in Myanmar, which can be used in 118 countries through international roaming. In an official release, Ooredoo said the latest advancement in SIM card technology, eSIM, promises to enhance users' experience with telecommunication services. An eSIM is a digital version of a SIM card that is directly integrated into compatible devices, allowing for seamless network activation and smooth switching without the need for a physical SIM. Unlike traditional SIM cards, an eSIM does not require a physical slot for placement, and users only need to check if their mobile device is compatible, activating the eSIM through simple configuration procedures. Ooredoo Myanmar said users can upgrade to eSIM for free. Additionally, anyone can purchase a new Ooredoo eSIM at the same rate as normal SIMs, incurring no additional costs. Users can conveniently upgrade or purchase eSIM digitally with a few taps on their mobile devices, eliminating the need to visit a physical store.",
    image: "/assets/ooredoo.jpeg",
    author: "TelkomTalk | Srikapardhi",
  },
];

export function generateMetadata({
  params,
}: {
  params: { details: string; locale: string };
}) {
  const heads = headers();
  const domain = heads.get("host");
  const title = (
    news.find((item) => item.title === decodeURIComponent(params.details)) || {}
  ).title;
  const description = (
    news.find((item) => item.title === decodeURIComponent(params.details)) || {}
  ).desc;
  const image = (
    news.find((item) => item.title === decodeURIComponent(params.details)) || {
      image: "/assets/introduces.jpeg",
    }
  ).image;

  const imageUrl = domain + image;

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
