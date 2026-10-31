import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaProduct as Product } from "@/data";
import { splitAccent } from "@/components/text";
import { fadeIn } from "@/components/styles";

/** Collection card: product image, short maroon rule, title and "CATEGORY · FINISH" meta */
export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  const category = site.collectionsPage.categories.find((item) => item.id === product.category);
  const title = splitAccent(product.name, product.nameAccent);

  return (
    <Link href={site.collectionsPage.productHref} className={`group block ${fadeIn} ${className}`}>
      <div className="relative mx-auto aspect-[380/270] w-full max-w-[23.75rem] overflow-hidden">
        <Image
          src={product.cardImage}
          alt={product.name}
          fill
          quality={90}
          sizes="(min-width: 1280px) 20vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pl-1 pt-6 lg:pl-[5.5rem] lg:pt-[1.4rem]">
        <span className="block h-[2px] w-10 bg-[var(--color-primary-light)] lg:w-[3.4rem]" aria-hidden="true" />
        <h3 className="mt-4 font-display text-[1.45rem] font-medium uppercase leading-[1.17] tracking-[0.01em] text-[var(--color-text)] transition-colors group-hover:text-[var(--color-secondary)] lg:mt-[1.2rem] lg:text-[2.05rem] lg:tracking-[-0.005em] lg:leading-[2.2rem]">
          <span className="block">{`${title.before} ${title.accent}`.trim()}</span>
          <span className="block">{title.after}</span>
        </h3>
        <p className="mt-3 flex items-center gap-3 font-sans text-[0.72rem] font-medium uppercase tracking-[0.3em] text-[var(--color-text-muted)] lg:mt-[1.1rem] lg:gap-[1.55rem] lg:text-[0.9375rem] lg:tracking-[0.28em]">
          <span>{category?.singular}</span>
          <span aria-hidden="true">·</span>
          <span>{product.finish}</span>
        </p>
      </div>
    </Link>
  );
}
