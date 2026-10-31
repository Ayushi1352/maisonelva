import templateData from "./templates.json";

// Types live in types/templates.types.ts; re-exported here so components keep importing from "@/data".
export * from "@/types/templates.types";

// ── Site map: short names for the section variants in templates.json ──
const common = templateData.common;
const sec = templateData.categories.MaisonElva.sections;

const site = {
  navbar: common.Header.variants.MaisonElvaHeader1,
  footer: common.Footer.variants.MaisonElvaFooter1,
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
};

export { site };
export default templateData;
