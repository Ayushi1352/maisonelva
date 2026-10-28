"use client";

import { useState } from "react";
import { site, type MaisonElvaCollectionListingData, type SectionProps } from "@/data";
import ProductCard from "@/components/shared/ProductCard";

const ALL = "all";

export default function CollectionBrowser({ data = site.collectionsPage }: SectionProps<MaisonElvaCollectionListingData>) {
  const { categories, items: products, allLabel, categoriesLabel } = data;
  const [active, setActive] = useState<string>(ALL);
  const visible = active === ALL ? products : products.filter((product) => product.category === active);
  const tabs = [{ id: ALL, label: allLabel }, ...categories];

  return (
    <div>
      <ul role="tablist" aria-label={categoriesLabel} className="flex gap-7 overflow-x-auto border-b border-[#ece6e2] xl:gap-[3.4rem]">
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <li key={tab.id} className="shrink-0">
              <button
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tab.id)}
                className={`relative pb-3 font-cormorant text-[1.15rem] font-medium uppercase tracking-[0.04em] transition-colors xl:pb-[1.1rem] xl:text-[1.7rem] ${
                  selected ? "text-maroon" : "text-[#bdb6b6] hover:text-maroon-soft"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute -bottom-px left-0 h-[2px] w-full bg-maroon transition-opacity ${selected ? "opacity-100" : "opacity-0"}`}
                  aria-hidden="true"
                />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:mt-[4.4rem] xl:gap-x-0 xl:gap-y-[5rem]">
        {visible.map((product) => (
          <div key={`${active}-${product.slug}`} className="border-[#e4dede] xl:border-l-2 xl:pb-[1rem] xl:pt-[1.5rem]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
