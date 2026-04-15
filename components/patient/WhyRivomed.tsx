'use client'

import { motion } from 'framer-motion'

const userStories = [
  {
    emoji: '👶',
    name: 'The Sharmas',
    type: 'First-time parents',
    quote: "2am fever with a newborn — we had a doctor on video in 10 minutes. Rivomed tracks every vaccine and milestone. We just show up.",
    highlight: '24/7 when you need it',
    gradient: 'from-patient-green to-emerald-500',
    shadow: 'rgba(74,222,128,0.3)',
  },
  {
    emoji: '💼',
    name: 'David',
    type: 'Busy professional',
    quote: "I don't have time to sit on hold. Booked an appointment in 2 minutes, saw the doctor next day, paid $79. Done.",
    highlight: 'Booked in 2 minutes',
    gradient: 'from-patient-purple to-violet-500',
    shadow: 'rgba(167,139,250,0.3)',
  },
  {
    emoji: '🏠',
    name: 'Maria',
    type: 'Sandwich generation',
    quote: "I manage my kids' care AND my mom's. One app for everyone. I finally feel like I'm not dropping balls.",
    highlight: 'Whole family, one place',
    gradient: 'from-patient-orange to-amber-500',
    shadow: 'rgba(251,146,60,0.3)',
  },
  {
    emoji: '👴',
    name: 'The Chens',
    type: 'Retired couple',
    quote: "We were tired of the runaround. Clear prices, no surprise bills, and someone actually tracking our screenings.",
    highlight: 'No surprise bills',
    gradient: 'from-patient-pink to-rose-500',
    shadow: 'rgba(244,114,182,0.3)',
  },
]

const dreamPoints = [
  'See the price before you book',
  'Book same-day or next-day',
  'Doctor on call 24/7',
  'Your doctor knows your name',
  'One app for your whole family',
  'AI tracks what you need',
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
            Real families. Real stories. Healthcare that actually works for you.
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

        {/* Family Ages Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mb-10 sm:mb-16"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-4xl">👶</span>
            <span className="text-gray-300">→</span>
            <span className="text-2xl sm:text-4xl">👧</span>
            <span className="text-gray-300">→</span>
            <span className="text-2xl sm:text-4xl">👨</span>
            <span className="text-gray-300">→</span>
            <span className="text-2xl sm:text-4xl">👵</span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm font-medium sm:ml-4 mt-2 sm:mt-0">From first checkup to golden years</p>
        </motion.div>

        {/* User Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {userStories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #151515 100%)' }}
            >
              {/* Subtle glow */}
              <div 
                className="absolute w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] -top-16 sm:-top-20 -right-16 sm:-right-20 opacity-50"
                style={{ 
                  background: `radial-gradient(circle, ${story.shadow} 0%, transparent 60%)`,
                  filter: 'blur(40px)'
                }}
              />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div 
                    className={`w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br ${story.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl`}
                    style={{ boxShadow: `0 8px 16px sm:0 12px 24px ${story.shadow}` }}
                  >
                    {story.emoji}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">{story.name}</h3>
                    <p className="text-xs sm:text-sm text-white/50">{story.type}</p>
                  </div>
                </div>
                
                {/* Quote */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                  "{story.quote}"
                </p>
                
                {/* Highlight Tag */}
                <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 text-white/80 text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-patient-green rounded-full"></span>
                  {story.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

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
