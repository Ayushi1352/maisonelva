import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import ProductHighlights from "@/components/ProductHighlights";

type CollectionDetailProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function CollectionDetail({ data = site.collectionDetailPage, product }: CollectionDetailProps) {
  // The blocks sit closer together than the page-wide section gap, so they share one wrapper; ProductDescription sets its own desktop top margin
  return (
    <div className="flex flex-col gap-10 lg:gap-0">
      <section className="bg-[var(--color-product-bg)] px-4 sm:px-6 md:px-10 lg:pb-[2.4rem] lg:pl-[5.8rem] lg:pr-[5.1rem] lg:pt-[2.6rem]">
        <div className="grid items-start gap-10 lg:grid-cols-[auto_1fr] lg:gap-[3.7rem]">
          <ProductGallery data={data} name={product.name} images={product.images} thumbnails={product.thumbnails} />
          <ProductInfo data={data} product={product} />
        </div>
      </section>
      <ProductDescription data={data} product={product} />
      <ProductHighlights data={data} product={product} />
    </div>
  );
}
