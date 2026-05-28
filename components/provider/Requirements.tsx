'use client'

import { motion } from 'framer-motion'

const requirements = [
  {
    path: 'Practice (Multi-Provider)',
    description: 'For clinics with multiple providers',
    items: [
      { text: 'Valid business license', required: true },
      { text: 'Each provider: Active state license', required: true },
      { text: 'Each provider: Malpractice insurance ($1M/$3M recommended)', required: true },
      { text: 'Physical office location', required: true },
      { text: 'Practice admin or owner to manage account', required: true }
    ],
    color: '#4ADE80'
  },
  {
    path: 'Solo Practice',
    description: 'For individual providers with their own office',
    items: [
      { text: 'Active state license in your discipline', required: true },
      { text: 'Malpractice insurance ($1M/$3M recommended)', required: true },
      { text: 'Physical office address', required: true },
      { text: 'NPI number (if applicable)', required: false }
    ],
    color: '#22C55E'
  },
  {
    path: 'Independent Provider',
    description: 'For mobile, home-based, or telehealth providers',
    items: [
      { text: 'Active state license in your discipline', required: true },
      { text: 'Malpractice insurance ($1M/$3M recommended)', required: true },
      { text: 'Reliable transportation (for home visits)', required: false },
      { text: 'HIPAA-compliant setup (for telehealth)', required: false }
    ],
    color: '#10B981'
  }
]

const providerTypes = [
  'Physicians (MD/DO)',
  'Nurse Practitioners (NP)',
  'Physician Assistants (PA)',
  'Physical Therapists (PT)',
  'Occupational Therapists (OT)',
  'Mental Health Therapists (LCSW, LPC, LMFT)',
  'Psychologists',
  'Home Health Nurses (RN, LPN)',
  'Home Care Aides (with supervision)',
  'Telehealth Providers'
]

export default function Requirements() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Requirements
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            What you need to join Rivomed, based on your path.
          </p>
        </motion.div>
        
        {/* Requirements cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {requirements.map((req, index) => (
            <motion.div
              key={req.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100"
            >
              <div 
                className="w-3 h-3 rounded-full mb-4"
                style={{ backgroundColor: req.color }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">{req.path}</h3>
              <p className="text-sm text-gray-500 mb-6">{req.description}</p>
              
              <ul className="space-y-3">
                {req.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span 
                      className={`mt-0.5 text-sm ${item.required ? 'text-[#4ADE80]' : 'text-gray-400'}`}
                    >
                      {item.required ? '✓' : '○'}
                    </span>
                    <span className={`text-sm ${item.required ? 'text-gray-700' : 'text-gray-500'}`}>
                      {item.text}
                      {!item.required && <span className="text-gray-400 ml-1">(if applicable)</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Provider types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0a0a] rounded-2xl p-8 sm:p-12"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Who Can Join
          </h3>
          <p className="text-white/50 text-center mb-8">
            We welcome licensed healthcare providers across specialties
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {providerTypes.map((type, index) => (
              <span 
                key={index}
                className="bg-white/5 border border-white/10 text-white/70 text-sm px-4 py-2 rounded-full"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
