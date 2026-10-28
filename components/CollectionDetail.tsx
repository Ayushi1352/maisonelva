import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import ProductGallery from "@/components/ProductGallery";
import ProductInfo from "@/components/ProductInfo";
import ProductDescription from "@/components/ProductDescription";
import ProductHighlights from "@/components/ProductHighlights";

type CollectionDetailProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function CollectionDetail({ data = site.collectionDetailPage, product }: CollectionDetailProps) {
  // The three blocks sit close together in the design, so they share one wrapper instead of the page-wide section gap
  return (
    <div className="flex flex-col gap-10 xl:gap-0">
      <section className="bg-[#faf8f5] px-4 sm:px-6 md:px-10 xl:pb-[2.4rem] xl:pl-[5.8rem] xl:pr-[5.1rem] xl:pt-[2.6rem]">
        <div className="grid items-start gap-10 xl:grid-cols-[auto_1fr] xl:gap-[3.7rem]">
          <ProductGallery data={data} name={product.name} images={product.images} thumbnails={product.thumbnails} />
          <ProductInfo data={data} product={product} />
        </div>
      </section>
      <ProductDescription data={data} product={product} />
      <ProductHighlights data={data} product={product} />
    </div>
  );
}
