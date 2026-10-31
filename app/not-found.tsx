import type { Metadata } from "next";
import { site } from "@/data";
import NotFoundSection from "@/components/NotFoundSection";

export const metadata: Metadata = site.notFoundPage.seo;

export default function NotFoundPage() {
  return <NotFoundSection data={site.notFoundPage} />;
}
