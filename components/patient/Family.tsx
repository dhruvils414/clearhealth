'use client'

import { motion } from 'framer-motion'

const familyMembers = [
  { emoji: '👶', label: 'Baby', age: '0-2', bg: 'bg-gradient-to-br from-patient-green to-green-600', shadow: 'rgba(74,222,128,0.4)' },
  { emoji: '👧', label: 'Kids', age: '3-12', bg: 'bg-gradient-to-br from-patient-purple to-purple-600', shadow: 'rgba(167,139,250,0.4)' },
  { emoji: '👨', label: 'Adults', age: '18-64', bg: 'bg-gradient-to-br from-patient-orange to-orange-600', shadow: 'rgba(251,146,60,0.4)' },
  { emoji: '👵', label: 'Seniors', age: '65+', bg: 'bg-gradient-to-br from-patient-pink to-pink-600', shadow: 'rgba(244,114,182,0.4)' },
]

export default function PatientFamily() {
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-pink"
        >
          For Your Whole Family
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-[64px] font-extrabold text-gray-900 mb-6 leading-[1.05]"
          style={{ letterSpacing: '-3px' }}
        >
          Everyone you love.<br />
          <span className="gradient-text-patient">One home.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto"
        >
          From your baby's first checkup to your parents' ongoing care. 
          One team that knows your whole family's story.
        </motion.p>
      </div>
      
      {/* Family Members */}
      <div className="flex justify-center gap-6 md:gap-10 mb-12">
        {familyMembers.map((member, index) => (
          <motion.div
            key={member.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div 
              className={`w-20 h-20 md:w-28 md:h-28 ${member.bg} rounded-full flex items-center justify-center text-4xl md:text-5xl mb-3`}
              style={{ boxShadow: `0 20px 40px ${member.shadow}` }}
            >
              {member.emoji}
            </div>
            <p className="text-base md:text-lg font-bold text-gray-900">{member.label}</p>
            <p className="text-sm text-gray-500">{member.age}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Value Props */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-50 via-purple-50 to-pink-50 rounded-[32px] p-8 md:p-12"
      >
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold gradient-text-green mb-2">1</p>
            <p className="text-lg font-bold text-gray-900 mb-1">One account</p>
            <p className="text-gray-600 text-sm">Everyone under one roof</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold gradient-text-purple mb-2">1</p>
            <p className="text-lg font-bold text-gray-900 mb-1">One care team</p>
            <p className="text-gray-600 text-sm">Doctors who know your story</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold gradient-text-pink mb-2">∞</p>
            <p className="text-lg font-bold text-gray-900 mb-1">For life</p>
            <p className="text-gray-600 text-sm">We grow with you</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
