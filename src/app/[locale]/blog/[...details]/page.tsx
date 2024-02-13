"use client";

// components
import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
import Footer from "@/components/organisms/Footer/Footer";
import { utilityApi } from "@/lib/api/GetApi";
import useBlogHook from "@/lib/hooks/useBlogHook";
import formatDate from "@/lib/utils/dateFormatter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// tremor
import { Text } from "@tremor/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";

// react share
import { FacebookShareButton, TwitterShareButton } from "react-share";
import {
  RemoveHtmlTags,
  RenderHtmlFromString,
} from "@/lib/utils/htmlFormatter";

const BlogDetails = ({
  params,
}: {
  params: { details: string; locale: string };
}) => {
  const [newsDetail, setNewsDetail] = useState<any>([]);

  useEffect(() => {
    const getNewsDetail = async () => {
      const res = await utilityApi.getBlogById(Number(params.details[0]));
      setNewsDetail(res.data.data);
    };
    getNewsDetail();
  }, [params.details[0]]);

  const { news } = useBlogHook();

  const title = decodeURIComponent(params.details[1]);
  const [url, seturl] = useState({ origin: "", href: "" });

  useEffect(() => {
    if (window) {
      seturl({ origin: window.location.origin, href: window.location.href });
    }
  }, []);

  const copyToClipboard = async () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url.href);
      toast("Link copied!", {
        position: "top-right",
        style: { background: "#374151", color: "white" },
      }); // hide the toast after 3 seconds
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = url.href;
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
      <div className="h-full w-full bg-white px-5 pb-20 pt-32 md:px-[30px]">
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
                      {newsDetail ? newsDetail.author : "-"}
                    </p>
                    <div className="flex w-full flex-col justify-start gap-2 xs:flex-row">
                      <div className="flex gap-2">
                        {newsDetail.created_at ? (
                          <>
                            <Text className="text-sm font-normal text-[#767676]">
                              Publised in
                            </Text>
                            <Text className="text-sm font-normal text-[#121417]">
                              {formatDate(newsDetail.created_at)}
                            </Text>
                          </>
                        ) : (
                          ""
                        )}
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
                          {newsDetail ? newsDetail.topic : "-"}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                {/* twitter */}
                <div className="flex items-center gap-2">
                  <TwitterShareButton
                    url={`${url.href}`}
                    title={`${title}\n\n`}
                  >
                    <div className="cursor-pointer rounded-md bg-[#F3F4F6] p-2">
                      <Image
                        width={20}
                        height={20}
                        className="inline-block h-5 w-5"
                        src="/assets/twitterx-icon.svg"
                        alt=""
                      />
                    </div>
                  </TwitterShareButton>

                  {/* facebook */}
                  <FacebookShareButton
                    url={`${url.href}`}
                    title={`${title}: \n\n${
                      newsDetail.blog_content
                        ? RemoveHtmlTags(newsDetail.blog_content)
                        : "-"
                    }`}
                  >
                    <div className="cursor-pointer rounded-md bg-[#F3F4F6] p-2">
                      <Image
                        width={20}
                        height={20}
                        className="inline-block h-5 w-5"
                        src="/assets/facebook-icon.svg"
                        alt=""
                      />
                    </div>
                  </FacebookShareButton>

                  {/*copy link  */}
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
              {newsDetail?.file?.file_url ? (
                <img
                  src={newsDetail ? newsDetail?.file?.file_url : "-"}
                  width={580}
                  height={255}
                  alt="logo superalink"
                  className="block h-[300px] min-w-full rounded-lg object-cover sm:h-[500px]"
                />
              ) : (
                <div className="block h-[300px] min-w-full animate-pulse rounded-lg bg-slate-200 object-cover sm:h-[500px]" />
              )}
              {/* <p className="mt-2 text-center text-base text-[#767676]">
                Image Credit: {newsDetail ? newsDetail.author : "-"}
              </p> */}
            </div>
            <div className="flex w-full flex-col justify-between gap-20 md:flex-row md:gap-14">
              <div className="flex h-auto w-full flex-col gap-6">
                <div className="h-auto w-full">
                  <div className="flex w-full flex-col gap-4">
                    {RenderHtmlFromString(
                      newsDetail ? newsDetail.blog_content : "<div>-</div>"
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full">
                <p className="text-xl font-bold leading-[56px]">
                  Check these out
                </p>
                <hr className="mb-6" />
                {news.map((dt: any, index: number) => (
                  <>
                    {dt.title === title ? null : (
                      <a href={`/blog/${dt.id}/${dt.title}`} key={index}>
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
                                {formatDate(dt.created_at)}
                              </Text>
                            </div>
                            <Text className="line-clamp-3 break-words text-[18px] font-medium text-[#121417]">
                              {dt.title}
                            </Text>
                          </div>

                          <div
                            className="min-h-[150px] min-w-[154px] rounded-md bg-cover bg-center bg-no-repeat"
                            style={{
                              backgroundImage: `url(${dt.file?.file_url})`,
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
      <Footer />
    </>
  );
};


export default BlogDetails;
