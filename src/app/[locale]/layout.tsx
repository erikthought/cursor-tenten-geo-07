import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const locales = ['en', 'zh-TW', 'ja', 'ko', 'zh-CN', 'ar'];

export const metadata: Metadata = {
  title: "Tenten.co - Future-Proof Your SEO with GEO",
  description: "Generative Engine Optimization at global scale. Stay ahead of AI search engines like ChatGPT, Claude, and Google's AI Overviews.",
  keywords: "GEO, Generative Engine Optimization, AI SEO, ChatGPT optimization, Claude optimization, AI search optimization",
  openGraph: {
    title: "Tenten.co - Future-Proof Your SEO with GEO",
    description: "Generative Engine Optimization at global scale. Stay ahead of AI search engines like ChatGPT, Claude, and Google's AI Overviews.",
    type: "website",
    locale: "en_US",
    siteName: "Tenten.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tenten.co - Future-Proof Your SEO with GEO",
    description: "Generative Engine Optimization at global scale. Stay ahead of AI search engines like ChatGPT, Claude, and Google's AI Overviews.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
