'use client'

import { motion } from 'framer-motion'

export default function PatientAIMockups() {
  return (
    <section className="px-4 mb-24 md:mb-32">
      <div className="bg-black rounded-[48px] p-8 md:p-16 relative overflow-hidden max-w-6xl mx-auto">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 100% at 0% 0%, rgba(74,222,128,0.2) 0%, transparent 50%), radial-gradient(ellipse 60% 80% at 100% 100%, rgba(167,139,250,0.15) 0%, transparent 50%)' }} />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-white mb-4"
              style={{ letterSpacing: '-2px' }}
            >
              AI that simplifies your journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/40 max-w-lg mx-auto"
            >
              You focus on your health. AI handles the details.
            </motion.p>
          </div>
          
          {/* Phone Mockups */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Pre-Visit Prep */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[32px] p-4 shadow-2xl"
            >
              {/* Phone Header */}
              <div className="bg-gray-100 rounded-t-[24px] px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">9:41</span>
                <div className="w-16 h-5 bg-black rounded-full"></div>
                <span className="text-xs text-gray-500">100%</span>
              </div>
              
              {/* Chat Content */}
              <div className="bg-gray-50 p-4 min-h-[280px]">
                <p className="text-center text-xs text-gray-400 mb-4">Today</p>
                
                {/* AI Message */}
                <div className="mb-4">
                  <div className="bg-patient-green/10 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <p className="text-sm text-gray-800">Hi Sarah! 👋 Your appointment with Dr. Patel is tomorrow at 10am.</p>
                    <p className="text-sm text-gray-800 mt-2">Let's get you ready. What's the main reason for your visit?</p>
                  </div>
                </div>
                
                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white border border-patient-green text-patient-green-dark text-xs font-medium px-3 py-1.5 rounded-full">Headache</span>
                  <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">Checkup</span>
                  <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">Follow-up</span>
                </div>
                
                {/* Progress */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-1/4 h-full bg-patient-green rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400">1 of 4</span>
                </div>
              </div>
              
              {/* Label */}
              <div className="bg-patient-green text-black text-center py-3 rounded-b-[24px]">
                <p className="text-sm font-bold">📋 Pre-Visit Prep</p>
                <p className="text-xs opacity-70">Before your appointment</p>
              </div>
            </motion.div>
            
            {/* Post-Visit Follow-up */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-4 shadow-2xl"
            >
              {/* Phone Header */}
              <div className="bg-gray-100 rounded-t-[24px] px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">2:30</span>
                <div className="w-16 h-5 bg-black rounded-full"></div>
                <span className="text-xs text-gray-500">85%</span>
              </div>
              
              {/* Chat Content */}
              <div className="bg-gray-50 p-4 min-h-[280px]">
                <p className="text-center text-xs text-gray-400 mb-4">3 days after visit</p>
                
                {/* AI Message */}
                <div className="mb-4">
                  <div className="bg-patient-purple/10 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <p className="text-sm text-gray-800">Hi Sarah! 💜 How are you feeling since starting the new medication?</p>
                  </div>
                </div>
                
                {/* Quick Replies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white border border-patient-purple text-patient-purple-dark text-xs font-medium px-3 py-1.5 rounded-full">Much better!</span>
                  <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">About the same</span>
                  <span className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full">Side effects</span>
                </div>
                
                {/* User Response */}
                <div className="flex justify-end mb-3">
                  <div className="bg-patient-purple text-white rounded-2xl rounded-tr-sm p-3 max-w-[75%]">
                    <p className="text-sm">Much better! The headaches are gone 🎉</p>
                  </div>
                </div>
                
                {/* AI Response */}
                <div className="bg-patient-purple/10 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                  <p className="text-sm text-gray-800">That's great to hear! I'll let Dr. Patel know. ✨</p>
                </div>
              </div>
              
              {/* Label */}
              <div className="bg-patient-purple text-white text-center py-3 rounded-b-[24px]">
                <p className="text-sm font-bold">💬 Post-Visit Follow-up</p>
                <p className="text-xs opacity-70">AI checks in on you</p>
              </div>
            </motion.div>
            
            {/* Preventive Nudge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[32px] p-4 shadow-2xl"
            >
              {/* Phone Header */}
              <div className="bg-gray-100 rounded-t-[24px] px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">10:15</span>
                <div className="w-16 h-5 bg-black rounded-full"></div>
                <span className="text-xs text-gray-500">92%</span>
              </div>
              
              {/* Chat Content */}
              <div className="bg-gray-50 p-4 min-h-[280px]">
                <p className="text-center text-xs text-gray-400 mb-4">Today</p>
                
                {/* AI Message */}
                <div className="mb-4">
                  <div className="bg-patient-pink/10 rounded-2xl rounded-tl-sm p-3 max-w-[85%]">
                    <p className="text-sm text-gray-800">Hey! 🌸 Emma is due for her 12-month vaccinations:</p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>• MMR</li>
                      <li>• Varicella</li>
                      <li>• Hep A</li>
                    </ul>
                  </div>
                </div>
                
                {/* Booking Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-3 mb-3">
                  <p className="text-xs text-gray-500 mb-1">Next available</p>
                  <p className="text-sm font-bold text-gray-900">Mon, Mar 18 at 9:00am</p>
                  <p className="text-xs text-gray-500">with Dr. Patel</p>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 bg-patient-pink text-white text-xs font-bold py-2 rounded-lg">Book now</button>
                    <button className="flex-1 bg-gray-100 text-gray-600 text-xs font-medium py-2 rounded-lg">Remind later</button>
                  </div>
                </div>
              </div>
              
              {/* Label */}
              <div className="bg-patient-pink text-white text-center py-3 rounded-b-[24px]">
                <p className="text-sm font-bold">🔮 Preventive Nudges</p>
                <p className="text-xs opacity-70">Never miss what matters</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
