'use client'

import { motion } from 'framer-motion'

const paths = [
  {
    id: 'practice',
    title: 'Practice',
    subtitle: 'Multi-Provider Clinic',
    description: 'You run a clinic with multiple providers. List your team on Rivomed and fill empty appointment slots with new patients.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    examples: ['Family practice with 3 doctors', 'PT clinic with 5 therapists', 'Mental health group practice'],
    features: ['List multiple providers under one account', 'Centralized billing & payouts', 'Fill empty slots across your team'],
    color: '#4ADE80'
  },
  {
    id: 'solo',
    title: 'Solo Practice',
    subtitle: 'Independent Provider with Office',
    description: 'You have your own office and want more patients. List yourself on Rivomed and we send patients directly to your practice.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    examples: ['Solo physician with clinic', 'Independent therapist with office', 'PT with private practice'],
    features: ['Your practice, your schedule', 'Patients come to your office', 'Keep your existing workflow'],
    color: '#22C55E'
  },
  {
    id: 'independent',
    title: 'Independent Provider',
    subtitle: 'Mobile or Telehealth',
    description: 'You don\'t have an office — you go to patients or see them virtually. Build your patient base with zero overhead.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    examples: ['Home care nurse', 'House call physician', 'Telehealth therapist', 'Mobile PT'],
    features: ['No office needed', 'Go to patients or see them virtually', 'Work on your own schedule'],
    color: '#10B981'
  }
]

export default function ThreePaths() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Three Ways to Join
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you run a clinic, have a solo practice, or work independently — there's a path for you.
          </p>
        </motion.div>
        
        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${path.color}15`, color: path.color }}
              >
                {path.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{path.title}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: path.color }}>{path.subtitle}</p>
              
              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{path.description}</p>
              
              {/* Examples */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Examples</p>
                <ul className="space-y-1">
                  {path.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Features */}
              <div className="pt-6 border-t border-gray-100">
                <ul className="space-y-2">
                  {path.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <span style={{ color: path.color }} className="mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
