"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import { useMediaQuery } from "@react-hook/media-query";

interface BlogNavbarProps {
  params?: any;
}

const BlogNavbar = ({ params }: BlogNavbarProps) => {
  const isMobile = useMediaQuery("only screen and (min-width: 361px)");

  return (
    <div
      className={
        "bg-dark-tremor-background-muted flex h-[86px] w-full justify-center px-[30px]"
      }
    >
      <div className="flex w-full max-w-[1180px] items-center justify-between">
        <Link href={`/blog`}>
          <Image
            src={"/assets/superalink-logo.png"}
            width={175}
            height={26}
            alt="logo superalink"
            className={`${!isMobile ? 'hidden' :'block'} min-w-[135px]`}
          />
        </Link>
        <div className="h-auto w-full">
          <Link href={"/blog"}>
            <Image
              src={"/assets/supera-icon.png"}
              width={148}
              height={22}
              alt="logo superalink"
              className={`${isMobile ? 'hidden' :'block'}`}
            />
          </Link>
        </div>
        <Link href={"/"} className="min-w-[160px]">
          <Button
            color="transparent"
            size="xs"
            className="w-full min-w-[160px]"
          >
            Visit Storefront
          </Button>
          {/* <Button className="border-tremor-brand min-w-full border bg-transparent text-[15px]">
            Visit Storefront
          </Button> */}
        </Link>
      </div>
    </div>
  );
};

export default BlogNavbar;
