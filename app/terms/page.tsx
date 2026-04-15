'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/shared/Footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500 mb-12">
              Last updated: April 4, 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Rivomed website and services, currently operated by PATHSDATA LLC ("Company," "we," "our," or "us").
              </p>
              <p>
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access our website or services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Description of Service</h2>
              <p>
                Rivomed is a healthcare marketplace platform preparing for beta launch. Our website currently provides:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Information about our planned services</li>
                <li>Interest forms for prospective patients</li>
                <li>Application forms for clinicians and practices interested in joining our network</li>
                <li>Educational content about direct-pay healthcare</li>
              </ul>
              <p className="mt-4">
                <strong>Note:</strong> Rivomed is not yet providing healthcare services. Information collected through our website is for waitlist registration and launch planning purposes.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. User Representations</h2>
              <p>By using our website, you represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>All information you provide is accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information</li>
                <li>Your use of the website does not violate any applicable law or regulation</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Clinician and Practice Applications</h2>
              <p>
                If you submit an application to join Rivomed as an individual clinician or practice, you additionally represent that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All credentials and license information provided are accurate</li>
                <li>You hold valid, unrestricted licenses in your stated jurisdiction(s)</li>
                <li>You have appropriate malpractice insurance coverage</li>
                <li>You are authorized to represent your practice if applying on behalf of a practice</li>
              </ul>
              <p className="mt-4">
                Submission of an application does not guarantee acceptance into the Rivomed network. We reserve the right to approve or deny applications at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Intellectual Property</h2>
              <p>
                The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, and design) are owned by PATHSDATA LLC and are protected by United States and international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content from our website without our prior written consent.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Prohibited Uses</h2>
              <p>You agree not to use the website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For any unlawful purpose or in violation of these Terms</li>
                <li>To solicit others to perform unlawful acts</li>
                <li>To infringe upon the rights of others</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit malicious code</li>
                <li>To interfere with or disrupt the website's security features</li>
                <li>To scrape, data mine, or collect user information without permission</li>
                <li>To impersonate another person or entity</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. PATHSDATA LLC MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE WEBSITE'S OPERATION OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREON.
              </p>
              <p className="mt-4">
                WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. WE MAKE NO WARRANTIES AS TO THE ACCURACY OR COMPLETENESS OF THE WEBSITE'S CONTENT.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, PATHSDATA LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE.
              </p>
              <p className="mt-4">
                OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF THESE TERMS SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless PATHSDATA LLC and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising from your use of the website or violation of these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Not Medical Advice</h2>
              <p>
                The information provided on this website is for general informational purposes only and does not constitute medical advice. Nothing on this website should be construed as a recommendation for any specific treatment, product, or course of action.
              </p>
              <p className="mt-4">
                Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the state or federal courts located in Fulton County, Georgia.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes by updating the "Last updated" date. Your continued use of the website after any changes constitutes acceptance of the new Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                <p className="font-semibold text-gray-900">Rivomed</p>
                <p>Operated by PATHSDATA LLC</p>
                <p className="mt-2">Email: legal@clearpathhealth.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
