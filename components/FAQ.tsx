'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Where App?',
    a: 'Where App is a free iPhone app that automatically records every trip you take as a wayline, a private encrypted map of everywhere you went. No tapping, no logging. Just go and the app captures your route, your stops, and your moments. Only you can see it.',
  },
  {
    q: 'What is a wayline?',
    a: 'A wayline is your personal record of a trip: the route you took, the stops you made, and the places you found. Where App builds one automatically every time you go somewhere. You can revisit it, share it, or keep it completely private.',
  },
  {
    q: 'Is Where App free?',
    a: 'Yes. Where App is completely free to download and use. No subscription, no credit card, no account required to get started.',
  },
  {
    q: 'Where is my location data stored?',
    a: 'Your location data is stored encrypted directly on your iPhone. It is never transmitted to our servers unless you explicitly choose to share a wayline. Where App cannot see your location history. No one can except you.',
  },
  {
    q: 'Does Where App sell my data?',
    a: 'No. We do not sell your data, share it with advertisers, or use it for any purpose other than providing the app to you.',
  },
  {
    q: 'What is WhereBot?',
    a: 'WhereBot is your private AI companion built into Where App. It knows your entire wayline history and lets you ask questions, pin moments, and get directions from your phone, Apple Watch, or WhatsApp. Everything stays private.',
  },
  {
    q: 'Does Where App work in the background?',
    a: 'Yes. Once you start a wayline, Where App runs quietly in the background and records your route automatically. You never have to open the app again until you want to look back.',
  },
  {
    q: 'Is Where App available on Android?',
    a: 'Where App is currently available for iPhone only. Android is on our roadmap.',
  },
  {
    q: 'How is Where App different from Google Maps or Apple Maps?',
    a: 'Google Maps and Apple Maps store your location history on their servers and use it to improve their products. Where App stores everything on your device, encrypted, with no server access. Your history is yours alone: not a product, not a data point.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c0c0c] dark:text-white text-center mb-10 leading-tight">
        Questions? <span className="gradient-text">Answered.</span>
      </h2>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
            >
              <span className="text-[#0c0c0c] dark:text-white font-bold text-sm sm:text-base">{faq.q}</span>
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                className={`flex-shrink-0 text-[#888888] transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              >
                <polyline points="3 6 8 11 13 6" />
              </svg>
            </button>

            {open === i && (
              <div className="px-5 pb-5">
                <p className="text-[#555555] dark:text-[#aaaaaa] text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
