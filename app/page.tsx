import Navigation from '@/components/Navigation'
import PatientHero from '@/components/patient/Hero'
import PatientStats from '@/components/patient/Stats'
import PatientFamily from '@/components/patient/Family'
import PatientJourney from '@/components/patient/Journey'
import PatientAIMockups from '@/components/patient/AIMockups'
import PatientServices from '@/components/patient/Services'
import PatientPricing from '@/components/patient/Pricing'
import PatientTestimonial from '@/components/patient/Testimonial'
import PatientCTA from '@/components/patient/CTA'
import Footer from '@/components/shared/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PatientHero />
      <PatientStats />
      <PatientFamily />
      <PatientJourney />
      <PatientAIMockups />
      <PatientServices />
      <PatientPricing />
      <PatientTestimonial />
      <PatientCTA />
      <Footer variant="patient" />
    </main>
  )
}
