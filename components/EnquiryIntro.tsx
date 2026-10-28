import { site, type MaisonElvaEnquiryData, type SectionProps } from "@/data";
import { DiamondSolid, Headset, ShieldCheck } from "@/components/Icons";

const icons = {
  diamond: DiamondSolid,
  headset: Headset,
  shield: ShieldCheck,
} as const;

export default function EnquiryIntro({ data: enquiry = site.enquiryPage }: SectionProps<MaisonElvaEnquiryData>) {
  return (
    <div className="xl:pt-[1.65rem]">
      <p className="flex items-center font-poppins text-[0.85rem] font-medium uppercase tracking-[0.35em] text-amber xl:text-[1.55rem] xl:tracking-[0.37em]">
        {enquiry.label}
        <span className="ml-4 h-[2px] w-20 bg-gradient-to-r from-gold to-transparent xl:ml-[1.2rem] xl:w-[9.4rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 font-caslon text-[2.5rem] font-bold leading-[1.1] tracking-[-0.015em] md:text-[3.4rem] xl:mt-[1.55rem] xl:text-[5.05rem] xl:leading-[5.75rem]">
        <span className="block text-navy">{enquiry.titleTop}</span>
        <span className="block text-ruby xl:tracking-[-0.038em]">{enquiry.titleAccent}</span>
      </h2>
      <p className="mt-5 max-w-[48rem] font-gsans text-[1.05rem] leading-[1.6] text-slate md:text-[1.2rem] xl:mt-[1.35rem] xl:text-[1.91rem] xl:leading-[2.75rem]">
        {enquiry.description}
      </p>
      <ul className="mt-9 space-y-7 xl:mt-[3.76rem] xl:space-y-[2.85rem]">
        {enquiry.features.map((feature) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <li key={feature.title} className="flex items-start gap-5 xl:gap-[3.5rem]">
              <span className="flex size-[4.5rem] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,#fdeedd_0%,#fbe6d0_60%,#f8dcc0_100%)] text-amber xl:size-[7.4rem]">
                <Icon className="size-9 xl:size-[3.9rem]" />
              </span>
              <div className="xl:pt-[0.6rem]">
                <h3 className="font-caslon text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-navy md:text-[1.6rem] xl:whitespace-nowrap xl:text-[2.3rem]">
                  {feature.title}
                </h3>
                <p className="mt-1 font-gsans text-[1rem] leading-[1.5] text-slate md:text-[1.1rem] xl:mt-[0.5rem] xl:text-[1.8rem] xl:leading-[2.6rem]">
                  {feature.text.map((line) => (
                    <span key={line} className="xl:block">
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
