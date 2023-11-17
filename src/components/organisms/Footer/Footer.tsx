import React from "react";

// atoms
import Layout from "@/components/atoms/Layout/Layout";
import Text from "@/components/atoms/Text/Text";

// icons
import { Instagram, Tiktok } from "@/components/icons/landingpage";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row bg-white">
      <Layout className="flex w-full flex-col-reverse items-center justify-between gap-2 py-6 md:flex-row">
        <Text
          as="body1"
          className="text-wrap text-center font-medium text-gray-500"
        >
          &copy; {new Date().getFullYear()}. Gadget Korea INC. ALL RIGHTS RESERVED
        </Text>
        <div className="flex flex-row gap-8">
          <Link
            href={"https://www.tiktok.com/@adminbeliesim"}
            className="rounded-full border border-gray-400 p-2"
          >
            <Tiktok />
          </Link>
          <Link
            href={"https://www.instagram.com/beliesim/"}
            className="rounded-full border border-gray-400 p-2"
          >
            <Instagram />
          </Link>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
