'use client'

import { Card, CardContent } from '@/components/ui/card'
import { TrendingUp, Clock, Activity, AlertTriangle } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function StatsSection() {
  const { t, isRTL } = useLanguage()
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            The Power of <span className="text-gradient">Genetic Testing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how genetic testing transforms athletic performance and health outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Improvement</h3>
              <p className="text-gray-600 text-sm">
                {t('stats.stat1')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1x</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">One Test, All Needs</h3>
              <p className="text-gray-600 text-sm">
                {t('stats.stat2')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Foundation</h3>
              <p className="text-gray-600 text-sm">
                {t('stats.stat3')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-2">⚠️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Risk Awareness</h3>
              <p className="text-gray-600 text-sm">
                {t('stats.stat4')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional motivational content */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Genetic Testing Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Precision Medicine</h4>
                <p className="text-gray-600">
                  Understand your unique genetic makeup to make informed health decisions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                <p className="text-gray-600">
                  Unlock your athletic potential with personalized training strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 