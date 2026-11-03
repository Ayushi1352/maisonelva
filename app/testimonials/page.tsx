import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { TestimonialListing } from "@/components/sections/TestimonialListing";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.testimonialsBreadcrumb?.seo };

export default function TestimonialsPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.testimonialsBreadcrumb} ui={commonData.globalUI} />
      <TestimonialListing data={sectionData.TestimonialListing?.variants?.JewelleryTestimonialListing1} ui={commonData.globalUI} />
    </main>
  );
}
