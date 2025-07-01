'use client';

import { useTranslations } from 'next-intl';
import { TrendingDown, AlertTriangle, Eye } from 'lucide-react';

export default function Problem() {
  const t = useTranslations('problem');

  const icons = {
    0: TrendingDown,
    1: AlertTriangle,
    2: Eye,
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => {
            const IconComponent = icons[index as keyof typeof icons];
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6 mx-auto">
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t(`points.${index}.title`)}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {t(`points.${index}.description`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats visualization */}
        <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-red-500 mb-2">60%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Zero-click searches</div>
              <div className="text-gray-600">Users get answers without visiting websites</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">75%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">AI-generated responses</div>
              <div className="text-gray-600">Queries answered directly by AI platforms</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-2">-40%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Traditional SEO traffic</div>
              <div className="text-gray-600">Decline in organic click-through rates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 