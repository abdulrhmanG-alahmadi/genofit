'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Dumbbell, Apple, Crown, ArrowRight } from 'lucide-react'
import { SubscriptionForm } from '@/components/forms/subscription-form'
import { useLanguage } from '@/contexts/language-context'

export function PackagesSection() {
  const { t, isRTL } = useLanguage()
  const [selectedPackage, setSelectedPackage] = useState<{id: string, name: string} | null>(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleSubscribeClick = (packageId: string, packageName: string) => {
    setSelectedPackage({ id: packageId, name: packageName })
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setSelectedPackage(null)
  }
  const packages = [
    {
      id: 'fitness',
      name: t('packages.fitness-name'),
      icon: Dumbbell,
      description: t('packages.fitness-desc'),
      price: t('packages.starting-at'),
      amount: '2199 SAR',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      features: [
        'Complete genetic analysis for fitness',
        'Personalized training plan',
        'Muscle fiber type analysis',
        'Recovery time optimization',
        'Injury prevention insights',
        'Performance enhancement strategies'
      ],
      popular: false
    },
    {
      id: 'diet',
      name: t('packages.diet-name'),
      icon: Apple,
      description: t('packages.diet-desc'),
      price: t('packages.starting-at'),
      amount: '2199 SAR',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      features: [
        'Genetic nutrition analysis',
        'Personalized meal plans',
        'Metabolism optimization',
        'Food sensitivity insights',
        'Nutrient absorption analysis',
        'Weight management strategies'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: t('packages.premium-name'),
      icon: Crown,
      description: t('packages.premium-desc'),
      price: t('packages.starting-at'),
      amount: '3299 SAR',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      features: [
        'Complete genetic analysis',
        'Personalized training plan',
        'Custom nutrition strategy',
        'Health risk assessment',
        'Performance optimization',
        'Monthly consultations',
        'Priority support',
        'Regular plan updates'
      ],
      popular: true
    }
  ]

  return (
    <section id="packages" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Choose Your Plan
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('packages.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('packages.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                pkg.popular ? 'ring-2 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`bg-gradient-to-r ${pkg.bgGradient} ${pkg.popular ? 'pt-12' : 'pt-6'}`}>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pkg.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">{pkg.price}</p>
                    <p className="text-3xl font-bold text-gray-900">{pkg.amount}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 transition-opacity`}
                  onClick={() => handleSubscribeClick(pkg.id, pkg.name)}
                >
                  {t('packages.subscribe')}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              All Packages Include
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every GenoFit package comes with our commitment to your success and comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Lab Analysis</h4>
              <p className="text-sm text-gray-600">Professional genetic testing</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Detailed Report</h4>
              <p className="text-sm text-gray-600">Comprehensive results</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
              <p className="text-sm text-gray-600">Professional guidance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Secure Platform</h4>
              <p className="text-sm text-gray-600">Protected data access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Form */}
      {selectedPackage && (
        <SubscriptionForm
          isOpen={isFormOpen}
          onClose={handleCloseForm}
          packageType={selectedPackage.id}
          packageName={selectedPackage.name}
        />
      )}
    </section>
  )
} 