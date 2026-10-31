import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaHeroData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function HeroSection({ data: hero = site.hero }: SectionProps<MaisonElvaHeroData>) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-main)] lg:h-[56.875rem]">
      <div className="px-5 pb-6 pt-8 sm:px-8 md:px-10 md:pt-12 lg:absolute lg:left-[8.75rem] lg:top-[9rem] lg:p-0">
        <p className="flex items-center font-sans text-[0.72rem] font-medium uppercase tracking-[0.33em] text-[var(--color-text-soft)] lg:tracking-[0.42em] md:text-[0.85rem] lg:text-[1.125rem]">
          {hero.label}
          <span className="ml-4 h-[2px] w-14 bg-[var(--color-primary)] lg:ml-[1.8rem] lg:w-[6.6rem]" aria-hidden="true" />
        </p>
        <h1 className="mt-6 font-heading text-[3.3rem] font-semibold uppercase leading-[0.96] tracking-[-0.005em] sm:text-[4.4rem] md:text-[5.4rem] lg:mt-[2.05rem] lg:text-[7.55rem] lg:leading-[7.06rem]">
          {hero.titleLines.map((line) => (
            <span key={line.text} className={`block ${line.accent ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
              {line.text}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[34rem] font-sans text-[1rem] leading-[1.85] text-[var(--color-text-soft)] md:text-[1.15rem] lg:mt-[1.45rem] lg:max-w-[46rem] lg:text-[1.47rem] lg:leading-[2.75rem]">
          {hero.description}
        </p>
        <Link
          href={hero.button.href}
          className="mt-8 inline-flex h-14 items-center gap-6 border border-[var(--color-primary)] bg-[var(--color-primary)] pl-7 pr-7 font-sans text-[0.95rem] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] md:h-16 md:text-[1.1rem] lg:mt-[2.6rem] lg:h-[4.8rem] lg:w-[21.85rem] lg:gap-[2.6rem] lg:pl-[2.7rem] lg:pr-0 lg:text-[1.375rem]"
        >
          {hero.button.label}
          <ArrowRight className="w-6 lg:w-[1.75rem]" />
        </Link>
      </div>

      {/* Visual composition */}
      <div className="relative mx-5 mt-10 pr-[14%] pt-[12%] sm:mx-8 md:mx-auto md:w-[min(40rem,80%)] lg:static lg:m-0 lg:w-auto lg:p-0">
        <span
          className="absolute right-0 top-0 h-[13%] w-[42%] bg-[var(--color-primary)] lg:h-[6.375rem] lg:w-[20.2rem]"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-[22%] right-0 top-[12%] w-[14%] bg-[var(--color-surface-soft)] lg:bottom-auto lg:left-[114.06rem] lg:top-[6.375rem] lg:h-[39.9rem] lg:w-auto"
          aria-hidden="true"
        />
        <span
          className="absolute left-[-9%] top-[38%] aspect-square w-[34%] rounded-full border-2 border-[var(--color-primary-light)] bg-[linear-gradient(to_bottom,var(--color-hero-circle)_50%,transparent_50%)] lg:left-[60.25rem] lg:top-[19.25rem] lg:w-[17rem]"
          aria-hidden="true"
        />
        <div className="relative z-10 aspect-[738/805] w-full lg:absolute lg:left-[67.94rem] lg:top-[6.375rem] lg:w-[46.125rem]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            preload
            quality={90}
            sizes="(min-width: 1280px) 39vw, 86vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
