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
    <div className="lg:pt-[0.25rem] lg:min-w-0">
      <p className="flex items-center font-secondary text-[0.85rem] uppercase tracking-[0.3em] text-[var(--color-accent-alt)] lg:text-[1.4rem]">
        {category?.label}
        <span className="ml-4 h-[2px] w-12 bg-[var(--color-accent)] lg:ml-[2rem] lg:w-[3.4rem]" aria-hidden="true" />
      </p>
      <h1 className="mt-3 font-secondary text-[2.1rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[2.7rem] lg:mt-[1.5rem] lg:text-[3.6rem] lg:leading-[4.6rem]">
        {title.before && <span className="text-[var(--color-heading)]">{title.before} </span>}
        <span className="md:whitespace-nowrap">
          <span className="text-[var(--color-secondary)]">{title.accent}</span> <span className="text-[var(--color-heading)]">{leadWord}</span>
        </span>
        {rest && <span className="text-[var(--color-heading)] md:block">{` ${rest}`}</span>}
      </h1>
      <p className="mt-4 max-w-[42rem] font-secondary text-[1rem] leading-[1.6] text-[var(--color-text-light)] lg:mt-[0.75rem] lg:w-[42.7rem] lg:max-w-none lg:text-[1.38rem] lg:leading-[2.3rem]">
        {product.summary}
      </p>
      <div className="mt-7 flex items-center gap-4 lg:mt-[2.05rem] lg:gap-[2rem]" aria-hidden="true">
        <span className="h-[2px] flex-1 bg-[var(--color-accent-light)]" />
        <Sparkle className="size-6 text-[var(--color-accent)] lg:size-[2.25rem]" />
        <span className="h-[2px] flex-1 bg-[var(--color-accent-light)]" />
      </div>
      <dl className="relative mt-6 lg:mt-[2.45rem]">
        <span className="absolute bottom-1 left-[45%] top-1 w-[2px] bg-[var(--color-accent-light)] sm:left-[38%] lg:left-[16.15rem]" aria-hidden="true" />
        {product.quickSpecs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-[45%_1fr] items-center py-1.5 sm:grid-cols-[38%_1fr] lg:grid-cols-[16.15rem_1fr] lg:py-0 lg:leading-[3.25rem]">
            <dt className="font-secondary text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-text-soft)] lg:text-[1.25rem]">{spec.label}</dt>
            <dd className="pl-5 font-secondary text-[0.95rem] text-[var(--color-heading)] lg:pl-[3.75rem] lg:text-[1.5rem]">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
