'use client'

import { motion } from 'framer-motion'

export default function PatientHero() {
  return (
    <section className="relative min-h-[700px] rounded-[40px] mx-4 mt-20 overflow-hidden flex items-center justify-center pb-48" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}>
      {/* Centered Orb Glow */}
      <div 
        className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(74,222,128,0.45) 0%, rgba(167,139,250,0.25) 35%, rgba(251,146,60,0.15) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Secondary glow accents */}
      <div 
        className="absolute w-[300px] h-[300px] top-[20%] left-[15%]"
        style={{ 
          background: 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, transparent 60%)',
          filter: 'blur(50px)'
        }}
      />
      <div 
        className="absolute w-[250px] h-[250px] bottom-[25%] right-[15%]"
        style={{ 
          background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 60%)',
          filter: 'blur(45px)'
        }}
      />
      
      {/* Content - Centered */}
      <div className="relative z-10 px-8 py-20 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white/80 text-sm font-medium px-6 py-3 rounded-full mb-12"
        >
          <span className="w-2.5 h-2.5 bg-patient-green rounded-full" style={{ boxShadow: '0 0 12px #4ADE80, 0 0 24px #4ADE80' }} />
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
