'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProviderHero() {
  return (
    <section className="relative min-h-[550px] sm:min-h-[650px] md:min-h-[800px] pt-24 sm:pt-28 overflow-hidden flex items-center justify-center pb-24 sm:pb-32 md:pb-48 mx-0" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)', marginLeft: 0, marginRight: 0, width: '100%' }}>
      {/* Centered Orb Glow */}
      <div 
        className="absolute w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(59,130,246,0.25) 35%, rgba(139,92,246,0.15) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Secondary glow accents - hidden on mobile for performance */}
      <div 
        className="absolute w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] top-[20%] left-[10%] sm:left-[15%] hidden sm:block"
        style={{ 
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)',
          filter: 'blur(50px)'
        }}
      />
      <div 
        className="absolute w-[125px] sm:w-[175px] md:w-[250px] h-[125px] sm:h-[175px] md:h-[250px] bottom-[25%] right-[10%] sm:right-[15%] hidden sm:block"
        style={{ 
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 60%)',
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
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white/80 text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 md:mb-10"
        >
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-provider-green rounded-full" style={{ boxShadow: '0 0 12px #10B981, 0 0 24px #10B981' }} />
          Individuals & practices welcome
        </motion.div>
        
        {/* Headline - responsive sizing */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-extrabold text-white leading-[0.95] mb-4 sm:mb-5 md:mb-6"
          style={{ letterSpacing: '-2px' }}
        >
          Keep 70%.<br />
          <span className="gradient-text-provider">Get paid today.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white/50 max-w-[600px] mb-6 sm:mb-7 md:mb-8 leading-relaxed mx-auto px-2"
        >
          Whether you're an independent provider or a growing practice — we send you patients, handle the paperwork, and pay you same-day.
        </motion.p>
        
        {/* Value props row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm">
            <span className="text-provider-green">✓</span> Zero insurance paperwork
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm">
            <span className="text-provider-green">✓</span> We bring you patients
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/70 text-xs sm:text-sm">
            <span className="text-provider-green">✓</span> Same-day payment
          </div>
        </motion.div>
        
        {/* Two CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link
            href="/waitlist?type=provider"
            className="btn-provider inline-block text-base sm:text-lg py-4 px-8 sm:py-5 sm:px-12 w-full sm:w-auto text-center"
          >
            Join as Individual
          </Link>
          <Link
            href="/waitlist?type=practice"
            className="bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-8 sm:py-5 sm:px-12 rounded-full text-base sm:text-lg transition-all duration-300 border border-white/20 inline-block w-full sm:w-auto text-center"
          >
            Register Your Practice
          </Link>
        </motion.div>
        
        {/* Small helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/30 text-xs sm:text-sm mt-4 sm:mt-6"
        >
          Doctors • NPs • Therapists • Clinics • Medical Groups
        </motion.p>
      </div>
    </section>
  )
}
