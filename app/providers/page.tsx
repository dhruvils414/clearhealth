import Navigation from '@/components/Navigation'
import ProviderHero from '@/components/provider/Hero'
import ProviderStats from '@/components/provider/Stats'
import ProviderHowItWorks from '@/components/provider/HowItWorks'
import ProviderBenefits from '@/components/provider/Benefits'
import ProviderTypes from '@/components/provider/Types'
import ProviderComparison from '@/components/provider/Comparison'
import ProviderTestimonial from '@/components/provider/Testimonial'
import ProviderCTA from '@/components/provider/CTA'
import Footer from '@/components/shared/Footer'

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ProviderHero />
      <ProviderStats />
      <ProviderHowItWorks />
      <ProviderBenefits />
      <ProviderTypes />
      <ProviderComparison />
      <ProviderTestimonial />
      <ProviderCTA />
      <Footer variant="provider" />
    </main>
  )
}
