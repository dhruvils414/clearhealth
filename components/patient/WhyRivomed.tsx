'use client'

import { motion } from 'framer-motion'

const dreamPoints = [
  'See the price before you book',
  'Book same-day or next-day',
  'Doctor on call 24/7',
  'Your doctor knows your name',
  'One app for your whole family',
  'AI tracks what you need',
]

// Life stages with emoji progression
const lifeStages = [
  { emoji: '👶', label: 'Baby' },
  { emoji: '👧', label: 'Child' },
  { emoji: '👨', label: 'Adult' },
  { emoji: '👴', label: 'Senior' },
]

export default function WhyRivomed() {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header — Lead with the Dream */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-patient-green/10 text-patient-green text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <span>✨</span> Healthcare. Revived.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6" style={{ letterSpacing: '-2px' }}>
            Built for people
            <br />
            <span className="gradient-text-patient">like you.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-2">
            Healthcare that actually works for you — from first checkup to golden years.
          </p>
        </motion.div>

        {/* Dream Points — Quick hits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {dreamPoints.map((point, index) => (
            <span 
              key={point}
              className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
            >
              {point}
            </span>
          ))}
        </motion.div>

        {/* Life Stages Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 sm:gap-4 mb-10 sm:mb-12"
        >
          {lifeStages.map((stage, index) => (
            <div key={stage.label} className="flex items-center">
              <span className="text-3xl sm:text-4xl">{stage.emoji}</span>
              {index < lifeStages.length - 1 && (
                <span className="text-gray-300 mx-2 sm:mx-3">→</span>
              )}
            </div>
          ))}
          <span className="text-sm sm:text-base text-gray-500 ml-2 sm:ml-4">From first checkup to golden years</span>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 mb-4 sm:mb-6 text-base sm:text-lg">Join the movement to revive healthcare.</p>
          <button className="btn-patient">
            Join the waitlist
          </button>
        </motion.div>
      </div>
    </section>
  )
}
