import { site, type MaisonElvaEnquiryData, type SectionProps } from "@/data";
import { DiamondSolid, Headset, ShieldCheck } from "@/components/Icons";

const icons = {
  diamond: DiamondSolid,
  headset: Headset,
  shield: ShieldCheck,
} as const;

export default function EnquiryIntro({ data: enquiry = site.enquiryPage }: SectionProps<MaisonElvaEnquiryData>) {
  return (
    <div className="lg:pt-[1.65rem]">
      <p className="flex items-center font-sans text-[0.85rem] font-medium uppercase tracking-[0.35em] text-[var(--color-accent-alt)] lg:text-[1.55rem] lg:tracking-[0.37em]">
        {enquiry.label}
        <span className="ml-4 h-[2px] w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent lg:ml-[1.2rem] lg:w-[9.4rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 font-secondary text-[2.5rem] font-bold leading-[1.1] tracking-[-0.015em] md:text-[3.4rem] lg:mt-[1.55rem] lg:text-[5.05rem] lg:leading-[5.75rem]">
        <span className="block text-[var(--color-heading)]">{enquiry.titleTop}</span>
        <span className="block text-[var(--color-secondary)] lg:tracking-[-0.038em]">{enquiry.titleAccent}</span>
      </h2>
      <p className="mt-5 max-w-[48rem] font-ui text-[1.05rem] leading-[1.6] text-[var(--color-text-alt)] md:text-[1.2rem] lg:mt-[1.35rem] lg:text-[1.91rem] lg:leading-[2.75rem]">
        {enquiry.description}
      </p>
      <ul className="mt-9 space-y-7 lg:mt-[3.76rem] lg:space-y-[2.85rem]">
        {enquiry.features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <li key={feature.title} className="flex items-start gap-5 lg:gap-[3.5rem]">
              <span className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,var(--color-icon-badge-light)_0%,var(--color-icon-badge-mid)_60%,var(--color-icon-badge-dark)_100%)] text-[var(--color-accent-alt)] lg:size-[7.4rem]">
                <Icon className="size-9 lg:size-[3.9rem]" />
              </span>
              <div className="lg:pt-[0.6rem]">
                <h3 className="font-secondary text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-[var(--color-heading)] md:text-[1.6rem] lg:whitespace-nowrap lg:text-[2.3rem]">
                  {feature.title}
                </h3>
                <p className="mt-1 font-ui text-[1rem] leading-[1.5] text-[var(--color-text-alt)] md:text-[1.1rem] lg:mt-[0.5rem] lg:text-[1.8rem] lg:leading-[2.6rem]">
                  {feature.text.map((line) => (
                    <span key={line} className="lg:block">
                      {line}{" "}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
