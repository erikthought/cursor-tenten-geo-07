'use client';

import { useTranslations } from 'next-intl';
import { Brain, Link, Network, Target } from 'lucide-react';

export default function Solution() {
  const t = useTranslations('solution');

  const iconMap = {
    brain: Brain,
    link: Link,
    network: Network,
    target: Target,
  };

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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, index) => {
              const iconName = t(`features.${index}.icon`) as keyof typeof iconMap;
              const IconComponent = iconMap[iconName] || Brain;
              
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl mb-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {t(`features.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`features.${index}.description`)}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">GEO Optimization Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <div className="font-semibold">Content Analysis</div>
                    <div className="text-sm opacity-80">AI-readability assessment</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <div className="font-semibold">Structure Optimization</div>
                    <div className="text-sm opacity-80">Format for AI understanding</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <div className="font-semibold">Citation Enhancement</div>
                    <div className="text-sm opacity-80">Increase source attribution</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <div className="font-semibold">Multi-Platform Testing</div>
                    <div className="text-sm opacity-80">Validate across AI engines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits showcase */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why GEO Works</h3>
            <p className="text-xl opacity-90">The future of search is conversational and AI-driven</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">AI-First Approach</h4>
              <p className="opacity-90">Designed specifically for how AI models process and cite information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Higher Intent Traffic</h4>
              <p className="opacity-90">Attract users who are actively seeking detailed, expert information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Network className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2">Future-Proof Strategy</h4>
              <p className="opacity-90">Stay ahead as AI search continues to evolve and dominate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 