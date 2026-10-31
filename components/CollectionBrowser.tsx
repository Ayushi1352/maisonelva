"use client";

import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaCollectionListingData, type SectionProps } from "@/data";
import Pagination, { usePagination } from "@/components/Pagination";
import { fadeIn } from "@/components/styles";

/** Category cards (image + name with a short gold rule), three per row, paged by perPage in templates.json */
export default function CollectionBrowser({ data = site.collectionsPage }: SectionProps<MaisonElvaCollectionListingData>) {
  const { cards, cardHref, perPage } = data;
  const { page, setPage, totalPages, start, pageItems } = usePagination(cards, perPage);

  return (
    <div id="collection-grid" className="scroll-mt-28 lg:scroll-mt-[11rem]">
      <ul className="mx-auto grid max-w-[24rem] gap-5 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:w-[102rem] lg:gap-x-[2.04rem] lg:gap-y-[1.65rem]">
        {pageItems.map((card, index) => (
          <li key={`${page}-${start + index}`}>
            <Link href={cardHref} className={`group flex h-full flex-col ${fadeIn}`}>
              <div className="relative aspect-[320/176] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 28vw, (min-width: 768px) 32vw, (min-width: 640px) 48vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col items-center bg-[var(--color-bg-alt)] px-3 pb-5 pt-4 lg:h-[6.85rem] lg:flex-none lg:pb-0 lg:pt-[1.55rem]">
                <h3 className="text-center font-display text-[1.05rem] font-bold uppercase leading-[1.2] tracking-[0.18em] md:tracking-[0.12em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-secondary)] lg:text-[1.45rem] lg:leading-none lg:tracking-[0.18em]">
                  {card.label}
                </h3>
                <span className="mt-3 block h-[2px] w-6 bg-[var(--color-accent)] lg:mt-[1.1rem] lg:w-[2.45rem]" aria-hidden="true" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="collection-grid" />
    </div>
  );
}
