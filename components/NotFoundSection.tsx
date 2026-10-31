import Link from "next/link";
import { site, type MaisonElvaNotFoundData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function NotFoundSection({ data = site.notFoundPage }: SectionProps<MaisonElvaNotFoundData>) {
  return (
    <section className="bg-[var(--color-bg-main)] px-5 pt-12 text-center sm:px-8 md:pt-16 lg:pt-[8.6rem]">
      <p className="font-heading text-[5rem] font-semibold leading-none text-[var(--color-primary)] md:text-[7rem] lg:text-[11rem]">{data.code}</p>
      <h1 className="mt-4 text-balance font-decorative text-[2.2rem] leading-[1.15] text-[var(--color-text)] md:text-[3rem] lg:mt-[2rem] lg:text-[4.38rem]">{data.title}</h1>
      <p className="mx-auto mt-4 max-w-[36rem] font-sans text-[1rem] leading-[1.7] text-[var(--color-text-soft)] md:text-[1.1rem] lg:mt-[1.6rem] lg:max-w-[52rem] lg:text-[1.5rem] lg:leading-[2.44rem]">
        {data.description}
      </p>
      <Link
        href={data.button.href}
        className="mt-8 inline-flex h-14 items-center gap-6 border border-[var(--color-primary)] bg-[var(--color-primary)] px-7 font-sans text-[0.95rem] font-normal tracking-[0.05em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] md:h-16 lg:mt-[2.9rem] lg:h-[4.8rem] lg:gap-[2.8rem] lg:px-[3.1rem] lg:text-[1.25rem]"
      >
        {data.button.label}
        <ArrowRight className="w-6 lg:w-[1.75rem]" />
      </Link>
    </section>
  );
}
