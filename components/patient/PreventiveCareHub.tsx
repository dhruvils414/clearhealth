'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    icon: '💉',
    title: 'Vaccinations',
    description: 'Track all shots for your whole family. AI reminds you when due. Auto-reports to local health departments.',
    color: 'rgba(74,222,128,0.15)',
    borderColor: 'rgba(74,222,128,0.3)',
  },
  {
    icon: '🔬',
    title: 'Screenings',
    description: 'Colonoscopies, mammograms, skin checks, and more — scheduled and tracked so nothing slips.',
    color: 'rgba(167,139,250,0.15)',
    borderColor: 'rgba(167,139,250,0.3)',
  },
  {
    icon: '👶',
    title: 'Pediatric Milestones',
    description: 'Developmental checkups, growth tracking, and age-appropriate care for every stage.',
    color: 'rgba(251,146,60,0.15)',
    borderColor: 'rgba(251,146,60,0.3)',
  },
  {
    icon: '🩺',
    title: 'Annual Wellness',
    description: 'Physicals, bloodwork reminders, and preventive checkups — all on autopilot.',
    color: 'rgba(59,130,246,0.15)',
    borderColor: 'rgba(59,130,246,0.3)',
  },
  {
    icon: '💊',
    title: 'Medication Management',
    description: 'Refill reminders, interaction alerts, and adherence tracking for the whole family.',
    color: 'rgba(244,114,182,0.15)',
    borderColor: 'rgba(244,114,182,0.3)',
  },
  {
    icon: '👴',
    title: 'Senior Care',
    description: 'Fall risk assessments, cognitive checks, bone density tracking, and age-specific care.',
    color: 'rgba(16,185,129,0.15)',
    borderColor: 'rgba(16,185,129,0.3)',
  },
]

export default function PreventiveCareHub() {
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
          <span className="inline-flex items-center gap-2 bg-patient-green/10 text-patient-green text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span>🏥</span> Preventive Care Hub
          </span>
          <h2 className="text-4xl md:text-[56px] font-extrabold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-3px' }}>
            Stay healthy for life.
            <br />
            <span className="gradient-text-patient">Not just when you're sick.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            AI tracks everything for your whole family — vaccinations, screenings, checkups, medications — and reminds you before anything is due.
          </p>
        </motion.div>

        {/* 6 Pillars Grid - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="h-full rounded-[24px] p-6 md:p-8 transition-all duration-300 group-hover:scale-[1.02] overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, #0a0a0a 0%, #151515 100%)`,
                  border: `1px solid ${pillar.borderColor}`,
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 80% 80% at 50% 80%, ${pillar.color} 0%, transparent 60%)`,
                  }}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Feature Card - Public Health Connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] p-8 md:p-12 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}
        >
          {/* Orb glow */}
          <div 
            className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              background: 'radial-gradient(circle, rgba(74,222,128,0.35) 0%, rgba(167,139,250,0.15) 40%, transparent 60%)',
              filter: 'blur(60px)'
            }}
          />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-patient-green rounded-full animate-pulse" />
              AI-Powered Prevention
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: '-2px' }}>
              Never miss what matters.
            </h3>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              ClearPath AI knows your family's health history, age, and risk factors. It proactively reminds you about upcoming care — and automatically reports vaccinations to your local health department.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['💉 Vaccine due in 2 weeks', '🔬 Mammogram overdue', '👶 18-month checkup coming', '💊 Refill needed'].map((tag) => (
                <span key={tag} className="bg-white/10 text-white/70 text-sm px-4 py-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
