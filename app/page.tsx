import HeroSection from "@/components/home/HeroSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import ExploreBanner from "@/components/home/ExploreBanner";
import BlogSection from "@/components/home/BlogSection";
import StorySection from "@/components/shared/StorySection";
import TestimonialShowcase from "@/components/shared/TestimonialShowcase";
import { site } from "@/data";

export default function HomePage() {
  return (
    <>
      <HeroSection data={site.hero} />
      <StorySection data={site.aboutStorySection} />
      <CollectionsSection data={site.collectionsPreviewSection} />
      <ExploreBanner data={site.exploreBannerSection} />
      <TestimonialShowcase data={site.testimonialsSection} />
      <BlogSection data={site.blogPreviewSection} />
    </>
  );
}
