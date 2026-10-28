"use client";

import { useState } from "react";
import { site, type MaisonElvaCollectionsPreviewData, type SectionProps } from "@/data";
import ProductCard from "@/components/ProductCard";
import { gradientText } from "@/components/styles";

// Categories and products come from the collections page, so both pages always show the same items
const { categories, items } = site.collectionsPage;

export default function CollectionsSection({ data: section = site.collectionsPreviewSection }: SectionProps<MaisonElvaCollectionsPreviewData>) {
  const [active, setActive] = useState(section.defaultCategory);
  const products = items.filter((product) => product.category === active).slice(0, section.itemsPerCategory);

  return (
    <section className="bg-[#fefefe]">
      <div className="px-5 sm:px-8 md:px-10 xl:pl-[5.5rem] xl:pr-0">
        <p className="flex items-center font-cormorant text-[1rem] font-semibold uppercase tracking-[0.1em] text-maroon xl:-mt-[0.3rem] xl:pl-[0.3rem] xl:text-[1.375rem]">
          {section.label}
          <span className="ml-4 h-[2px] w-12 bg-maroon-light xl:ml-[1.7rem] xl:w-[5.9rem]" aria-hidden="true" />
        </p>

        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:mt-[2.6rem] xl:grid-cols-[23.75rem_30.3rem_29.7rem_1fr] xl:gap-x-0">
          {/* Heading + category tabs */}
          <div className="relative col-span-full xl:col-span-1">
            <h2 className={`${gradientText} mt-3 inline-block max-w-full break-words pb-2 xl:max-w-none font-cormorant text-[2.9rem] sm:text-[3.4rem] xl:whitespace-nowrap font-semibold leading-none tracking-[-0.02em] md:text-[4.4rem] xl:absolute xl:-top-[1.6rem] xl:left-0 xl:mt-0 xl:text-[7.1rem]`}>
              {section.title}
            </h2>
            <ul
              role="tablist"
              aria-label={section.categoriesLabel}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 pb-2 xl:mt-[9.3rem] xl:flex-col xl:flex-nowrap xl:gap-0 xl:pb-0"
            >
              {categories.map((category) => {
                const selected = category.id === active;
                return (
                  <li key={category.id} className="shrink-0">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(category.id)}
                      className={`relative flex items-center font-cormorant text-[1.15rem] font-medium uppercase tracking-[0.04em] transition-colors xl:h-[3.625rem] xl:pl-[0.7rem] xl:text-[1.62rem] xl:tracking-[0.005em] ${
                        selected ? "text-maroon" : "text-[#cbc5c5] hover:text-maroon-soft"
                      }`}
                    >
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full bg-maroon transition-opacity xl:bottom-auto xl:-left-[0.875rem] xl:top-[0.06rem] xl:h-[3.5rem] xl:w-[2px] ${
                          selected ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden="true"
                      />
                      {category.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Product cards */}
          {products.map((product, index) => (
            <div key={`${active}-${product.name}`} className="relative mt-10 xl:mt-0 xl:h-[33.94rem] xl:pt-[4.7rem]">
              {/* column divider — the first one starts below the large heading */}
              <span
                className={`absolute bottom-0 left-0 hidden w-[2px] bg-[#e4dede] xl:block ${index === 0 ? "top-[7.5rem]" : "top-0"}`}
                aria-hidden="true"
              />
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
