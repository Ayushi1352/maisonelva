import Image from "next/image";
import { site, type MaisonElvaBlogDetailData, type MaisonElvaBlogPost as BlogPost, type SectionProps } from "@/data";
import { splitAccent } from "@/lib/text";
import { Calendar } from "@/components/shared/Icons";

type ArticleHeaderProps = SectionProps<MaisonElvaBlogDetailData> & { post: BlogPost };

export default function ArticleHeader({ data = site.blogDetailPage, post }: ArticleHeaderProps) {
  const { detail } = post;
  const title = splitAccent(post.title, post.titleAccent);

  return (
    <header>
      <div className="px-5 text-center sm:px-8 md:px-10">
        <h1 className="mx-auto max-w-[80rem] font-caslon text-[2.3rem] font-bold leading-[1.15] tracking-[-0.02em] text-ink md:text-[3.4rem] xl:text-[5.1rem] xl:leading-[5.95rem]">
          <span className="block">{title.before}</span>
          <span className="block">
            <span className="text-ruby">{title.accent}</span> {title.after}
          </span>
        </h1>
        <p className="mt-4 flex items-center justify-center gap-2.5 font-gsans text-[1rem] text-muted xl:mt-[1.35rem] xl:gap-[0.9rem] xl:text-[1.75rem]">
          <Calendar className="size-5 text-gold-deep xl:size-[1.75rem]" />
          <span className="sr-only">{data.dateLabel}</span>
          <time>{post.date}</time>
        </p>
        <p className="mx-auto mt-5 max-w-[94rem] font-gsans text-[1rem] leading-[1.7] text-muted md:text-[1.1rem] xl:mt-[1.6rem] xl:text-[1.9rem] xl:leading-[2.875rem]">
          {detail.intro}
        </p>
      </div>
      <div className="relative mx-4 mt-8 aspect-[1766/602] min-h-56 sm:mx-6 md:mx-10 xl:mx-[4.8rem] xl:mt-[2.6rem]">
        <Image src={detail.image} alt={detail.imageAlt} fill preload quality={90} sizes="(min-width: 1280px) 92vw, 96vw" className="object-cover" />
      </div>
    </header>
  );
}
