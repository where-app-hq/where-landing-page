'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    title: 'felt like magic',
    quote: "I never once thought about opening the app. I just lived my trip. When I got home I had six countries worth of waylines waiting for me. It felt like magic.",
    display: 'cameron_s',
    role: 'Lifestyle Influencer',
    location: 'Arizona State',
    avatar: 'C',
  },
  {
    title: "my daughter hasn't forgotten",
    quote: "I used to think I'd remember everything. I don't. But last month I pulled up a wayline from a Saturday walk with my kids in Dolores Park and every single moment came back. I'd forgotten we stopped for ice cream. My daughter hadn't.",
    display: 'Paras',
    role: 'Journalist',
    location: 'Los Angeles, CA',
    avatar: 'P',
  },
  {
    title: 'marked it from my watch',
    quote: "I told WhereBot 'mark this beach' from my watch and kept running. No stopping, no typing. That pin is still on my map. I go back and look at it when I need to smile.",
    display: 'anna',
    role: 'Student',
    location: 'UCSB',
    avatar: 'A',
  },
  {
    title: 'did the camino last year',
    quote: "every step is saved. i still open it sometimes. takes me right back. simple app, does what it says",
    display: 'nancyT',
    role: 'Retired Pediatric Nurse',
    location: 'Scottsdale, AZ',
    avatar: 'N',
  },
  {
    title: 'finally have proof',
    quote: "drove my whole life and never had a real map of where i went. now i do. simple as that",
    display: 'RANDY',
    role: 'Long-Haul Trucker',
    location: 'Amarillo, TX',
    avatar: 'R',
  },
  {
    title: 'every photographer needs this',
    quote: "i shoot hundreds of photos a trip and could never remember exactly where i was standing. WHERE APP FIXED THIS. honestly can't believe nothing else does it",
    display: 'sakura.n',
    role: 'Photographer',
    location: 'Portland, OR',
    avatar: 'SN',
  },
  {
    title: "didn't realize how much i move",
    quote: "i'm all over miami for work every week... pulled up my map and was like ok wow. i cover A LOT of ground",
    display: 'CarlosS',
    role: 'Private Chef',
    location: 'Miami, FL',
    avatar: 'CS',
  },
  {
    title: 'quiet and useful',
    quote: "walk constantly for work, exploring neighborhoods. nice to have a record that just... builds itself. not in your face about it either which i appreciate",
    display: 'lukas h p',
    role: 'Architect',
    location: 'Berlin / New York',
    avatar: 'LP',
  },
]

function Card({ title, quote, display, role, location, avatar }: typeof testimonials[0]) {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#0c0c0c] border border-black/8 dark:border-white/10 rounded-3xl px-6 py-8 flex flex-col gap-4 h-full">
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}
        >
          {avatar}
        </div>
        <div>
          <p className="text-[#0c0c0c] dark:text-white font-bold text-sm leading-none mb-0.5">{display}</p>
          <p className="text-[#888888] dark:text-[#666666] text-xs font-medium">{role} · {location}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 16 16">
            <path d="M8 1l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.25l-3.71 1.95.71-4.12-3-2.93 4.15-.6z" fill="#FCB250" />
          </svg>
        ))}
      </div>
      <div>
        <p className="text-[#0c0c0c] dark:text-white font-bold text-sm mb-1">{title}</p>
        <p className="text-[#666666] dark:text-[#888888] text-xs leading-relaxed font-medium">{quote}</p>
      </div>
    </div>
  )
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Carousel({ perView }: { perView: number }) {
  const [items, setItems] = useState(testimonials)
  const slides = Math.ceil(items.length / perView)
  const [active, setActive] = useState(0)

  useEffect(() => {
    setItems(shuffle(testimonials))
  }, [])
  const touchStartX = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    setActive((index + slides) % slides)
  }, [slides])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides)
    }, 4000)
  }, [slides])

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [resetTimer])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) < 40) return
    goTo(delta < 0 ? active + 1 : active - 1)
    resetTimer()
  }

  return (
    <div>
      <div className="overflow-hidden" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {Array.from({ length: slides }).map((_, slideIdx) => (
            <div key={slideIdx} className="w-full flex-shrink-0 grid gap-4" style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}>
              {items.slice(slideIdx * perView, slideIdx * perView + perView).map((t) => (
                <Card key={t.display} {...t} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: slides }).map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); resetTimer() }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? '' : 'dot-inactive'}`}
            style={{
              background: i === active ? 'linear-gradient(135deg, #FCB250, #EC008C)' : undefined,
              transform: i === active ? 'scale(1.3)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 sm:py-20 bg-white dark:bg-[#161616]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c0c0c] dark:text-white text-center mb-12 leading-tight">
          Our users <span className="gradient-text">love us.</span>
        </h2>

        {/* Phone + iPad: 1 per slide, 8 dots, constrained width so cards are tall not wide */}
        <div className="lg:hidden">
          <div className="max-w-sm mx-auto">
            <Carousel perView={1} />
          </div>
        </div>

        {/* Desktop: 4 per slide, 2 dots */}
        <div className="hidden lg:block">
          <Carousel perView={4} />
        </div>
      </div>
    </section>
  )
}
