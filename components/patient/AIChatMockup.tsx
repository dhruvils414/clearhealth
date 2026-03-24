'use client'

import { motion } from 'framer-motion'

const chatMockups = [
  {
    title: 'Before your visit',
    subtitle: 'AI gathers info so your doctor is ready',
    color: 'patient-green',
    bgGradient: 'from-green-50 to-green-100',
    messages: [
      { type: 'ai', text: "Hi! Your appointment with Dr. Patel is tomorrow at 10am. Let's get you ready." },
      { type: 'ai', text: "What's the main reason for your visit today?" },
      { type: 'user', text: "I've been having headaches for about a week" },
      { type: 'ai', text: "Got it. A few quick questions so Dr. Patel can help you faster..." },
    ],
    chips: ['Front of head', 'Back of head', 'Both sides'],
  },
  {
    title: 'After your visit',
    subtitle: 'AI checks in to make sure you are on track',
    color: 'patient-purple',
    bgGradient: 'from-purple-50 to-purple-100',
    messages: [
      { type: 'ai', text: "Hey! It's been 3 days since you started the new medication. How are you feeling?" },
      { type: 'user', text: "Much better actually!" },
      { type: 'ai', text: "Great to hear! I'll let Dr. Patel know. Any side effects?" },
    ],
    chips: ['No side effects', 'Some nausea', 'Other'],
  },
  {
    title: 'Staying ahead',
    subtitle: 'AI reminds you of important care',
    color: 'patient-pink',
    bgGradient: 'from-pink-50 to-pink-100',
    messages: [
      { type: 'ai', text: "Hi! Emma's 12-month vaccines are coming up. She'll need MMR, Varicella, and Hep A." },
      { type: 'ai', text: "Would you like to book an appointment?" },
    ],
    chips: ['Book appointment', 'Remind me later'],
    card: { title: "Emma's 12-month vaccines", items: ['MMR', 'Varicella', 'Hep A'] },
  },
]

export default function PatientAIChatMockup() {
  return (
    <section className="px-4 mb-24 md:mb-32">
      <div className="bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 100% at 0% 0%, rgba(74,222,128,0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(167,139,250,0.15) 0%, transparent 50%)' }} />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[4px] uppercase mb-4 text-white/40"
            >
              See It In Action
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-[56px] font-extrabold text-white mb-4"
              style={{ letterSpacing: '-2px' }}
            >
              AI that simplifies
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/40 max-w-lg mx-auto"
            >
              Less paperwork. Fewer phone calls. More time with your doctor.
            </motion.p>
          </div>
          
          {/* Phone Mockups */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {chatMockups.map((mockup, index) => (
              <motion.div
                key={mockup.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex flex-col"
              >
                {/* Label */}
                <div className="text-center mb-4">
                  <p className={`text-${mockup.color} font-bold text-sm mb-1`}>{mockup.title}</p>
                  <p className="text-white/40 text-xs">{mockup.subtitle}</p>
                </div>
                
                {/* Phone Frame */}
                <div className={`bg-gradient-to-b ${mockup.bgGradient} rounded-[32px] p-4 flex-1`}>
                  {/* Phone notch */}
                  <div className="w-24 h-6 bg-black rounded-full mx-auto mb-4" />
                  
                  {/* Chat messages */}
                  <div className="space-y-3">
                    {mockup.messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          msg.type === 'user' 
                            ? 'bg-gray-900 text-white' 
                            : 'bg-white text-gray-900 shadow-sm'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    
                    {/* Info card */}
                    {mockup.card && (
                      <div className="bg-white rounded-xl p-3 shadow-sm">
                        <p className="font-bold text-sm text-gray-900 mb-2">{mockup.card.title}</p>
                        <div className="flex gap-2">
                          {mockup.card.items.map((item) => (
                            <span key={item} className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-1 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Quick reply chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {mockup.chips.map((chip) => (
                        <button 
                          key={chip} 
                          className="bg-white text-gray-700 text-xs font-medium px-3 py-2 rounded-full shadow-sm border border-gray-200"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/30 text-sm mt-10"
          >
            Your doctors provide the care. AI just makes it easier to get there.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
