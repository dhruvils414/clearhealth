'use client'

import { motion } from 'framer-motion'

export default function PatientHero() {
  return (
    <section className="relative min-h-[700px] bg-black rounded-[40px] mx-4 mt-20 overflow-hidden flex items-center justify-center pb-48">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 hero-mesh-patient" />
      
      {/* Noise Texture */}
      <div className="noise-overlay" />
      
      {/* Glowing Orb */}
      <div className="glow-orb glow-orb-green w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Content - Centered */}
      <div className="relative z-10 px-8 py-20 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge-patient mb-12 inline-flex"
        >
          <span className="badge-dot-patient" />
          Now accepting families
        </motion.div>
        
        {/* Headline - 88px like unicorn design */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-[88px] font-extrabold text-white leading-[0.95] mb-8"
          style={{ letterSpacing: '-5px' }}
        >
          One home for your<br />
          <span className="gradient-text-patient">health.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-[22px] text-white/50 max-w-[540px] mb-12 leading-relaxed mx-auto"
        >
          Your whole family. Clear prices. Doctors who know you. AI that keeps you on track.
        </motion.p>
        
        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-patient"
        >
          Start your journey
        </motion.button>
      </div>
    </section>
  )
}
