"use client";

import { BlogFooter } from "@/components/organisms/Blog/BlogFooter";
import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
import BlogNews from "@/components/organisms/Blog/BlogNews";

// tremor
import { Button, Divider, Text, Title } from "@tremor/react";
import Image from "next/image";

function Blog() {

  return (
    <>
      <BlogNavbar />
      <BlogNews />     
      <BlogFooter />
    </>
  );
}

export default Blog;
