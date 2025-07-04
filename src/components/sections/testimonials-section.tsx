'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage()
  
  const testimonials = [
    {
      id: 1,
      nameKey: "testimonials.ahmed.name",
      roleKey: "testimonials.ahmed.role",
      contentKey: "testimonials.ahmed.content",
      rating: 5,
      avatar: "AR"
    },
    {
      id: 2,
      nameKey: "testimonials.sarah.name",
      roleKey: "testimonials.sarah.role",
      contentKey: "testimonials.sarah.content",
      rating: 5,
      avatar: "SZ"
    },
    {
      id: 3,
      nameKey: "testimonials.omar.name",
      roleKey: "testimonials.omar.role",
      contentKey: "testimonials.omar.content",
      rating: 5,
      avatar: "OZ"
    },
    {
      id: 4,
      nameKey: "testimonials.fatima.name",
      roleKey: "testimonials.fatima.role",
      contentKey: "testimonials.fatima.content",
      rating: 5,
      avatar: "FN"
    },
    {
      id: 5,
      nameKey: "testimonials.khalid.name",
      roleKey: "testimonials.khalid.role",
      contentKey: "testimonials.khalid.content",
      rating: 5,
      avatar: "KD"
    },
    {
      id: 6,
      nameKey: "testimonials.noura.name",
      roleKey: "testimonials.noura.role",
      contentKey: "testimonials.noura.content",
      rating: 5,
      avatar: "NH"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ))
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">{t('testimonials.title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-500 opacity-50" />
                </div>
                
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{t(testimonial.contentKey)}"
                </p>
                
                <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{t(testimonial.nameKey)}</h4>
                    <p className="text-sm text-gray-500">{t(testimonial.roleKey)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">{t('testimonials.stats.happy-customers')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">{t('testimonials.stats.success-rate')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">{t('testimonials.stats.average-rating')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">{t('testimonials.stats.support-available')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 