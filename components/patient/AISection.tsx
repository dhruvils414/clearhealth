'use client'

import { motion } from 'framer-motion'

const aiFeatures = [
  {
    icon: '📋',
    title: 'Pre-Visit Prep',
    description: 'Before your appointment, AI gathers your symptoms, history, and questions. Your doctor is ready before you walk in.',
    iconClass: 'feature-icon-green',
  },
  {
    icon: '💬',
    title: 'Post-Visit Follow-up',
    description: 'AI checks in after your visit. "How\'s the new medication?" Flags concerns to your provider automatically.',
    iconClass: 'feature-icon-purple',
  },
  {
    icon: '📊',
    title: 'Health Insights',
    description: 'See your health over time. "Your anxiety symptoms decreased 40% since starting therapy." Patterns & progress.',
    iconClass: 'feature-icon-orange',
  },
  {
    icon: '🔮',
    title: 'Preventive Nudges',
    description: 'Never miss a vaccination, screening, or checkup. AI keeps your whole family on track.',
    iconClass: 'feature-icon-pink',
  },
]

const preventiveTags = [
  '💉 Vaccinations',
  '🔬 Screenings',
  '👶 Pediatric milestones',
  '🗓️ Annual checkups',
  '💊 Medication refills',
  '👵 Senior care',
]

export default function PatientAISection() {
  return (
    <section className="px-4 mb-24 md:mb-32">
      <div className="bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0 ai-section-patient" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 bg-patient-green/10 border border-patient-green/20 text-patient-green text-sm font-semibold px-5 py-2.5 rounded-full mb-6"
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
              Your AI health companion
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/40 max-w-lg mx-auto"
            >
              AI that knows your family, prepares your visits, and keeps everyone on track.
            </motion.p>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-glass p-6 md:p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`feature-icon ${feature.iconClass}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Preventive Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {preventiveTags.map((tag) => (
              <span
                key={tag}
                className="bg-patient-pink/15 text-patient-pink text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
