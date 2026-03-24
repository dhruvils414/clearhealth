'use client'

import { motion } from 'framer-motion'

export default function PatientHero() {
  return (
    <section className="relative min-h-[700px] bg-black rounded-[40px] mx-4 mt-20 overflow-hidden flex items-center pb-48">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 hero-mesh-patient" />
      
      {/* Noise Texture */}
      <div className="noise-overlay" />
      
      {/* Glowing Orb */}
      <div className="glow-orb glow-orb-green w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 py-20 max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="badge-patient mb-12"
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
          One home<br />for your<br />
          <span className="gradient-text-patient">health.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-[22px] text-white/50 max-w-[440px] mb-12 leading-relaxed"
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
