"use client"
import Link from "next/link";
import Image from "next/image";
import FooterTextLink from "@/components/atoms/FooterLink/FooterTextLink";

import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";

// icons
import { Instagram, Tiktok } from "@/components/icons/landingpage";
import { Icons } from "@/components/atoms/Icon";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { X } from "react-feather";
import Device from "@/components/atoms/Tabs/Device";

export const BlogFooter = () => {
  const Apple = [
    "iPhone 15 Pro & Pro Max",
    "iPhone 15 Plus",
    "iPhone 15",
    "iPhone 14 Pro & Pro Max",
    "iPhone 14 Plus",
    "iPhone 14",
    "iPhone 13 Pro & Pro Max",
    "iPhone 13 Mini",
    "iPhone 13",
    "iPhone 12 Pro & Pro Max",
    "iPhone 12 Mini",
    "iPhone 12",
    "iPhone 11 Pro & Pro Max",
    "iPhone 11",
    "iPhone XS & XS Max",
    "iPhone XR",
    "iPhone SE (2020 & 2022)",
    "iPad 7",
    "iPad Mini 5",
    "iPad Pro (11”)",
    "iPad Pro 2 (11”)",
    "iPad Air 3",
    "iPad Air 4",
  ];

  const Samsung = [
    "Galaxy S 20",
    "Galaxy S 20+",
    "Galaxy S 20 Ultra",
    "Galaxy S 21 5G",
    "Galaxy S 21+ 5G",
    "Galaxy S 21 Ultra 5G",
    "Galaxy S 22 5G",
    "Galaxy S 22+ 5G",
    "Galaxy S 22 Ultra 5G",
    "Galaxy S 23 5G",
    "Galaxy S 23+ 5G",
    "Galaxy S 23 Ultra 5G",
    "Galaxy Note 20",
    "Galaxy Note 20 Ultra 5G",
    "Galaxy Z Flip",
    "Galaxy Z Flip 3 5G",
    "Galaxy Z Flip 4 5G",
    "Galaxy Z Fold",
    "Galaxy Z Fold 2 5G",
    "Galaxy Z Fold 3 5G",
    "Galaxy Z Fold 4 5G",
  ];

  const Oppo = ["Oppo Find X5", "Oppo Find X5 Pro"];

  const Huawei = ["Huawei P40", "Huawei P40 Pro", "Huawei Mate P40 Pro"];

  let [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations("CTA");
  const c = useTranslations("Compatibility");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="bg-[#121417]">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4">
          <Dialog.Panel className=" w-full max-w-[780px]  rounded-md bg-white p-6">
            <div className="flex w-full flex-col gap-5">
              <div className="flex flex-row justify-between">
                <Text as="subHeading1" className="font-bold">
                  {c("compatibility_title")}
                </Text>
                <div
                  className=" h-8 w-8  hover:cursor-pointer"
                  onClick={closeModal}
                >
                  <X />
                </div>
              </div>
              <Device
                data={[
                  {
                    label: "Apple",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleApple")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Apple.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Samsung",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleSamsung")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Samsung.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Huawei",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleHuawei")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Huawei.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Oppo",
                    content: (
                      <div className="flex max-h-[340px] flex-col gap-3 overflow-auto">
                        <Text as="body1" className="font-bold">
                          {c("compatibility_subTitleOppo")}
                        </Text>
                        <div className="flex flex-col overflow-auto">
                          {Oppo.map((dt) => (
                            <div
                              key={dt}
                              className="border-b-[1px] border-gray-200 py-5"
                            >
                              <Text as="body1" className="font-medium">
                                {dt}
                              </Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      <Layout className="flex w-full flex-col items-center  gap-14 bg-[#121417] pt-20">
        <div className="flex w-full flex-col items-center gap-14">
          <div className="flex w-full flex-col flex-wrap content-start items-start gap-x-7 gap-y-14 sm:flex-nowrap md:flex-row md:gap-x-10">
            <div className="flex w-full flex-col items-start gap-5 md:max-w-[380px]">
              <Link href={"/"} aria-label="superalink logo to the home page">
                <Icons.superalink width={228} height={33} />
              </Link>
              <div className="dark:text-dark-tremor-content-strong mt-6 text-base font-normal leading-normal tracking-tighter text-gray-300 opacity-80 sm:text-start sm:text-lg sm:leading-7">
                Supera link provide electronic SIM (eSIM) for customers who want
                to travel around the world with super hassle-free & affordable
                connectivity
              </div>
            </div>
            <div className="grid w-full grid-cols-2 content-start items-start gap-x-5 gap-y-10 sm:grid-cols-3">
              <div className="col-span-2 sm:col-span-1">
                <Text className=" text-base font-bold leading-normal tracking-tighter text-gray-400">
                  ABOUT
                </Text>
                <div className="mt-4 flex flex-col gap-2">
                  <FooterTextLink text="Destination" href="/#destination" hash isBlog/>
                  <FooterTextLink
                    text="How it works"
                    href="/#how-it-works"
                    hash
                    isBlog
                  />
                  <span
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                    onClick={openModal}
                    role="button"
                  >
                    Device compatibility
                  </span>
                  <Link
                    href="https://affiliate.superalink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    Become affiliate{" "}
                  </Link>
                  <Link
                    href="/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    Blog
                  </Link>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className=" text-base font-bold leading-normal tracking-tighter text-gray-400">
                  HELP & SUPPORT
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="mailto:support@superalink.com"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Contact us
                  </a>
                  <FooterTextLink
                    text="Privacy policy"
                    href="/privacy-policy"
                    isBlog
                  />
                  <FooterTextLink
                    text="Terms & Conditions"
                    href="/terms-and-conditions"
                    isBlog
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-base font-bold leading-normal tracking-tighter text-gray-400">
                  SOCIAL MEDIA
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  {/* <FooterTextLink
                    text="Tiktok"
                    href="www.tiktok.com"

                  />
                  <FooterTextLink text="Instagram" href="www.instagram.com/beliesim" /> */}
                  <Link
                    href="https://www.tiktok.com/@superalink.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    Tiktok
                  </Link>
                  <Link
                    href="https://www.instagram.com/superalink.official/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.facebook.com/Superalink.official/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    Facebook
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Text className="flex w-full items-center justify-center border-t-[1px] border-gray-400 pb-7 pt-7 opacity-80 text-center text-neutral-500 text-sm font-normal leading-[18px]">
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
            Supera link
          </Text>
        </div>
      </Layout>
    </div>
  );
};
