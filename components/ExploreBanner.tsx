import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaExploreBannerData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function ExploreBanner({ data: explore = site.exploreBannerSection }: SectionProps<MaisonElvaExploreBannerData>) {
  return (
    <section className="relative min-h-[38rem] overflow-hidden md:min-h-[34rem] xl:h-[44rem] xl:min-h-0">
      <Image
        src={explore.image}
        alt={explore.imageAlt}
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-[60%_center] xl:object-center"
      />
      {/* Soft light fade keeps copy readable on smaller screens (done in CSS, not baked into the photo) */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(249,245,240,0.96)_0%,rgba(249,245,240,0.88)_48%,rgba(249,245,240,0)_78%)] md:bg-[linear-gradient(90deg,rgba(249,245,240,0.95)_0%,rgba(249,245,240,0.82)_45%,rgba(249,245,240,0)_70%)] xl:hidden"
        aria-hidden="true"
      />

      <div className="relative px-5 pb-10 pt-12 sm:px-8 md:max-w-[36rem] md:px-10 md:py-16 xl:max-w-none xl:px-0 xl:pl-[6.56rem] xl:pt-[6.4rem]">
        <p className="flex items-center font-poppins text-[0.7rem] font-medium uppercase tracking-[0.235em] text-ink md:text-[0.8rem] xl:text-[1.1rem] xl:tracking-[0.265em]">
          {explore.label}
          <span className="ml-4 h-[2px] w-12 bg-maroon-light xl:ml-[1.6rem] xl:w-[5.9rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-4 font-playfair text-[3.1rem] font-medium leading-[1.02] tracking-[-0.03em] md:text-[4rem] xl:mt-[1.4rem] xl:text-[7.5rem] xl:leading-[7.6rem]">
          <span className="block text-ink">{explore.titleTop}</span>
          <span className="block text-maroon">{explore.titleAccent}</span>
        </h2>
        <p className="mt-5 max-w-[30rem] font-poppins text-[1rem] leading-[1.7] text-ink-soft md:text-[1.1rem] xl:mt-[1.2rem] xl:max-w-[39rem] xl:text-[1.5rem] xl:leading-[2.44rem]">
          {explore.description}
        </p>
        <Link
          href={explore.button.href}
          className="mt-8 inline-flex h-14 items-center gap-6 border border-maroon bg-maroon px-7 font-poppins text-[0.95rem] font-normal tracking-[0.05em] text-white transition-colors hover:bg-white hover:text-maroon md:h-16 xl:mt-[2.9rem] xl:h-[4.8rem] xl:w-[22rem] xl:gap-[2.8rem] xl:px-0 xl:pl-[3.1rem] xl:text-[1.25rem]"
        >
          {explore.button.label}
          <ArrowRight className="w-6 xl:w-[1.75rem]" />
        </Link>
      </div>
    </section>
  );
}
