import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;
// One common detail page for every blog post: all blog links point here and it shows the first post.
const post = sectionData.Blogs?.variants?.JewelleryBlogs1?.posts[0];

export const metadata: Metadata = { title: post?.title, description: post?.description };

export default function BlogDetailsPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.JewelleryBlogDetail1} post={post} />
    </main>
  );
}
