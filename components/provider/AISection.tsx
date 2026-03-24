'use client'

import { motion } from 'framer-motion'

const aiFeatures = [
  {
    icon: '📋',
    title: 'AI Intake Summary',
    description: 'Patient pre-visit form → structured summary. Chief complaint, history, meds, patient questions. Ready before they walk in.',
    iconClass: 'feature-icon-blue',
  },
  {
    icon: '📊',
    title: 'Pre-Visit Summary',
    description: 'Before each visit: last visit recap, follow-up responses, health trends, preventive care due. Know your patient in 30 seconds.',
    iconClass: 'feature-icon-teal',
  },
  {
    icon: '💬',
    title: 'Patient Messaging AI',
    description: 'Patient message → AI drafts chart-aware response → you approve with one tap. 10 minutes → 10 seconds.',
    iconClass: 'feature-icon-provider-purple',
  },
]

export default function ProviderAISection() {
  return (
    <section className="px-4 mb-24 md:mb-32">
      <div className="bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0 ai-section-provider" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 bg-provider-green/10 border border-provider-green/20 text-provider-green text-sm font-semibold px-5 py-2.5 rounded-full mb-6"
            >
              <span>✨</span> Powered by AI
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[56px] font-extrabold text-white mb-4"
              style={{ letterSpacing: '-2px' }}
            >
              AI that works for you
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/40 max-w-lg mx-auto"
            >
              Less admin. More medicine. AI handles the busywork so you can focus on patients.
            </motion.p>
          </div>
          
          {/* Features Grid - 3 columns */}
          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-6 md:p-8"
              >
                <div className={`feature-icon ${feature.iconClass} mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Connected System Callout */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 text-center"
          >
            <p className="text-white/60 text-sm md:text-base">
              <span className="text-provider-green font-semibold">Connected loop:</span>{' '}
              Patient Pre-Visit → Your Intake Summary → Visit → Post-Visit Follow-up → Health Insights → Repeat
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
