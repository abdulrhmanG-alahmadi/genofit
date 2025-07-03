import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { MotivationalBanner } from '@/components/sections/motivational-banner'
import { StatsSection } from '@/components/sections/stats-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { RevolutionSection } from '@/components/sections/revolution-section'
import { PackagesSection } from '@/components/sections/packages-section'
import { FinalCTASection } from '@/components/sections/final-cta-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MotivationalBanner />
        <StatsSection />
        <HowItWorksSection />
        <RevolutionSection />
        <PackagesSection />
        <FinalCTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
