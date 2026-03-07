import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Where App',
  operatingSystem: 'iOS',
  applicationCategory: 'TravelApplication',
  description: 'Where App builds a private map of your trips, stored encrypted on your phone. Remember every place you have ever been.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  url: 'https://where.app',
}

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  title: 'Just Go | Where App',
  description: 'Remember every place you have ever been. Where App builds a private map of your trips, stored encrypted on your phone. Not on big tech\'s servers. Just yours.',
  alternates: {
    canonical: 'https://where.app',
  },
  openGraph: {
    title: 'Just Go | Where App',
    description: 'Where App builds a private map of your trips, stored encrypted on your phone. Not on big tech\'s servers. Just yours.',
    url: 'https://where.app',
    siteName: 'Where App',
    type: 'website',
    images: [
      {
        url: 'https://where.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Where App. Go Anywhere. Come Back to Everything.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Just Go | Where App',
    description: 'Where App builds a private map of your trips, stored encrypted on your phone. Not on big tech\'s servers. Just yours.',
    images: ['https://where.app/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
