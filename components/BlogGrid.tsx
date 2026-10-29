"use client";

import type { MaisonElvaBlogPost as BlogPost } from "@/data";
import BlogCard from "@/components/BlogCard";
import Pagination, { usePagination } from "@/components/Pagination";

/** Two-column blog layout with the thin centre divider between each pair; paginated when `perPage` is set */
export default function BlogGrid({ posts, readMore, perPage = posts.length }: { posts: BlogPost[]; readMore: string; perPage?: number }) {
  const { page, setPage, totalPages, pageItems } = usePagination(posts, perPage);
  const rows: BlogPost[][] = [];
  for (let i = 0; i < pageItems.length; i += 2) rows.push(pageItems.slice(i, i + 2));

  return (
    <div id="blog-grid" className="mx-auto max-w-[87.3rem] scroll-mt-28 xl:scroll-mt-[11rem]">
      <div className="space-y-16 md:space-y-20 xl:space-y-[6.5rem]">
        {rows.map((row) => (
          <div key={row.map((post) => post.title).join("|")} className="relative grid gap-14 md:grid-cols-2 md:gap-x-10 md:gap-y-0 xl:gap-x-[7.06rem]">
            {row.length === 2 && (
              <span
                className="absolute bottom-12 left-1/2 top-12 hidden w-px -translate-x-1/2 bg-[#d9d4d0] md:block xl:bottom-auto xl:top-[6.25rem] xl:h-[33.56rem]"
                aria-hidden="true"
              />
            )}
            {row.map((post) => (
              <BlogCard key={post.title} post={post} readMore={readMore} />
            ))}
          </div>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="blog-grid" />
    </div>
  );
}
