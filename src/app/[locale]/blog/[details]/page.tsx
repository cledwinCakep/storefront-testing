"use client";

import { BlogFooter } from "@/components/organisms/Blog/BlogFooter";
import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
// tremor
import { Button, Divider, Text, Title } from "@tremor/react";
import Image from "next/image";
import { toast, Toaster } from "react-hot-toast";

const BlogDetails = ({ params }: { params: { details: string } }) => {
  const news = [
    {
      id: 1,
      link: "/blog/Five dead as planes collide at Tokyo airport; all passengers evacuate Japan Airlines flight",
      topic: "Trending",
      date: "02 January 2024",
      title:
        "Five dead as planes collide at Tokyo airport; all passengers evacuate Japan Airlines flight",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy.",
    },
    {
      id: 2,
      link: "/blog/China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
      topic: "Technology",
      date: "22 November 2023",
      title:
        "China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
      desc: "Chinese consumer electronics company Xiaomi on Thursday detailed plans to enter China's oversaturated electric vehicle market and compete with automaker giants Tesla and Porsche with a car model it says it spent more than 10 billion yuan ($1.4 billion) to develop.",
    },
    {
      id: 3,
      link: "/blog/Cramer makes market predictions for 2023, says investors may be rotating out of tech",
      topic: "Market",
      date: "19 October 2023",
      title:
        "Cramer makes market predictions for 2023, says investors may be rotating out of tech",
      desc: "He suggested that Wall Street may now be seeing a “sector rotation″ as some investors doubt that the Magnificent Seven tech stocks will continue their runs, instead buying up stocks that have seen steep declines such as food or pharmaceutical names.",
    },
  ];

  const title = decodeURIComponent(params.details);

  const copyToClipboard = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText("");
      toast("Link copied!", {
        position: "top-right",
        style: { background: "#374151", color: "white" },
      }); // hide the toast after 3 seconds
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = "";
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
                    src="/assets/blog-image.png"
                    objectFit="cover"
                    alt=""
                  />
                  <div className="w-full">
                    <p className="text-base font-bold text-[#121417]">
                      Aidil Arif Budiman
                    </p>
                    <div className="flex w-full flex-col gap-0 sm:flex-row sm:gap-2">
                      <div className="flex w-auto flex-col gap-0 sm:flex-row sm:gap-2">
                        <Text className="font-normal text-[#767676]">
                          Publised in
                        </Text>
                        <Text className="font-normal text-[#121417]">
                          19 January 2024
                        </Text>
                      </div>
                      <div className="ml-2 flex w-auto gap-2">
                        <div className="flex min-h-full w-2 flex-col justify-center">
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
                        <Text className="font-normal text-[#121417]">
                          Hot Topics
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    onClick={copyToClipboard}
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                      src="/assets/twitterx-icon.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    onClick={copyToClipboard}
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                      src="/assets/sharelink-icon.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className="cursor-pointer rounded-md bg-[#F3F4F6] p-2"
                    onClick={copyToClipboard}
                  >
                    <Image
                      width={20}
                      height={20}
                      className="inline-block h-5 w-5 rounded-full ring-2 ring-white"
                      src="/assets/facebook-icon.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <Image
                src={"/assets/blog-image2.png"}
                width={580}
                height={255}
                objectFit="contain"
                alt="logo superalink"
                className="block h-[300px] min-w-full rounded-lg object-cover sm:h-[500px]"
              />
              <p className="mt-2 text-center text-base text-[#767676]">
                Image source: bbc.com
              </p>
            </div>
            <div className="flex w-full flex-col justify-between gap-20 md:flex-row md:gap-14">
              <div className="flex h-auto w-full flex-col gap-6">
                <div className="h-auto w-full">
                  <div className="flex w-full flex-col gap-4">
                    <p className="text-base font-normal text-[#222]">
                      {`Prime Minister Fumio Kishida said the extent of damage
                      from the quake was becoming “increasingly clear” more than
                      24 hours after it struck on the Noto peninsula in Ishikawa
                      prefecture. “The government has deployed emergency rescue
                      teams from the Self-Defence Forces, police and fire
                      departments to the area and is doing its utmost to save
                      lives and rescue victims and survivors, but we have
                      received reports that there are still many people waiting
                      to be rescued under collapsed buildings.” Kishida said
                      some 3,000 rescuers were finding it difficult to reach the
                      northern tip of the peninsula where helicopter surveys had
                      discovered many fires and widespread damage to buildings
                      and infrastructure. Japan sits on the “Ring of Fire” arc
                      of volcanoes and oceanic trenches that partly encircles
                      the Pacific Basin. It accounts for about 20% of the
                      world's earthquakes of magnitude 6 or greater, and each
                      year experiences up to 2,000 quakes that can be felt. Many
                      rail services and flights into the quake area have been
                      suspended. More than 500 people were stranded at Noto's
                      airport which closed due to cracks in its runway and
                      access road and damage to its terminal building.
                      Authorities have confirmed 55 deaths, all in Ishikawa
                      prefecture, making it Japan's deadliest earthquake since
                      2016. Many of those killed are in Suzu and Wajima, another
                      city on the remote northern tip of the Noto peninsula.
                      Scores more have been injured and authorities were
                      battling blazes in several cities on Tuesday and hauling
                      people from collapsed buildings. “I've never experienced a
                      quake that powerful,” said Wajima resident Shoichi
                      Kobayashi, 71, who was at home having a celebratory New
                      Year's meal with his wife and son when the quake struck,
                      sending furniture flying across the dining room.`}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-xl font-bold leading-[56px]">
                  Check this out
                </p>
                <hr className="mb-6" />
                {news.map((dt, index) => {
                  return (
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
                          <p className="line-clamp-3 break-words text-[18px] font-bold text-[#121417]">
                            {dt.title}
                          </p>
                        </div>

                        <div
                          className="min-h-[150px] min-w-[154px] rounded-md bg-cover bg-center bg-no-repeat"
                          style={{
                            backgroundImage: "url(/assets/blog-image.png)",
                          }}
                        />
                      </div>
                      <div className="my-8">
                        <hr
                          className={`${index == news.length - 1 && "hidden"}`}
                        />
                      </div>
                    </a>
                  );
                })}
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
