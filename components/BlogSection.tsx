import { site, type MaisonElvaBlogPreviewData, type SectionProps } from "@/data";
import BlogGrid from "@/components/BlogGrid";
import BlogHeading from "@/components/BlogHeading";

export default function BlogSection({ data = site.blogPreviewSection }: SectionProps<MaisonElvaBlogPreviewData>) {
  const posts = site.blogPage.items.slice(0, data.count);

  return (
    <section className="bg-[var(--color-bg-main)] px-5 sm:px-8 md:px-10 lg:px-0">
      <BlogHeading label={data.label} titleTop={data.titleTop} titleAccent={data.titleAccent} />
      <div className="mt-10 lg:mt-[1.85rem]">
        <BlogGrid posts={posts} readMore={site.blogPage.readMore} />
      </div>
    </section>
  );
}
