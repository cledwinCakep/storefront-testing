"use client";

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

const Footer = () => {
  let [isOpen, setIsOpen] = React.useState(false);
  const f = useTranslations("CTA");
  const c = useTranslations("Compatibility");
  const t = useTranslations("Footer");
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
          <div className="flex w-full flex-col flex-wrap content-start items-start gap-x-7 gap-y-14 sm:flex-nowrap md:flex-row md:gap-x-48">
            <div className="flex w-full flex-col items-start gap-5 md:max-w-[380px]">
              <Link href={"/"} aria-label="superalink logo to the home page">
                <Icons.superalink width={228} height={33} />
              </Link>
              <div className="dark:text-dark-tremor-content-strong mt-6 text-base font-normal leading-6 tracking-tighter text-gray-300 opacity-80 sm:text-start sm:text-lg sm:leading-7">
                {t("footer_desc")}
              </div>
            </div>
            <div className="grid w-full grid-cols-2 content-start items-start gap-x-5 gap-y-10 sm:grid-cols-3">
              <div className="col-span-1">
                <Text className=" text-base font-bold leading-normal tracking-tighter text-neutral-500">
                  {t("footer_about_title")}
                </Text>
                <div className="mt-4 flex flex-col gap-2">
                  <FooterTextLink
                    text={t("footer_about_destination")}
                    href="/#destination"
                    hash
                  />
                  <FooterTextLink
                    text={t("footer_about_how_it_works")}
                    href="/#how-it-works"
                    hash
                  />
                  <span
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                    onClick={openModal}
                    role="button"
                  >
                    {t("footer_about_device_compatibility")}
                  </span>
                  <Link
                    href="https://affiliate.superalink.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    {t("footer_about_become_affiliate")}
                  </Link>
                  <Link
                    href="/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                  >
                    {t("footer_about_blog")}
                  </Link>
                </div>
              </div>
              <div className="col-span-1">
                <div className=" text-base font-bold leading-normal tracking-tighter text-neutral-500">
                  {t("footer_help_support_title")}
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="https://api.whatsapp.com/send?phone=821089850158&text=Hello,%20%20I%20want%20to%20buy%20eSIM%20for%20traveling!"
                    className="text-base font-normal leading-normal tracking-tighter text-stone-50 opacity-80  hover:opacity-100"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t("footer_help_support_contact_us")}
                  </a>
                  <FooterTextLink
                    text={t("footer_help_support_privacy_policy")}
                    href="/privacy-policy"
                  />
                  <FooterTextLink
                    text={t("footer_help_support_terms_and_conditions")}
                    href="/terms-and-conditions"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className=" text-base font-bold leading-normal tracking-tighter text-neutral-500">
                  {t("footer_social_media_title")}
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

          <div className="w-full border-t-[1px] border-gray-400">
            <Text className="flex w-full max-w-[680px] items-start  justify-start pt-7 text-left text-base font-normal leading-[18px] text-[#f9f9f9] opacity-80">
              가제트코리아 주식회사 | 대표이사: 유상혁 | 서울특별시 마포구
              월드컵북로6길 79 B1~4F (연남동, 가제트코리아 빌딩) 사업자등록번호:
              786-87-01837 | 통신판매업 신고 제2023-서울마포-1422호 고객센터:
              1661-0158 | 개인정보관리 책임자: 윤재환 | cx@usimsa.com
            </Text>
          </div>

          <Text className="flex w-full items-center justify-center border-t-[1px] border-gray-400 pb-7 pt-7 text-center text-sm font-normal leading-[18px] text-neutral-500 opacity-80">
            &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
            Supera link
          </Text>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
