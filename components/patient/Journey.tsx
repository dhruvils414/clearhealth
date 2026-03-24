'use client'

import { motion } from 'framer-motion'

const journeySteps = [
  {
    icon: '🏠',
    title: 'Join',
    description: 'Create your family profile. Add everyone — baby to grandparents.',
    aiFeature: null,
    gradient: 'from-patient-green to-green-600',
    shadow: 'rgba(74,222,128,0.35)',
    rotate: '-3deg',
  },
  {
    icon: '📋',
    title: 'Plan',
    description: 'Book visits instantly. AI gathers your symptoms beforehand so your doctor is ready.',
    aiFeature: 'AI Pre-Visit Prep',
    gradient: 'from-patient-purple to-purple-600',
    shadow: 'rgba(167,139,250,0.35)',
    rotate: '2deg',
  },
  {
    icon: '💪',
    title: 'Thrive',
    description: 'Get care. AI checks in after visits and tracks your progress over time.',
    aiFeature: 'AI Follow-up & Insights',
    gradient: 'from-patient-orange to-orange-600',
    shadow: 'rgba(251,146,60,0.35)',
    rotate: '-2deg',
  },
  {
    icon: '🌱',
    title: 'Grow',
    description: 'Stay ahead. AI reminds you of vaccinations, screenings, and checkups.',
    aiFeature: 'AI Preventive Nudges',
    gradient: 'from-patient-pink to-pink-600',
    shadow: 'rgba(244,114,182,0.35)',
    rotate: '3deg',
  },
]

export default function PatientJourney() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
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
          className="section-title text-gray-900 mb-4"
        >
          Your health journey
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto"
        >
          AI guides you every step of the way — from booking to staying healthy for life.
        </motion.p>
      </div>
      
      {/* Journey Steps */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-24 left-[12%] right-[12%] h-1 bg-gradient-to-r from-patient-green via-patient-purple via-patient-orange to-patient-pink rounded-full opacity-30" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div 
                className={`w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br ${step.gradient} rounded-[28px] flex items-center justify-center text-4xl md:text-5xl mx-auto mb-5`}
                style={{ 
                  transform: `rotate(${step.rotate})`,
                  boxShadow: `0 24px 48px ${step.shadow}`
                }}
              >
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                {step.description}
              </p>
              
              {/* AI Badge */}
              {step.aiFeature && (
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  🤖 {step.aiFeature}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
