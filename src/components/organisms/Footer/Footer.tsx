"use client"
import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";

// icons
import { Instagram, Tiktok } from "@/components/icons/landingpage";
import Link from "next/link";
import { Icons } from "@/components/atoms/Icon";
import FooterTextLink from "@/components/atoms/FooterLink";
import { Dialog } from "@headlessui/react";
import { useTranslations } from "next-intl";
import { X } from "react-feather";
import Device from "@/components/atoms/Tabs/Device";

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
  "Samsung",
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

const Oppo = ["Oppo", "Oppo Find X5", "Oppo Find X5 Pro"];

const Huawei = [
  "Huawei",
  "Huawei P40",
  "Huawei P40 Pro",
  "Huawei Mate P40 Pro",
];

const Footer = () => {
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
        <div className="flex w-full flex-wrap content-start items-start  gap-y-14 md:gap-x-32 md:flex-nowrap">
          <div className="flex w-full flex-1 flex-col items-start gap-5">
            <div className="flex flex-col items-start md:items-start lg:w-[325px]">
              <Link href={"/"}>
                <Icons.superalink width={228} height={33} />
              </Link>
              <div className="dark:text-dark-tremor-content-strong mt-6 text-base font-normal leading-6 tracking-tighter text-gray-300 opacity-80 md:text-start md:text-lg md:leading-7">
                <Text
                  as="body1"
                  // className="text-center font-medium leading-[32px] text-gray-100 "
                >
                  Supera link provide electronic SIM (eSIM) for customers who
                  want to travel around the world with super hassle-free &
                  affordable connectivity
                  {/* {t("hero_paymentMethodTitle")} */}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-wrap content-start items-start gap-x-5 gap-y-10 md:gap-x-10 sm:justify-between">
            <div className="col-span-1">
              <div className=" text-base font-bold leading-6 tracking-tighter text-gray-400 md:text-[26px]">
                ABOUT
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <FooterTextLink text="Destination" href="#destination" />
                <FooterTextLink text="How it works" href="#how-it-works" />
                <span
                  onClick={openModal}
                  role="button"
                  className="text-base font-normal leading-6 tracking-tighter text-gray-100 opacity-80  hover:opacity-100 md:text-lg"
                >
                  Device compatibility
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <div className=" text-base font-bold leading-6 tracking-tighter text-gray-400 md:text-[26px]">
                RESOURCES
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <FooterTextLink
                  text="Support"
                  href="mailto:support@superalink.com"
                />
                <FooterTextLink text="Privacy policy" href="privacypolicy" />
                <FooterTextLink text="Terms & Conditions" href="termsconditions" />
               
              </div>
            </div>
            <div className="col-span-1">
              <div className=" text-base font-bold leading-6 tracking-tighter text-gray-400 md:text-[26px]">
                SOCIAL MEDIA
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {/* <FooterTextLink
                    text="Tiktok"
                    href="www.tiktok.com"
                    
                  />
                  <FooterTextLink text="Instagram" href="www.instagram.com/beliesim" /> */}
                <Link
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal leading-6 tracking-tighter text-gray-100 opacity-80  hover:opacity-100 md:text-lg"
                >
                  Tiktok
                </Link>
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  className="text-base font-normal leading-6 tracking-tighter text-gray-100 opacity-80  hover:opacity-100 md:text-lg"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-t-[1px] border-gray-500 py-7">
          <Text
            as="body1"
            className="text-wrap text-center text-[13px] text-gray-400"
          >
            &copy; {new Date().getFullYear()}. All Rights Reserved Supera link
          </Text>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
