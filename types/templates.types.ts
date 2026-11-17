import type { CSSProperties } from "react";

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

export type ThemeFontVariables = CSSProperties & {
  "--font-primary": string;
  "--font-heading": string;
  "--font-navigation": string;
  "--font-secondary": string;
  "--font-display": string;
  "--font-editorial": string;
  "--font-decorative": string;
  "--font-ui": string;
};

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
}

export interface PaginationData {
  label: string;
  previousLabel: string;
  previousIcon: string;
  nextLabel: string;
  nextIcon: string;
  pageLabel: string;
}

export interface BrandData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoLabel: string;
  logoWidth: number;
  logoHeight: number;
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

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface NotFoundData {
  seo: SeoData;
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface NotFoundProps {
  data?: NotFoundData;
}

export interface SocialLink extends LinkItem {
  icon: string;
}

export interface FooterContactItem {
  id: string;
  icon: string;
  text: string;
  url: string;
}

export interface FooterData extends BrandData {
  description: string;
  quickLinks: {
    title: string;
    links: LinkItem[];
  };
  followTitle: string;
  socialLinks: SocialLink[];
  contactTitle: string;
  contactItems: FooterContactItem[];
  copyrightText: string;
  motto: string[];
  starIcon: string;
}

export interface FooterProps {
  data?: FooterData;
}

export interface HeaderData extends BrandData {
  navLinks: LinkItem[];
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  openMenu: string;
  closeMenu: string;
  openMenuIcon: string;
  closeMenuIcon: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  image: string;
  imageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutUsData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  mainImage: string;
  mainImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** false on the About Us page: the section without its button */
  showButton?: boolean;
  className?: string;
}

export interface CollectionsPreviewData {
  eyebrow: string;
  title: string;
  defaultCategory: string;
  itemsPerCategory: number;
  categoriesLabel: string;
}

export interface CollectionsPreviewProps {
  data?: CollectionsPreviewData;
  /** products and categories the preview tabs are filled from */
  collections?: CollectionsData;
}

export interface ExploreBannerData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
  image: string;
  imageAlt: string;
}

export interface ExploreBannerProps {
  data?: ExploreBannerData;
}

export interface TestimonialsData {
  home: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    image: string;
    imageAlt: string;
    previousLabel: string;
    nextLabel: string;
    previousIcon: string;
    nextIcon: string;
    autoplayMs: number;
  };
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    perPage: number;
    ratingLabel: string;
  };
  homeItemIds: string[];
  listingItemIds: string[];
  items: TestimonialItem[];
  quoteIcon: string;
  starIcon: string;
  dividerStarIcon: string;
  pagination: PaginationData;
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
  starIcon: string;
}

export interface MissionVisionProps {
  data?: MissionVisionData;
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
  starIcon: string;
  pagination: PaginationData;
  products: Product[];
}

export interface CollectionsProps {
  data?: CollectionsData;
}

export interface CollectionDetailData {
  descriptionLabel: string;
  featuresLabel: string;
  specificationsLabel: string;
  thumbnailLabel: string;
  zoomLabel: string;
  closeLabel: string;
  zoomIcon: string;
  closeIcon: string;
  starIcon: string;
}

export interface CollectionDetailProps {
  data?: CollectionDetailData;
  product?: Product;
  categories?: CollectionCategory[];
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
  closeIcon: string;
  previousIcon: string;
  nextIcon: string;
  starIcon: string;
  pagination: PaginationData;
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role?: string;
  city?: string;
  rating?: number;
}

export interface TestimonialsProps {
  data?: TestimonialsData;
  /** true on the Testimonials page: every review in a paged grid instead of the home slider */
  showAll?: boolean;
  className?: string;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface BlogDetailMeta {
  dateLabel: string;
  dateIcon: string;
}

export interface BlogPostDetail {
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
  intro: string;
  homeImage: string;
  homeImageAlt: string;
  image: string;
  imageAlt: string;
  content: string;
  detail: BlogPostDetail;
}

export interface BlogCardProps {
  post: BlogPost;
  buttonText: string;
  buttonIcon: string;
  detailPageUrl: string;
}

export interface BlogsData {
  home: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
  };
  detail: BlogDetailMeta;
  homePostIds: string[];
  listingPostIds: string[];
  detailPostId: string;
  buttonText: string;
  buttonIcon: string;
  detailPageUrl: string;
  perPage: number;
  pagination: PaginationData;
  posts: BlogPost[];
}

export interface BlogsProps {
  data?: BlogsData;
  /** true on the Blog page: the paged list of listingPostIds instead of the home posts */
  showAll?: boolean;
}

export interface BlogDetailProps {
  data?: BlogsData;
  postId?: string;
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
  text: string;
  url?: string;
  urls?: string[];
}

export interface ContactMapData {
  title: string;
  openLabel: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  hoursTitle: string;
  hours: string[];
  hoursIcon: string;
  images: ContactImage[];
  touch: ContactTouchData;
  info: ContactInfoItem[];
  map: ContactMapData;
  mapEmbedUrl: string;
  directionUrl: string;
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
  successIcon: string;
  closeMessageIcon: string;
  spinnerIcon: string;
}

export interface ContactFormData extends FormMessages {
  title: string;
  fields: ContactFormFields;
  buttonIcon: string;
}

export interface ContactProps {
  data?: ContactData;
  form?: ContactFormData;
}

export interface ContactFormProps {
  data?: ContactFormData;
}

export interface EnquiryFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
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
  buttonIcon: string;
  selectIcon: string;
}

export interface EnquiryProps {
  data?: EnquiryData;
  form?: EnquiryFormData;
}

export interface EnquiryFormProps {
  data?: EnquiryFormData;
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
  MissionVision?: Section<"JewelleryMissionVision1", MissionVisionData>;
  Collections?: Section<"JewelleryCollections1", CollectionsData>;
  CollectionDetail?: Section<"JewelleryCollectionDetail1", CollectionDetailData>;
  Gallery?: Section<"JewelleryGallery1", GalleryData>;
  Blogs?: Section<"JewelleryBlogs1", BlogsData>;
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
