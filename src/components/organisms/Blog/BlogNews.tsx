import { Divider, Text } from "@tremor/react";
import Image from "next/image";
import { motion } from "framer-motion";
import useBlogHook from "@/lib/hooks/useBlogHook";
import formatDate from "@/lib/utils/dateFormatter";
import { RenderHtmlFromString } from "@/lib/utils/htmlFormatter";
import Link from "next/link";

function BlogNews() {
  const { news } = useBlogHook();

  // const news = [
  //   {
  //     id: 1,
  //     link: "/blog/South Korea introduces 2 numbers in 1 phone service with eSIM",
  //     topic: "Trending",
  //     date: "31 August 2022",
  //     title: "South Korea introduces 2 numbers in 1 phone service with eSIM",
  //     desc: "South Korea will begin embedded subscriber identity module, known as eSIM, services from Thursday, allowing Koreans to have two different numbers in one mobile device, the Ministry of Science and ICT said Wednesday.",
  //   },
  //   {
  //     id: 2,
  //     link: "/blog/South Korea's LG U+ Launches Innovative eSIM Promotion",
  //     topic: "Trending",
  //     date: "30 May 2023",
  //     title: "South Korea's LG U+ Launches Innovative eSIM Promotion",
  //     desc: "LG U+, a leading telecommunications enterprise in South Korea, is launching a marketing campaign featuring a complimentary T-Money card for all travelers in South Korea who obtain a prepaid eSIM via its official web portal. The eSIM is a downloadable service that enables dual numbering without the hassle of replacing the current SIM card. LG U+ eSIM, a data product of unparalleled convenience, can be swiftly utilized in Korea by scanning the QR code delivered via email upon purchase, eliminating the need to visit physical retail outlets such as airport counters.",
  //   },
  //   {
  //     id: 3,
  //     link: "/blog/China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
  //     topic: "Technology",
  //     date: "22 November 2023",
  //     title:
  //       "China's Xiaomi unveils its first EV as it looks to compete with Porsche, Tesla",
  //     desc: "Chinese consumer electronics company Xiaomi on Thursday detailed plans to enter China's oversaturated electric vehicle market and compete with automaker giants Tesla and Porsche with a car model it says it spent more than 10 billion yuan ($1.4 billion) to develop.",
  //   },
  //   {
  //     id: 4,
  //     link: "/blog/Ooredoo Launches eSIM Service in Myanmar",
  //     topic: "Market",
  //     date: "17 January 2024",
  //     title: "Ooredoo Launches eSIM Service in Myanmar",
  //     desc: "He suggested that Wall Street may now be seeing a “sector rotation″ as some investors doubt that the Magnificent Seven tech stocks will continue their runs, instead buying up stocks that have seen steep declines such as food or pharmaceutical names.",
  //   },
  // ];

  return (
    <div className="h-full w-full bg-white px-5 pb-20 pt-32 md:px-[30px]">
      <div className="h-full w-full">
        <div className="mx-auto w-full max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.6 }}
            className="-mt-2 h-auto w-full"
          >
            <p className="pb-6 text-[26px] font-bold text-[#121417]">
              Blog Post
            </p>
          </motion.div>

          <div className="flex w-full flex-col justify-between gap-20 md:flex-row md:gap-10">
            <div className="flex h-auto w-full flex-col gap-6 lg:min-w-[580px]">
              <motion.div
                style={{
                  overflow: "hidden",
                  height: "58%",
                  maxHeight: "499px", // Initial height, adjust as needed
                }}
              >
                <motion.img
                  src={`${news[0]?.file.file_url}`}
                  width={580}
                  height={255}
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                  alt="logo superalink"
                  className="block h-[300px] w-full rounded-lg object-cover sm:h-[499px] md:w-auto md:object-fill lg:max-h-[455px] lg:max-w-[550px]"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -80 }}
                transition={{ ease: "easeOut", duration: 1.2 }}
                className="mt-20 h-auto w-full"
              >
                <a href={`/blog/${news[0]?.id}/${news[0]?.title}`}>
                  <div className="mb-2 h-auto w-full">
                    <div className="flex w-full items-center gap-4">
                      <p className="text-base font-medium text-gray-400">
                        {formatDate(news[0]?.created_at)}
                      </p>
                    </div>
                    <div className="mt-4 flex w-full flex-col gap-4">
                      <p className="line-clamp-3 text-[32px] font-semibold leading-[42px] text-gray-700">
                        {news[0]?.title}
                      </p>

                      <div className="line-clamp-3 text-ellipsis break-words text-base font-normal text-[#424242] sm:line-clamp-2 md:sm:line-clamp-3">
                        {RenderHtmlFromString(news[0]?.blog_content)}
                      </div>
                    </div>
                  </div>
                  <div className="max-w-[128px] border-b border-[#374151] bg-transparent text-start text-[15px] font-normal text-[#374151]">
                    Continue Reading
                  </div>
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.8 }}
              className="-mt-20 h-auto w-full md:mt-0"
            >
              <div className="w-full">
                {news.map((dt: any, index: number) => {
                  return (
                    index !== 0 && (
                      <motion.div
                        key={index}
                        animate={{ opacity: 1, x: -80, y: 0 }}
                        transition={{
                          ease: "easeOut",
                          duration: dt.id == 1 ? 0.5 : dt.id == 2 ? 1 : 1.2,
                        }}
                        className={`ml-20 h-auto w-full`}
                      >
                        <Link href={`/blog/${dt.id}/${dt.title}`}>
                          <div className="flex w-full items-center gap-4">
                            <div className="rounded-md border border-[#BDBDBD] bg-transparent px-[0.5rem] py-[0.3rem] text-[14px] font-medium text-[#121417]">
                              {dt?.topic}
                            </div>
                            <Text className="text-base font-medium text-[#767676]">
                              {dt?.date}
                            </Text>
                          </div>
                          <div className="mt-4 flex w-full flex-col gap-4">
                            <p className="text-2xl font-bold text-[#121417]">
                              {dt?.title}
                            </p>
                            <p className="line-clamp-3 text-ellipsis break-words text-base font-medium text-[#424242] sm:line-clamp-2">
                              {RenderHtmlFromString(dt?.blog_content)}
                            </p>
                          </div>
                          <div className="my-8">
                            <hr
                              className={`${
                                index == news.length - 1 && "hidden"
                              }`}
                            />
                          </div>
                        </Link>
                      </motion.div>
                    )
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogNews;
