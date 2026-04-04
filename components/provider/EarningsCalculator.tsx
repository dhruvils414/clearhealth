'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const serviceTypes = [
  { name: 'Telehealth', price: 45, providerCut: 31.50 },
  { name: 'Primary Care', price: 79, providerCut: 55.30 },
  { name: 'Mental Health', price: 69, providerCut: 48.30 },
  { name: 'PT/OT', price: 69, providerCut: 48.30 },
  { name: 'House Call', price: 109, providerCut: 76.30 },
]

export default function ProviderEarningsCalculator() {
  const [visitsPerWeek, setVisitsPerWeek] = useState(20)
  const [selectedService, setSelectedService] = useState(1) // Primary Care

  const service = serviceTypes[selectedService]
  const weeklyEarnings = visitsPerWeek * service.providerCut
  const monthlyEarnings = weeklyEarnings * 4
  const yearlyEarnings = monthlyEarnings * 12

  return (
    <section className="px-4 mb-24 md:mb-32 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-teal"
        >
          Your Earnings
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900 mb-3"
        >
          See what you could make
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-lg"
        >
          You keep 70% of every visit. No hidden fees.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black rounded-[32px] p-8 md:p-12 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 100% at 20% 0%, rgba(16,185,129,0.15) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 80% 100%, rgba(59,130,246,0.1) 0%, transparent 50%)' }} />
        
        <div className="relative z-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Controls */}
            <div>
              {/* Service Type */}
              <div className="mb-8">
                <label className="block text-white/60 text-sm font-medium mb-3">Service Type</label>
                <div className="flex flex-wrap gap-2">
                  {serviceTypes.map((s, index) => (
                    <button
                      key={s.name}
                      onClick={() => setSelectedService(index)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedService === index
                          ? 'bg-provider-green text-black'
                          : 'bg-white/10 text-white/70 hover:bg-white/15'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visits Per Week */}
              <div className="mb-8">
                <label className="block text-white/60 text-sm font-medium mb-3">
                  Visits per week: <span className="text-white font-bold">{visitsPerWeek}</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={visitsPerWeek}
                  onChange={(e) => setVisitsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-full appearance-none cursor-pointer accent-provider-green"
                />
                <div className="flex justify-between text-white/40 text-xs mt-2">
                  <span>5/week</span>
                  <span>50/week</span>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-white/5 rounded-2xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/60 text-sm">Patient pays</span>
                  <span className="text-white font-bold">${service.price}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/60 text-sm">ClearPath fee (30%)</span>
                  <span className="text-white/60">-${(service.price * 0.3).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">You keep (70%)</span>
                    <span className="text-provider-green font-bold text-xl">${service.providerCut.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <p className="text-white/50 text-sm mb-2">Your potential earnings</p>
                
                <div className="mb-6">
                  <p className="text-6xl md:text-7xl font-extrabold gradient-text-provider mb-1" style={{ letterSpacing: '-3px' }}>
                    ${yearlyEarnings.toLocaleString()}
                  </p>
                  <p className="text-white/50">per year</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white">${monthlyEarnings.toLocaleString()}</p>
                    <p className="text-white/50 text-sm">per month</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-2xl font-bold text-white">${weeklyEarnings.toLocaleString()}</p>
                    <p className="text-white/50 text-sm">per week</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span className="text-provider-green">✓</span>
                  Withdraw to your bank anytime
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
