'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface FooterProps {
  variant?: 'patient' | 'provider'
}

export default function Footer({ variant = 'patient' }: FooterProps) {
  const gradientClass = variant === 'provider' ? 'gradient-text-provider' : 'gradient-text-patient'
  const tagline = variant === 'provider' 
    ? 'Practice medicine. Not paperwork.' 
    : 'Your family\'s health. Finally simple.'
  
  return (
    <footer className="py-12 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`text-2xl font-extrabold ${gradientClass} mb-2`}>
            ClearPath
          </p>
          <p className="text-gray-500 mb-8">
            {tagline}
          </p>
          
          {/* Legal Links */}
          <div className="flex justify-center gap-6 mb-6">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} ClearPath Health. Operated by PATHSDATA LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
