'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import RivomedLogo from './RivomedLogo'

interface FooterProps {
  variant?: 'patient' | 'provider'
}

export default function Footer({ variant = 'patient' }: FooterProps) {
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
          {/* Logo */}
          <div className="flex items-center justify-center mb-2">
            <RivomedLogo size="lg" variant="light" />
          </div>
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
          
          {/* Pre-launch notice */}
          <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Rivomed is preparing to launch in Atlanta and is not currently providing healthcare services.
            This site describes planned services. Features, pricing, and program terms are subject to change
            and are not binding unless set out in a signed agreement.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Rivomed. Operated by PATHSDATA LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
