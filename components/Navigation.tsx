'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const isProvider = pathname === '/providers'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)
  
  const patientGreen = '#4ADE80'
  const providerGreen = '#10B981'
  const accentColor = isProvider ? providerGreen : patientGreen
  
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
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: 500,
            color: '#ffffff',
            textAlign: 'center',
          }}>
            🚀 <strong>Coming Soon</strong> — Beta launching soon. A PATHSDATA LLC venture.{' '}
            <Link href="/providers" style={{ color: '#ffffff', textDecoration: 'underline' }}>
              Join the waitlist →
            </Link>
          </span>
          <button
            onClick={() => setBannerVisible(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '0 4px',
              marginLeft: '8px',
            }}
          >
            ×
          </button>
        </div>
      )}
      
      <nav style={{
        position: 'fixed',
        top: bannerVisible ? '44px' : 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '16px',
        transition: 'top 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1152px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '9999px',
          padding: '12px 24px',
        }}>
          {/* Logo */}
          <Link 
            href="/" 
            style={{
              fontSize: '20px',
              fontWeight: 800,
              background: isProvider 
                ? 'linear-gradient(135deg, #3B82F6 0%, #10B981 50%, #8B5CF6 100%)'
                : 'linear-gradient(135deg, #4ADE80 0%, #A78BFA 40%, #FB923C 70%, #F472B6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textDecoration: 'none',
            }}
          >
            ClearPath
          </Link>
          
          {/* Desktop Nav Links */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}>
              <Link 
                href="/" 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: pathname === '/' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                For Patients
              </Link>
              <Link 
                href="/providers" 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: pathname === '/providers' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                For Providers
              </Link>
              <Link 
                href="/ai" 
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: pathname === '/ai' ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                AI
              </Link>
              <button style={{
                background: accentColor,
                color: '#000000',
                fontSize: '14px',
                fontWeight: 700,
                padding: '10px 20px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}>
                Get Started
              </button>
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
            <button style={{
              background: accentColor,
              color: '#000000',
              fontSize: '14px',
              fontWeight: 700,
              padding: '14px 24px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
            }}>
              Get Started
            </button>
          </div>
        )}
      </nav>
    </>
  )
}
