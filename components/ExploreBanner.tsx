import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaExploreBannerData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function ExploreBanner({ data: explore = site.exploreBannerSection }: SectionProps<MaisonElvaExploreBannerData>) {
  return (
    <section className="relative min-h-[38rem] overflow-hidden md:min-h-[34rem] lg:h-[44rem] lg:min-h-0">
      <Image
        src={explore.image}
        alt={explore.imageAlt}
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-[60%_center] lg:object-center"
      />
      {/* Soft light fade keeps copy readable on smaller screens (done in CSS, not baked into the photo) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-explore-fade-96)_0%,var(--color-explore-fade-88)_48%,var(--color-explore-fade-0)_78%)] md:bg-[linear-gradient(90deg,var(--color-explore-fade-95)_0%,var(--color-explore-fade-82)_45%,var(--color-explore-fade-0)_70%)] lg:hidden"
        aria-hidden="true"
      />

      <div className="relative px-5 pb-10 pt-12 sm:px-8 md:max-w-[36rem] md:px-10 md:py-16 lg:max-w-none lg:px-0 lg:pl-[6.56rem] lg:pt-[6.4rem]">
        <p className="flex items-center font-sans text-[0.7rem] font-medium uppercase tracking-[0.235em] text-[var(--color-text)] md:text-[0.8rem] lg:text-[1.1rem] lg:tracking-[0.265em]">
          {explore.label}
          <span className="ml-4 h-[2px] w-12 bg-[var(--color-primary-light)] lg:ml-[1.6rem] lg:w-[5.9rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-4 font-heading text-[3.1rem] font-medium leading-[1.02] tracking-[-0.03em] md:text-[4rem] lg:mt-[1.4rem] lg:text-[7.5rem] lg:leading-[7.6rem]">
          <span className="block text-[var(--color-text)]">{explore.titleTop}</span>
          <span className="block text-[var(--color-primary)]">{explore.titleAccent}</span>
        </h2>
        <p className="mt-5 max-w-[30rem] font-sans text-[1rem] leading-[1.7] text-[var(--color-text-soft)] md:text-[1.1rem] lg:mt-[1.2rem] lg:max-w-[39rem] lg:text-[1.5rem] lg:leading-[2.44rem]">
          {explore.description}
        </p>
        <Link
          href={explore.button.href}
          className="mt-8 inline-flex h-14 items-center gap-6 border border-[var(--color-primary)] bg-[var(--color-primary)] px-7 font-sans text-[0.95rem] font-normal tracking-[0.05em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] md:h-16 lg:mt-[2.9rem] lg:h-[4.8rem] lg:w-[22rem] lg:gap-[2.8rem] lg:px-0 lg:pl-[3.1rem] lg:text-[1.25rem]"
        >
          {explore.button.label}
          <ArrowRight className="w-6 lg:w-[1.75rem]" />
        </Link>
      </div>
    </section>
  );
}
