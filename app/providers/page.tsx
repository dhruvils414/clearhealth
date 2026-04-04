import Navigation from '@/components/Navigation'
import ProviderHero from '@/components/provider/Hero'
import ProviderStats from '@/components/provider/Stats'
import ProviderEarningsCalculator from '@/components/provider/EarningsCalculator'
import ProviderHowItWorks from '@/components/provider/HowItWorks'
import ProviderBenefits from '@/components/provider/Benefits'
import ProviderComparison from '@/components/provider/Comparison'
import ProviderAITools from '@/components/provider/AITools'
import ProviderComingSoon from '@/components/provider/ComingSoon'
import ProviderTestimonial from '@/components/provider/Testimonial'
import ProviderCTA from '@/components/provider/CTA'
import Footer from '@/components/shared/Footer'

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ProviderHero />
      <ProviderStats />
      <ProviderEarningsCalculator />
      <ProviderHowItWorks />
      <ProviderBenefits />
      <ProviderComparison />
      <ProviderAITools />
      <ProviderComingSoon />
      <ProviderTestimonial />
      <ProviderCTA />
      <Footer variant="provider" />
    </main>
  )
}
