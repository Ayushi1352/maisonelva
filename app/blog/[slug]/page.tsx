import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import ArticleHeader from "../components/ArticleHeader";
import ArticleBody from "../components/ArticleBody";

function getPost(slug: string) {
  return site.blogPage.items.find((post) => post.slug === slug);
}

export function generateStaticParams() {
  return site.blogPage.items.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogDetailsPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner data={site.pageBanner} title={post.title} />
      <article className="bg-[linear-gradient(180deg,#fdfcfa_0%,#fcfaf7_100%)]">
        <ArticleHeader data={site.blogDetailPage} post={post} />
        <ArticleBody post={post} />
      </article>
    </>
  );
}
