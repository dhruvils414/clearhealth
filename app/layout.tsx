import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rivomed | Healthcare. Revived.',
  description: 'Healthcare brought back to what it should be. Clear prices. Doctors who know you. Your health, your terms.',
  icons: {
    icon: '/favicon.svg',
    apple: '/rivomed-icon-512.svg',
  },
  openGraph: {
    title: 'Rivomed | Healthcare. Revived.',
    description: 'Healthcare brought back to what it should be. Clear prices. Doctors who know you. Your health, your terms.',
    siteName: 'Rivomed',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rivomed | Healthcare. Revived.',
    description: 'Healthcare brought back to what it should be. Clear prices. Doctors who know you.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
