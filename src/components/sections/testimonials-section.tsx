import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      role: "Professional Football Player",
      content: "GenoFit completely transformed my training approach. The genetic insights helped me understand my body&apos;s unique needs and optimize my performance like never before. I&apos;ve seen incredible improvements in my endurance and recovery time.",
      rating: 5,
      avatar: "AR"
    },
    {
      id: 2,
      name: "Sarah Al-Zahra",
      role: "Fitness Trainer",
      content: "&quot;As a trainer, I&apos;ve seen how GenoFit helps my clients achieve better results. The personalized nutrition and training plans based on genetic data are game-changers. My clients love the scientific approach.&quot;",
      rating: 5,
      avatar: "SZ"
    },
    {
      id: 3,
      name: "Omar Al-Zahra",
      role: "Marathon Runner",
      content: "As a competitive runner, I was skeptical about genetic testing. But GenoFit's analysis revealed my optimal training zones and recovery needs. My marathon time improved by 12 minutes!",
      rating: 5,
      avatar: "OZ"
    },
    {
      id: 4,
      name: "Fatima Al-Nasser",
      role: "Gym Owner",
      content: "I recommend GenoFit to all my clients. The personalized training programs based on genetic analysis have shown remarkable results. It's the future of fitness coaching.",
      rating: 5,
      avatar: "FN"
    },
    {
      id: 5,
      name: "Khalid Al-Dosari",
      role: "Weightlifter",
      content: "Understanding my muscle fiber composition through GenoFit helped me tailor my strength training. I've achieved personal records I never thought possible.",
      rating: 5,
      avatar: "KD"
    },
    {
      id: 6,
      name: "Noura Al-Harbi",
      role: "Nutritionist",
      content: "As a professional nutritionist, I find GenoFit's genetic nutrition analysis incredibly valuable. It adds a scientific foundation to my dietary recommendations.",
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
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their athletic performance with GenoFit
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
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 