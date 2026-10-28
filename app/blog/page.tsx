import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import BlogHeading from "@/components/shared/BlogHeading";
import BlogGrid from "@/components/shared/BlogGrid";

const blog = site.blogPage;

export const metadata: Metadata = blog.seo;

export default function BlogPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="bg-page px-5 sm:px-8 md:px-10 xl:px-0">
        <BlogHeading label={blog.label} titleTop={blog.titleTop} titleAccent={blog.titleAccent} />
        <div className="mt-10 xl:mt-[1.1rem]">
          <BlogGrid posts={blog.items} readMore={blog.readMore} />
        </div>
      </section>
    </>
  );
}
