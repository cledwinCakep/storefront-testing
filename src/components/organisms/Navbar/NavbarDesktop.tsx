"use client";
import React, { useState } from "react";
import Image from "next/image";

// components
import Button from "@/components/atoms/Button/Button";
import Anchor from "@/components/atoms/Anchor/Anchor";
import Text from "@/components/atoms/Text/Text";

// icons
import Whatsapp from "@/components/icons/Whatsapp";
import { Translation } from "@/components/icons/Translation";
import { ChevronDown, ChevronUp } from "react-feather";

//library
import { useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import Link from "next-intl/link";

const NavbarDesktop = ({ params }: { params: { locale: string } }) => {
  const t = useTranslations("Navbar");
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  function handleChangeLanguage() {
    setOpen(!isOpen);
  }
  const url = new URL(window.location.href);
  const test = new URLSearchParams(url.search);

  const plan = test.get("plan");
  const data = test.get("data");
  const duration = test.get("duration");

  return (
    <div className="hidden w-full items-center justify-center border-b-[1px] border-gray-600 bg-black px-4 py-3 lg:flex ">
      <div className="flex w-full flex-row justify-between md:max-w-[1180px]">
        <div className="flex flex-row gap-14">
          <Anchor href="/" className="flex px-[0px] py-[0px]">
            <Image
              src="/logo-superalink.svg"
              alt="beliesim"
              width={151.77}
              height={21.95}
            />
          </Anchor>
          <div className=" flex  flex-row items-center justify-center gap-6">
            <Anchor href={pathname.split("/")[1] != "" ? "/" : "#destination"}>
              {t("navbar_destination")}
            </Anchor>
            <Anchor href={pathname.split("/")[1] != "" ? "/" : "#payment"}>
              {t("navbar_payment")}
            </Anchor>
            <Anchor href={pathname.split("/")[1] != "" ? "/" : "#how-it-works"}>
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
              {isOpen ? <ChevronDown /> : <ChevronUp />}
            </div>
            <div
              className={`absolute flex-col ${
                isOpen ? "flex" : "hidden"
              } left-0 top-[40px] z-50 rounded-[4px] bg-zinc-100 transition-all ease-in-out`}
            >
              <Link
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
              </Link>
              <Link
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
              </Link>
            </div>
          </div>
          <Link
            href={
              "https://api.whatsapp.com/send?phone=6282339909564&text=Hallo%20min%2C%20saya%20mau%20beli%20eSIM%20untuk%20traveling"
            }
          >
            <Button
              color="orange"
              size="xs"
              iconLeft={<Whatsapp color="white" />}
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
