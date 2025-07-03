import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dna, Target, Users, Calendar } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">GenoFit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At GenoFit, we believe the future of sports begins within your genes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              We are the first Saudi company to provide specialized genetic testing for athletes
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We analyze your current and potential fitness levels, delivering a personalized sports 
              experience that makes a real difference.
            </p>
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">Founded in December 2023</p>
                <p className="text-gray-600">Leading the genetic revolution in sports</p>
              </div>
            </div>
          </div>

          {/* Right content - Features */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Dna className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Advanced Genetic Analysis
                    </h4>
                    <p className="text-gray-600">
                      Cutting-edge technology to decode your genetic potential and optimize your performance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Personalized Training Plans
                    </h4>
                    <p className="text-gray-600">
                      Custom training and nutrition plans designed specifically for your genetic profile
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      Expert Support
                    </h4>
                    <p className="text-gray-600">
                      All tailored to help you reach your fitness goals with professional guidance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose GenoFit */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Why Choose GenoFit?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dna className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analysis</h4>
              <p className="text-gray-600">State-of-the-art genetic testing technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Personalized Plans</h4>
              <p className="text-gray-600">Customized training and nutrition strategies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Guidance</h4>
              <p className="text-gray-600">Professional support throughout your journey</p>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
} 