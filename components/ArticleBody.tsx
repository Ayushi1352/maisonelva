import type { MaisonElvaBlogPost as BlogPost } from "@/data";

export default function ArticleBody({ post }: { post: BlogPost }) {
  const { detail } = post;

  return (
    <div className="px-5 sm:px-8 md:px-10 xl:px-[9rem]">
      <blockquote className="mt-10 flex items-center border-l-4 border-amber py-2 pl-5 xl:mt-[3.4rem] xl:min-h-[8.75rem] xl:py-0 xl:pl-[5rem]">
        <p className="font-caslon text-[1.1rem] leading-[1.7] text-body md:text-[1.25rem] xl:text-[2.05rem] xl:leading-[3.3rem]">
          {detail.quote}
        </p>
      </blockquote>

      <div className="mt-12 space-y-12 xl:mt-[5.4rem] xl:space-y-[5.3rem]">
        {detail.sections.map((section) => (
          <section key={section.title + section.titleAccent}>
            <span className="block h-[3px] w-16 bg-amber xl:w-[6rem]" aria-hidden="true" />
            <h2 className="mt-5 font-caslon text-[1.8rem] font-bold leading-tight tracking-[-0.02em] text-navy md:text-[2.3rem] xl:mt-[2.3rem] xl:text-[3.85rem]">
              {section.title} <span className="text-ruby">{section.titleAccent}</span>
            </h2>
            <p className="mt-3 font-gsans text-[1rem] leading-[1.7] text-slate md:text-[1.1rem] xl:mt-[0.9rem] xl:text-[1.95rem] xl:leading-[2.94rem]">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
