import siteData from "./site.json";

// ── Root Schema Types ──
export type MaisonElvaSchema = typeof siteData.MaisonElva;
export type MaisonElvaSections = MaisonElvaSchema["sections"];

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
export type MaisonElvaHeaderData = MaisonElvaSections["Header"]["variants"]["MaisonElvaHeader1"];
export type MaisonElvaFooterData = MaisonElvaSections["Footer"]["variants"]["MaisonElvaFooter1"];
export type MaisonElvaPageBannerData =
  MaisonElvaSections["PageBanner"]["variants"]["MaisonElvaPageBanner1"];
export type MaisonElvaHeroData = MaisonElvaSections["Hero"]["variants"]["MaisonElvaHero1"];
export type MaisonElvaAboutStoryData =
  MaisonElvaSections["AboutStory"]["variants"]["MaisonElvaAboutStory1"];
export type MaisonElvaCollectionsPreviewData =
  MaisonElvaSections["CollectionsPreview"]["variants"]["MaisonElvaCollectionsPreview1"];
export type MaisonElvaExploreBannerData =
  MaisonElvaSections["ExploreBanner"]["variants"]["MaisonElvaExploreBanner1"];
export type MaisonElvaTestimonialsData =
  MaisonElvaSections["Testimonials"]["variants"]["MaisonElvaTestimonials1"];
export type MaisonElvaBlogPreviewData =
  MaisonElvaSections["BlogPreview"]["variants"]["MaisonElvaBlogPreview1"];
export type MaisonElvaMissionVisionData =
  MaisonElvaSections["MissionVision"]["variants"]["MaisonElvaMissionVision1"];
export type MaisonElvaCollectionListingData =
  MaisonElvaSections["CollectionListing"]["variants"]["MaisonElvaCollectionListing1"];
export type MaisonElvaCollectionDetailData =
  MaisonElvaSections["CollectionDetail"]["variants"]["MaisonElvaCollectionDetail1"];
export type MaisonElvaGalleryData = MaisonElvaSections["Gallery"]["variants"]["MaisonElvaGallery1"];
export type MaisonElvaTestimonialListingData =
  MaisonElvaSections["TestimonialListing"]["variants"]["MaisonElvaTestimonialListing1"];
export type MaisonElvaBlogListingData =
  MaisonElvaSections["BlogListing"]["variants"]["MaisonElvaBlogListing1"];
export type MaisonElvaBlogDetailData =
  MaisonElvaSections["BlogDetail"]["variants"]["MaisonElvaBlogDetail1"];
export type MaisonElvaContactData =
  MaisonElvaSections["ContactDetails"]["variants"]["MaisonElvaContactDetails1"];
export type MaisonElvaContactFormData =
  MaisonElvaSections["ContactForm"]["variants"]["MaisonElvaContactForm1"];
export type MaisonElvaEnquiryData = MaisonElvaSections["Enquiry"]["variants"]["MaisonElvaEnquiry1"];
export type MaisonElvaEnquiryFormData =
  MaisonElvaSections["EnquiryForm"]["variants"]["MaisonElvaEnquiryForm1"];
export type MaisonElvaNotFoundData = MaisonElvaSections["NotFound"]["variants"]["MaisonElvaNotFound1"];

// ── Item-level types inferred from site.json ──
export type MaisonElvaLink = MaisonElvaHeaderData["cta"];
export type MaisonElvaSocial = MaisonElvaFooterData["socials"][number];
export type MaisonElvaCategory = MaisonElvaCollectionListingData["categories"][number];
export type MaisonElvaProduct = MaisonElvaCollectionListingData["items"][number];
export type MaisonElvaBlogPost = MaisonElvaBlogListingData["items"][number];
export type MaisonElvaTestimonial = MaisonElvaTestimonialListingData["items"][number];
export type MaisonElvaGalleryImage = MaisonElvaGalleryData["images"][number];

// ── Legacy Site Map for Standalone Maison Élva Site ──
const sec = siteData.MaisonElva.sections;

const site = {
  theme: siteData.MaisonElva.theme,
  navbar: sec.Header.variants.MaisonElvaHeader1,
  footer: sec.Footer.variants.MaisonElvaFooter1,
  pageBanner: sec.PageBanner.variants.MaisonElvaPageBanner1,
  hero: sec.Hero.variants.MaisonElvaHero1,
  aboutStorySection: sec.AboutStory.variants.MaisonElvaAboutStory1,
  collectionsPreviewSection: sec.CollectionsPreview.variants.MaisonElvaCollectionsPreview1,
  exploreBannerSection: sec.ExploreBanner.variants.MaisonElvaExploreBanner1,
  testimonialsSection: sec.Testimonials.variants.MaisonElvaTestimonials1,
  blogPreviewSection: sec.BlogPreview.variants.MaisonElvaBlogPreview1,
  missionVisionSection: sec.MissionVision.variants.MaisonElvaMissionVision1,
  collectionsPage: sec.CollectionListing.variants.MaisonElvaCollectionListing1,
  collectionDetailPage: sec.CollectionDetail.variants.MaisonElvaCollectionDetail1,
  galleryPage: sec.Gallery.variants.MaisonElvaGallery1,
  testimonialsPage: sec.TestimonialListing.variants.MaisonElvaTestimonialListing1,
  blogPage: sec.BlogListing.variants.MaisonElvaBlogListing1,
  blogDetailPage: sec.BlogDetail.variants.MaisonElvaBlogDetail1,
  contactPage: sec.ContactDetails.variants.MaisonElvaContactDetails1,
  contactFormSection: sec.ContactForm.variants.MaisonElvaContactForm1,
  enquiryPage: sec.Enquiry.variants.MaisonElvaEnquiry1,
  enquiryFormSection: sec.EnquiryForm.variants.MaisonElvaEnquiryForm1,
  notFoundPage: sec.NotFound.variants.MaisonElvaNotFound1,
};

export { site };
export default siteData;
