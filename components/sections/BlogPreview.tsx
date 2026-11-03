import type { BlogPreviewData, BlogsData, GlobalUIData } from "@/types/templates.types";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { BlogHeading } from "@/components/sections/BlogHeading";

export const BlogPreview = ({ data, blogs, ui }: { data?: BlogPreviewData; blogs?: BlogsData; ui?: GlobalUIData }) => {
  if (!data || !blogs) return null;
  const posts = blogs.posts.slice(0, data.count);

  return (
    <section className="bg-[var(--color-bg-main)] px-5 sm:px-8 md:px-10 lg:px-0">
      <BlogHeading eyebrow={data.eyebrow} title={data.title} titleHighlight={data.titleHighlight} />
      <div className="mt-10 lg:mt-[1.85rem]">
        <BlogGrid posts={posts} buttonText={blogs.buttonText} detailPageUrl={blogs.detailPageUrl} ui={ui} />
      </div>
    </section>
  );
};
