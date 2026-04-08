import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Sterzik Solutions | Digital Marketing Agency',
  description:
    'Bold, data-driven digital marketing for ambitious companies. Performance marketing, PPC, content strategy, and web design.',
  keywords: [
    'Digital Marketing',
    'Performance Marketing',
    'PPC Advertising',
    'Content Marketing',
    'SEO',
    'Web Design',
    'Marketing Agency Munich',
  ],
  metadataBase: new URL('https://sterzik.com'),
  openGraph: {
    title: 'Sterzik Solutions | Digital Marketing Agency',
    description:
      'Bold, data-driven digital marketing for ambitious companies. Performance marketing, PPC, content strategy, and web design.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-50">
        <LanguageProvider defaultLanguage="en">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
