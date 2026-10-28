import Image from "next/image";
import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { fill } from "@/lib/text";
import { Sparkle } from "@/components/shared/Icons";

type ProductDescriptionProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductDescription({ data = site.collectionDetailPage, product }: ProductDescriptionProps) {
  return (
    <section className="grid bg-[#f8f3ee] xl:grid-cols-[1fr_54rem]">
      <div className="relative px-5 py-12 sm:px-8 md:px-10 xl:px-0 xl:pb-[3.4rem] xl:pl-[7.9rem] xl:pt-[3.1rem]">
        <p className="flex items-center font-caslon text-[0.85rem] uppercase tracking-[0.3em] text-gold-deep xl:text-[1.3rem] xl:tracking-[0.26em]">
          <span className="mr-4 h-[2px] w-12 bg-gold xl:mr-[2.1rem] xl:w-[4rem]" aria-hidden="true" />
          {data.descriptionLabel}
        </p>
        <h2 className="mt-4 font-caslon text-[2.3rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-[3rem] xl:mt-[1.8rem] xl:text-[3.78rem] xl:leading-[4.5rem]">
          <span className="block text-ruby-deep">{product.descriptionTitleAccent}</span>
          <span className="block text-ink">{product.descriptionTitleRest}</span>
        </h2>
        <div className="mt-5 max-w-[50rem] space-y-4 font-caslon text-[1rem] leading-[1.7] text-body md:text-[1.08rem] xl:mt-[1.8rem] xl:max-w-[49.6rem] xl:space-y-[1.6rem] xl:text-[1.55rem] xl:leading-[2.44rem]">
          {product.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <span
          className="absolute left-[61.9rem] top-[8.7rem] hidden h-[21.75rem] w-[2px] -translate-x-1/2 bg-gold-light xl:block"
          aria-hidden="true"
        />
        <Sparkle className="absolute left-[61.9rem] top-[18.5rem] hidden size-[2.2rem] -translate-x-1/2 text-gold xl:block" />
      </div>
      <div className="relative aspect-[865/662] overflow-hidden xl:aspect-auto xl:h-[41.4rem] xl:rounded-tl-[24rem]">
        <Image
          src={product.modelImage}
          alt={fill(data.modelImageAlt, { name: product.name })}
          fill
          quality={90}
          sizes="(min-width: 1280px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
