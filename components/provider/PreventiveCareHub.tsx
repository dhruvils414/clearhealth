'use client'

import { motion } from 'framer-motion'

const features = [
  {
    icon: '📊',
    title: 'Panel Analytics',
    description: 'See vaccination rates and screening compliance across your entire patient panel at a glance.',
  },
  {
    icon: '🎯',
    title: 'Gap Identification',
    description: 'AI identifies patients overdue for preventive care. One click to send reminders.',
  },
  {
    icon: '🏛️',
    title: 'Health Dept Reporting',
    description: 'Auto-report immunizations to local health departments. No manual entry.',
  },
  {
    icon: '🚨',
    title: 'Outbreak Alerts',
    description: 'Get notified about local outbreaks and which patients need follow-up.',
  },
]

const metrics = [
  { label: 'Vaccination Rate', value: '94%', trend: '+12%' },
  { label: 'Screenings Current', value: '87%', trend: '+8%' },
  { label: 'Patients Contacted', value: '156', trend: 'this month' },
]

export default function ProviderPreventiveCareHub() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-provider-green/10 text-provider-green text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span>🏥</span> Preventive Care Hub
          </span>
          <h2 className="text-4xl md:text-[56px] font-extrabold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-3px' }}>
            Population health,<br />
            <span className="gradient-text-provider">simplified.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Track preventive care across your panel. Identify gaps. Auto-report to health departments. All in one place.
          </p>
        </motion.div>

        {/* Main Content: Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left: Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[20px] p-6 border border-gray-100 hover:border-provider-green/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] p-8 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}
          >
            {/* Orb glow */}
            <div 
              className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ 
                background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(59,130,246,0.2) 40%, transparent 60%)',
                filter: 'blur(40px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-provider-green rounded-full animate-pulse" />
                <span className="text-white/60 text-sm">Live Dashboard Preview</span>
              </div>

              {/* Metrics */}
              <div className="space-y-4 mb-8">
                {metrics.map((metric) => (
                  <div key={metric.label} className="bg-white/5 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">{metric.label}</span>
                      <span className="text-provider-green text-xs font-medium">{metric.trend}</span>
                    </div>
                    <p className="text-3xl font-bold text-white mt-1">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Action */}
              <button className="w-full bg-provider-green/20 text-provider-green font-semibold py-3 rounded-xl hover:bg-provider-green/30 transition-colors">
                View Full Dashboard →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Public Health Connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-provider-blue/10 to-provider-green/10 rounded-[24px] p-8 md:p-10 border border-provider-blue/20"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Connected to public health
              </h3>
              <p className="text-gray-600">
                Rivomed auto-reports immunization data to your local health department. No spreadsheets. No faxes. Just seamless compliance.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">Your Panel</span>
              <span className="text-gray-400">→</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">Rivomed</span>
              <span className="text-gray-400">→</span>
              <span className="bg-provider-blue text-white px-4 py-2 rounded-full font-medium">Health Dept</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
