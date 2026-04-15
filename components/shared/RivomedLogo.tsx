'use client'

interface RivomedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dark' | 'light'
  showText?: boolean
}

export default function RivomedLogo({ 
  size = 'md', 
  variant = 'dark',
  showText = true 
}: RivomedLogoProps) {
  const sizes = {
    sm: { icon: 36, text: 22, gap: 8 },
    md: { icon: 44, text: 26, gap: 10 },
    lg: { icon: 52, text: 32, gap: 12 },
    xl: { icon: 64, text: 40, gap: 14 },
  }
  
  const { icon, text, gap } = sizes[size]
  const textColor = variant === 'dark' ? '#ffffff' : '#111111'
  
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: `${gap}px`,
    }}>
      {/* R Icon with Heartbeat */}
      <svg 
        width={icon} 
        height={icon} 
        viewBox="0 0 64 64"
        style={{ flexShrink: 0, display: 'block' }}
      >
        {/* Green rounded square background */}
        <rect width="64" height="64" rx="14" fill="#4ADE80"/>
        
        {/* R letter as path - simple bold R */}
        <path 
          d="M20 10 L20 46 L28 46 L28 32 L32 32 L40 46 L50 46 L40 30 C45 28 48 24 48 18 C48 12 42 10 34 10 L20 10 Z M28 16 L33 16 C38 16 40 18 40 21 C40 24 38 26 33 26 L28 26 L28 16 Z"
          fill="#050505"
        />
        
        {/* Heartbeat pulse line */}
        <path 
          d="M8 52 L16 52 L24 40 L32 58 L40 46 L48 52 L56 52" 
          fill="none" 
          stroke="#050505" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      {/* ivomed text */}
      {showText && (
        <span style={{
          fontSize: `${text}px`,
          fontWeight: 800,
          color: textColor,
          letterSpacing: '-0.5px',
          lineHeight: 1,
        }}>
          ivomed
        </span>
      )}
    </div>
  )
}
