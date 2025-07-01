# Tenten.co - GEO Landing Page

A modern, multi-language landing page for Tenten.co's Generative Engine Optimization (GEO) services. Built with Next.js 14, TypeScript, TailwindCSS, and internationalization support.

## 🚀 Features

- **Multi-language Support**: English, Traditional Chinese, Japanese, Korean, Simplified Chinese, and Arabic
- **AIDA Framework**: Structured landing page following Attention, Interest, Desire, Action principles
- **Modern Design**: Inspired by Daily.co's clean and professional UI
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built-in SEO optimization with meta tags and structured content
- **Performance**: Optimized for Core Web Vitals and fast loading

## 🎯 Landing Page Structure (AIDA)

### Attention
- **Hero Section**: Compelling headline and value proposition
- **Problem Section**: Highlights traditional SEO challenges

### Interest  
- **Solution Section**: Introduces GEO as the solution
- **Stats Section**: Proven results and metrics

### Desire
- **Testimonials**: Client success stories
- **Benefits**: Why GEO works

### Action
- **Pricing**: Clear pricing tiers ($2,390 and $5,290/month)
- **FAQ**: Common questions and answers
- **CTA**: Final call-to-action with urgency

## 🌍 Supported Languages

- 🇺🇸 English (default)
- 🇹🇼 Traditional Chinese
- 🇯🇵 Japanese
- 🇰🇷 Korean
- 🇨🇳 Simplified Chinese
- 🇸🇦 Arabic (with RTL support)

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel-ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tenten-geo-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific variables:

```env
# Add any API keys or configuration here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Adding New Languages

1. Create a new message file in `messages/[locale].json`
2. Update the `locales` array in `src/middleware.ts`
3. Add the language to the `languages` array in `src/components/Header.tsx`

### Customizing Content

Edit the message files in the `messages/` directory to customize content:
- `messages/en.json` - English content
- `messages/zh-TW.json` - Traditional Chinese content
- `messages/ja.json` - Japanese content
- And so on...

## 📄 Components

- `Header` - Navigation with language switcher
- `Hero` - Main hero section with CTA
- `Problem` - Problem identification (AIDA: Attention)
- `Solution` - GEO solution presentation (AIDA: Interest)
- `Stats` - Performance metrics and proof
- `Testimonials` - Client success stories (AIDA: Desire)
- `Pricing` - Service packages (AIDA: Action)
- `FAQ` - Frequently asked questions
- `CTA` - Final call-to-action
- `Footer` - Site footer with links

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## 📊 Service Packages

### Standard GEO Package - $2,390/month
- GEO Audit
- Technical SEO
- GEO Analysis Report
- Keyword Matrix
- 8 Long-form GEO Articles (1,500-3,000 words)
- Monthly Performance Report
- Email Support

### Premium GEO Package - $5,290/month
- Everything in Standard
- 30 Long-form GEO Articles (1,500-3,000 words)
- Dedicated Communication Channel
- Priority Support (12hr response)
- Bi-weekly Strategy Sessions
- Advanced AI Platform Tracking
- Custom Implementation Strategy

## 🎨 Design System

The design follows Daily.co's aesthetic with:
- Clean, modern typography
- Blue and purple gradient accents
- Generous white space
- Subtle shadows and rounded corners
- Professional imagery and icons

## 📱 Responsive Breakpoints

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Structured data markup
- Fast loading performance
- Mobile-first responsive design

## 📞 Contact

For questions about this landing page or GEO services:
- Email: hello@tenten.co
- Website: https://tenten.co

## 📝 License

This project is proprietary to Tenten.co. All rights reserved.
