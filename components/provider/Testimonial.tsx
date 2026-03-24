'use client'

import { motion } from 'framer-motion'

export default function ProviderTestimonial() {
  return (
    <section className="px-4 md:px-8 mb-24 md:mb-32 text-center max-w-4xl mx-auto">
      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center gap-2 mb-8"
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-3xl md:text-4xl text-amber-400">★</span>
        ))}
      </motion.div>
      
      {/* Quote - 44px like unicorn design */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-[44px] font-bold text-gray-900 mb-10 leading-snug"
        style={{ letterSpacing: '-1.5px' }}
      >
        "I finally feel like a doctor again, not a billing department."
      </motion.blockquote>
      
      {/* Attribution */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-500"
      >
        Dr. Sarah Chen — Family Medicine
      </motion.p>
    </section>
  )
}
