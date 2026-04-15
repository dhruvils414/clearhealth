import Navigation from '@/components/Navigation'
import PatientHero from '@/components/patient/Hero'
import PatientStats from '@/components/patient/Stats'
import WhyRivomed from '@/components/patient/WhyRivomed'
import PatientJourney from '@/components/patient/Journey'
import PatientServices from '@/components/patient/Services'
import PatientPricing from '@/components/patient/Pricing'
import PreventiveCareHub from '@/components/patient/PreventiveCareHub'
import PatientTestimonial from '@/components/patient/Testimonial'
import PatientCTA from '@/components/patient/CTA'
import Footer from '@/components/shared/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PatientHero />
      <PatientStats />
      <WhyRivomed />
      <PatientJourney />
      <PatientServices />
      <PatientPricing />
      <PreventiveCareHub />
      <PatientTestimonial />
      <PatientCTA />
      <Footer variant="patient" />
    </main>
  )
}
