import { QuoteMark, Star } from "@/components/Icons";
import type { MaisonElvaTestimonial as Testimonial } from "@/data";
import { fill } from "@/components/text";

export default function TestimonialCard({ testimonial, ratingLabel }: { testimonial: Testimonial; ratingLabel: string }) {
  return (
    <article className="relative flex flex-col rounded-[0.4rem] border-2 border-line bg-[linear-gradient(180deg,#fcfaf7_0%,#fbf6f1_100%)] px-6 pb-9 pt-9 shadow-[0_0.6rem_1.6rem_rgba(190,150,110,0.12)] md:px-10 xl:px-[5.3rem] xl:pb-[4rem] xl:pt-[3.15rem]">
      <QuoteMark className="w-14 text-amber xl:w-[5.35rem]" />
      <p className="mt-4 max-w-[41.5rem] flex-1 font-newsreader text-[1.2rem] font-[350] leading-[1.5] text-ink-soft md:text-[1.35rem] xl:mt-[1.72rem] xl:text-[2.61rem] xl:leading-[3.3rem]">
        {testimonial.quote}
      </p>
      <div className="mt-5 flex gap-2 text-amber xl:mt-[1.6rem] xl:gap-[0.9rem]" aria-label={fill(ratingLabel, { rating: testimonial.rating })}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="size-6 xl:size-[2.75rem]" />
        ))}
      </div>
      <span className="mt-6 block h-[3px] w-16 bg-gold xl:mt-[2.6rem] xl:w-[5.9rem]" aria-hidden="true" />
      <h3 className="mt-5 font-newsreader text-[1.6rem] font-semibold leading-tight text-navy xl:mt-[2.3rem] xl:text-[2.9rem]">
        {testimonial.name}
      </h3>
      <p className="mt-2 font-newsreader text-[0.95rem] font-medium uppercase tracking-[0.3em] text-ink-soft xl:mt-[0.8rem] xl:text-[1.6rem]">
        {testimonial.city}
      </p>
      <QuoteMark className="absolute bottom-8 right-6 w-12 rotate-180 text-[#efdfcb] md:right-10 xl:bottom-[5.4rem] xl:right-[4.5rem] xl:w-[5rem]" />
    </article>
  );
}
