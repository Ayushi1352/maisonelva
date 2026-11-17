import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutUs } from "@/components/sections/AboutUs";
import { CollectionsPreview } from "@/components/sections/CollectionsPreview";
import { ExploreBanner } from "@/components/sections/ExploreBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blogs } from "@/components/sections/Blogs";

export default function HomePage() {
  const templateData: JewelleryTemplateData = rawData;
  const sectionData = templateData?.categories?.Jewellery?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <HeroSection data={sectionData.Hero?.variants?.JewelleryHero1} />
      <AboutUs data={sectionData.AboutUs?.variants?.JewelleryAboutUs1} />
      <CollectionsPreview data={sectionData.CollectionsPreview?.variants?.JewelleryCollectionsPreview1} collections={sectionData.Collections?.variants?.JewelleryCollections1} />
      <ExploreBanner data={sectionData.ExploreBanner?.variants?.JewelleryExploreBanner1} />
      <Testimonials data={sectionData.Testimonials?.variants?.JewelleryTestimonials1} />
      <Blogs data={sectionData.Blogs?.variants?.JewelleryBlogs1} />
    </main>
  );
}
