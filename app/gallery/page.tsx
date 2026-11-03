import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Gallery } from "@/components/sections/Gallery";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.galleryBreadcrumb?.seo };

export default function GalleryPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.galleryBreadcrumb} ui={commonData.globalUI} />
      <Gallery data={sectionData.Gallery?.variants?.JewelleryGallery1} ui={commonData.globalUI} />
    </main>
  );
}
