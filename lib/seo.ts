import { type Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE, SITE_DESCRIPTION } from "./constants";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Generates comprehensive SEO metadata for Next.js pages
 */
export function generateSEO({
  title,
  description,
  url = "",
  image,
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const fullUrl = `${SITE_URL}${url}`;
  const ogImage = image || `${SITE_URL}/og-image.png`;

  const defaultKeywords = [
    "Python for kids",
    "coding for children",
    "learn Python",
    "kids programming",
    "interactive coding lessons",
    "STEM education",
    "coding bootcamp for kids",
    "Python tutorial for beginners",
  ];

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: "Paramanantham Harrison", url: "https://learnwithparam.com" }],
    creator: "Kidzode",
    publisher: SITE_NAME,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },
    alternates: {
      canonical: fullUrl,
    },
    category: "Education",
  };
}

/**
 * Default metadata for the site root
 */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Python for Kids`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Python for kids",
    "coding for children",
    "learn Python",
    "kids programming",
    "interactive coding lessons",
    "STEM education",
    "coding bootcamp for kids",
    "Python tutorial for beginners",
    "programming for young minds",
    "learn to code",
  ],
  authors: [{ name: "Paramanantham Harrison", url: "https://learnwithparam.com" }],
  creator: "Kidzode",
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: `${SITE_NAME} - Python for Kids`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kidzode - Python for Kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Python for Kids`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@kidzode",
    site: "@kidzode",
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Education",
  verification: {
    // Add verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};
