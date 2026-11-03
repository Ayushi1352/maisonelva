"use client";

import type { GlobalUIData, TestimonialListingData } from "@/types/templates.types";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Pagination, usePagination } from "@/components/ui/Pagination";

export const TestimonialListing = ({ data: page, ui }: { data?: TestimonialListingData; ui?: GlobalUIData }) => {
  const { page: current, setPage, totalPages, pageItems } = usePagination(page?.items ?? [], page?.perPage ?? 1);
  if (!page) return null;

  return (
    <section className="bg-[linear-gradient(180deg,var(--color-surface-warm)_0%,var(--color-surface-warm-deep)_40%,var(--color-surface-warm)_100%)] px-4 sm:px-6 md:px-10 lg:px-[3.6rem]">
      <SectionIntro
        eyebrow={page.eyebrow}
        title={page.title}
        titleHighlight={page.titleHighlight}
        description={page.description}
        /* the font only ships 400/700: a hairline stroke in the section colour thins the bold heading slightly */
        titleClassName="lg:text-[6.1rem] [-webkit-text-stroke:0.007em_var(--color-title-stroke)]"
      />
      <div id="testimonial-grid" className="mt-10 grid auto-rows-fr scroll-mt-28 lg:scroll-mt-[11rem] gap-6 md:grid-cols-2 md:gap-8 lg:mt-[3rem] lg:gap-x-[2.95rem] lg:gap-y-[2.2rem]">
        {pageItems.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} ratingLabel={page.ratingLabel} />
        ))}
      </div>
      <Pagination page={current} totalPages={totalPages} onChange={setPage} scrollTargetId="testimonial-grid" ui={ui} />
    </section>
  );
};
