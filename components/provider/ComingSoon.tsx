'use client'

import { motion } from 'framer-motion'

const comingSoonFeatures = [
  {
    icon: '👥',
    title: 'Patient Portal',
    description: 'Your patients access records, book appointments, and message you — all in one place.',
  },
  {
    icon: '📝',
    title: 'Smart Notes',
    description: 'AI-assisted note-taking that learns your style. Document visits in seconds, not minutes.',
  },
  {
    icon: '📊',
    title: 'Practice Dashboard',
    description: 'See your earnings, patient volume, and schedule at a glance. Run your practice from anywhere.',
  },
]

export default function ProviderComingSoon() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-[32px] p-8 md:p-12 relative overflow-hidden"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 bg-white border border-gray-200 text-gray-600 text-sm font-semibold px-5 py-2.5 rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Coming Soon
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
              style={{ letterSpacing: '-1.5px' }}
            >
              Your complete practice platform
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 text-lg max-w-lg mx-auto"
            >
              We're building tools to help you manage patients and documentation — so you can focus on care.
            </motion.p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            {comingSoonFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Waitlist CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-10"
          >
            <p className="text-gray-500 text-sm">
              Join now and be first to access new features as we build them.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
