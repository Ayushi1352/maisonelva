import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Enquiry } from "@/components/sections/Enquiry";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.enquiryBreadcrumb?.seo };

export default function EnquiryNowPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.enquiryBreadcrumb} ui={commonData.globalUI} />
      <Enquiry data={sectionData.Enquiry?.variants?.JewelleryEnquiry1} form={sectionData.EnquiryForm?.variants?.JewelleryEnquiryForm1} />
    </main>
  );
}
