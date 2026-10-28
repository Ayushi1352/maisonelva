import { site, type MaisonElvaBlogListingData, type SectionProps } from "@/data";
import BlogHeading from "@/components/BlogHeading";
import BlogGrid from "@/components/BlogGrid";

export default function BlogListing({ data: blog = site.blogPage }: SectionProps<MaisonElvaBlogListingData>) {
  return (
    <section className="bg-page px-5 sm:px-8 md:px-10 xl:px-0">
      <BlogHeading label={blog.label} titleTop={blog.titleTop} titleAccent={blog.titleAccent} />
      <div className="mt-10 xl:mt-[1.1rem]">
        <BlogGrid posts={blog.items} readMore={blog.readMore} perPage={blog.perPage} />
      </div>
    </section>
  );
}
