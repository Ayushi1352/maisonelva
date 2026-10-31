import Image from "next/image";
import { site, type MaisonElvaContactData, type SectionProps } from "@/data";
import { Clock } from "@/components/Icons";

export default function ContactIntro({ data: contact = site.contactPage }: SectionProps<MaisonElvaContactData>) {
  return (
    <div>
      <p className="flex items-center font-secondary text-[0.85rem] uppercase tracking-[0.3em] text-[var(--color-heading)] lg:text-[1.375rem]">
        {contact.label}
        <span className="ml-4 h-[2px] w-24 bg-gradient-to-r from-[var(--color-accent)] to-transparent lg:ml-[1.2rem] lg:w-[10.5rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 font-secondary text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] md:text-[3.4rem] lg:mt-[1.3rem] lg:text-[5.18rem] lg:leading-[5.95rem]">
        <span className="block text-[var(--color-heading)]">{contact.titleTop}</span>
        <span className="block text-[var(--color-secondary)] lg:tracking-[-0.04em]">{contact.titleAccent}</span>
      </h2>
      <p className="mt-4 max-w-[44rem] font-secondary text-[1rem] leading-[1.7] text-[var(--color-text-light)] md:text-[1.1rem] lg:mt-[0.95rem] lg:text-[1.78rem] lg:leading-[2.875rem]">
        {contact.description}
      </p>
      <span className="mt-8 block h-[3px] w-16 bg-[var(--color-accent)] lg:mt-[3.5rem] lg:w-[5.6rem]" aria-hidden="true" />
      <h3 className="mt-7 font-secondary text-[1.8rem] leading-tight text-[var(--color-heading)] md:text-[2.2rem] lg:mt-[2.95rem] lg:text-[2.9rem]">
        {contact.hoursTitle}
      </h3>
      <ul className="mt-4 space-y-3 lg:mt-[1.35rem] lg:space-y-[1.05rem]">
        {contact.hours.map((line) => (
          <li key={line} className="flex items-center gap-4 lg:gap-[1.8rem]">
            <Clock className="size-7 shrink-0 text-[var(--color-accent-alt)] lg:size-[2.75rem]" />
            <span className="font-secondary text-[1rem] text-[var(--color-text-soft)] md:text-[1.1rem] lg:text-[1.8rem]">{line}</span>
          </li>
        ))}
      </ul>
      <ul className="mt-8 grid grid-cols-3 gap-3 lg:mt-[4.1rem] lg:gap-[1.7rem]">
        {contact.images.map((image) => (
          <li key={image.src} className="relative aspect-[250/285] overflow-hidden">
            <Image src={image.src} alt={image.alt} fill quality={90} sizes="(min-width: 1280px) 14vw, 30vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}
