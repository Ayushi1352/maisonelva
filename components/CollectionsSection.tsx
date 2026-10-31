"use client";

import { useState } from "react";
import { site, type MaisonElvaCollectionsPreviewData, type SectionProps } from "@/data";
import ProductCard from "@/components/ProductCard";

// Categories and products come from the collections page, so both pages always show the same items
const { categories, items } = site.collectionsPage;

export default function CollectionsSection({ data: section = site.collectionsPreviewSection }: SectionProps<MaisonElvaCollectionsPreviewData>) {
  const [active, setActive] = useState(section.defaultCategory);
  const products = items.filter((product) => product.category === active).slice(0, section.itemsPerCategory);

  return (
    <section className="bg-[var(--color-collections-bg)]">
      <div className="px-5 sm:px-8 md:px-10 lg:pl-[5.5rem] lg:pr-0">
        <p className="flex items-center font-display text-[1rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)] lg:-mt-[0.3rem] lg:pl-[0.3rem] lg:text-[1.375rem]">
          {section.label}
          <span className="ml-4 h-[2px] w-12 bg-[var(--color-primary-light)] lg:ml-[1.7rem] lg:w-[5.9rem]" aria-hidden="true" />
        </p>

        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-[2.6rem] lg:grid-cols-[23.75rem_30.3rem_29.7rem_1fr] lg:gap-x-0">
          {/* Heading + category tabs */}
          <div className="relative col-span-full lg:col-span-1">
            {/* gradient heading: logo charcoal into logo maroon */}
            <h2 className="mt-3 inline-block max-w-full break-words bg-[linear-gradient(90deg,var(--color-text)_0%,var(--color-primary)_60%,var(--color-primary)_100%)] bg-clip-text pb-2 font-display text-[2.9rem] font-semibold leading-none tracking-[-0.02em] text-transparent sm:text-[3.4rem] md:text-[4.4rem] lg:absolute lg:-top-[1.6rem] lg:left-0 lg:mt-0 lg:max-w-none lg:whitespace-nowrap lg:text-[7.1rem]">
              {section.title}
            </h2>
            <ul
              role="tablist"
              aria-label={section.categoriesLabel}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 pb-2 lg:mt-[9.3rem] lg:flex-col lg:flex-nowrap lg:gap-0 lg:pb-0"
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
                      className={`relative flex items-center font-display text-[1.15rem] font-medium uppercase tracking-[0.04em] transition-colors lg:h-[3.625rem] lg:pl-[0.7rem] lg:text-[1.62rem] lg:tracking-[0.005em] ${
                        selected ? "text-[var(--color-primary)]" : "text-[var(--color-tab-inactive)] hover:text-[var(--color-primary-soft)]"
                      }`}
                    >
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full bg-[var(--color-primary)] transition-opacity lg:bottom-auto lg:-left-[0.875rem] lg:top-[0.06rem] lg:h-[3.5rem] lg:w-[2px] ${
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
            <div key={`${active}-${product.name}`} className="relative mt-10 lg:mt-0 lg:h-[33.94rem] lg:pt-[4.7rem]">
              {/* column divider — the first one starts below the large heading */}
              <span
                className={`absolute bottom-0 left-0 hidden w-[2px] bg-[var(--color-tab-rule)] lg:block ${index === 0 ? "top-[7.5rem]" : "top-0"}`}
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
