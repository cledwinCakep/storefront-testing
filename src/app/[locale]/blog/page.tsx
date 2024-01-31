"use client";

import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
import BlogNews from "@/components/organisms/Blog/BlogNews";
import Footer from "@/components/organisms/Footer/Footer";

// tremor
import { Button, Divider, Text, Title } from "@tremor/react";
import Image from "next/image";

export default function Blog({ params }: { params: { locale: string } }) {
  return (
    <>
      <BlogNavbar params={params} />
      <BlogNews />
      <Footer />
    </>
  );
}
