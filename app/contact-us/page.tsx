import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.contactBreadcrumb?.seo };

export default function ContactUsPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.JewelleryContact1} form={sectionData.ContactForm?.variants?.JewelleryContactForm1} />
    </main>
  );
}
