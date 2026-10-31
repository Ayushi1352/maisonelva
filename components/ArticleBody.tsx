import type { MaisonElvaBlogPost as BlogPost } from "@/data";

export default function ArticleBody({ post }: { post: BlogPost }) {
  const { detail } = post;

  return (
    <div className="px-5 sm:px-8 md:px-10 lg:px-[9rem]">
      <blockquote className="mt-10 flex items-center border-l-4 border-[var(--color-accent-alt)] py-2 pl-5 lg:mt-[3.4rem] lg:min-h-[8.75rem] lg:py-0 lg:pl-[5rem]">
        <p className="font-secondary text-[1.1rem] leading-[1.7] text-[var(--color-text-light)] md:text-[1.25rem] lg:text-[2.05rem] lg:leading-[3.3rem]">
          {detail.quote}
        </p>
      </blockquote>

      <div className="mt-12 space-y-12 lg:mt-[5.4rem] lg:space-y-[5.3rem]">
        {detail.sections.map((section) => (
          <section key={section.title + section.titleAccent}>
            <span className="block h-[3px] w-16 bg-[var(--color-accent-alt)] lg:w-[6rem]" aria-hidden="true" />
            <h2 className="mt-5 font-secondary text-[1.8rem] font-bold leading-tight tracking-[-0.02em] text-[var(--color-heading)] md:text-[2.3rem] lg:mt-[2.3rem] lg:text-[3.85rem]">
              {section.title} <span className="text-[var(--color-secondary)]">{section.titleAccent}</span>
            </h2>
            <p className="mt-3 font-ui text-[1rem] leading-[1.7] text-[var(--color-text-alt)] md:text-[1.1rem] lg:mt-[0.9rem] lg:text-[1.95rem] lg:leading-[2.94rem]">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
