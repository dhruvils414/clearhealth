'use client'

import { motion } from 'framer-motion'

const stats = [
  { 
    label: 'All ages welcome', 
    color: '#4ADE80',
    bgColor: '#DCFCE7',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="10" r="5" fill="#4ADE80"/>
        <circle cx="10" cy="14" r="3.5" fill="#22C55E"/>
        <circle cx="30" cy="14" r="3.5" fill="#22C55E"/>
        <path d="M20 17c-5 0-9 3.5-9 7v3h18v-3c0-3.5-4-7-9-7z" fill="#4ADE80"/>
        <path d="M10 19c-3.5 0-5 2.5-5 5v3h7v-5c0-1 .2-2 .5-3H10z" fill="#22C55E"/>
        <path d="M30 19c3.5 0 5 2.5 5 5v3h-7v-5c0-1-.2-2-.5-3H30z" fill="#22C55E"/>
      </svg>
    )
  },
  { 
    label: 'Clear prices. No games.', 
    color: '#A78BFA',
    bgColor: '#EDE9FE',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="10" width="32" height="20" rx="3" fill="#A78BFA"/>
        <circle cx="10" cy="20" r="3" fill="white"/>
        <path d="M20 14v2M20 24v2M17 17h6c1.1 0 2 .9 2 2s-.9 2-2 2h-3c-1.1 0-2 .9-2 2s.9 2 2 2h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  { 
    label: 'Day to be seen', 
    color: '#FB923C',
    bgColor: '#FED7AA',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="4" fill="#FB923C"/>
        <rect x="10" y="12" width="20" height="18" rx="2" fill="white"/>
        <rect x="12" y="8" width="3" height="6" rx="1" fill="white"/>
        <rect x="25" y="8" width="3" height="6" rx="1" fill="white"/>
        <path d="M18 18h4v2h-4zM18 22h4v4h-4z" fill="#FB923C"/>
      </svg>
    )
  },
  { 
    label: 'One team for life', 
    color: '#F472B6',
    bgColor: '#FCE7F3',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 20c0-3.3 2.7-6 6-6 2 0 3.8 1 4.8 2.5.4-.5.8-1 1.4-1.4C25.2 14.4 26.5 14 28 14c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.5 0-2.8-.4-3.8-1.1-.6-.4-1-.9-1.4-1.4-1 1.5-2.8 2.5-4.8 2.5-3.3 0-6-2.7-6-6z" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    )
  },
]

export default function PatientStats() {
  return (
    <section className="relative z-20 -mt-24 px-4 md:px-8 mb-10 md:mb-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="stat-card flex flex-col items-center py-6"
          >
            <div 
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: stat.bgColor }}
            >
              {stat.icon}
            </div>
            <p className="text-sm text-gray-600 font-medium text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
