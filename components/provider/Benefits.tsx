'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '📄',
    title: 'Zero insurance paperwork',
    description: 'No prior auths. No claim denials. No coding headaches. Direct pay only.',
    iconClass: 'feature-icon-blue',
  },
  {
    icon: '📅',
    title: 'Your schedule, your rules',
    description: 'Set your own hours. Block time when you need it. No corporate mandates.',
    iconClass: 'feature-icon-teal',
  },
  {
    icon: '⏱️',
    title: 'You decide visit length',
    description: '15 minutes or 45 — you choose what your patients need. No quotas.',
    iconClass: 'feature-icon-provider-purple',
  },
  {
    icon: '💰',
    title: 'Simple flat-fee payment',
    description: 'Claim your earnings anytime after each visit. No waiting 90 days.',
    iconClass: 'feature-icon-amber',
  },
  {
    icon: '👥',
    title: 'We bring you patients',
    description: 'Families find you through ClearPath. No marketing needed.',
    iconClass: 'feature-icon-cyan',
  },
  {
    icon: '❤️',
    title: 'Love medicine again',
    description: 'Remember why you became a doctor. We handle everything else.',
    iconClass: 'feature-icon-provider-pink',
  },
]

export default function ProviderBenefits() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-teal"
        >
          Why ClearPath
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900"
        >
          Built for providers
        </motion.h2>
      </div>
      
      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-gray-50 border border-gray-100 rounded-[28px] p-6 md:p-8"
          >
            <div className={`feature-icon ${benefit.iconClass} mb-5`}>
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
