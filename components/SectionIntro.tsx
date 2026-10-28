import StarDivider from "@/components/StarDivider";

type SectionIntroProps = {
  label: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  /** label colour, size and letter spacing differ between pages (gold on testimonials, dark on gallery) */
  labelClassName?: string;
  titleClassName?: string;
  /** desktop spacing, width and size of the description */
  descriptionClassName?: string;
  /** gallery page shows a second short rule under the description */
  closingRule?: boolean;
  /** desktop space above the gold rule */
  ruleClassName?: string;
};

/** Centered star divider + spaced label + two-tone heading + gold rule + description */
export default function SectionIntro({
  label,
  titleTop,
  titleAccent,
  description,
  labelClassName = "text-gold-deep text-[1.15rem] tracking-[0.14em] md:text-[1.5rem] xl:text-[2.1rem] xl:tracking-[0.245em]",
  titleClassName = "xl:text-[6.1rem]",
  descriptionClassName = "xl:mt-[1.54rem] xl:max-w-[68rem] xl:text-[2.6rem] xl:leading-[3.375rem]",
  closingRule = false,
  ruleClassName = "xl:mt-[0.9rem]",
}: SectionIntroProps) {
  return (
    <div className="text-center">
      <StarDivider />
      <p className={`mt-5 font-caslon uppercase leading-none xl:mt-[2.35rem] ${labelClassName}`}>{label}</p>
      <h2
        className={`mt-4 font-caslon text-[2.4rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[3.6rem] xl:mt-[2.2rem] xl:leading-[1.08] ${titleClassName}`}
      >
        <span className="text-navy">{titleTop}</span> <span className="text-ruby">{titleAccent}</span>
      </h2>
      <span className={`mx-auto mt-4 block h-[3px] w-16 bg-gold xl:w-[5.75rem] ${ruleClassName}`} aria-hidden="true" />
      <p
        className={`mx-auto mt-5 max-w-[42rem] font-newsreader text-[1.2rem] font-[350] leading-[1.5] text-ink-soft md:text-[1.45rem] ${descriptionClassName}`}
      >
        {description}
      </p>
      {closingRule && (
        <span className="mx-auto mt-5 block h-[3px] w-16 bg-gold xl:mt-[1.6rem] xl:w-[5.75rem]" aria-hidden="true" />
      )}
    </div>
  );
}
