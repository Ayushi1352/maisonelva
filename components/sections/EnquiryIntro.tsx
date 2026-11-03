import type { EnquiryData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const EnquiryIntro = ({ data: enquiry }: { data: EnquiryData }) => {
  return (
    <div className="lg:pt-[1.65rem]">
      <p className="flex items-center font-sans text-[0.85rem] font-medium uppercase tracking-[0.35em] text-[var(--color-accent-alt)] lg:text-[1.55rem] lg:tracking-[0.37em]">
        {enquiry.eyebrow}
        <span className="ml-4 h-[2px] w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent lg:ml-[1.2rem] lg:w-[9.4rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 font-editorial text-[1.95rem] font-semibold leading-[1.15] tracking-[-0.015em] min-[400px]:text-[2.2rem] sm:text-[2.5rem] sm:leading-[1.1] md:text-[3.2rem] lg:mt-[1.55rem] lg:text-[4.65rem] lg:leading-[5.3rem]">
        <span className="block text-[var(--color-heading)]">{enquiry.title}</span>
        <span className="block text-[var(--color-secondary)] lg:tracking-[-0.038em]">{enquiry.titleHighlight}</span>
      </h2>
      <p className="mt-5 max-w-[48rem] font-ui text-[1.05rem] leading-[1.6] text-[var(--color-text-alt)] md:text-[1.2rem] lg:mt-[1.35rem] lg:text-[1.91rem] lg:leading-[2.75rem]">
        {enquiry.description}
      </p>
      <ul className="mt-9 space-y-7 lg:mt-[3.76rem] lg:space-y-[2.85rem]">
        {enquiry.features.map((feature) => {
          return (
            <li key={feature.id} className="flex items-start gap-5 lg:gap-[3.5rem]">
              <span className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,var(--color-icon-badge-light)_0%,var(--color-icon-badge-mid)_60%,var(--color-icon-badge-dark)_100%)] text-[var(--color-accent-alt)] lg:size-[7.4rem]">
                <Icon name={feature.icon} className="size-9 lg:size-[3.9rem]" />
              </span>
              <div className="lg:pt-[0.6rem]">
                <h3 className="font-editorial text-[1.3rem] font-semibold leading-tight tracking-[-0.02em] text-[var(--color-heading)] md:text-[1.5rem] lg:whitespace-nowrap lg:text-[2.1rem]">
                  {feature.title}
                </h3>
                <p className="mt-1 font-ui text-[1rem] leading-[1.5] text-[var(--color-text-alt)] md:text-[1.1rem] lg:mt-[0.5rem] lg:text-[1.8rem] lg:leading-[2.6rem]">
                  {feature.description.map((line) => (
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
};
