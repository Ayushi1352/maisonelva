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
  starClassName = "text-gold-deep",
  lineClassName = "via-gold-light to-gold xl:w-[10.8rem]",
}: StarDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-3 xl:gap-[1.4rem] ${className}`} aria-hidden="true">
      <span className={`h-[2px] w-20 bg-gradient-to-r from-transparent md:w-28 ${lineClassName}`} />
      <Sparkle className={`size-6 xl:size-[2.6rem] ${starClassName}`} />
      <span className={`h-[2px] w-20 bg-gradient-to-l from-transparent md:w-28 ${lineClassName}`} />
    </div>
  );
}
