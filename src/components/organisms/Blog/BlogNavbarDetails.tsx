"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";

import Anchor from "@/components/atoms/Anchor/Anchor";
import Esim from "@/components/icons/esim";

interface BlogNavbarProps {
  params?: any;
}

const BlogNavbarDetails = ({ params }: BlogNavbarProps) => {
  const t = useTranslations("Navbar");
  return (
    <div className="flex w-full items-center justify-center border-b-[1px] border-[#222222] bg-black px-4 py-3 ">
      <div className="flex w-full flex-row justify-between md:max-w-[1180px]">
        <div className="flex flex-row gap-14">
          <Anchor
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
          </Anchor>
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
            <div className="hidden xs:flex">{t("navbar_buyEsim")}</div>
          </Button>
        </Anchor>
      </div>
    </div>
  );
};

export default BlogNavbarDetails;
