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
  /** colours of the two heading parts, the rules and the star divider */
  titleTopClassName?: string;
  accentClassName?: string;
  ruleColorClassName?: string;
  dividerStarClassName?: string;
  dividerLineClassName?: string;
};

/** Centered star divider + spaced label + two-tone heading + gold rule + description */
export default function SectionIntro({
  label,
  titleTop,
  titleAccent,
  description,
  labelClassName = "text-[var(--color-accent-dark)] text-[1.15rem] tracking-[0.14em] md:text-[1.5rem] lg:text-[2.1rem] lg:tracking-[0.245em]",
  titleClassName = "lg:text-[6.1rem]",
  descriptionClassName = "text-[var(--color-text-soft)] lg:mt-[1.54rem] lg:max-w-[68rem] lg:text-[2.6rem] lg:leading-[3.375rem]",
  closingRule = false,
  ruleClassName = "lg:mt-[0.9rem]",
  titleTopClassName = "text-[var(--color-heading)]",
  accentClassName = "text-[var(--color-secondary)]",
  ruleColorClassName = "bg-[var(--color-accent)]",
  dividerStarClassName,
  dividerLineClassName,
}: SectionIntroProps) {
  return (
    <div className="text-center">
      <StarDivider starClassName={dividerStarClassName} lineClassName={dividerLineClassName} />
      <p className={`mt-5 font-secondary uppercase leading-none lg:mt-[2.35rem] ${labelClassName}`}>{label}</p>
      <h2
        className={`mt-4 font-secondary text-[2.4rem] font-bold leading-[1.12] tracking-[-0.015em] md:text-[3.6rem] lg:mt-[2.2rem] lg:leading-[1.08] ${titleClassName}`}
      >
        <span className={titleTopClassName}>{titleTop}</span> <span className={accentClassName}>{titleAccent}</span>
      </h2>
      <span className={`mx-auto mt-4 block h-[3px] w-16 lg:w-[5.75rem] ${ruleColorClassName} ${ruleClassName}`} aria-hidden="true" />
      <p
        className={`mx-auto mt-5 max-w-[42rem] font-editorial text-[1.2rem] font-[350] leading-[1.5] md:text-[1.45rem] ${descriptionClassName}`}
      >
        {description}
      </p>
      {closingRule && (
        <span className={`mx-auto mt-5 block h-[3px] w-16 lg:mt-[1.6rem] lg:w-[5.75rem] ${ruleColorClassName}`} aria-hidden="true" />
      )}
    </div>
  );
}
