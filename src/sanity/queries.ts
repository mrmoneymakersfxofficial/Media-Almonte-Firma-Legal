export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  _id,
  _type,
  title,
  companyName,
  tagline,
  description,
  phone,
  whatsapp,
  email,
  address,
  schedule,
  nav[]{
    _key,
    label,
    url
  },
  social[]{
    _key,
    platform,
    url
  },
  "logoUrl": logo.asset->url,
  "ogImageUrl": ogImage.asset->url
}`;

export const HERO_SETTINGS_QUERY = `*[_type == "heroSettings"][0]{
  _id,
  _type,
  badge,
  titlePart1,
  titlePart2,
  tagline,
  description,
  ctaPrimaryText,
  ctaSecondaryText,
  trustBadges,
  statCounters[]{
    _key,
    value,
    suffix,
    label,
    icon
  },
  backgroundVideoUrl
}`;

export const ABOUT_SECTION_QUERY = `*[_type == "aboutSection"][0]{
  _id,
  _type,
  badge,
  heading,
  subheading,
  content,
  founderName,
  founderRole,
  "founderImageUrl": founderImage.asset->url,
  pillars[]{
    _key,
    title,
    description
  }
}`;

export const PRACTICE_AREAS_QUERY = `*[_type == "practiceArea"] | order(order asc){
  _id,
  _type,
  title,
  "slug": slug.current,
  shortDescription,
  fullDescription,
  iconType,
  services,
  order
}`;

export const LAWYERS_QUERY = `*[_type == "lawyer"] | order(order asc){
  _id,
  _type,
  name,
  role,
  specialty,
  colegiateNumber,
  bio,
  "imageUrl": image.asset->url,
  order
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc){
  _id,
  _type,
  clientName,
  caseType,
  quote,
  rating,
  order
}`;

export const FAQ_ITEMS_QUERY = `*[_type == "faqItem"] | order(order asc){
  _id,
  _type,
  question,
  answer,
  category,
  order
}`;
