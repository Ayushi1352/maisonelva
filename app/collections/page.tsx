import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Collections } from "@/components/sections/Collections";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.collectionsBreadcrumb?.seo };

export default function CollectionsPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.collectionsBreadcrumb} ui={commonData.globalUI} />
      <Collections data={sectionData.Collections?.variants?.JewelleryCollections1} ui={commonData.globalUI} />
    </main>
  );
}
