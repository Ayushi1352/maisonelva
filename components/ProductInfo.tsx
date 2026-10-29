import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { splitAccent } from "@/components/text";
import { Sparkle } from "@/components/Icons";

type ProductInfoProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductInfo({ data = site.collectionDetailPage, product }: ProductInfoProps) {
  const category = site.collectionsPage.categories.find((item) => item.id === product.category);
  const title = splitAccent(product.name, product.nameAccent);
  // first word after the accent stays on the accent's line: "Radiant Halo Diamond" / "Pendant Necklace"
  const [leadWord = "", ...restWords] = title.after.split(" ");
  const rest = restWords.join(" ");

  return (
    <div className="xl:pt-[0.25rem] xl:min-w-0">
      <p className="flex items-center font-caslon text-[0.85rem] uppercase tracking-[0.3em] text-amber xl:text-[1.4rem]">
        {category?.label}
        <span className="ml-4 h-[2px] w-12 bg-gold xl:ml-[2rem] xl:w-[3.4rem]" aria-hidden="true" />
      </p>
      <h1 className="mt-3 font-caslon text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[2.7rem] xl:mt-[1.5rem] xl:text-[3.6rem] xl:leading-[4.6rem]">
        {title.before && <span className="text-navy">{title.before} </span>}
        <span className="md:whitespace-nowrap">
          <span className="text-ruby">{title.accent}</span> <span className="text-navy">{leadWord}</span>
        </span>
        {rest && <span className="text-navy md:block">{` ${rest}`}</span>}
      </h1>
      <p className="mt-4 font-caslon text-[2rem] font-bold text-ruby xl:mt-[0.75rem] xl:text-[3.5rem]">{product.price}</p>
      <p className="mt-3 max-w-[42rem] font-caslon text-[1rem] leading-[1.6] text-body xl:mt-[0.13rem] xl:w-[42.7rem] xl:max-w-none xl:text-[1.38rem] xl:leading-[2.3rem]">
        {product.summary}
      </p>
      <div className="mt-7 flex items-center gap-4 xl:mt-[2.05rem] xl:gap-[2rem]" aria-hidden="true">
        <span className="h-[2px] flex-1 bg-gold-light" />
        <Sparkle className="size-6 text-gold xl:size-[2.25rem]" />
        <span className="h-[2px] flex-1 bg-gold-light" />
      </div>
      <dl className="relative mt-6 xl:mt-[2.45rem]">
        <span className="absolute bottom-1 left-[45%] top-1 w-[2px] bg-gold-light sm:left-[38%] xl:left-[16.15rem]" aria-hidden="true" />
        {product.quickSpecs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-[45%_1fr] items-center py-1.5 sm:grid-cols-[38%_1fr] xl:grid-cols-[16.15rem_1fr] xl:py-0 xl:leading-[3.25rem]">
            <dt className="font-caslon text-[0.72rem] uppercase tracking-[0.3em] text-ink-soft xl:text-[1.25rem]">{spec.label}</dt>
            <dd className="pl-5 font-caslon text-[0.95rem] text-navy xl:pl-[3.75rem] xl:text-[1.5rem]">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
