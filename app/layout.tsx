import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClearPath Health | Your Family\'s Health. Finally Simple.',
  description: 'One home for your family\'s health. Clear prices. Doctors who know you. AI that keeps you on track.',
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
