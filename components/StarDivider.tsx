import { Sparkle } from "@/components/Icons";

/** Centered gold rule with a four-point star, used above section headings */
type StarDividerProps = {
  className?: string;
  /** star colour and size */
  starClassName?: string;
  /** colour stops and width of both side rules (left fades in from its start, right mirrors it) */
  lineClassName?: string;
};

export default function StarDivider({
  className = "",
  starClassName = "text-[var(--color-accent-dark)]",
  lineClassName = "via-[var(--color-accent-light)] to-[var(--color-accent)] lg:w-[10.8rem]",
}: StarDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 lg:gap-[1.4rem] ${className}`} aria-hidden="true">
      <span className={`h-[2px] w-20 bg-gradient-to-r from-transparent md:w-28 ${lineClassName}`} />
      <Sparkle className={`size-6 lg:size-[2.6rem] ${starClassName}`} />
      <span className={`h-[2px] w-20 bg-gradient-to-l from-transparent md:w-28 ${lineClassName}`} />
    </div>
  );
}
