import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { MissionVision } from "@/components/sections/MissionVision";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = { ...(rawData as JewelleryTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.JewelleryAboutUs1} showButton={false} />
      <MissionVision data={sectionData.MissionVision?.variants?.JewelleryMissionVision1} />
      <Testimonials data={sectionData.Testimonials?.variants?.JewelleryTestimonials1} />
    </main>
  );
}
