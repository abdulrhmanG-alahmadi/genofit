'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 md:px-8 text-center pt-[20vh] md:pt-[30vh]">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            {t('hero.title')}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.subtitle')}
          </p>

          {/* Alternative banner texts */}
          <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 px-4">
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              ✨ {t('hero.banner1')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              🎯 {t('hero.banner3')}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300">
              🚀 {t('hero.banner2')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center px-4 mb-8 md:mb-0">
            <a href="#packages">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
              >
                {t('hero.cta')}
                <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/20 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-300">Performance Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-sm sm:text-base text-gray-300">Athletes Tested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Expert Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
} 