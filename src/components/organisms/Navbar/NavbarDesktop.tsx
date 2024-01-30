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

  return (
    <div className="hidden w-full items-center justify-center border-b-[1px] border-[#222222] bg-black px-4 py-3 lg:flex ">
      <div className="flex w-full flex-row justify-between md:max-w-[1180px]">
        <div className="flex flex-row gap-14">
          <Anchor
            href="/"
            className="flex px-[0px] py-[0px]"
            aria-label="logo link that goes to home page"
          >
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
            <div
              className="flex w-full cursor-pointer flex-row justify-between"
              onClick={handleChangeLanguage}
            >
              <Translation />
              <Text as="body2" className="mx-2 font-bold text-white">
                {params.locale.toUpperCase()}
              </Text>
              {isOpen ? <ChevronDown className="text-white" /> : <ChevronUp className="text-white" />}
            </div>
            <div
              className={`absolute flex-col ${
                isOpen ? "flex" : "hidden"
              } left-0 top-[40px] z-50 rounded-[4px] bg-gray-100 transition-all ease-in-out`}
            >
              <Link locale="en" href={pathname}>
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE]">
                  English
                </div>
              </Link>
              <Link locale="ko" href={pathname}>
                <div className="w-full cursor-pointer p-[20px] hover:bg-[#DDDDDE]">
                  한글
                </div>
              </Link>
            </div>
          </div>
          <a
            href={
              "https://api.whatsapp.com/send?phone=821089850158&text=Hello,%20%20I%20want%20to%20buy%20eSIM%20for%20traveling!"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              color="transparent"
              size="xs"
              iconLeft={<Email />}
              className="w-full"
            >
              {t("navbar_contactUs")}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
