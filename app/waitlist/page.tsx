'use client'

import { useState, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import RivomedLogo from '@/components/shared/RivomedLogo'

type WaitlistType = 'patient' | 'provider' | 'practice'

// ⚠️ IMPORTANT: Set your API URL here after deploying Terraform
const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

function WaitlistForm() {
  const searchParams = useSearchParams()
  const defaultType = (searchParams.get('type') as WaitlistType) || 'patient'
  
  const [type, setType] = useState<WaitlistType>(defaultType)
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [position, setPosition] = useState<number | null>(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    licenseState: '',
    npi: '',
    practiceName: '',
    providerCount: '',
    zipCode: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Check if API URL is configured
    if (!API_URL) {
      setError('API not configured. Please set NEXT_PUBLIC_API_URL in .env.local')
      setLoading(false)
      return
    }

    try {
      const payload = {
        type,
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone || undefined,
        ...(type === 'provider' && {
          specialty: formData.specialty,
          licenseState: formData.licenseState,
          npi: formData.npi || undefined,
        }),
        ...(type === 'practice' && {
          practiceName: formData.practiceName,
          providerCount: formData.providerCount ? parseInt(formData.providerCount) : undefined,
        }),
        ...(type === 'patient' && {
          zipCode: formData.zipCode,
        }),
        source: 'website',
      }

      const response = await fetch(`${API_URL}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setPosition(data.data.position)
      setStep('success')
    } catch (err: any) {
      setError(err.message || 'Failed to join waitlist. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const typeConfig = {
    patient: {
      title: 'Join the Movement',
      subtitle: 'Healthcare. Revived. Your health. Your terms.',
      color: '#4ADE80',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'rgba(74,222,128,0.15)',
    },
    provider: {
      title: 'Join as a Provider',
      subtitle: 'Keep 70% • Same-day pay • Zero paperwork',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'rgba(59,130,246,0.15)',
    },
    practice: {
      title: 'Register Your Practice',
      subtitle: 'Bring your entire team to Rivomed',
      color: '#8B5CF6',
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'rgba(139,92,246,0.15)',
    },
  }

  const specialties = [
    { value: 'primary_care', label: 'Primary Care' },
    { value: 'family_medicine', label: 'Family Medicine' },
    { value: 'internal_medicine', label: 'Internal Medicine' },
    { value: 'pediatrics', label: 'Pediatrics' },
    { value: 'mental_health', label: 'Mental Health' },
    { value: 'physical_therapy', label: 'Physical Therapy' },
    { value: 'occupational_therapy', label: 'Occupational Therapy' },
    { value: 'other', label: 'Other' },
  ]

  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <RivomedLogo size="sm" variant="light" />
          </Link>
          <Link 
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 py-12">
        {step === 'form' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div 
              className="p-8 text-center"
              style={{ background: `linear-gradient(135deg, ${typeConfig[type].color}20 0%, ${typeConfig[type].color}05 100%)` }}
            >
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
                {typeConfig[type].title}
              </h1>
              <p className="text-gray-600">
                {typeConfig[type].subtitle}
              </p>
            </div>

            {/* Type Tabs */}
            <div className="flex border-b border-gray-100">
              {(['patient', 'provider', 'practice'] as WaitlistType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all ${
                    type === t
                      ? 'text-gray-900 border-b-2'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  style={{ borderColor: type === t ? typeConfig[t].color : 'transparent' }}
                >
                  {t === 'patient' ? '👤 Patient' : t === 'provider' ? '⚕️ Provider' : '🏥 Practice'}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                    placeholder="Smith"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Provider-specific fields */}
              {type === 'provider' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Specialty <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors bg-white text-gray-900"
                      >
                        <option value="">Select...</option>
                        {specialties.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        License State <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="licenseState"
                        value={formData.licenseState}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors bg-white text-gray-900"
                      >
                        <option value="">Select...</option>
                        {states.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      NPI <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="npi"
                      value={formData.npi}
                      onChange={handleChange}
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                      placeholder="10-digit NPI"
                    />
                  </div>
                </>
              )}

              {/* Practice-specific fields */}
              {type === 'practice' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Practice Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="practiceName"
                      value={formData.practiceName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                      placeholder="Smith Family Medicine"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Providers <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="number"
                      name="providerCount"
                      value={formData.providerCount}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                      placeholder="5"
                    />
                  </div>
                </>
              )}

              {/* Patient-specific fields */}
              {type === 'patient' && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Zip Code <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    maxLength={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 outline-none transition-colors text-gray-900"
                    placeholder="30301"
                  />
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-100">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90 hover:shadow-lg'
                }`}
                style={{ background: typeConfig[type].color }}
              >
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By joining, you agree to our{' '}
                <Link href="/terms" className="underline hover:text-gray-600">Terms</Link>
                {' '}and{' '}
                <Link href="/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>
              </p>
            </form>
          </motion.div>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center text-5xl"
              style={{ background: `${typeConfig[type].color}20` }}
            >
              🎉
            </motion.div>
            
            <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
              You're on the list!
            </h1>
            
            <p className="text-gray-500 mb-8 text-lg">
              Check your email for confirmation.
            </p>
            
            {position && (
              <div 
                className="inline-block px-12 py-6 rounded-2xl mb-8"
                style={{ background: `${typeConfig[type].color}15` }}
              >
                <p className="text-sm text-gray-500 mb-2">Your position</p>
                <p className="text-5xl font-extrabold" style={{ color: typeConfig[type].color }}>
                  #{position}
                </p>
              </div>
            )}
            
            <div className="space-y-4">
              <Link
                href="/"
                className="block w-full py-4 rounded-xl font-bold text-white text-lg"
                style={{ background: typeConfig[type].color }}
              >
                Back to Home
              </Link>
              
              <p className="text-sm text-gray-400">
                We'll reach out when it's your turn.
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer note */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Rivomed · Operated by PATHSDATA LLC
        </p>
      </div>
    </main>
  )
}

// Loading fallback
function WaitlistLoading() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500">Loading...</p>
      </div>
    </main>
  )
}

// Main export with Suspense
export default function WaitlistPage() {
  return (
    <Suspense fallback={<WaitlistLoading />}>
      <WaitlistForm />
    </Suspense>
  )
}
