import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.blogsBreadcrumb?.seo };

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.JewelleryBlogs1} ui={commonData.globalUI} />
    </main>
  );
}
