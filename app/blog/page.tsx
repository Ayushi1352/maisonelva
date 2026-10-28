import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import BlogListing from "@/components/BlogListing";

export const metadata: Metadata = site.blogPage.seo;

export default function BlogPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <BlogListing data={site.blogPage} />
    </>
  );
}
