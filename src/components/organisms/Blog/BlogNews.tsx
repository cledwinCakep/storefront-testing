import { Divider, Text } from "@tremor/react";
import Image from "next/image";
import { motion } from "framer-motion";

function BlogNews() {
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

  return (
    <div className="h-full w-full bg-white px-5 pb-20 pt-9 md:px-[30px]">
      <div className="h-full w-full">
        <div className="mx-auto w-full max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2.6 }}
            className="-mt-2 h-auto w-full"
          >
            <p className="pb-6 text-[26px] font-bold text-[#121417]">Blog Post</p>
          </motion.div>

          <div className="flex w-full flex-col justify-between gap-20 md:flex-row md:gap-10">
            <div className="flex h-auto w-full flex-col gap-6 lg:min-w-[580px]">
              <motion.div
                style={{
                  overflow: "hidden",
                  height: "58%", // Initial height, adjust as needed
                }}
              >
                <motion.img
                  src={"/assets/blog-image2.png"}
                  width={580}
                  height={255}
                  // objectFit="cover"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                  alt="logo superalink"
                  className="block h-[300px] w-full rounded-lg object-cover sm:h-[499px] md:w-auto md:object-fill lg:max-h-[455px] lg:max-w-[550px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: -80 }}
                transition={{ ease: "easeOut", duration: 1.2 }}
                className="mt-20 h-auto w-full"
              >
                <div className="h-auto w-full mb-2">
                  <div className="flex w-full items-center gap-4">
                    <p className="text-base font-medium text-gray-400">
                      19 January 2024
                    </p>
                  </div>
                  <div className="mt-4 flex w-full flex-col gap-4">
                    <p className="line-clamp-3 text-[32px] font-semibold leading-[42px] text-gray-700">
                      Japan quake: At least 55 dead, rescuers rush to reach
                      survivors trapped in freezing cold
                    </p>
                    <p className="line-clamp-3 text-ellipsis break-words text-base font-normal text-[#424242] sm:line-clamp-2 md:sm:line-clamp-3">
                      {`
                    Prime Minister Fumio Kishida said the extent of damage from
                    the quake was becoming “increasingly clear” more than 24
                    hours after it struck on the Noto peninsula in Ishikawa
                    prefecture. “The government has deployed emergency rescue
                    teams from the Self-Defence Forces, police and fire
                    departments to the area and is doing its utmost to save
                    lives and rescue victims and survivors, but we have received
                    reports that there are still many people waiting to be
                    rescued under collapsed buildings.” Kishida said some 3,000
                    rescuers were finding it difficult to reach the northern tip
                    of the peninsula where helicopter surveys had discovered
                    many fires and widespread damage to buildings and
                    infrastructure. Japan sits on the “Ring of Fire” arc of
                    volcanoes and oceanic trenches that partly encircles the
                    Pacific Basin. It accounts for about 20% of the world's
                    earthquakes of magnitude 6 or greater, and each year
                    experiences up to 2,000 quakes that can be felt. Many rail
                    services and flights into the quake area have been
                    suspended. More than 500 people were stranded at Noto's
                    airport which closed due to cracks in its runway and access
                    road and damage to its terminal building. Authorities have
                    confirmed 55 deaths, all in Ishikawa prefecture, making it
                    Japan's deadliest earthquake since 2016. Many of those
                    killed are in Suzu and Wajima, another city on the remote
                    northern tip of the Noto peninsula. Scores more have been
                    injured and authorities were battling blazes in several
                    cities on Tuesday and hauling people from collapsed
                    buildings. “I've never experienced a quake that powerful,”
                    said Wajima resident Shoichi Kobayashi, 71, who was at home
                    having a celebratory New Year's meal with his wife and son
                    when the quake struck, sending furniture flying across the
                    dining room.
                   `}
                    </p>
                  </div>
                </div>
                <a
                  className="border-[#374151] text-[#374151] max-w-[120px] border-b bg-transparent text-start text-[15px] font-normal"
                  href="/"
                >
                  Continue Reading
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 1.8 }}
              className="h-auto w-full"
            >
              <div className="w-full">
                {news.map((dt, index) => {
                  return (
                    <motion.div
                      key={index}
                      animate={{ opacity: 1, x: -80, y: 0 }}
                      transition={{
                        ease: "easeOut",
                        duration: dt.id == 1 ? 0.5 : dt.id == 2 ? 1 : 1.2,
                      }}
                      className={`ml-20 h-auto w-full`}
                    >
                      <a href={dt.link} key={index}>
                        <div
                          className="flex w-full items-center gap-4"
                          key={index}
                        >
                          <div className="rounded-md border border-[#BDBDBD] bg-transparent px-[0.5rem] py-[0.3rem] text-[14px] font-medium text-[#121417]">
                            {dt.topic}
                          </div>
                          <Text className="text-base font-medium text-[#767676]">
                            {dt.date}
                          </Text>
                        </div>
                        <div className="mt-4 flex w-full flex-col gap-4">
                          <p className="text-2xl font-bold text-[#121417]">
                            {dt.title}
                          </p>
                          <p className="line-clamp-3 text-ellipsis break-words text-base font-medium text-[#424242] sm:line-clamp-2">
                            {dt.desc}
                          </p>
                        </div>
                        <div className="my-8">
                          <hr
                            className={`${
                              index == news.length - 1 && "hidden"
                            }`}
                          />
                        </div>
                      </a>
                    </motion.div>
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
