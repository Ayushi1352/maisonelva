import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaProduct as Product } from "@/data";
import { splitAccent } from "@/lib/text";

/** Collection card: product image, short maroon rule, title and "CATEGORY · FINISH" meta */
export default function ProductCard({ product, className = "" }: { product: Product; className?: string }) {
  const category = site.collectionsPage.categories.find((item) => item.id === product.category);
  const title = splitAccent(product.name, product.nameAccent);

  return (
    <Link href={`/collections/${product.slug}`} className={`group block animate-fade-in ${className}`}>
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
      <div className="pl-1 pt-6 xl:pl-[5.5rem] xl:pt-[1.4rem]">
        <span className="block h-[2px] w-10 bg-maroon-light xl:w-[3.4rem]" aria-hidden="true" />
        <h3 className="mt-4 font-cormorant text-[1.45rem] font-medium uppercase leading-[1.17] tracking-[0.01em] text-ink transition-colors group-hover:text-maroon xl:mt-[1.2rem] xl:text-[2.05rem] xl:tracking-[-0.005em] xl:leading-[2.2rem]">
          <span className="block">{`${title.before} ${title.accent}`.trim()}</span>
          <span className="block">{title.after}</span>
        </h3>
        <p className="mt-3 flex items-center gap-3 font-poppins text-[0.72rem] font-medium uppercase tracking-[0.3em] text-muted xl:mt-[1.1rem] xl:gap-[1.55rem] xl:text-[0.9375rem] xl:tracking-[0.28em]">
          <span>{category?.singular}</span>
          <span aria-hidden="true">·</span>
          <span>{product.finish}</span>
        </p>
      </div>
    </Link>
  );
}
