'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '70%', label: 'You keep', gradient: 'gradient-text-teal' },
  { value: '$0', label: 'Paperwork', gradient: 'gradient-text-blue' },
  { value: 'You', label: 'Set schedule', gradient: 'gradient-text-purple' },
  { value: 'Anytime', label: 'Withdraw', gradient: 'gradient-text-amber' },
]

export default function ProviderStats() {
  return (
    <section className="relative z-20 -mt-36 px-4 md:px-8 mb-24 md:mb-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stat-card"
          >
            <p className={`text-4xl md:text-[56px] font-extrabold mb-2 ${stat.gradient}`} style={{ letterSpacing: '-2px' }}>
              {stat.value}
            </p>
            <p className="text-sm text-gray-500 font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
