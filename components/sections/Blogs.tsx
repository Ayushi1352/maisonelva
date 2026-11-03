import type { BlogsData, GlobalUIData } from "@/types/templates.types";
import { BlogHeading } from "@/components/sections/BlogHeading";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const Blogs = ({ data: blog, ui }: { data?: BlogsData; ui?: GlobalUIData }) => {
  if (!blog) return null;
  return (
    <section className="bg-[var(--color-bg-main)] px-5 sm:px-8 md:px-10 lg:px-0">
      <BlogHeading eyebrow={blog.eyebrow} title={blog.title} titleHighlight={blog.titleHighlight} />
      <div className="mt-10 lg:mt-[1.1rem]">
        <BlogGrid posts={blog.posts} buttonText={blog.buttonText} detailPageUrl={blog.detailPageUrl} perPage={blog.perPage} ui={ui} />
      </div>
    </section>
  );
};
