import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { NotFoundSection } from "@/components/sections/NotFoundSection";

const templateData: JewelleryTemplateData = rawData;
const commonData = templateData.common;

export const metadata: Metadata = { ...commonData.notFound?.seo };

export default function NotFoundPage() {
  return (
    <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
      <NotFoundSection data={commonData.notFound} />
    </main>
  );
}
