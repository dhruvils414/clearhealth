'use client'

import { motion } from 'framer-motion'

interface FooterProps {
  variant?: 'patient' | 'provider'
}

export default function Footer({ variant = 'patient' }: FooterProps) {
  const gradientClass = variant === 'provider' ? 'gradient-text-provider' : 'gradient-text-patient'
  const tagline = variant === 'provider' 
    ? 'Practice medicine. Not paperwork.' 
    : 'Your family\'s health. Finally simple.'
  
  return (
    <footer className="text-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className={`text-2xl font-extrabold ${gradientClass} mb-2`}>
          ClearPath
        </p>
        <p className="text-gray-500">
          {tagline}
        </p>
      </motion.div>
    </footer>
  )
}
