import { Sparkle } from "@/components/Icons";

/** Centered gold rule with a four-point star, used above section headings */
export default function StarDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 xl:gap-[1.4rem] ${className}`} aria-hidden="true">
      <span className="h-[2px] w-20 bg-gradient-to-r from-transparent via-gold-light to-gold md:w-28 xl:w-[10.8rem]" />
      <Sparkle className="size-6 text-gold-deep xl:size-[2.6rem]" />
      <span className="h-[2px] w-20 bg-gradient-to-l from-transparent via-gold-light to-gold md:w-28 xl:w-[10.8rem]" />
    </div>
  );
}
