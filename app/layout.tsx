import './globals.css';
import type { Viewport } from 'next';
import { Lexend_Mega, Epilogue } from 'next/font/google';
import { defaultMetadata } from '@/lib/seo';
import { generateOrganizationJsonLd, generateWebSiteJsonLd } from '@/lib/json-ld';

const lexendMega = Lexend_Mega({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export const viewport: Viewport = {
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = generateOrganizationJsonLd();
  const siteJsonLd = generateWebSiteJsonLd();

  return (
    <html
      lang="en"
      className={`${lexendMega.variable} ${epilogue.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body 
        className={`${lexendMega.variable} ${epilogue.variable} min-h-screen bg-background font-epilogue antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

