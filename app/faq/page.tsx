import LegalLayout from '@/components/LegalLayout'
import FAQ from '@/components/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Where App',
  description: 'Answers to common questions about Where App, waylines, privacy, and how your location data is stored.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Where App?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Where App is a free iPhone app that automatically records every trip you take as a wayline, a private encrypted map of everywhere you went. No tapping, no logging. Just go and the app captures your route, your stops, and your moments. Only you can see it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a wayline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A wayline is your personal record of a trip: the route you took, the stops you made, and the places you found. Where App builds one automatically every time you go somewhere. You can revisit it, share it, or keep it completely private.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Where App free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Where App is completely free to download and use. No subscription, no credit card, no account required to get started.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is my location data stored?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your location data is stored encrypted directly on your iPhone. It is never transmitted to our servers unless you explicitly choose to share a wayline. Where App cannot see your location history. No one can except you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Where App sell my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We do not sell your data, share it with advertisers, or use it for any purpose other than providing the app to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is WhereBot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhereBot is your private AI companion built into Where App. It knows your entire wayline history and lets you ask questions, pin moments, and get directions from your phone, Apple Watch, or WhatsApp. Everything stays private.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Where App work in the background?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once you start a wayline, Where App runs quietly in the background and records your route automatically. You never have to open the app again until you want to look back.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Where App available on Android?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Where App is currently available for iPhone only. Android is on our roadmap.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Where App different from Google Maps or Apple Maps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Google Maps and Apple Maps store your location history on their servers and use it to improve their products. Where App stores everything on your device, encrypted, with no server access. Your history is yours alone: not a product, not a data point.',
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <LegalLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </LegalLayout>
  )
}
