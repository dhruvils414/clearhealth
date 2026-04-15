'use client'

import { motion } from 'framer-motion'

export default function ProviderCTA() {
  return (
    <section className="px-4 mb-10">
      <div className="bg-black rounded-[48px] py-20 md:py-28 px-8 text-center relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0 cta-bg-provider" />
        
        <div className="relative z-10">
          {/* Headline - 72px like unicorn */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[72px] font-extrabold text-white mb-6 leading-tight"
            style={{ letterSpacing: '-3px' }}
          >
            Ready to join<br />
            <span className="gradient-text-provider">Rivomed?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-[22px] text-white/40 mb-12 max-w-xl mx-auto"
          >
            Whether you're a solo provider or a growing practice — we're ready when you are.
          </motion.p>
          
          {/* Two CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-provider-green text-black font-extrabold py-5 px-10 rounded-full text-lg transition-all duration-300"
              style={{ boxShadow: '0 0 80px rgba(16,185,129,0.5)' }}
            >
              Join as Individual
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 hover:bg-white/15 text-white font-bold py-5 px-10 rounded-full text-lg transition-all duration-300 border border-white/20"
            >
              Register Your Practice
            </motion.button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/25 mt-8"
          >
            Approved within 48 hours · No long-term commitment
          </motion.p>
        </div>
      </div>
    </section>
  )
}
