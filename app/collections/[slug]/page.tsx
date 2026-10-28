import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductDescription from "../components/ProductDescription";
import ProductHighlights from "../components/ProductHighlights";

function getProduct(slug: string) {
  return site.collectionsPage.items.find((product) => product.slug === slug);
}

export function generateStaticParams() {
  return site.collectionsPage.items.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.summary };
}

export default async function CollectionDetailsPage({ params }: PageProps<"/collections/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const detail = site.collectionDetailPage;

  return (
    <>
      <PageBanner data={site.pageBanner} title={product.name} />
      <section className="bg-[#faf8f5] px-4 sm:px-6 md:px-10 xl:pl-[5.8rem] xl:pr-[5.1rem]">
        <div className="grid items-start gap-10 xl:grid-cols-[auto_1fr] xl:gap-[3.7rem]">
          <ProductGallery data={detail} name={product.name} images={product.images} thumbnails={product.thumbnails} />
          <ProductInfo data={detail} product={product} />
        </div>
      </section>
      <ProductDescription data={detail} product={product} />
      <ProductHighlights data={detail} product={product} />
    </>
  );
}
