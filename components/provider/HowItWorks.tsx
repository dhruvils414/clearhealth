'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const soloSteps = [
  { 
    number: '1', 
    title: 'Apply', 
    description: 'Quick online application. Upload your license and credentials.',
    color: 'text-provider-blue',
    bgColor: 'bg-provider-blue/10',
  },
  { 
    number: '2', 
    title: 'Set your terms', 
    description: 'Choose your hours, services, and availability.',
    color: 'text-provider-green',
    bgColor: 'bg-provider-green/10',
  },
  { 
    number: '3', 
    title: 'See patients', 
    description: 'We send you patients. AI prepares visit summaries.',
    color: 'text-provider-purple',
    bgColor: 'bg-provider-purple/10',
  },
  { 
    number: '4', 
    title: 'Get paid', 
    description: 'Your 70% deposited same-day. Withdraw anytime.',
    color: 'text-provider-amber',
    bgColor: 'bg-provider-amber/10',
  },
]

const practiceSteps = [
  { 
    number: '1', 
    title: 'Register practice', 
    description: 'Create your practice account with business details.',
    color: 'text-provider-blue',
    bgColor: 'bg-provider-blue/10',
  },
  { 
    number: '2', 
    title: 'Add doctor profiles', 
    description: 'Create a profile for each doctor with their credentials and specialties.',
    color: 'text-provider-green',
    bgColor: 'bg-provider-green/10',
  },
  { 
    number: '3', 
    title: 'Set availability', 
    description: 'Control each doctor\'s schedule and bookable hours.',
    color: 'text-provider-purple',
    bgColor: 'bg-provider-purple/10',
  },
  { 
    number: '4', 
    title: 'Get paid', 
    description: 'Practice receives 70% same-day. Pay your doctors your way.',
    color: 'text-provider-amber',
    bgColor: 'bg-provider-amber/10',
  },
]

export default function ProviderHowItWorks() {
  const [activeTab, setActiveTab] = useState<'solo' | 'practice'>('solo')
  
  const steps = activeTab === 'solo' ? soloSteps : practiceSteps
  
  return (
    <section className="px-4 mb-24 md:mb-32 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label gradient-text-blue"
        >
          Simple Process
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title text-gray-900 mb-4"
        >
          How it works
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto"
        >
          From signup to first patient in under a week.
        </motion.p>
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
      
      {/* Steps */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid md:grid-cols-4 gap-6 mb-16"
      >
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-gray-200 to-gray-100" />
            )}
            
            <div className="text-center relative z-10">
              <div className={`w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className={`text-4xl font-extrabold ${step.color}`} style={{ letterSpacing: '-2px' }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* What You Need */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-[32px] p-8 md:p-10"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
          {activeTab === 'solo' ? 'What you need to apply' : 'What your practice needs'}
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {activeTab === 'solo' ? (
            <>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  📜
                </div>
                <p className="text-gray-700 font-medium text-sm">Active medical license</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🛡️
                </div>
                <p className="text-gray-700 font-medium text-sm">Malpractice insurance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🆔
                </div>
                <p className="text-gray-700 font-medium text-sm">NPI number</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🏦
                </div>
                <p className="text-gray-700 font-medium text-sm">Bank account for deposits</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🏥
                </div>
                <p className="text-gray-700 font-medium text-sm">Business registration</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  👨‍⚕️
                </div>
                <p className="text-gray-700 font-medium text-sm">Doctor licenses & NPIs</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🛡️
                </div>
                <p className="text-gray-700 font-medium text-sm">Malpractice coverage</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-3 shadow-sm">
                  🏦
                </div>
                <p className="text-gray-700 font-medium text-sm">Practice bank account</p>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  )
}
