'use client'

import { motion } from 'framer-motion'

const pricingTiers = [
  { name: 'Video Visit', price: '$45', gradient: 'gradient-text-green' },
  { name: 'Office Visit', price: '$79', gradient: 'gradient-text-purple' },
  { name: 'Therapy', price: '$69', gradient: 'gradient-text-orange' },
  { name: 'PT Session', price: '$69', gradient: 'gradient-text-pink' },
]

export default function PatientPricing() {
  return (
    <section className="px-4 mb-10 md:mb-14">
      <div className="bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0 pricing-bg-patient" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label text-patient-green"
            >
              Clear Prices
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title text-white mb-4"
            >
              See it. Pay it. Done.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/40"
            >
              No bills in the mail. No codes. No surprises.
            </motion.p>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-6 md:p-8 text-center"
              >
                <p className="text-sm md:text-base text-white/40 font-semibold mb-4 md:mb-5">
                  {tier.name}
                </p>
                <p className={`text-4xl md:text-6xl font-extrabold ${tier.gradient}`}>
                  {tier.price}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Footer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/30 mt-8 md:mt-10 text-sm md:text-base"
          >
            Same-day booking · No referrals · No approvals · No games
          </motion.p>
        </div>
      </div>
    </section>
  )
}
