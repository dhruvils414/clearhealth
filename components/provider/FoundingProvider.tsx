'use client'

import { motion } from 'framer-motion'

export default function FoundingProvider() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#0a0a0a] rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden"
        >
          {/* Background glow */}
          <div 
            className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              background: 'radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 60%)',
              filter: 'blur(60px)'
            }}
          />
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4ADE80]/20 text-[#4ADE80] text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#4ADE80] rounded-full animate-pulse" />
              Limited Spots
            </div>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Become a Founding Provider
            </h2>
            
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-2xl">
              We're handpicking our first providers in Atlanta. Founding providers get benefits we won't offer once we're established.
            </p>
            
            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-[#4ADE80] font-bold mb-2">First 3 Months Fee-Free</h4>
                <p className="text-white/60 text-sm">No platform fees for your first three months while you build up your patient base. No commitment after that — stay only if it's working for you.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-[#4ADE80] font-bold mb-2">First to Market</h4>
                <p className="text-white/60 text-sm">You're live from day one — seeing Rivomed patients in Atlanta while everyone else is still applying.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-[#4ADE80] font-bold mb-2">Shape the Platform</h4>
                <p className="text-white/60 text-sm">Direct input on features, workflows, and how Rivomed evolves.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-[#4ADE80] font-bold mb-2">Founding Provider Badge</h4>
                <p className="text-white/60 text-sm">Permanent badge on your profile. Early adopter credibility with patients.</p>
              </div>
            </div>
            
            {/* Spots counter */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-white/10 border-2 border-[#0a0a0a] flex items-center justify-center"
                  >
                    <span className="text-white/40 text-xs">👤</span>
                  </div>
                ))}
              </div>
              <span className="text-white/60 text-sm">Limited founding spots available in Atlanta</span>
            </div>
            
            {/* CTA */}
            <a 
              href="#join"
              className="inline-block bg-[#4ADE80] hover:bg-[#22C55E] text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300"
            >
              Apply as Founding Provider
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
