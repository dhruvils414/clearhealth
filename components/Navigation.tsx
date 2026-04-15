'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import RivomedLogo from './shared/RivomedLogo'

export default function Navigation() {
  const pathname = usePathname()
  const isProvider = pathname === '/providers'
  const isAI = pathname === '/ai'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)
  
  const patientGreen = '#4ADE80'
  const providerGreen = '#10B981'
  const accentColor = isProvider ? providerGreen : patientGreen
  
  // Get waitlist URL based on current page
  const waitlistUrl = isProvider ? '/waitlist?type=provider' : '/waitlist?type=patient'
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <>
      {/* Coming Soon Banner */}
      {bannerVisible && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10000,
          background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)',
          padding: isMobile ? '8px 12px' : '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
        }}>
          <span style={{
            fontSize: isMobile ? '11px' : '13px',
            fontWeight: 500,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.4,
          }}>
            🚀 <strong>Coming Soon</strong>{isMobile ? ' — ' : ' — Beta launching soon. '}<Link 
              href="/waitlist"
              style={{ 
                color: '#ffffff', 
                textDecoration: 'underline',
                fontSize: isMobile ? '11px' : '13px',
                fontWeight: 600,
              }}
            >
              Join waitlist →
            </Link>
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '16px' : '18px',
              cursor: 'pointer',
              padding: '0 4px',
              marginLeft: '4px',
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>
      )}
      
      <nav style={{
        position: 'fixed',
        top: bannerVisible ? (isMobile ? '36px' : '44px') : 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: isMobile ? '12px 16px' : '16px 24px',
        transition: 'top 0.3s ease',
      }}>
        <div style={{
          maxWidth: '100%',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: isMobile ? '14px 24px' : '18px 48px',
        }}>
          {/* Logo */}
          <Link 
            href="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <RivomedLogo size={isMobile ? 'md' : 'lg'} variant="dark" />
          </Link>
          
          {/* Desktop Nav Links */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
            }}>
              <Link 
                href="/" 
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: pathname === '/' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                For Patients
              </Link>
              <Link 
                href="/providers" 
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: pathname === '/providers' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                For Providers
              </Link>
              <Link 
                href="/ai" 
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: pathname === '/ai' ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                AI
              </Link>
              <Link 
                href={waitlistUrl}
                style={{
                  background: accentColor,
                  color: '#000000',
                  fontSize: '16px',
                  fontWeight: 700,
                  padding: '14px 32px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'transform 0.2s',
                }}>
                Join Waitlist
              </Link>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '80px',
            left: '16px',
            right: '16px',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: pathname === '/' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              For Patients
            </Link>
            <Link 
              href="/providers" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: pathname === '/providers' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              For Providers
            </Link>
            <Link 
              href="/ai" 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: pathname === '/ai' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                padding: '8px 0',
              }}
            >
              AI
            </Link>
            <Link 
              href={waitlistUrl}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: accentColor,
                color: '#000000',
                fontSize: '14px',
                fontWeight: 700,
                padding: '14px 24px',
                borderRadius: '9999px',
                textDecoration: 'none',
                marginTop: '8px',
                textAlign: 'center',
              }}>
              Join Waitlist
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
