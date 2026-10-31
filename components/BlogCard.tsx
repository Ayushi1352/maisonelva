import Image from "next/image";
import Link from "next/link";
import type { MaisonElvaBlogPost as BlogPost } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function BlogCard({ post, readMore }: { post: BlogPost; readMore: string }) {
  // Every post opens the one common blog detail page.
  const href = "/blog/blog-details";

  return (
    // From tablet up the card's 5 parts sit on the row grid's shared tracks, so category, title, excerpt and
    // Read More line up across the two cards even when one title wraps to more lines.
    <article className="group md:row-span-5 md:grid md:grid-rows-subgrid md:gap-y-0">
      <Link href={href} className="relative block aspect-[642/383] overflow-hidden" aria-label={post.title}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          quality={90}
          sizes="(min-width: 1280px) 34vw, (min-width: 768px) 46vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 flex h-[4.2rem] w-[3.9rem] flex-col items-center justify-center bg-[var(--color-blog-date-bg)] lg:right-[1.25rem] lg:top-[1.125rem] lg:h-[5rem] lg:w-[4.7rem]">
          <span className="font-heading text-[1.6rem] leading-none text-[var(--color-text)] lg:text-[2rem]">{post.day}</span>
          <span className="mt-1 font-sans text-[0.7rem] leading-none text-[var(--color-text-soft)] lg:mt-[0.45rem] lg:text-[0.8rem]">{post.month}</span>
        </span>
      </Link>
      <p className="mt-6 flex items-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)] lg:mt-[2.05rem] lg:text-[0.875rem]">
        {post.category}
        <span className="ml-4 h-[2px] w-14 bg-[var(--color-accent-light)] lg:ml-[1.35rem] lg:w-[4.9rem]" aria-hidden="true" />
      </p>
      <h3 className="mt-3 max-w-[34rem] text-balance font-heading text-[1.6rem] leading-[1.2] tracking-[-0.015em] text-[var(--color-text)] md:text-[1.8rem] lg:mt-[0.55rem] lg:pl-[0.2rem] lg:text-[2.47rem] lg:leading-[2.94rem]">
        <Link href={href} className="transition-colors group-hover:text-[var(--color-secondary)]">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-[33rem] font-sans text-[0.95rem] leading-[1.65] text-[var(--color-text-muted)] lg:mt-[0.6rem] lg:pl-[0.25rem] lg:text-[1.205rem] lg:leading-[1.94rem]">
        {post.excerpt}
      </p>
      <Link
        href={href}
        className="group/more mt-6 inline-flex md:self-start md:justify-self-start items-center gap-5 border-b-2 border-[var(--color-accent-light)] pb-2.5 font-sans text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-text)] transition-colors hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] lg:ml-[0.25rem] lg:mt-[1.75rem] lg:gap-[1.2rem] lg:pb-[0.95rem] lg:text-[0.94rem]"
      >
        {readMore}
        <ArrowRight className="w-7 transition-transform group-hover/more:translate-x-1 lg:w-[1.6rem]" />
      </Link>
    </article>
  );
}
