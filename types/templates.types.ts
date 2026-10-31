import type { CSSProperties, ReactNode } from "react";
import type rawData from "@/data/templates.json";

export interface MetadataData {
  title: string;
  description: string;
  icon: string;
  language: string;
}

export interface ThemeData {
  fontStylesheet: string;
  fontPrimary: string;
  fontHeading: string;
  fontNavigation: string;
  fontSecondary: string;
  fontDisplay: string;
  fontEditorial: string;
  fontDecorative: string;
  fontUi: string;
}

export interface ThemeStyle extends CSSProperties {
  "--font-primary": string;
  "--font-heading": string;
  "--font-navigation": string;
  "--font-secondary": string;
  "--font-display": string;
  "--font-editorial": string;
  "--font-decorative": string;
  "--font-ui": string;
}

export interface PageComponentData {
  id: string;
  key: string;
  component: string;
}

export interface PageRegistryData {
  id: string;
  path: string;
  components: PageComponentData[];
}

export type MaisonElvaTemplateData = typeof rawData;
export type MaisonElvaSections = MaisonElvaTemplateData["categories"]["MaisonElva"]["sections"];

// ── Universal SectionProps Interface (ai-builder Standard) ──
export interface SectionProps<T = unknown> {
  data?: T;
  className?: string;
  contentClassName?: string;
  variant?: string;
  isEditable?: boolean;
  onUpdate?: (newData: Partial<T>) => void;
}

// ── Strongly Typed Section Variant Data Models ──
export type MaisonElvaHeaderData = MaisonElvaTemplateData["common"]["Header"]["variants"]["MaisonElvaHeader1"];
export type MaisonElvaFooterData = MaisonElvaTemplateData["common"]["Footer"]["variants"]["MaisonElvaFooter1"];
export type MaisonElvaPageBannerData = MaisonElvaSections["PageBanner"]["variants"]["MaisonElvaPageBanner1"];
export type MaisonElvaHeroData = MaisonElvaSections["Hero"]["variants"]["MaisonElvaHero1"];
export type MaisonElvaAboutStoryData = MaisonElvaSections["AboutStory"]["variants"]["MaisonElvaAboutStory1"];
export type MaisonElvaCollectionsPreviewData =
  MaisonElvaSections["CollectionsPreview"]["variants"]["MaisonElvaCollectionsPreview1"];
export type MaisonElvaExploreBannerData = MaisonElvaSections["ExploreBanner"]["variants"]["MaisonElvaExploreBanner1"];
export type MaisonElvaTestimonialsData = MaisonElvaSections["Testimonials"]["variants"]["MaisonElvaTestimonials1"];
export type MaisonElvaBlogPreviewData = MaisonElvaSections["BlogPreview"]["variants"]["MaisonElvaBlogPreview1"];
export type MaisonElvaMissionVisionData = MaisonElvaSections["MissionVision"]["variants"]["MaisonElvaMissionVision1"];
export type MaisonElvaCollectionListingData =
  MaisonElvaSections["CollectionListing"]["variants"]["MaisonElvaCollectionListing1"];
export type MaisonElvaCollectionDetailData =
  MaisonElvaSections["CollectionDetail"]["variants"]["MaisonElvaCollectionDetail1"];
export type MaisonElvaGalleryData = MaisonElvaSections["Gallery"]["variants"]["MaisonElvaGallery1"];
export type MaisonElvaTestimonialListingData =
  MaisonElvaSections["TestimonialListing"]["variants"]["MaisonElvaTestimonialListing1"];
export type MaisonElvaBlogListingData = MaisonElvaSections["BlogListing"]["variants"]["MaisonElvaBlogListing1"];
export type MaisonElvaBlogDetailData = MaisonElvaSections["BlogDetail"]["variants"]["MaisonElvaBlogDetail1"];
export type MaisonElvaContactData = MaisonElvaSections["ContactDetails"]["variants"]["MaisonElvaContactDetails1"];
export type MaisonElvaContactFormData = MaisonElvaSections["ContactForm"]["variants"]["MaisonElvaContactForm1"];
export type MaisonElvaEnquiryData = MaisonElvaSections["Enquiry"]["variants"]["MaisonElvaEnquiry1"];
export type MaisonElvaEnquiryFormData = MaisonElvaSections["EnquiryForm"]["variants"]["MaisonElvaEnquiryForm1"];

// ── Item-level types inferred from templates.json ──
export type MaisonElvaLink = MaisonElvaHeaderData["cta"];
export type MaisonElvaSocial = MaisonElvaFooterData["socials"][number];
export type MaisonElvaCategory = MaisonElvaCollectionListingData["categories"][number];
export type MaisonElvaProduct = MaisonElvaCollectionListingData["items"][number];
export type MaisonElvaBlogPost = MaisonElvaBlogListingData["items"][number];
export type MaisonElvaTestimonial = MaisonElvaTestimonialListingData["items"][number];
export type MaisonElvaGalleryImage = MaisonElvaGalleryData["images"][number];

export interface RootLayoutProps {
  children: ReactNode;
}
