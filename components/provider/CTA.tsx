'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProviderCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    providerType: '',
    path: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // TODO: Connect to real API
    console.log('Provider application:', formData)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }
  
  return (
    <section id="join" className="py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Background glow */}
        <div className="relative">
          <div 
            className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={{ 
              background: 'radial-gradient(circle, rgba(74,222,128,0.15) 0%, transparent 60%)',
              filter: 'blur(80px)'
            }}
          />
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-[#4ADE80]/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-[#4ADE80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Application Received!</h2>
              <p className="text-white/60 text-lg max-w-md mx-auto">
                We'll review your application and get back to you within 48 hours. Keep an eye on your inbox.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Join?
                </h2>
                <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
                  Apply now and we'll get back to you within 48 hours.
                </p>
              </motion.div>
              
              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Provider Type */}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Provider Type</label>
                    <select
                      required
                      value={formData.providerType}
                      onChange={(e) => setFormData({ ...formData, providerType: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select your type</option>
                      <option value="physician" className="bg-gray-900">Physician (MD/DO)</option>
                      <option value="np" className="bg-gray-900">Nurse Practitioner</option>
                      <option value="pa" className="bg-gray-900">Physician Assistant</option>
                      <option value="pt" className="bg-gray-900">Physical Therapist</option>
                      <option value="ot" className="bg-gray-900">Occupational Therapist</option>
                      <option value="therapist" className="bg-gray-900">Therapist / Counselor</option>
                      <option value="psychologist" className="bg-gray-900">Psychologist</option>
                      <option value="homecare" className="bg-gray-900">Home Care / Home Health</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </div>
                  
                  {/* Path */}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">How will you join?</label>
                    <select
                      required
                      value={formData.path}
                      onChange={(e) => setFormData({ ...formData, path: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#4ADE80]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select path</option>
                      <option value="practice" className="bg-gray-900">Practice (Multi-Provider Clinic)</option>
                      <option value="solo" className="bg-gray-900">Solo Practice (Own Office)</option>
                      <option value="independent" className="bg-gray-900">Independent (Mobile/Telehealth)</option>
                    </select>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-8">
                  <label className="block text-white/70 text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#4ADE80]/50 transition-colors"
                    placeholder="Atlanta, GA"
                  />
                </div>
                
                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4ADE80] hover:bg-[#22C55E] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
                
                <p className="text-white/40 text-sm text-center mt-4">
                  By applying, you agree to our Terms of Service and Privacy Policy.
                </p>
              </motion.form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
