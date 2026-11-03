export interface ThemeFonts {
  primary: string;
  heading: string;
  navigation: string;
  secondary: string;
  display: string;
  editorial: string;
  decorative: string;
  ui: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

export interface SeoData {
  title: string;
  description: string;
}

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbSeparator: string;
  paginationLabel: string;
  previousPageLabel: string;
  nextPageLabel: string;
  pageLabel: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface BreadcrumbData {
  title: string;
  seo?: SeoData;
  paths: LinkItem[];
}

export interface NotFoundData {
  seo: SeoData;
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface LogoData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoLabel: string;
  logoWidth: number;
  logoHeight: number;
}

export interface SocialLink extends LinkItem {
  icon: string;
}

export interface FooterData extends LogoData {
  tagline: string[];
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  followTitle: string;
  socialLinks: SocialLink[];
  contactTitle: string;
  contactDetails: SocialLink[];
  copyrightText: string;
  motto: string[];
}

export interface HeaderData extends LogoData {
  navLinks: LinkItem[];
  buttonText: string;
  buttonUrl: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface TitleLine {
  id: string;
  text: string;
  accent: boolean;
}

export interface HeroData {
  eyebrow: string;
  titleLines: TitleLine[];
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface AboutUsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  paragraphs: string[];
  buttonText: string;
  buttonUrl: string;
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
}

export interface CollectionsPreviewData {
  eyebrow: string;
  title: string;
  defaultCategory: string;
  itemsPerCategory: number;
  categoriesLabel: string;
}

export interface ExploreBannerData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialSlide {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface TestimonialsData {
  eyebrow: string;
  titleLines: TitleLine[];
  description: string;
  image: string;
  imageAlt: string;
  items: TestimonialSlide[];
  previousLabel: string;
  nextLabel: string;
  autoplayMs: number;
}

export interface BlogPreviewData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  count: number;
}

export interface StatementData {
  eyebrow: string;
  title: string;
  description: string;
}

export interface MissionVisionData {
  mission: StatementData;
  vision: StatementData;
  image: string;
  imageAlt: string;
}

export interface CollectionCategory {
  id: string;
  label: string;
  singular: string;
}

export interface CollectionCard {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
}

export interface ProductSpec {
  id: string;
  label: string;
  value: string;
}

export interface ProductFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  nameHighlight: string;
  category: string;
  finish: string;
  summary: string;
  cardImage: string;
  imageAlt: string;
  images: string[];
  thumbnails: string[];
  quickSpecs: ProductSpec[];
  descriptionTitleHighlight: string;
  descriptionTitle: string;
  description: string[];
  modelImage: string;
  modelImageAlt: string;
  features: ProductFeature[];
  specifications: ProductSpec[];
}

export interface CollectionsData {
  eyebrow: string;
  title: string;
  description: string;
  categories: CollectionCategory[];
  cards: CollectionCard[];
  cardUrl: string;
  detailPageUrl: string;
  perPage: number;
  products: Product[];
}

export interface CollectionDetailData {
  descriptionLabel: string;
  featuresLabel: string;
  specificationsLabel: string;
  thumbnailLabel: string;
  zoomLabel: string;
  closeLabel: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  imageAlt: string;
  ratio: string;
}

export interface GalleryData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  perPage: number;
  images: GalleryImage[];
  viewLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  city: string;
  rating: number;
}

export interface TestimonialListingData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  perPage: number;
  items: TestimonialItem[];
  ratingLabel: string;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface BlogPostDetail {
  intro: string;
  image: string;
  imageAlt: string;
  quote: string;
  sections: BlogDetailSection[];
}

export interface BlogPost {
  id: string;
  title: string;
  titleHighlight: string;
  category: string;
  description: string;
  day: string;
  month: string;
  date: string;
  image: string;
  imageAlt: string;
  detail: BlogPostDetail;
}

export interface BlogsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  buttonText: string;
  detailPageUrl: string;
  perPage: number;
  posts: BlogPost[];
}

export interface BlogDetailData {
  dateLabel: string;
}

export interface ContactImage {
  id: string;
  image: string;
  imageAlt: string;
}

export interface ContactTouchData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  urls?: string[];
}

export interface ContactMapData {
  title: string;
  openLabel: string;
  embedUrl: string;
  openUrl: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  hoursTitle: string;
  hours: string[];
  images: ContactImage[];
  touch: ContactTouchData;
  info: ContactInfoItem[];
  map: ContactMapData;
}

export interface ContactFormFields {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormMessages {
  buttonText: string;
  sendingText: string;
  successTitle: string;
  successMessage: string;
  closeLabel: string;
}

export interface ContactFormData extends FormMessages {
  title: string;
  fields: ContactFormFields;
}

export interface EnquiryFeature {
  id: string;
  icon: string;
  title: string;
  description: string[];
}

export interface EnquiryData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: EnquiryFeature[];
}

export interface EnquiryFormFields {
  name: string;
  phone: string;
  email: string;
  enquiryFor: string;
  budget: string;
  message: string;
}

export interface EnquiryFormData extends FormMessages {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  fields: EnquiryFormFields;
  enquiryOptions: string[];
  budgetOptions: string[];
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb?: BreadcrumbData;
  collectionsBreadcrumb?: BreadcrumbData;
  collectionDetailBreadcrumb?: BreadcrumbData;
  galleryBreadcrumb?: BreadcrumbData;
  testimonialsBreadcrumb?: BreadcrumbData;
  blogsBreadcrumb?: BreadcrumbData;
  blogDetailBreadcrumb?: BreadcrumbData;
  contactBreadcrumb?: BreadcrumbData;
  enquiryBreadcrumb?: BreadcrumbData;
  notFound?: NotFoundData;
  Footer?: FooterData;
}

type Section<Variant extends string, Data> = {
  variants?: { [Key in Variant]?: Data };
};

export interface JewellerySections {
  Header?: Section<"JewelleryHeader1", HeaderData>;
  Hero?: Section<"JewelleryHero1", HeroData>;
  AboutUs?: Section<"JewelleryAboutUs1", AboutUsData>;
  CollectionsPreview?: Section<"JewelleryCollectionsPreview1", CollectionsPreviewData>;
  ExploreBanner?: Section<"JewelleryExploreBanner1", ExploreBannerData>;
  Testimonials?: Section<"JewelleryTestimonials1", TestimonialsData>;
  BlogPreview?: Section<"JewelleryBlogPreview1", BlogPreviewData>;
  MissionVision?: Section<"JewelleryMissionVision1", MissionVisionData>;
  Collections?: Section<"JewelleryCollections1", CollectionsData>;
  CollectionDetail?: Section<"JewelleryCollectionDetail1", CollectionDetailData>;
  Gallery?: Section<"JewelleryGallery1", GalleryData>;
  TestimonialListing?: Section<"JewelleryTestimonialListing1", TestimonialListingData>;
  Blogs?: Section<"JewelleryBlogs1", BlogsData>;
  BlogDetail?: Section<"JewelleryBlogDetail1", BlogDetailData>;
  Contact?: Section<"JewelleryContact1", ContactData>;
  ContactForm?: Section<"JewelleryContactForm1", ContactFormData>;
  Enquiry?: Section<"JewelleryEnquiry1", EnquiryData>;
  EnquiryForm?: Section<"JewelleryEnquiryForm1", EnquiryFormData>;
}

export interface TemplateComponentEntry {
  key: string;
  component: string;
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, { components: TemplateComponentEntry[] }>;
}

export interface JewelleryTemplateData {
  common: CommonData;
  categories: {
    Jewellery: {
      sections: JewellerySections;
      templateComponents: TemplateComponentsData;
    };
  };
}
