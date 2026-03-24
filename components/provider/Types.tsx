'use client'

import { motion } from 'framer-motion'

const providerTypes = [
  { emoji: '🩺', title: 'Primary Care', bg: 'bg-gradient-to-br from-provider-blue to-blue-600', shadow: 'shadow-[0_24px_48px_rgba(59,130,246,0.35)]' },
  { emoji: '🧠', title: 'Therapists', bg: 'bg-gradient-to-br from-provider-purple to-purple-600', shadow: 'shadow-[0_24px_48px_rgba(139,92,246,0.35)]' },
  { emoji: '💪', title: 'Physical Therapists', bg: 'bg-gradient-to-br from-provider-green to-emerald-600', shadow: 'shadow-[0_24px_48px_rgba(16,185,129,0.35)]' },
  { emoji: '👶', title: 'Pediatricians', bg: 'bg-gradient-to-br from-provider-pink to-pink-600', shadow: 'shadow-[0_24px_48px_rgba(236,72,153,0.35)]' },
]

export default function ProviderTypes() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-blue"
        >
          Who We're Looking For
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900"
        >
          Join our network
        </motion.h2>
      </div>
      
      {/* Provider Type Circles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {providerTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`w-24 h-24 md:w-32 md:h-32 ${type.bg} ${type.shadow} rounded-full flex items-center justify-center text-5xl md:text-6xl mx-auto mb-4`}>
              {type.emoji}
            </div>
            <p className="text-lg md:text-xl font-bold text-gray-900">
              {type.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
