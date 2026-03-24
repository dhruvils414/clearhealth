'use client'

import { motion } from 'framer-motion'

const traditionalItems = [
  'Insurance paperwork daily',
  'Prior authorization battles',
  'Claim denials and appeals',
  'Quotas and time pressure',
  '90-day payment cycles',
]

const clearpathItems = [
  'Zero insurance forms',
  'Direct pay — no middlemen',
  'One price, one payment',
  'You set the pace',
  'Claim payment anytime',
]

export default function ProviderComparison() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Traditional */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-[32px] p-8 md:p-10"
        >
          <h3 className="text-2xl font-bold text-gray-400 mb-6">Traditional Practice</h3>
          <ul className="space-y-4">
            {traditionalItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-500">
                <span className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center text-red-500 font-bold text-sm flex-shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* ClearPath */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-black rounded-[32px] p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 100% 100%, rgba(16,185,129,0.2) 0%, transparent 60%)' }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold gradient-text-provider mb-6">ClearPath</h3>
            <ul className="space-y-4">
              {clearpathItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <span className="w-7 h-7 bg-provider-green/20 rounded-full flex items-center justify-center text-provider-green font-bold text-sm flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
