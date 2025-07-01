'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Calendar, Shield } from 'lucide-react';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center shadow-xl hover:shadow-2xl">
            {t('primary')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center">
            <Calendar className="mr-2 group-hover:scale-110 transition-transform" size={20} />
            {t('secondary')}
          </button>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-12">
          <Shield size={24} className="text-green-400" />
          <span className="text-lg font-medium">
            {t('guarantee')}
          </span>
        </div>

        {/* Feature highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Start</h3>
            <p className="opacity-90">Get your GEO strategy up and running within 48 hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Risk-Free</h3>
            <p className="opacity-90">30-day money-back guarantee on all packages</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Support</h3>
            <p className="opacity-90">Direct access to GEO specialists and priority support</p>
          </div>
        </div>

        {/* Urgency element */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
          <h3 className="text-2xl font-bold mb-4">
            Limited Time: Early Adopter Pricing
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Join the first 100 companies to implement GEO and save 20% on your first 6 months. 
            This offer expires soon as AI search adoption accelerates.
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold">47</div>
              <div className="text-sm opacity-80">Companies joined</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">53</div>
              <div className="text-sm opacity-80">Spots remaining</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 