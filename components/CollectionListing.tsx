import { site, type MaisonElvaCollectionListingData, type SectionProps } from "@/data";
import StarDivider from "@/components/StarDivider";
import CollectionBrowser from "@/components/CollectionBrowser";

/** Collections page: star divider, small "OUR" label, small-caps "COLLECTION" heading, gold rule, intro and the category cards */
export default function CollectionListing({ data: collections = site.collectionsPage }: SectionProps<MaisonElvaCollectionListingData>) {
  return (
    <section className="bg-[var(--color-bg-main)] px-5 sm:px-8 md:px-10 lg:px-0">
      <div className="text-center">
        <StarDivider />
        <p className="mt-3 font-secondary text-[0.8rem] uppercase leading-none tracking-[0.3em] text-[var(--color-text)] lg:mt-[0.9rem] lg:text-[1.15rem]">
          {collections.label}
        </p>
        <h2 className="mt-2 inline-block bg-[linear-gradient(90deg,var(--color-secondary-deep)_0%,var(--color-primary)_45%,var(--color-text)_72%)] bg-clip-text pb-1 font-secondary text-[2.2rem] min-[360px]:text-[2.6rem] font-bold uppercase leading-none tracking-[-0.035em] text-transparent first-letter:text-[1.24em] md:text-[3.6rem] lg:mt-[0.5rem] lg:text-[5.55rem]">
          {collections.title}
        </h2>
        <span className="mx-auto mt-3 block h-[2px] w-16 bg-[linear-gradient(90deg,transparent,var(--color-accent)_30%,var(--color-accent)_70%,transparent)] lg:mt-[0.5rem] lg:w-[6.1rem]" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-[30rem] font-display text-[1.2rem] leading-[1.45] text-[var(--color-text-soft)] md:text-[1.35rem] lg:mt-[0.9rem] lg:max-w-[43rem] lg:text-[1.75rem] lg:leading-[2.55rem]">
          {collections.intro}
        </p>
      </div>
      <div className="mt-10 lg:mt-[2.7rem]">
        <CollectionBrowser data={collections} />
      </div>
    </section>
  );
}
