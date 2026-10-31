/** "— OUR BLOG — / Latest Stories" heading shared by the home page and the blog page */
export default function BlogHeading({ label, titleTop, titleAccent }: { label: string; titleTop: string; titleAccent: string }) {
  return (
    <div className="text-center">
      <p className="flex items-center justify-center gap-4 font-sans text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--color-primary)] lg:gap-[1.6rem] lg:text-[1.0625rem]">
        <span className="h-[2px] w-10 bg-[var(--color-accent-light)] lg:w-[3.25rem]" aria-hidden="true" />
        {label}
        <span className="h-[2px] w-10 bg-[var(--color-accent-light)] lg:w-[3.25rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-3 font-heading text-[2.9rem] font-medium leading-[1.1] tracking-[-0.02em] md:text-[3.6rem] lg:mt-[0.5rem] lg:text-[5.48rem] lg:leading-[6rem]">
        <span className="text-[var(--color-text)]">{titleTop}</span> <span className="text-[var(--color-primary)]">{titleAccent}</span>
      </h2>
    </div>
  );
}
