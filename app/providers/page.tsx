import Navigation from '@/components/Navigation'
import ProviderHero from '@/components/provider/Hero'
import ThreePaths from '@/components/provider/ThreePaths'
import ProviderHowItWorks from '@/components/provider/HowItWorks'
import Requirements from '@/components/provider/Requirements'
import ProviderBenefits from '@/components/provider/Benefits'
import FoundingProvider from '@/components/provider/FoundingProvider'
import ProviderFAQ from '@/components/provider/FAQ'
import ProviderCTA from '@/components/provider/CTA'
import Footer from '@/components/shared/Footer'

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ProviderHero />
      <ThreePaths />
      <ProviderHowItWorks />
      <Requirements />
      <ProviderBenefits />
      <FoundingProvider />
      <ProviderFAQ />
      <ProviderCTA />
      <Footer variant="provider" />
    </main>
  )
}
