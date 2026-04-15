'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PatientHero() {
  return (
    <section className="relative min-h-[480px] sm:min-h-[540px] md:min-h-[600px] pt-24 sm:pt-28 overflow-hidden flex items-center justify-center pb-12 sm:pb-16 md:pb-20 mx-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)', marginLeft: 0, marginRight: 0, width: '100%' }}>
      {/* Centered Orb Glow */}
      <div 
        className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(74,222,128,0.45) 0%, rgba(167,139,250,0.25) 35%, rgba(251,146,60,0.15) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Secondary glow accents - hidden on mobile for performance */}
      <div 
        className="absolute w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] top-[20%] left-[10%] sm:left-[15%] hidden sm:block"
        style={{ 
          background: 'radial-gradient(circle, rgba(244,114,182,0.3) 0%, transparent 60%)',
          filter: 'blur(50px)'
        }}
      />
      <div 
        className="absolute w-[125px] sm:w-[175px] md:w-[250px] h-[125px] sm:h-[175px] md:h-[250px] bottom-[25%] right-[10%] sm:right-[15%] hidden sm:block"
        style={{ 
          background: 'radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 60%)',
          filter: 'blur(45px)'
        }}
      />
      
      {/* Content - Centered */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white/80 text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 md:mb-12"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-patient-green rounded-full" style={{ boxShadow: '0 0 12px #4ADE80, 0 0 24px #4ADE80' }} />
          Soon Accepting Families!
        </motion.div>
        
        {/* Headline - responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[88px] font-extrabold text-white leading-[0.95] mb-4 sm:mb-6 md:mb-8"
          style={{ letterSpacing: '-2px' }}
        >
          Healthcare.<br />
          <span className="gradient-text-patient">Revived.</span>
        </motion.h1>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-3 sm:mb-4"
        >
          Your health. Your terms.
        </motion.p>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/50 max-w-[580px] mb-8 sm:mb-10 md:mb-12 leading-relaxed mx-auto px-2"
        >
          Healthcare that works for you — not the other way around. Clear prices. Simple access. Care when you need it.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/waitlist?type=patient" className="btn-patient inline-block text-base sm:text-lg py-4 px-8 sm:py-5 sm:px-12">
            Join the waitlist
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
