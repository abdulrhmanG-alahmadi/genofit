import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <Sparkles className="w-12 h-12 text-yellow-300" />
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to discover your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              full potential?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Don&apos;t let your genetic potential go untapped. Join thousands of athletes who&apos;ve already transformed their performance with GenoFit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300"
            >
              Start Your Journey Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-12 py-6 text-xl backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">🇸🇦</div>
              <div className="text-lg font-semibold text-white mb-1">Saudi Innovation</div>
              <div className="text-gray-300">First in the Kingdom</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">🔬</div>
              <div className="text-lg font-semibold text-white mb-1">Advanced Science</div>
              <div className="text-gray-300">Cutting-edge technology</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">🏆</div>
              <div className="text-lg font-semibold text-white mb-1">Proven Results</div>
              <div className="text-gray-300">95% success rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 