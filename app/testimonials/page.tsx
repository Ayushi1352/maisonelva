import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import TestimonialListing from "@/components/TestimonialListing";

export const metadata: Metadata = site.testimonialsPage.seo;

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <TestimonialListing data={site.testimonialsPage} />
    </>
  );
}
