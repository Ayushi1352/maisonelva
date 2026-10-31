import Image from "next/image";
import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { fill } from "@/components/text";
import { Sparkle } from "@/components/Icons";

type ProductDescriptionProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductDescription({ data = site.collectionDetailPage, product }: ProductDescriptionProps) {
  return (
    <section className="grid bg-[var(--color-product-description-bg)] lg:mt-[3.5rem] lg:grid-cols-[1fr_54rem]">
      <div className="relative px-5 py-12 sm:px-8 md:px-10 lg:px-0 lg:pb-[2.6rem] lg:pl-[7.9rem] lg:pt-[2.6rem]">
        <p className="flex items-center font-secondary text-[0.85rem] uppercase tracking-[0.3em] text-[var(--color-accent-alt)] lg:text-[1.3rem] lg:tracking-[0.26em]">
          <span className="mr-4 h-[2px] w-12 bg-[var(--color-accent)] lg:mr-[2.1rem] lg:w-[4rem]" aria-hidden="true" />
          {data.descriptionLabel}
        </p>
        <h2 className="mt-4 font-secondary text-[2.3rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-[3rem] lg:mt-[1.5rem] lg:text-[3.78rem] lg:leading-[4.5rem]">
          <span className="block text-[var(--color-secondary)]">{product.descriptionTitleAccent}</span>
          <span className="block text-[var(--color-heading)]">{product.descriptionTitleRest}</span>
        </h2>
        <div className="mt-5 max-w-[50rem] space-y-4 font-secondary text-[1rem] leading-[1.7] text-[var(--color-text-light)] md:text-[1.05rem] lg:mt-[1.5rem] lg:max-w-[49.6rem] lg:space-y-[1.1rem] lg:text-[1.36rem] lg:leading-[2.125rem]">
          {/* "\n" in a paragraph fixes where lines break on desktop; smaller screens wrap freely */}
          {product.description.map((paragraph) => (
            <p key={paragraph}>
              {paragraph.split("\n").map((line, index) => (
                <span key={index} className="lg:block">
                  {index > 0 && " "}
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>
        <span
          className="absolute left-[61.9rem] top-[7.6rem] hidden h-[21.75rem] w-[2px] -translate-x-1/2 bg-[var(--color-accent-light)] lg:block"
          aria-hidden="true"
        />
        <Sparkle className="absolute left-[61.9rem] top-[17.4rem] hidden size-[2.2rem] -translate-x-1/2 text-[var(--color-accent)] lg:block" />
      </div>
      <div className="relative aspect-[865/662] overflow-hidden lg:aspect-auto lg:h-[37rem] lg:rounded-tl-[24rem]">
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
