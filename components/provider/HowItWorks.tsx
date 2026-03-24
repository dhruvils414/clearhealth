'use client'

import { motion } from 'framer-motion'

const steps = [
  { 
    number: '1', 
    title: 'Apply', 
    description: 'Quick application. We review within 48 hours.',
    aiFeature: null,
    color: 'text-provider-blue',
    bgColor: 'bg-provider-blue/10',
  },
  { 
    number: '2', 
    title: 'Set up', 
    description: 'Add your schedule, rates, and preferences.',
    aiFeature: null,
    color: 'text-provider-green',
    bgColor: 'bg-provider-green/10',
  },
  { 
    number: '3', 
    title: 'See patients', 
    description: 'AI prepares intake summaries. You focus on care, not paperwork.',
    aiFeature: 'AI Intake & Summaries',
    color: 'text-provider-purple',
    bgColor: 'bg-provider-purple/10',
  },
  { 
    number: '4', 
    title: 'Get paid', 
    description: 'Claim payment anytime after each visit.',
    aiFeature: null,
    color: 'text-provider-amber',
    bgColor: 'bg-provider-amber/10',
  },
]

const aiFeatures = [
  {
    icon: '📋',
    title: 'AI Intake Summary',
    description: 'Patient pre-visit form → structured summary ready before they walk in.',
  },
  {
    icon: '📊',
    title: 'Pre-Visit Summary',
    description: 'Last visit recap, follow-up responses, health trends — know your patient in 30 seconds.',
  },
  {
    icon: '💬',
    title: 'Patient Messaging AI',
    description: 'AI drafts chart-aware responses. You approve with one tap. 10 min → 10 sec.',
  },
]

export default function ProviderHowItWorks() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
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
          className="section-title text-gray-900 mb-4"
        >
          How it works
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto"
        >
          AI handles the busywork so you can focus on patients.
        </motion.p>
      </div>
      
      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
              <span className={`text-4xl font-extrabold ${step.color}`} style={{ letterSpacing: '-2px' }}>
                {step.number}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-2">
              {step.description}
            </p>
            {step.aiFeature && (
              <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                🤖 {step.aiFeature}
              </span>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* AI Features Detail */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black rounded-[32px] p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 100% at 0% 0%, rgba(59,130,246,0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(16,185,129,0.15) 0%, transparent 50%)' }} />
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-8 text-center" style={{ letterSpacing: '-1px' }}>
            AI that works for you
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <div key={feature.title} className="text-center md:text-left">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
