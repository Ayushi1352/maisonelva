import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.blogsBreadcrumb?.seo };

export default function BlogPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Blogs data={sectionData.Blogs?.variants?.JewelleryBlogs1} showAll />
    </main>
  );
}
