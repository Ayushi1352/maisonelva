import { site, type MaisonElvaBlogDetailData, type MaisonElvaBlogPost as BlogPost, type SectionProps } from "@/data";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleBody from "@/components/ArticleBody";

type BlogDetailProps = SectionProps<MaisonElvaBlogDetailData> & { post: BlogPost };

export default function BlogDetail({ data = site.blogDetailPage, post }: BlogDetailProps) {
  return (
    <article className="bg-[linear-gradient(180deg,#fdfcfa_0%,#fcfaf7_100%)]">
      <ArticleHeader data={data} post={post} />
      <ArticleBody post={post} />
    </article>
  );
}
