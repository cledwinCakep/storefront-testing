"use client";
import React, { useState } from "react";
import Image from "next/image";

// components
import Button from "@/components/atoms/Button/Button";
import Anchor from "@/components/atoms/Anchor/Anchor";
import Text from "@/components/atoms/Text/Text";

// icons
import { Translation } from "@/components/icons/Translation";
import { ChevronDown, ChevronUp } from "react-feather";

//library
import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import Email from "@/components/icons/Email";
import { JsxEmit } from "typescript";

const NavbarDesktop = ({ params }: { params: { locale: string } }) => {
  const t = useTranslations("Navbar");
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  function handleChangeLanguage() {
    setOpen(!isOpen);
  }
  // const url = new URL(location.href);
  // const test = new URLSearchParams(url.search);

  // const plan = test.get("plan");
  // const data = test.get("data");
  // const duration = test.get("duration");

  return (
    <div className="hidden w-full items-center justify-center border-b-[1px] border-gray-600 bg-black px-4 py-3 lg:flex ">
      <div className="flex w-full flex-row justify-between md:max-w-[1180px]">
        <div className="flex flex-row gap-14">
          <Anchor href="/" className="flex px-[0px] py-[0px]">
            <Image
              src="/logo-superalink.svg"
              alt="superalink logo"
              width={151.77}
              height={21.95}
              priority
            />
          </Anchor>
          <div className=" flex  flex-row items-center justify-center gap-6 text-sm">
            <Anchor
              href={
                pathname.split("/").includes("aff")
                  ? "#destination"
                  : pathname !== "/"
                  ? "/#destination"
                  : "#destination"
              }
            >
              {t("navbar_destination")}
            </Anchor>
            <Anchor
              href={
                pathname.split("/").includes("aff")
                  ? "#payment"
                  : pathname !== "/"
                  ? "/#payment"
                  : "#payment"
              }
            >
              {t("navbar_payment")}
            </Anchor>
            <Anchor
              href={
                pathname.split("/").includes("aff")
                  ? "#how-it-works"
                  : pathname !== "/"
                  ? "/#how-it-works"
                  : "#how-it-works"
              }
            >
              {t("navbar_howItWorks")}
            </Anchor>
          </div>
        </div>
        <div className="hidden w-1/4 flex-row items-center gap-6 lg:flex">
          <div className="relative w-1/4">
            {/* <div
              className="flex w-full cursor-pointer flex-row justify-between"
              onClick={handleChangeLanguage}
            >
              <Translation />
              <Text as="body2" className="mx-2 font-bold text-white">
                {params.locale.toUpperCase()}
              </Text>
              {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div> */}
            <div
              className={`absolute flex-col ${
                isOpen ? "flex" : "hidden"
              } left-0 top-[40px] z-50 rounded-[4px] bg-gray-100 transition-all ease-in-out`}
            >
              {/* <Link
                locale="en"
                href={`${
                  pathname.split("/").includes("plans")
                    ? pathname +
                      "?" +
                      `plan=${plan}&data=${data}&duration=${duration}`
                    : pathname
                }`}
              >
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE]">
                  English
                </div>
              </Link> */}
              {/* <Link
                locale="id"
                href={`${
                  pathname.split("/").includes("plans")
                    ? pathname +
                      "?" +
                      `plan=${plan}&data=${data}&duration=${duration}`
                    : pathname
                }`}
              >
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE]">
                  Indonesia
                </div>
              </Link> */}
            </div>
          </div>
          <Link
            href={
              "mailto:support@superalink.com?subject=Support%20to%20buy%20eSIM"
            }
          >
            <Button
              color="transparent"
              size="xs"
              iconLeft={<Email />}
              className="w-full"
            >
              {t("navbar_contactUs")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
