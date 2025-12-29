'use client';

import Script from 'next/script';

export default function Analytics() {
  // Only load Google Analytics in production
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      {/* Google Analytics - Only in production */}
      {isProduction && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-5L8VPB726G"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-5L8VPB726G');
            `}
          </Script>
        </>
      )}
    </>
  );
}
