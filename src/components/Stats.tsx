'use client';

import { useTranslations } from 'next-intl';
import { TrendingUp, Award, Users, Clock } from 'lucide-react';

export default function Stats() {
  const t = useTranslations('stats');

  const icons = [TrendingUp, Award, Users, Clock];

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('headline')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, index) => {
            const IconComponent = icons[index];
            
            return (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-6 group-hover:bg-blue-500 transition-colors">
                  <IconComponent size={32} />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                  {t(`metrics.${index}.value`)}
                </div>
                
                <div className="text-xl font-semibold mb-3">
                  {t(`metrics.${index}.label`)}
                </div>
                
                <div className="text-gray-400 leading-relaxed">
                  {t(`metrics.${index}.description`)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional proof points */}
        <div className="mt-20 bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Real Results, Real Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-lg">Average 300% increase in AI platform citations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">85% of clients achieve top AI search results</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-lg">60% faster implementation than traditional SEO</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-lg">150% improvement in qualified traffic quality</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">AI Platform Coverage</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>ChatGPT</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="w-28 bg-green-400 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">88%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Claude</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="w-26 bg-blue-400 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Google AI</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="w-30 bg-purple-400 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Perplexity</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="w-24 bg-yellow-400 h-2 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">76%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 