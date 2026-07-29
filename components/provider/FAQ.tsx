'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "What is Rivomed?",
    answer: "Rivomed is direct-pay healthcare. We connect patients directly with healthcare providers. Patients see the price before they book, pay upfront, and you get paid in days — not months. No insurance middleman, no billing codes, no claims."
  },
  {
    question: "How much does it cost to join?",
    answer: "Nothing to apply, and nothing to get started. Founding providers pay no platform fees for their first three months. We are finalizing our pricing now and will share it in full well before anyone owes anything."
  },
  {
    question: "How does Rivomed make money?",
    answer: "A flat platform fee that covers payment processing, platform maintenance, and patient acquisition. You will be able to choose between a flat fee per patient or a flat monthly subscription — whichever fits your practice. We never take a percentage of what you earn from a visit."
  },
  {
    question: "When do I get paid?",
    answer: "Patients pay upfront when they book. Your earnings are available within days and you can withdraw anytime via Stripe Connect. No more waiting 60-90 days for insurance reimbursement."
  },
  {
    question: "Do I need my own malpractice insurance?",
    answer: "Yes. All providers must maintain their own professional liability (malpractice) insurance. We recommend minimum coverage of $1 million per occurrence / $3 million aggregate. This protects you, your patients, and ensures professional standards."
  },
  {
    question: "How is pricing determined?",
    answer: "Rivomed sets fair, transparent prices for each service type. Patients see the exact price before booking — no surprise bills. You know exactly what you will earn for each visit."
  },
  {
    question: "Do I need my own office?",
    answer: "Depends on your path. Practices and Solo Providers need a physical location where patients can visit. Independent Providers (home care, house calls, telehealth) do not need an office — you go to patients or see them virtually."
  },
  {
    question: "Can I keep my existing patients?",
    answer: "Of course. Rivomed is an additional patient channel, not a replacement for your existing practice. Keep seeing your current patients however you do now — we just send you more."
  },
  {
    question: "What licenses do I need?",
    answer: "You need an active, unrestricted license to practice in your discipline in the state where you will see patients. We verify all licenses during the application process."
  },
  {
    question: "How long does the application take?",
    answer: "Most applications are reviewed within 48 hours. You will need to provide your license information, malpractice insurance details, and basic practice information. Once approved, you can set up your profile and start accepting patients."
  },
  {
    question: "Is this only for Atlanta?",
    answer: "We are starting in Atlanta and expanding from there. If you are outside Atlanta but interested, apply anyway — we will reach out when we expand to your area."
  },
  {
    question: "Can my practice have multiple providers?",
    answer: "Yes. If you run a multi-provider practice, you can list all your providers under one account. Each provider needs their own license and malpractice insurance, but billing and payouts are centralized."
  }
]

export default function ProviderFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about joining Rivomed.
          </p>
        </motion.div>
        
        {/* FAQ accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-[#4ADE80] transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
