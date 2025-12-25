import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, FOUNDER_NAME } from "./constants";

export interface Course {
  title: string;
  subtitle: string;
  slug: string;
  tags: string[];
  badge: string;
  duration: string;
  totalLessons: number;
  highlights: string[];
}

/**
 * Organization schema - Primary organization identity
 */
export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description: SITE_DESCRIPTION,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
    },
    sameAs: [
      "https://twitter.com/kidzode",
      "https://twitter.com/learnwithparam",
      "https://youtube.com/@learnwithparam-ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };
}

/**
 * WebSite schema - Enables sitelinks searchbox in Google
 */
export function generateWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/courses?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * WebPage schema - For individual pages
 */
export function generateWebPageJsonLd(
  title: string,
  description: string,
  url: string,
  pageType: "WebPage" | "CollectionPage" | "AboutPage" = "WebPage"
) {
  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${SITE_URL}${url}#webpage`,
    name: title,
    description: description,
    url: `${SITE_URL}${url}`,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

/**
 * Course schema - For individual courses
 */
export function generateCourseJsonLd(course: Course) {
  // Extract age range and level from tags
  const ageTag = course.tags.find((t) => t.includes("Ages")) || "Ages 7+";
  const levelTag =
    course.tags.find((t) =>
      ["Beginner", "Intermediate", "Advanced", "Backend", "Architecture"].includes(t)
    ) || "Beginner";

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${SITE_URL}/courses/${course.slug}#course`,
    name: course.title,
    description: course.subtitle,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    educationalLevel: levelTag,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
      audienceType: ageTag,
    },
    teaches: course.highlights,
    numberOfCredits: course.totalLessons,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: course.duration,
      instructor: {
        "@type": "Person",
        name: FOUNDER_NAME,
      },
    },
    offers: {
      "@type": "Offer",
      category: "Free",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    inLanguage: "en-US",
    isAccessibleForFree: true,
  };
}

/**
 * ItemList schema - For course collection pages
 */
export function generateCourseListJsonLd(courses: Course[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Python Courses for Kids",
    description: "Complete Python learning paths designed for young minds",
    numberOfItems: courses.length,
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.subtitle,
        url: `${SITE_URL}/courses/${course.slug}`,
      },
    })),
  };
}

/**
 * BreadcrumbList schema - For navigation
 */
export function generateBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * FAQPage schema - For FAQ sections
 */
export function generateFAQPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
