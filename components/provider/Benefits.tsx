'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const soloBenefits = [
  {
    icon: '💵',
    title: 'Keep 70% of every visit',
    description: 'Patient pays, you get 70% deposited same-day. No hidden fees.',
    iconClass: 'feature-icon-teal',
  },
  {
    icon: '🔓',
    title: 'Stay independent',
    description: 'No employment contracts. No exclusivity. Your practice, your terms.',
    iconClass: 'feature-icon-amber',
  },
  {
    icon: '📅',
    title: 'Set your own schedule',
    description: 'Work 5 hours a week or 50. Block time off instantly.',
    iconClass: 'feature-icon-provider-purple',
  },
  {
    icon: '👥',
    title: 'We send you patients',
    description: 'No marketing needed. Patients find you through Rivomed.',
    iconClass: 'feature-icon-cyan',
  },
  {
    icon: '📄',
    title: 'Zero insurance paperwork',
    description: 'No prior auths. No claims. We handle billing, you handle care.',
    iconClass: 'feature-icon-blue',
  },
  {
    icon: '🤖',
    title: 'AI does the busywork',
    description: 'Patient summaries, chart prep, message drafts — AI handles it.',
    iconClass: 'feature-icon-provider-pink',
  },
]

const practiceBenefits = [
  {
    icon: '💵',
    title: 'Your practice keeps 70%',
    description: 'Each visit, 70% goes to your practice. Pay your doctors however you want.',
    iconClass: 'feature-icon-teal',
  },
  {
    icon: '👥',
    title: 'Grow your patient base',
    description: 'We send patients to your doctors. Fill schedules without marketing spend.',
    iconClass: 'feature-icon-cyan',
  },
  {
    icon: '🏥',
    title: 'Add your whole team',
    description: 'Create profiles for each doctor. You control their availability and services.',
    iconClass: 'feature-icon-blue',
  },
  {
    icon: '📊',
    title: 'Practice dashboard',
    description: 'See all bookings, earnings, and doctor performance in one place.',
    iconClass: 'feature-icon-provider-purple',
  },
  {
    icon: '📄',
    title: 'Zero insurance paperwork',
    description: 'Direct-pay only. No prior auths, no claims, no denials to fight.',
    iconClass: 'feature-icon-amber',
  },
  {
    icon: '🤖',
    title: 'AI for your whole team',
    description: 'Every doctor gets AI summaries, chart prep, and message drafts.',
    iconClass: 'feature-icon-provider-pink',
  },
]

export default function ProviderBenefits() {
  const [activeTab, setActiveTab] = useState<'solo' | 'practice'>('solo')
  
  const benefits = activeTab === 'solo' ? soloBenefits : practiceBenefits
  
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-teal"
        >
          Why Join Rivomed
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900"
        >
          Built for how you work
        </motion.h2>
      </div>
      
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-gray-100 rounded-full p-1.5">
          <button
            onClick={() => setActiveTab('solo')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'solo'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Individuals
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'practice'
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Practices
          </button>
        </div>
      </div>
      
      {/* Benefits Grid */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-gray-50 border border-gray-100 rounded-[28px] p-6 md:p-8"
          >
            <div className={`feature-icon ${benefit.iconClass} mb-5`}>
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
