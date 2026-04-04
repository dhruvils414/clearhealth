'use client'

import { motion } from 'framer-motion'

export default function PatientServices() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-orange"
        >
          Everything You Need
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900"
        >
          All in one place
        </motion.h2>
      </div>
      
      {/* Bento Grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {/* Primary Care - Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-8 bg-black rounded-[32px] p-8 md:p-12 relative overflow-hidden min-h-[280px] flex flex-col justify-end"
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 20%, rgba(74,222,128,0.4) 0%, transparent 60%)' }} />
          <div className="absolute top-8 right-8 md:top-10 md:right-10 text-6xl md:text-8xl opacity-90">🩺</div>
          <div className="relative z-10">
            <span className="inline-block bg-patient-green/20 border border-patient-green/30 text-patient-green text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Primary Care
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-3" style={{ letterSpacing: '-1px' }}>
              Your first call for everything
            </h3>
            <p className="text-white/60 max-w-sm text-sm md:text-base">
              Checkups, sick visits, chronic care — for every age.
            </p>
          </div>
        </motion.div>
        
        {/* Mental Health */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="col-span-12 md:col-span-4 bg-gradient-to-b from-patient-purple to-purple-600 rounded-[32px] p-6 md:p-8"
        >
          <div className="text-5xl md:text-6xl mb-5">🧠</div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Mental Health</h3>
          <p className="text-white/85 text-sm md:text-base">Therapy & support, connected to your whole picture.</p>
        </motion.div>
        
        {/* Physical Wellness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="col-span-12 md:col-span-4 bg-gradient-to-b from-patient-orange to-orange-600 rounded-[32px] p-6 md:p-8"
        >
          <div className="text-5xl md:text-6xl mb-5">💪</div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2">Physical Wellness</h3>
          <p className="text-white/85 text-sm md:text-base">PT, OT, movement — stay strong at every age.</p>
        </motion.div>
        
        {/* Telehealth - Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="col-span-12 md:col-span-8 bg-gray-50 border border-gray-100 rounded-[32px] p-8 md:p-12 flex items-center justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 100% 50%, rgba(59,130,246,0.12) 0%, transparent 70%)' }} />
          <div className="relative z-10 max-w-sm">
            <span className="inline-block bg-blue-500/15 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Telehealth
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3" style={{ letterSpacing: '-0.5px' }}>
              Care from anywhere
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Video visits with your doctor — no commute, no waiting room.
            </p>
          </div>
          <div className="text-6xl md:text-8xl opacity-80 hidden md:block">📱</div>
        </motion.div>
      </div>
    </section>
  )
}
