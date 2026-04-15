'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/shared/Footer'

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-500 mb-12">
              Last updated: April 4, 2026
            </p>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Introduction</h2>
              <p>
                Rivomed ("we," "our," or "us") is currently operated by PATHSDATA LLC. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or express interest in our services.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out a contact or interest form</li>
                <li>Apply to join as an individual clinician</li>
                <li>Register your practice</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Contact us via email or other means</li>
              </ul>
              
              <p className="mt-4">This information may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Professional credentials (for clinicians)</li>
                <li>Practice or business information</li>
                <li>State of licensure</li>
                <li>Specialty or services offered</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process applications from clinicians and practices</li>
                <li>Send you updates about our services and launch timeline</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
                <li>Communicate with you about opportunities to join Rivomed</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist with website hosting, email delivery, and analytics</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@clearpathhealth.com.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities. You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                <p className="font-semibold text-gray-900">Rivomed</p>
                <p>Operated by PATHSDATA LLC</p>
                <p className="mt-2">Email: privacy@clearpathhealth.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
