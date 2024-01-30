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
import { JsxEmit } from "typescript";
import Esim from "@/components/icons/esim";
import Link from "next/link";

const BlogNavbarDesktop = ({ params }: { params: { locale: string } }) => {
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
          <a
            href="/blog"
            className="flex px-[0px] py-[0px]"
            aria-label="go to blog"
          >
            <Image
              src="/logo-superalink.svg"
              alt="superalink logo"
              width={151.77}
              height={21.95}
              priority
            />
          </a>
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
          <Anchor
            href="/"
            className="flex px-[0px] py-[0px]"
            aria-label="go to blog"
          >
            <Button
              color="transparent"
              size="xs"
              iconLeft={<Esim />}
              className="w-full"
            >
              {t("navbar_buyEsim")}
            </Button>
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default BlogNavbarDesktop;
