'use client'

import { motion } from 'framer-motion'

const comparisonData = [
  {
    category: 'Get paid',
    traditional: '60-90 days',
    clearpath: 'Withdraw anytime',
  },
  {
    category: 'Prior authorizations',
    traditional: '43/week average',
    clearpath: 'Zero',
  },
  {
    category: 'Claim denials to fight',
    traditional: 'Constant',
    clearpath: 'None',
  },
  {
    category: 'Admin staff needed',
    traditional: '2-4 per physician',
    clearpath: 'Zero',
  },
  {
    category: 'Schedule control',
    traditional: 'Corporate mandates',
    clearpath: '100% yours',
  },
]

export default function ProviderComparison() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-purple"
        >
          The Math
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900"
        >
          Insurance practice vs. ClearPath
        </motion.h2>
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-200 rounded-[32px] overflow-hidden"
      >
        {/* Header Row */}
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
          <div className="p-5 md:p-6">
            <span className="text-gray-400 text-sm font-medium"></span>
          </div>
          <div className="p-5 md:p-6 text-center border-l border-gray-200">
            <span className="text-gray-500 font-semibold">Traditional Practice</span>
          </div>
          <div className="p-5 md:p-6 text-center bg-black">
            <span className="text-white font-semibold">ClearPath</span>
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((row, index) => (
          <div key={row.category} className={`grid grid-cols-3 ${index < comparisonData.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div className="p-5 md:p-6">
              <span className="text-gray-700 font-medium text-sm md:text-base">{row.category}</span>
            </div>
            <div className="p-5 md:p-6 text-center border-l border-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm md:text-base">{row.traditional}</span>
            </div>
            <div className="p-5 md:p-6 text-center bg-black/[0.02] flex items-center justify-center">
              <span className="text-provider-green font-semibold text-sm md:text-base">{row.clearpath}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mt-10"
      >
        <p className="text-gray-500 text-lg mb-4">
          Less overhead. More take-home. More time for patients.
        </p>
      </motion.div>
    </section>
  )
}
