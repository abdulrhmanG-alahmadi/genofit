import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  ShoppingCart, 
  Package, 
  Home, 
  Send, 
  FlaskConical, 
  FileText, 
  Users 
} from 'lucide-react'

export function HowItWorksSection() {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Get the Test",
      description: "Available through partnered outlets or certified points of sale",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Package,
      title: "Test Kit Contents",
      description: "Tube and swab with clear instructions and easy sampling steps",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Home,
      title: "Self-Testing",
      description: "Can be done anywhere (home, clinic, gym, or pharmacies)",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Send,
      title: "Send the Sample",
      description: "Via collection points or delivery representative",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: FlaskConical,
      title: "Sample Analysis",
      description: "Conducted in the lab, potentially using AI technologies",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: FileText,
      title: "Receive Results",
      description: "Through a dedicated platform or a detailed manual report",
      color: "bg-cyan-100 text-cyan-600"
    },
    {
      icon: Users,
      title: "Consultations",
      description: "Genetic, athletic, and nutritional consultations via packages with regular notifications",
      color: "bg-indigo-100 text-indigo-600"
    }
  ]

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            How the <span className="text-gradient">Test Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From getting your test kit to receiving personalized consultations - 
            we&apos;ve made the process simple and convenient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${step.color}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Your Journey to Genetic Insights
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Purchase Test</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-gray-600">Take Sample</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">Lab Analysis</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-gray-600">Get Results</span>
            </div>
            <div className="hidden md:block w-8 h-px bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
              <span className="text-gray-600">Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 