import LegalLayout from '@/components/LegalLayout'
import MiniSignUp from '@/components/MiniSignUp'
import Image from 'next/image'

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
          Built for people <span className="gradient-text">who go places.</span>
        </h1>
        <p className="text-[#555555] dark:text-[#aaaaaa] text-lg font-medium">
          Where App is a free iPhone app that turns every trip into a private, encrypted wayline. This is how we got here.
        </p>
      </div>

      {/* Team photo */}
      <div className="mb-12">
        <div className="w-full rounded-3xl overflow-hidden">
          <Image
            src="/about-image-v2.png"
            alt="Pratik, Ron, and Dmitri"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className="text-center text-[#888888] text-sm italic mt-3">Pratik, Ron and Dmitri: Where App co-founders</p>
      </div>

      <div className="space-y-10 text-[#555555] dark:text-[#aaaaaa] text-base leading-relaxed font-medium">

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">How it started</h2>
          <p className="mb-4">
            Ron and Pratik met at Google Cloud in San Francisco. Both obsessed with technology, AI, and the itch to build something that actually mattered. The jobs were great. The itch was stronger.
          </p>
          <p className="mb-4">
            Like a lot of people, we loved Google Maps Timeline. It was genuinely magical to scroll back through your year and see everywhere you had been. Then Google discontinued it, and that little piece of your life just disappeared. Someone else&apos;s server, someone else&apos;s decision, your memories gone.
          </p>
          <p>
            That moment crystallized everything. We wanted to build the app that gave it back to you, but done right this time. Your trips stored encrypted on your phone. No one else&apos;s server. No one else&apos;s decision. We care deeply about data privacy, not as a legal checkbox but as a core belief. Your location history is one of the most personal things that exists. It should belong to you.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">The team grew</h2>
          <p className="mb-4">
            Ron had crossed paths with Dmitri years earlier, when Dmitri was leading innovation at Cisco. They stayed in touch for over a decade, bonding over technology, entrepreneurship, and a shared restlessness to build things.
          </p>
          <p className="mb-4">
            In late 2024, Ron reached out to share the idea. Dmitri had been thinking about nearly the same thing. Walking through the streets of Lisbon, frustrated that he had no record of where he had been, he had sketched out the same vision: a private, AI-powered app that captured your journey exactly as you lived it. They joined forces immediately.
          </p>
          <p>
            Dmitri leads our engineering, backed by an exceptional team that has been building the core product since day one.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-[#0c0c0c] dark:text-white mb-3">Where we are</h2>
          <p className="mb-4">
            Over a year of designing, building, and iterating on real user feedback. More than 2,000 beta users who shape every decision we make. A small team with one focus: the best trip memory app ever built.
          </p>
        </div>

        {/* Belief statement */}
        <div className="py-4">
          <p className="text-3xl sm:text-4xl font-extrabold gradient-text leading-tight">
            Your experiences belong to you.
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
            I started Where because I kept forgetting the best parts of my trips and that felt like a small tragedy. I&apos;m genuinely thrilled you found us and I want to hear what you think. My email is always open for suggestions and comments: <a href="mailto:ron@where.app" className="gradient-text font-bold">ron@where.app</a>
          </p>
        </div>

        {/* Inline signup */}
        <div className="rounded-3xl bg-[#EBEBEB] dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10 p-6 sm:p-8">
          <p className="text-[#0c0c0c] dark:text-white font-extrabold text-lg mb-1">Ready to start remembering?</p>
          <p className="text-[#555555] dark:text-[#aaaaaa] text-sm font-medium mb-5">Join the beta and start saving your trips immediately.</p>
          <MiniSignUp />
        </div>

      </div>
    </LegalLayout>
  )
}
