import { QuoteMark, Star } from "@/components/Icons";
import type { MaisonElvaTestimonial as Testimonial } from "@/data";
import { fill } from "@/components/text";

export default function TestimonialCard({ testimonial, ratingLabel }: { testimonial: Testimonial; ratingLabel: string }) {
  return (
    <article className="relative flex flex-col rounded-[0.4rem] border-2 border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-warm)_0%,var(--color-testimonial-card-bottom)_100%)] px-6 pb-9 pt-9 shadow-[0_0.6rem_1.6rem_var(--color-testimonial-shadow)] md:px-10 lg:px-[5.3rem] lg:pb-[4rem] lg:pt-[3.15rem]">
      <QuoteMark className="w-14 text-[var(--color-accent-alt)] lg:w-[5.35rem]" />
      <p className="mt-4 max-w-[41.5rem] flex-1 font-editorial text-[1.2rem] font-[350] leading-[1.5] text-[var(--color-text-soft)] md:text-[1.45rem] lg:mt-[1.72rem] lg:text-[2.6rem] lg:leading-[3.375rem]">
        {testimonial.quote}
      </p>
      <div className="mt-5 flex gap-2 text-[var(--color-accent-alt)] lg:mt-[1.6rem] lg:gap-[0.9rem]" aria-label={fill(ratingLabel, { rating: testimonial.rating })}>
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star key={i} className="size-6 lg:size-[2.75rem]" />
        ))}
      </div>
      <span className="mt-6 block h-[3px] w-16 bg-[var(--color-accent)] lg:mt-[2.6rem] lg:w-[5.9rem]" aria-hidden="true" />
      <h3 className="mt-5 font-editorial text-[1.6rem] font-semibold leading-tight text-[var(--color-heading)] lg:mt-[2.3rem] lg:text-[2.9rem]">
        {testimonial.name}
      </h3>
      <p className="mt-2 font-editorial text-[0.95rem] font-medium uppercase tracking-[0.3em] text-[var(--color-text-soft)] lg:mt-[0.8rem] lg:text-[1.6rem]">
        {testimonial.city}
      </p>
      <QuoteMark className="absolute bottom-8 right-6 w-12 rotate-180 text-[var(--color-quote-mark)] md:right-10 lg:bottom-[5.4rem] lg:right-[4.5rem] lg:w-[5rem]" />
    </article>
  );
}
