import type { BlogDetailData, BlogPost } from "@/types/templates.types";
import { ArticleHeader } from "@/components/sections/ArticleHeader";
import { ArticleBody } from "@/components/sections/ArticleBody";

export const BlogDetail = ({ data, post }: { data?: BlogDetailData; post?: BlogPost }) => {
  if (!data || !post) return null;
  return (
    <article className="bg-[linear-gradient(180deg,var(--color-surface-warm-top)_0%,var(--color-surface-warm)_100%)]">
      <ArticleHeader data={data} post={post} />
      <ArticleBody post={post} />
    </article>
  );
};
