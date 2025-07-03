import { Button } from '@/components/ui/button'
import { Shield, Heart, Target } from 'lucide-react'

export function MotivationalBanner() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              <Shield className="w-12 h-12 text-blue-200" />
              <Heart className="w-12 h-12 text-pink-200" />
              <Target className="w-12 h-12 text-purple-200" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Your genetic information empowers you to make precise health decisions
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
            Enhancing your quality of life and helping you reach your goals effortlessly. 
            After all, an ounce of prevention is worth a pound of cure.
          </p>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 text-lg font-semibold"
          >
            Discover the Benefits of Genetic Testing
          </Button>
        </div>
      </div>
    </section>
  )
} 