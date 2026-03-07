import LegalLayout from '@/components/LegalLayout'

export const metadata = {
  title: 'About | Where App',
  description: 'The story behind Where App and the team building it.',
}

export default function AboutPage() {
  return (
    <LegalLayout>
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c0c0c] dark:text-white leading-tight mb-4">
          Built by people who <span className="gradient-text">wanted this app to exist.</span>
        </h1>
        <p className="text-[#555555] dark:text-[#aaaaaa] text-lg font-medium">
          Where App is a free iOS app that turns every trip into a private, encrypted wayline. This is how we got here.
        </p>
      </div>

      {/* Team photo placeholder */}
      <div className="w-full rounded-3xl overflow-hidden mb-12 aspect-video flex items-center justify-center bg-[#EBEBEB] dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <p className="text-[#888888] text-sm font-semibold">Team photo coming soon</p>
        </div>
      </div>

      <div className="space-y-10 text-[#555555] dark:text-[#aaaaaa] text-base leading-relaxed font-medium">

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">How it started</h2>
          <p className="mb-4">
            Ron and Pratik met at Google Cloud in San Francisco. Both obsessed with technology, AI, and the itch to build something that actually mattered. The jobs were great. The itch was stronger.
          </p>
          <p>
            The idea came from a simple frustration: your phone knows everywhere you have been, but that data lives on someone else&apos;s server, in a format you didn&apos;t choose. We wanted to build the app that gave it back to you. Your trips, your memories, encrypted on your phone. Entirely yours.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">The team grew</h2>
          <p className="mb-4">
            Ron had crossed paths with Dmitri years earlier, when Dmitri was leading innovation at Cisco. They stayed in touch for over a decade, connected by a shared love of technology, entrepreneurship, and building things from nothing.
          </p>
          <p className="mb-4">
            In late 2024, Ron reached out to share the idea. Dmitri had been thinking about nearly the same thing. Walking through the streets of Lisbon, frustrated that he had no record of where he had been, he had sketched out the same vision: a private, AI-powered app that captured your journey exactly as you lived it. They joined forces immediately.
          </p>
          <p>
            Dmitri leads our engineering, backed by an exceptional team including Yarik from Ukraine, who has been building the core product since day one.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">Where we are</h2>
          <p className="mb-4">
            Over a year of designing, building, and iterating based on real user feedback. More than 1,000 beta users who shape every decision we make. A small team with one focus: the best trip memory app ever built.
          </p>
          <p>
            Everything we build comes back to one belief: your experiences belong to you.
          </p>
        </div>

        {/* Founder card */}
        <div className="rounded-3xl bg-[#EBEBEB] dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}>
              R
            </div>
            <div>
              <p className="text-[#0c0c0c] dark:text-white font-extrabold text-lg leading-none mb-1">Ron Kunze</p>
              <p className="text-[#888888] text-sm font-semibold">Co-Founder, Where App · Scottsdale, AZ</p>
            </div>
          </div>
          <p className="text-[#555555] dark:text-[#aaaaaa] text-sm leading-relaxed">
            Former Google Cloud. Building Where App because your memories deserve to live on your phone, not on someone else&apos;s server.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <a
            href="/#signup"
            className="btn-gradient-fill inline-block text-white font-bold text-base px-8 py-4 rounded-2xl"
          >
            Get Beta Access
          </a>
          <p className="text-[#888888] text-xs font-medium mt-3">Free. iPhone only. No account required.</p>
        </div>

      </div>
    </LegalLayout>
  )
}
