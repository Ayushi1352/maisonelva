import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import StorySection from "@/components/shared/StorySection";
import TestimonialShowcase from "@/components/shared/TestimonialShowcase";
import MissionVision from "./components/MissionVision";

export const metadata: Metadata = site.missionVisionSection.seo;

export default function AboutUsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <StorySection data={site.aboutStorySection} showButton={false} />
      <MissionVision data={site.missionVisionSection} />
      <TestimonialShowcase data={site.testimonialsSection} />
    </>
  );
}
