import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Consultancy | Transform Your Business with AI',
  description: 'Expert AI consulting services to help your business leverage artificial intelligence for growth and innovation.',
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
