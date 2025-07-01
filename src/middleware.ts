import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'zh-TW', 'ja', 'ko', 'zh-CN', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
  
  // Optionally, always prefix the default locale
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|zh-TW|ja|ko|zh-CN|ar)/:path*']
}; 