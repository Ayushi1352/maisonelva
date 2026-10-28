import HeroSection from "@/components/HeroSection";
import CollectionsSection from "@/components/CollectionsSection";
import ExploreBanner from "@/components/ExploreBanner";
import BlogSection from "@/components/BlogSection";
import StorySection from "@/components/StorySection";
import TestimonialShowcase from "@/components/TestimonialShowcase";
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
