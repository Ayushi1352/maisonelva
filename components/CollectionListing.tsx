import { site, type MaisonElvaCollectionListingData, type SectionProps } from "@/data";
import StarDivider from "@/components/StarDivider";
import CollectionBrowser from "@/components/CollectionBrowser";

/** Collections page: star divider, small "OUR" label, small-caps "COLLECTION" heading, gold rule, intro and the category cards */
export default function CollectionListing({ data: collections = site.collectionsPage }: SectionProps<MaisonElvaCollectionListingData>) {
  return (
    <section className="bg-page px-5 sm:px-8 md:px-10 xl:px-0">
      <div className="text-center">
        <StarDivider />
        <p className="mt-3 font-caslon text-[0.8rem] uppercase leading-none tracking-[0.3em] text-ink xl:mt-[0.9rem] xl:text-[1.15rem]">
          {collections.label}
        </p>
        <h2 className="mt-2 inline-block bg-[linear-gradient(90deg,var(--color-ruby-deep)_0%,var(--color-maroon)_45%,var(--color-ink)_72%)] bg-clip-text pb-1 font-caslon text-[2.2rem] min-[360px]:text-[2.6rem] font-bold uppercase leading-none tracking-[-0.035em] text-transparent first-letter:text-[1.24em] md:text-[3.6rem] xl:mt-[0.5rem] xl:text-[5.55rem]">
          {collections.title}
        </h2>
        <span className="mx-auto mt-3 block h-[2px] w-16 bg-[linear-gradient(90deg,transparent,var(--color-gold)_30%,var(--color-gold)_70%,transparent)] xl:mt-[0.5rem] xl:w-[6.1rem]" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-[30rem] font-cormorant text-[1.2rem] leading-[1.45] text-ink-soft md:text-[1.35rem] xl:mt-[0.9rem] xl:max-w-[43rem] xl:text-[1.75rem] xl:leading-[2.55rem]">
          {collections.intro}
        </p>
      </div>
      <div className="mt-10 xl:mt-[2.7rem]">
        <CollectionBrowser data={collections} />
      </div>
    </section>
  );
}
