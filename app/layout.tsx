import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediTest - One Strip. Multiple Tests.',
  description: 'Revolutionary diagnostic solution that detects Anemia, Malaria, Typhoid, and Diabetes from a single drop of blood. Affordable, Fast, Accurate – Healthcare for Everyone.',
  keywords: 'medical testing, diagnostic strip, anemia, malaria, typhoid, diabetes, healthcare, blood test',
  openGraph: {
    title: 'MediTest - One Strip. Multiple Tests.',
    description: 'Revolutionary diagnostic solution that detects multiple diseases from a single drop of blood.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MediTest - Multi-disease diagnostic test strip',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediTest - One Strip. Multiple Tests.',
    description: 'Revolutionary diagnostic solution that detects multiple diseases from a single drop of blood.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}