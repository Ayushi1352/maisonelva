import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.galleryBreadcrumb?.seo };

export default function GalleryPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.JewelleryGallery1} />
    </main>
  );
}
