import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Lexend_Mega, Epilogue } from 'next/font/google';

const lexendMega = Lexend_Mega({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Kidzode - Python for Kids',
  description: 'Master Python with fun, interactive lessons.'
};

export const viewport: Viewport = {
  maximumScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lexendMega.variable} ${epilogue.variable}`}
    >
      <body className={`${lexendMega.variable} ${epilogue.variable} min-h-screen bg-background font-epilogue antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
