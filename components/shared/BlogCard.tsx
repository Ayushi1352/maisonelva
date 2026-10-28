import Image from "next/image";
import Link from "next/link";
import type { MaisonElvaBlogPost as BlogPost } from "@/data";
import { ArrowRight } from "@/components/shared/Icons";

export default function BlogCard({ post, readMore }: { post: BlogPost; readMore: string }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className="group">
      <Link href={href} className="relative block aspect-[642/383] overflow-hidden" aria-label={post.title}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          quality={90}
          sizes="(min-width: 1280px) 34vw, (min-width: 768px) 46vw, 92vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute right-3 top-3 flex h-[4.2rem] w-[3.9rem] flex-col items-center justify-center bg-[#f8f1ec] xl:right-[1.25rem] xl:top-[1.125rem] xl:h-[5rem] xl:w-[4.7rem]">
          <span className="font-playfair text-[1.6rem] leading-none text-ink xl:text-[2rem]">{post.day}</span>
          <span className="mt-1 font-poppins text-[0.7rem] leading-none text-ink-soft xl:mt-[0.45rem] xl:text-[0.8rem]">{post.month}</span>
        </span>
      </Link>
      <p className="mt-6 flex items-center font-poppins text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-maroon xl:mt-[2.05rem] xl:text-[0.875rem]">
        {post.category}
        <span className="ml-4 h-[2px] w-14 bg-gold-light xl:ml-[1.35rem] xl:w-[4.9rem]" aria-hidden="true" />
      </p>
      <h3 className="mt-3 max-w-[34rem] text-balance font-playfair text-[1.6rem] leading-[1.2] tracking-[-0.015em] text-ink md:text-[1.8rem] xl:mt-[0.55rem] xl:pl-[0.2rem] xl:text-[2.47rem] xl:leading-[2.94rem]">
        <Link href={href} className="transition-colors hover:text-maroon">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-[33rem] font-poppins text-[0.95rem] leading-[1.65] text-muted xl:mt-[0.6rem] xl:pl-[0.25rem] xl:text-[1.205rem] xl:leading-[1.94rem]">
        {post.excerpt}
      </p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-5 border-b-2 border-gold-light pb-2.5 font-poppins text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:text-maroon xl:ml-[0.25rem] xl:mt-[1.75rem] xl:gap-[1.2rem] xl:pb-[0.95rem] xl:text-[0.94rem]"
      >
        {readMore}
        <ArrowRight className="w-7 xl:w-[1.6rem]" />
      </Link>
    </article>
  );
}
