import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CollectionDetail } from "@/components/sections/CollectionDetail";

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;
const collections = sectionData.Collections?.variants?.JewelleryCollections1;
// One common detail page for every product: all product links point here and it shows the first product.
const product = collections?.products[0];

export const metadata: Metadata = { title: product?.name, description: product?.summary };

export default function CollectionDetailsPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <Breadcrumb data={commonData.collectionDetailBreadcrumb} ui={commonData.globalUI} />
      <CollectionDetail data={sectionData.CollectionDetail?.variants?.JewelleryCollectionDetail1} product={product} categories={collections?.categories} />
    </main>
  );
}
