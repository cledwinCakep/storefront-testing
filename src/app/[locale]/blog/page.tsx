"use client";

import BlogNavbar from "@/components/organisms/Blog/BlogNavbar";
import BlogNews from "@/components/organisms/Blog/BlogNews";
import Footer from "@/components/organisms/Footer/Footer";

export default function Blog({ params }: { params: { locale: string } }) {

  return (
    <>
      <BlogNavbar params={params} />
      <BlogNews />
      <Footer />
    </>
  );
}
