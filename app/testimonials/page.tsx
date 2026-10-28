import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import SectionIntro from "@/components/shared/SectionIntro";
import TestimonialCard from "./components/TestimonialCard";

const page = site.testimonialsPage;

export const metadata: Metadata = page.seo;

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="bg-[linear-gradient(180deg,#fcfaf7_0%,#fbf8f4_40%,#fcfaf7_100%)] px-4 sm:px-6 md:px-10 xl:px-[3.6rem]">
        <SectionIntro
          label={page.label}
          titleTop={page.titleTop}
          titleAccent={page.titleAccent}
          description={page.description}
        />
        <div className="mt-10 grid items-start gap-6 md:grid-cols-2 md:gap-8 xl:mt-[3rem] xl:gap-x-[2.95rem] xl:gap-y-[2.2rem]">
          {page.items.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} ratingLabel={page.ratingLabel} />
          ))}
        </div>
      </section>
    </>
  );
}
