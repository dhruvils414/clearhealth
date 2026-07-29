'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProviderHero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] pt-24 sm:pt-28 overflow-hidden flex items-center justify-center pb-24 sm:pb-32 mx-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)', marginLeft: 0, marginRight: 0, width: '100%' }}>
      {/* Centered Orb Glow */}
      <div 
        className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(74,222,128,0.35) 0%, rgba(34,197,94,0.2) 35%, rgba(16,185,129,0.1) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Content - Centered */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-12 sm:py-16 text-center max-w-4xl mx-auto">
        {/* NOW RECRUITING Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-[#4ADE80] text-black text-xs sm:text-sm font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 uppercase tracking-wider"
        >
          <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
          Now Recruiting · Launching Soon in Atlanta
        </motion.div>
        
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1] mb-6"
          style={{ letterSpacing: '-2px' }}
        >
          Join Rivomed.<br />
          <span className="text-[#4ADE80]">Direct-Pay Healthcare.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-[700px] mb-8 leading-relaxed mx-auto"
        >
          Patients see the price before they book. They pay you directly. No billing codes. No claims. No waiting 90 days.
        </motion.p>
        
        {/* Value props */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10"
        >
          <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
            <span className="text-[#4ADE80] text-lg">✓</span> Zero insurance paperwork
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
            <span className="text-[#4ADE80] text-lg">✓</span> Paid in days
          </div>
          <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
            <span className="text-[#4ADE80] text-lg">✓</span> We bring you patients
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="#join"
            className="inline-block bg-[#4ADE80] hover:bg-[#22C55E] text-black font-bold py-4 px-10 sm:py-5 sm:px-14 rounded-full text-lg sm:text-xl transition-all duration-300"
          >
            Apply to Join
          </Link>
        </motion.div>
        
        {/* Provider types */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/40 text-sm sm:text-base mt-6"
        >
          Physicians • NPs • Therapists • PTs • OTs • Home Care • Telehealth
        </motion.p>
      </div>
    </section>
  )
}
