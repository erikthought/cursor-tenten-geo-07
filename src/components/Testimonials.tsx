'use client';

import { useTranslations } from 'next-intl';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-10 relative"
            >
              <div className="absolute top-6 left-6">
                <Quote size={48} className="text-blue-600 opacity-20" />
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  "{t(`items.${index}.quote`)}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {t(`items.${index}.author`).charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {t(`items.${index}.author`)}
                    </div>
                    <div className="text-gray-600">
                      {t(`items.${index}.title`)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional social proof */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-xl font-semibold mb-2">Happy Clients</div>
              <div className="text-gray-400">Businesses transformed with GEO</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-xl font-semibold mb-2">Success Rate</div>
              <div className="text-gray-400">Clients see improved AI visibility</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
              <div className="text-xl font-semibold mb-2">Client Rating</div>
              <div className="text-gray-400">Average satisfaction score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 