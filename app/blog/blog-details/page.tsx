import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import BlogDetail from "@/components/BlogDetail";

// One common detail page for every blog post: all blog links point here and it shows the first post.
const post = site.blogPage.items[0];

export const metadata: Metadata = { title: post.title, description: post.excerpt };

export default function BlogDetailsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <BlogDetail data={site.blogDetailPage} post={post} />
    </>
  );
}
