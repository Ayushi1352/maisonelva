"use client";

import { site, type MaisonElvaTestimonialListingData, type SectionProps } from "@/data";
import SectionIntro from "@/components/SectionIntro";
import TestimonialCard from "@/components/TestimonialCard";
import Pagination, { usePagination } from "@/components/Pagination";

export default function TestimonialListing({ data: page = site.testimonialsPage }: SectionProps<MaisonElvaTestimonialListingData>) {
  const { page: current, setPage, totalPages, pageItems } = usePagination(page.items, page.perPage);

  return (
    <section className="bg-[linear-gradient(180deg,#fcfaf7_0%,#fbf8f4_40%,#fcfaf7_100%)] px-4 sm:px-6 md:px-10 xl:px-[3.6rem]">
      <SectionIntro
        label={page.label}
        titleTop={page.titleTop}
        titleAccent={page.titleAccent}
        description={page.description}
        /* the font only ships 400/700: a hairline stroke in the section colour thins the bold heading slightly */
        titleClassName="xl:text-[6.1rem] [-webkit-text-stroke:0.007em_#fbf9f5]"
      />
      <div id="testimonial-grid" className="mt-10 grid auto-rows-fr scroll-mt-28 xl:scroll-mt-[11rem] gap-6 md:grid-cols-2 md:gap-8 xl:mt-[3rem] xl:gap-x-[2.95rem] xl:gap-y-[2.2rem]">
        {pageItems.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} ratingLabel={page.ratingLabel} />
        ))}
      </div>
      <Pagination page={current} totalPages={totalPages} onChange={setPage} scrollTargetId="testimonial-grid" />
    </section>
  );
}
