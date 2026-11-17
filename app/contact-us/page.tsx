import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.JewelleryContact1} form={sectionData.ContactForm?.variants?.JewelleryContactForm1} />
    </main>
  );
}
