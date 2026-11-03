import Image from "next/image";
import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { splitAccent } from "@/components/ui/text";
import { Icon } from "@/components/ui/Icon";

export const ArticleHeader = ({ data, post }: { data: BlogDetailData; post: BlogPost }) => {
  const { detail } = post;
  const title = splitAccent(post.title, post.titleHighlight);

  return (
    <header>
      <div className="px-5 text-center sm:px-8 md:px-10">
        <h1 className="mx-auto max-w-[80rem] font-secondary text-[2.3rem] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-heading)] md:text-[3.4rem] lg:text-[5.1rem] lg:leading-[5.95rem]">
          <span className="block">{title.before}</span>
          <span className="block">
            <span className="text-[var(--color-secondary)]">{title.accent}</span> {title.after}
          </span>
        </h1>
        <p className="mt-4 flex items-center justify-center gap-2.5 font-ui text-[1rem] text-[var(--color-text-alt)] lg:mt-[0.8rem] lg:gap-[0.9rem] lg:text-[2rem]">
          <Icon name="FaRegCalendarAlt" className="size-5 text-[var(--color-accent-alt)] lg:size-[1.9rem]" />
          <span className="sr-only">{data.dateLabel}</span>
          <time>{post.date}</time>
        </p>
        <p className="mx-auto mt-5 max-w-[94rem] font-ui text-[1rem] leading-[1.7] text-[var(--color-text-alt)] md:text-[1.1rem] lg:mt-[1.85rem] lg:max-w-[97rem] lg:text-[1.97rem] lg:leading-[2.95rem] lg:tracking-[0.025em]">
          {detail.intro}
        </p>
      </div>
      <div className="relative mx-4 mt-8 aspect-[16/10] sm:aspect-[2/1] sm:mx-6 md:mx-10 lg:mx-[4.8rem] lg:mt-[2.6rem] lg:aspect-[1766/602]">
        <Image src={detail.image} alt={detail.imageAlt} fill preload quality={90} sizes="(min-width: 1280px) 92vw, 96vw" className="object-cover" />
      </div>
    </header>
  );
};
