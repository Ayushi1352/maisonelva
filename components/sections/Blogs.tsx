import type { BlogsProps, PaginationData } from "@/types/templates.types";
import { BlogHeading } from "@/components/sections/BlogHeading";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const Blogs = ({ data: blog, showAll = false }: BlogsProps) => {
  if (!blog) return null;
  const heading = showAll ? blog.intro : blog.home;
  const ids = showAll ? blog.listingPostIds : blog.homePostIds;
  const posts = ids.map((id) => blog.posts.find((post) => post.id === id)).filter((post) => post !== undefined);
  const pagination: PaginationData = blog.pagination;

  return (
    <section className="bg-[var(--color-bg-main)] px-5 sm:px-8 md:px-10 lg:px-0">
      <BlogHeading eyebrow={heading.eyebrow} title={heading.title} titleHighlight={heading.titleHighlight} />
      <div className={`mt-10 ${showAll ? "lg:mt-[1.1rem]" : "lg:mt-[1.85rem]"}`}>
        <BlogGrid
          posts={posts}
          buttonText={blog.buttonText}
          buttonIcon={blog.buttonIcon}
          detailPageUrl={blog.detailPageUrl}
          perPage={showAll ? blog.perPage : posts.length}
          pagination={pagination}
        />
      </div>
    </section>
  );
};
