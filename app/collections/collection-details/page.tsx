import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import CollectionDetail from "@/components/CollectionDetail";

// One common detail page for every product: all product links point here and it shows the first product.
const product = site.collectionsPage.items[0];

export const metadata: Metadata = { title: product.name, description: product.summary };

export default function CollectionDetailsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <CollectionDetail data={site.collectionDetailPage} product={product} />
    </>
  );
}
