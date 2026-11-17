import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <Testimonials data={sectionData.Testimonials?.variants?.JewelleryTestimonials1} showAll />
    </main>
  );
}
