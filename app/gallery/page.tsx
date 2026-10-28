import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = site.galleryPage.seo;

export default function GalleryPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <Gallery data={site.galleryPage} />
    </>
  );
}
