'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/shared/Footer'

const aiFeatures = [
  {
    title: '24/7 Health Assistant',
    description: 'Get answers anytime. Our AI is always available to help with symptoms, questions, or booking — even at 2am.',
    gradient: 'from-patient-green to-emerald-500',
    glowColor: 'rgba(74,222,128,0.3)',
    messages: [
      { from: 'user', text: "My son has a fever of 101. Should I be worried?" },
      { from: 'ai', text: "I understand that's concerning. A few quick questions: How old is your son, and how long has he had the fever?" },
      { from: 'user', text: "He's 3, started this morning" },
      { from: 'ai', text: "For a 3-year-old with a fever under 102° for less than 24 hours, this is usually manageable at home. I can book you a video visit with Dr. Patel right now — she has an opening in 15 minutes." },
    ],
  },
  {
    title: 'Pre-Visit Prep',
    description: 'AI gathers your info before the appointment so your doctor is fully prepared — no repeating your story.',
    gradient: 'from-patient-purple to-violet-500',
    glowColor: 'rgba(167,139,250,0.3)',
    messages: [
      { from: 'ai', text: "Hi! You have an appointment with Dr. Chen tomorrow at 10am. Let me help you prepare." },
      { from: 'ai', text: "What's the main reason for your visit?" },
      { from: 'user', text: "Headaches for the past 2 weeks" },
      { from: 'ai', text: "Got it. On a scale of 1-10, how severe? Any specific location?" },
      { from: 'user', text: "About a 6, mostly behind my eyes" },
      { from: 'ai', text: "Thanks! I've prepared a summary for Dr. Chen. She'll be ready to discuss treatment options right away." },
    ],
  },
  {
    title: 'Post-Visit Follow-up',
    description: "AI checks in after your visit to make sure you're on track with treatment and feeling better.",
    gradient: 'from-patient-orange to-amber-500',
    glowColor: 'rgba(251,146,60,0.3)',
    messages: [
      { from: 'ai', text: "Hi Maria! It's been 3 days since your visit. How are you feeling on the new medication?" },
      { from: 'user', text: "Much better! Headaches almost gone" },
      { from: 'ai', text: "That's great! Remember to complete the full 7-day course. Any side effects?" },
      { from: 'user', text: "A little drowsy but manageable" },
      { from: 'ai', text: "That's normal and usually improves. I'll check in again in a few days!" },
    ],
  },
  {
    title: 'Preventive Care Nudges',
    description: "AI tracks what's due for your whole family and reminds you before anything slips through the cracks.",
    gradient: 'from-patient-pink to-rose-500',
    glowColor: 'rgba(244,114,182,0.3)',
    messages: [
      { from: 'ai', text: "Hi! Quick reminder: Emma's 4-year checkup is coming up. She'll also need her pre-K vaccines." },
      { from: 'ai', text: "Would you like me to book it? Dr. Martinez has openings next week." },
      { from: 'user', text: "Yes! Tuesday works best" },
      { from: 'ai', text: "Done! Tuesday at 2pm. I've added the vaccine consent forms to your app — sign them now and skip the paperwork. ✓" },
    ],
  },
]

function IPhoneMockup({ feature, index }: { feature: typeof aiFeatures[0], index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-20`}
    >
      {/* iPhone Frame */}
      <div className="relative flex-shrink-0">
        <div 
          className="relative w-[280px] h-[570px] bg-[#1a1a1a] rounded-[52px] p-[10px]"
          style={{ boxShadow: '0 50px 100px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.1)' }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20" />
          
          {/* Screen */}
          <div className="relative w-full h-full bg-[#f5f5f5] rounded-[44px] overflow-hidden">
            {/* Status Bar */}
            <div className="h-[50px] bg-white flex items-end justify-between px-7 pb-1">
              <span className="text-[13px] font-semibold text-black">9:41</span>
              <div className="flex items-center gap-1.5 text-[10px]">📶 🔋</div>
            </div>
            
            {/* Chat Header */}
            <div className={`h-[56px] bg-gradient-to-r ${feature.gradient} flex items-center px-4`}>
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div className="ml-3">
                <p className="text-white font-semibold text-[14px]">ClearPath AI</p>
                <p className="text-white/70 text-[11px]">Always here for you</p>
              </div>
            </div>
            
            {/* Chat Messages */}
            <div className="h-[calc(100%-50px-56px-60px)] overflow-y-auto p-4 space-y-3">
              {feature.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] px-3.5 py-2.5 text-[13px] leading-[1.4] ${
                      msg.from === 'user' 
                        ? 'bg-patient-green text-white rounded-[18px] rounded-br-[4px]' 
                        : 'bg-white text-gray-800 rounded-[18px] rounded-bl-[4px] shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Input Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-white border-t border-gray-100 flex items-center px-4 gap-3">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-[13px] text-gray-400">
                Message...
              </div>
              <div className={`w-9 h-9 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center`}>
                <span className="text-white text-sm font-bold">↑</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div 
          className="absolute -inset-8 rounded-[70px] opacity-40 -z-10"
          style={{ 
            background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 60%)`,
            filter: 'blur(50px)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:text-left' : 'md:text-right'} text-center`}>
        <span className={`inline-block bg-gradient-to-r ${feature.gradient} text-white text-sm font-semibold px-5 py-2 rounded-full mb-5`}>
          {feature.title}
        </span>
        <h3 className="text-3xl md:text-[44px] font-extrabold text-gray-900 mb-5 leading-tight" style={{ letterSpacing: '-2px' }}>
          {feature.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative min-h-[500px] rounded-[40px] mx-4 mt-20 overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}>
        <div 
          className="absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ 
            background: 'radial-gradient(circle, rgba(74,222,128,0.4) 0%, rgba(167,139,250,0.2) 40%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />
        
        <div className="relative z-10 text-center px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-patient-green rounded-full animate-pulse" />
            AI-Powered Care
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[72px] font-extrabold text-white leading-[0.95] mb-6"
            style={{ letterSpacing: '-4px' }}
          >
            Meet your health
            <br />
            <span className="gradient-text-patient">assistant.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-xl mx-auto"
          >
            Available 24/7. Knows your family. Keeps everyone on track.
          </motion.p>
        </div>
      </section>
      
      {/* AI Features with iPhone Mockups */}
      <section className="py-24 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto space-y-32 md:space-y-40">
          {aiFeatures.map((feature, index) => (
            <IPhoneMockup key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-[56px] font-extrabold text-gray-900 mb-6" style={{ letterSpacing: '-3px' }}>
            Ready to meet your
            <br />
            <span className="gradient-text-patient">health assistant?</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10">
            Join ClearPath and get AI-powered care for your whole family.
          </p>
          <button className="btn-patient text-lg px-10 py-5">
            Get started free
          </button>
        </motion.div>
      </section>
      
      <Footer variant="patient" />
    </main>
  )
}
