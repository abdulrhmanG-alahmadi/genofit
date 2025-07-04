'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Dna, Shield, Target, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function RevolutionSection() {
  const { t, isRTL } = useLanguage()
  const benefits = [
    {
      icon: Dna,
      title: t('revolution.benefit1'),
      description: t('revolution.benefit1-desc'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: t('revolution.benefit2'),
      description: t('revolution.benefit2-desc'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: t('revolution.benefit3'),
      description: t('revolution.benefit3-desc'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: t('revolution.benefit4'),
      description: t('revolution.benefit4-desc'),
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Not Just a Step — A <span className="text-gradient">Genetic Revolution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('revolution.subtitle-text')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Target Audience */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {t('revolution.whether-text')}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('revolution.genes-future')}
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {t('revolution.cta')}
              </Button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('revolution.professional-athlete')}</h4>
                  <p className="text-gray-600 text-sm">{t('revolution.professional-athlete-desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('revolution.fitness-enthusiasts')}</h4>
                  <p className="text-gray-600 text-sm">{t('revolution.fitness-enthusiasts-desc')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('revolution.health-conscious')}</h4>
                  <p className="text-gray-600 text-sm">{t('revolution.health-conscious-desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 