"use client";

import { BlogFooter } from "@/components/organisms/Blog/BlogFooter";
import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
// tremor
import { Button, Divider, Text, Title } from "@tremor/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const BlogDetails = ({ params }: { params: { details: string } }) => {
  const news = [
    {
      id: 0,
      link: "/blog/South Korea's LG U+ Launches Innovative eSIM Promotion",
      topic: "Hot",
      date: "31 May 2023",
      title: "South Korea's LG U+ Launches Innovative eSIM Promotion",
      desc: "LG U+, a leading telecommunications enterprise in South Korea, is launching a marketing campaign featuring a complimentary T-Money card for all travelers in South Korea who obtain a prepaid eSIM via its official web portal (https://www.lguplus.com/ib-roaming/pc/eng). The eSIM is a downloadable service that enables dual numbering without the hassle of replacing the current SIM card. LG U+'s eSIM, a data product of unparalleled convenience, can be swiftly utilized in Korea by scanning the QR code delivered via email upon purchase, eliminating the need to visit physical retail outlets such as airport counters. Customers are presented with the opportunity to choose a plan duration ranging from a minimum of 5 days to a maximum of 60 days, with unlimited data usage available for the entire plan period. Moreover, customers have the flexibility to extend the term at any point during its usage via the homepage. Should the period reach its conclusion, they retain the option to apply for an extension once more within three days. Starting May 20, 2023, LG U+ is implementing a special campaign where each customer purchasing an eSIM through the website will receive a T-Money card. This transportation card is valid across all public transit systems in Korea and is an essential commodity for travel within the nation. This special deal grants customers the privilege of a 10% discount on their purchase, saving them the inconvenience of acquiring a separate T-Money card. The T-Money card can be obtained from the LG U+ Customer Center at the airport by presenting the email received after the website purchase.",
      image: "/assets/korean-esim-news.jpeg",
      author: "The Fast Mode",
    },
    {
      id: 1,
      link: "/blog/South Korea introduces 2 numbers in 1 phone service with eSIM",
      topic: "Trending",
      date: "31 August 2022",
      title: "South Korea introduces 2 numbers in 1 phone service with eSIM",
      desc: "South Korea will begin embedded subscriber identity module, known as eSIM, services from Thursday, allowing Koreans to have two different numbers in one mobile device, the Ministry of Science and ICT said Wednesday. The eSIM service, an upgrade from the universal subscriber identity module, is based on downloading the electronic profile of subscribers to each device. Therefore, it does not require a physical USIM card change. The ministry said Koreans can now choose between the two types of SIM cards, but eSIM offers faster and more convenient services as the entire purchasing process can be done online. The price of getting a new eSIM is 2,750 won ($2), much cheaper than buying a USIM at the minimum cost of 7,700 won, it added. With the introduction of eSIM services, users can have two different phone numbers in one device -- one for USIM and another for eSIM. According to the ministry, eSIM needs to be installed in smartphones from the production stage. Currently, Samsung Electronics' Galaxy Z Fold4 and Z Flip4, along with Apple's smartphone lineups beyond the iPhone XS, which hit the domestic market in 2018, have built-in eSIM services. The ministry said it will cooperate with phone manufacturers and telecommunication operators to expand the list of mobile devices that can provide eSIM services. The country's three major mobile carriers -- SK Telecom, KT and LG Uplus -- are holding promotions to offer eSIM free of charge for customers who buy eSIM services for the first time through December. According to an intelligence report from GSMA, a global mobile communications organization, commercial eSIM services had been launched in at least 88 countries around the world as of June this year.",
      image: "/assets/introduces.jpeg",
      author: "The Korea Herald",
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

  const title = decodeURIComponent(params.details);
  const [url, seturl] = useState("");

  useEffect(() => {
    if (window) {
      seturl(window.location.href);
    }
  }, []);

  const copyToClipboard = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url);
      toast("Link copied!", {
        position: "top-right",
        style: { background: "#374151", color: "white" },
      }); // hide the toast after 3 seconds
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      toast("Link copied!", {
        position: "top-right",
        style: { background: "#374151", color: "white" },
      }); // hide the toast after 3 seconds
    }
  };

  return (
    <>
      <Toaster />
      <BlogNavbar params={params} />
      <div className="h-full w-full bg-white px-5 pb-20 pt-9 md:px-[30px]">
        <div className="h-full w-full">
          <div className="mx-auto w-full max-w-[1180px]">
            <p className="text-[42px] font-bold leading-[56px]">{title}</p>
            <div className="mb-10 mt-12 h-auto w-full">
              <div className="mb-6 flex w-full flex-col justify-between gap-7 sm:flex-row">
                <div className="flex items-center gap-4">
                  <Image
                    width={44}
                    height={44}
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-white"
                    src="/assets/avatar-news.svg"
                    objectFit="cover"
                    alt=""
                  />
                  <div className="w-full">
                    <p className="text-base font-bold text-[#121417]">
                      {news.filter((news) => news.title === title)[0].author ||
                        "-"}
                    </p>
                    <div className="xs:flex-row flex w-full flex-col justify-start gap-2">
                      <div className="flex gap-2">
                        <Text className="text-sm font-normal text-[#767676]">
                          Publised in
                        </Text>
                        <Text className="text-sm font-normal text-[#121417]">
                          {news.filter((news) => news.title === title)[0].date}
                        </Text>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="4"
                            height="4"
                            viewBox="0 0 4 4"
                            fill="none"
                          >
                            <circle cx="2" cy="2" r="2" fill="#BDBDBD" />
                          </svg>
                        </div>
                        <Text className="text-sm font-normal text-[#121417]">
                          Hot Topics
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    href={`https://twitter.com/intent/tweet?url=${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5"
                      src="/assets/twitterx-icon.svg"
                      alt=""
                    />
                  </a>
                  <a
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    href={`https://www.facebook.com/share.php?u=${url}`}
                    target="_blank"
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5"
                      src="/assets/facebook-icon.svg"
                      alt=""
                    />
                  </a>
                  <div
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    onClick={copyToClipboard}
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5"
                      src="/assets/sharelink-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Image
                src={news.filter((news) => news.title === title)[0].image}
                width={580}
                height={255}
                objectFit="contain"
                alt="logo superalink"
                className="block h-[300px] min-w-full rounded-lg object-cover sm:h-[500px]"
              />
              <p className="mt-2 text-center text-base text-[#767676]">
                Image Credit: LGU+
              </p>
            </div>
            <div className="flex w-full flex-col justify-between gap-20 md:flex-row md:gap-14">
              <div className="flex h-auto w-full flex-col gap-6">
                <div className="h-auto w-full">
                  <div className="flex w-full flex-col gap-4">
                    <p className="text-base font-normal text-[#222]">
                      {news.filter((news) => news.title === title)[0].desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-xl font-bold leading-[56px]">
                  Check these out
                </p>
                <hr className="mb-6" />
                {news.map((dt, index) => (
                  <>
                    {dt.title === title ? null : (
                      <a href={dt.link} key={index}>
                        <div className="mt-4 flex w-full flex-col justify-between gap-4 sm:flex-row">
                          <div className="flex w-full flex-col gap-4">
                            <div
                              className="flex w-full items-center gap-4"
                              key={index}
                            >
                              <div className="w-auto rounded-md border border-[#BDBDBD] bg-transparent px-2 py-2 text-[14px] font-bold text-[#121417]">
                                {dt.topic}
                              </div>
                              <Text className="text-[14px] font-normal text-[#767676]">
                                {dt.date}
                              </Text>
                            </div>
                            <Text className="line-clamp-3 break-words text-[18px] font-medium text-[#121417]">
                              {dt.title}
                            </Text>
                          </div>

                          <div
                            className="min-h-[150px] min-w-[154px] rounded-md bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${dt.image})`,
                            }}
                          />
                        </div>
                        <div className="my-8">
                          <hr
                            className={`${
                              index == news.length - 1 && "hidden"
                            }`}
                          />
                        </div>
                      </a>
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
      {/* <div className="py-9 px-[30px] min-h-full">
        <Title>Blog Post</Title>
      </div> */}
    </>
  );
};

export default BlogDetails;
