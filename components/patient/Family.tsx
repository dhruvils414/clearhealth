'use client'

import { motion } from 'framer-motion'

const familyMembers = [
  { emoji: '👶', bg: 'bg-gradient-to-br from-patient-green to-green-600', shadow: 'shadow-[0_20px_40px_rgba(74,222,128,0.4)]' },
  { emoji: '👧', bg: 'bg-gradient-to-br from-patient-purple to-purple-600', shadow: 'shadow-[0_20px_40px_rgba(167,139,250,0.4)]' },
  { emoji: '👨', bg: 'bg-gradient-to-br from-patient-orange to-orange-600', shadow: 'shadow-[0_20px_40px_rgba(251,146,60,0.4)]' },
  { emoji: '👵', bg: 'bg-gradient-to-br from-patient-pink to-pink-600', shadow: 'shadow-[0_20px_40px_rgba(244,114,182,0.4)]' },
]

export default function PatientFamily() {
  return (
    <section className="px-4 md:px-8 mb-24 md:mb-32 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label gradient-text-pink">
            For Families
          </p>
          <h2 className="text-4xl md:text-[56px] font-extrabold text-gray-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-2px' }}>
            Everyone<br />you love.<br />One home.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            From your baby's first checkup to your parents' ongoing care. One team that knows your whole family's story.
          </p>
        </motion.div>
        
        {/* Right - Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-b from-green-50 to-green-100 rounded-[48px] p-12 md:p-20 text-center"
        >
          {/* Family Avatars */}
          <div className="flex justify-center mb-8">
            {familyMembers.map((member, index) => (
              <div
                key={index}
                className={`w-20 h-20 md:w-24 md:h-24 ${member.bg} rounded-full flex items-center justify-center text-4xl md:text-5xl border-[5px] border-white ${member.shadow}`}
                style={{ marginRight: index < 3 ? '-24px' : 0, zIndex: 4 - index }}
              >
                {member.emoji}
              </div>
            ))}
          </div>
          
          <p className="text-2xl md:text-[28px] font-extrabold text-green-800" style={{ letterSpacing: '-0.5px' }}>
            One family. One team.<br />For life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
