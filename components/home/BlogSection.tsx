import { site, type MaisonElvaBlogPreviewData, type SectionProps } from "@/data";
import BlogGrid from "@/components/shared/BlogGrid";
import BlogHeading from "@/components/shared/BlogHeading";

export default function BlogSection({ data = site.blogPreviewSection }: SectionProps<MaisonElvaBlogPreviewData>) {
  const posts = site.blogPage.items.slice(0, data.count);

  return (
    <section className="bg-page px-5 sm:px-8 md:px-10 xl:px-0">
      <BlogHeading label={data.label} titleTop={data.titleTop} titleAccent={data.titleAccent} />
      <div className="mt-10 xl:mt-[1.85rem]">
        <BlogGrid posts={posts} readMore={site.blogPage.readMore} />
      </div>
    </section>
  );
}
