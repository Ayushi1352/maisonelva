import type { CollectionCategory, CollectionDetailData, Product } from "@/types/templates.types";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { ProductInfo } from "@/components/sections/ProductInfo";
import { ProductDescription } from "@/components/sections/ProductDescription";
import { ProductHighlights } from "@/components/sections/ProductHighlights";

export const CollectionDetail = ({ data, product, categories = [] }: { data?: CollectionDetailData; product?: Product; categories?: CollectionCategory[] }) => {
  if (!data || !product) return null;
  // The blocks sit closer together than the page-wide section gap, so they share one wrapper; ProductDescription sets its own desktop top margin
  return (
    <div className="flex flex-col gap-10 lg:gap-0">
      <section className="bg-[var(--color-product-bg)] px-4 sm:px-6 md:px-10 lg:pb-[2.4rem] lg:pl-[5.8rem] lg:pr-[5.1rem] lg:pt-[2.6rem]">
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-[3.7rem]">
          <ProductGallery data={data} name={product.name} imageAlt={product.imageAlt} images={product.images} thumbnails={product.thumbnails} />
          <ProductInfo product={product} categories={categories} />
        </div>
      </section>
      <ProductDescription data={data} product={product} />
      <ProductHighlights data={data} product={product} />
    </div>
  );
};
