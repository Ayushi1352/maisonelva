import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import CollectionListing from "@/components/CollectionListing";

export const metadata: Metadata = site.collectionsPage.seo;

export default function CollectionsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <CollectionListing data={site.collectionsPage} />
    </>
  );
}
