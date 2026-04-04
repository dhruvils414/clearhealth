'use client'

import { motion } from 'framer-motion'

export default function ProviderHero() {
  return (
    <section className="relative min-h-[800px] rounded-[40px] mx-4 mt-20 overflow-hidden flex items-center justify-center pb-48" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}>
      {/* Centered Orb Glow */}
      <div 
        className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ 
          background: 'radial-gradient(circle, rgba(16,185,129,0.45) 0%, rgba(59,130,246,0.25) 35%, rgba(139,92,246,0.15) 55%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
      
      {/* Secondary glow accents */}
      <div 
        className="absolute w-[300px] h-[300px] top-[20%] left-[15%]"
        style={{ 
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 60%)',
          filter: 'blur(50px)'
        }}
      />
      <div 
        className="absolute w-[250px] h-[250px] bottom-[25%] right-[15%]"
        style={{ 
          background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 60%)',
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
          className="inline-flex items-center gap-3 bg-white/[0.05] backdrop-blur-sm border border-white/[0.1] text-white/80 text-sm font-medium px-6 py-3 rounded-full mb-10"
        >
          <span className="w-2.5 h-2.5 bg-provider-green rounded-full" style={{ boxShadow: '0 0 12px #10B981, 0 0 24px #10B981' }} />
          Individuals & practices welcome
        </motion.div>
        
        {/* Headline - 80px like unicorn design */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-[80px] font-extrabold text-white leading-[0.95] mb-6"
          style={{ letterSpacing: '-4px' }}
        >
          Keep 70%.<br />
          <span className="gradient-text-provider">Get paid today.</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-[22px] text-white/50 max-w-[600px] mb-8 leading-relaxed mx-auto"
        >
          Whether you're an independent provider or a growing practice — we send you patients, handle the paperwork, and pay you same-day.
        </motion.p>
        
        {/* Value props row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
        >
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-provider-green">✓</span> Zero insurance paperwork
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-provider-green">✓</span> We bring you patients
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="text-provider-green">✓</span> Same-day payment
          </div>
        </motion.div>
        
        {/* Two CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-provider"
          >
            Join as Individual
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 hover:bg-white/15 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/20"
          >
            Register Your Practice
          </motion.button>
        </motion.div>
        
        {/* Small helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/30 text-sm mt-6"
        >
          Doctors • NPs • Therapists • Clinics • Medical Groups
        </motion.p>
      </div>
    </section>
  )
}
