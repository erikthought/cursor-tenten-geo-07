'use client';

import { useTranslations } from 'next-intl';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const t = useTranslations('pricing');

  const plans = ['standard', 'premium'] as const;

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isPopular = t(`plans.${plan}.popular`) === 'true';
            
            return (
              <div
                key={plan}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden ${
                  isPopular ? 'ring-4 ring-blue-500 scale-105' : ''
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                      <Star size={16} fill="currentColor" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8 lg:p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t(`plans.${plan}.name`)}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {t(`plans.${plan}.description`)}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        {t(`plans.${plan}.price`)}
                      </span>
                      <span className="text-xl text-gray-600 ml-2">
                        {t(`plans.${plan}.period`)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {Array.from({ length: plan === 'standard' ? 7 : 7 }).map((_, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <Check size={12} className="text-green-600" />
                        </div>
                        <span className="text-gray-700">
                          {t(`plans.${plan}.features.${index}`)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${
                      isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {t(`plans.${plan}.cta`)}
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                      30-day money-back guarantee
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We offer enterprise packages for larger organizations with specific GEO requirements. 
              Contact us to discuss your needs and get a personalized quote.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-400">TechCorp</div>
            <div className="text-2xl font-bold text-gray-400">DataFlow</div>
            <div className="text-2xl font-bold text-gray-400">AIVault</div>
            <div className="text-2xl font-bold text-gray-400">CloudTech</div>
          </div>
        </div>
      </div>
    </section>
  );
} 