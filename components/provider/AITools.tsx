'use client'

import { motion } from 'framer-motion'

const aiTools = [
  {
    icon: '📋',
    title: 'Pre-Visit Summary',
    description: 'Before every appointment, AI compiles patient history, recent labs, medications, and visit reasons into a 30-second read.',
    timeSaved: '5 min/visit',
  },
  {
    icon: '🎙️',
    title: 'AI Scribe',
    description: 'Speak naturally during visits. AI transcribes and structures your notes into proper documentation.',
    timeSaved: '10 min/visit',
  },
  {
    icon: '💬',
    title: 'Message Drafts',
    description: 'Patient messages? AI drafts chart-aware responses. You review and send with one tap.',
    timeSaved: '15 min/day',
  },
  {
    icon: '📊',
    title: 'Care Gap Alerts',
    description: 'AI flags overdue screenings, vaccinations, and follow-ups for your patients automatically.',
    timeSaved: 'Proactive care',
  },
]

export default function ProviderAITools() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 bg-provider-purple/10 border border-provider-purple/20 text-provider-purple text-sm font-semibold px-5 py-2.5 rounded-full mb-6"
        >
          <span>🤖</span> AI-Powered
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900 mb-4"
        >
          AI that works for you
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 max-w-lg mx-auto"
        >
          Save 1-2 hours per day on documentation and admin. Spend it on patients — or yourself.
        </motion.p>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {aiTools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-black rounded-[28px] p-6 md:p-8 relative overflow-hidden group"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 0%, rgba(139,92,246,0.1) 0%, transparent 60%)' }} />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                  {tool.icon}
                </div>
                <span className="bg-provider-green/20 text-provider-green text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tool.timeSaved}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{tool.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
