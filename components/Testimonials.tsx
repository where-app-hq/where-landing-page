'use client'

import { useRef, useCallback, useState, useEffect } from 'react'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

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
    role: 'Travel Photographer',
    location: 'Portland, OR',
    avatar: 'SN',
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
    title: 'didn\'t realize how much i move',
    quote: "i'm all over miami for work every week... pulled up my map and was like ok wow. i cover A LOT of ground",
    display: 'CarlosS',
    role: 'Private Chef',
    location: 'Miami, FL',
    avatar: 'CS',
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
    title: 'FINALLY',
    quote: "run the same route every morning. for years. always wanted a log of it without having to do anything. this is that app",
    display: 'rockybamboa',
    role: 'Personal Trainer',
    location: 'Philadelphia, PA',
    avatar: 'RB',
  },
  {
    title: 'my mom wanted it too',
    quote: "drove home for thanksgiving, it tracked every stop automatically. showed her the map and she was like how do i get this. hadn't expected that lol",
    display: 'justin98',
    role: 'College Senior',
    location: 'Columbus, OH',
    avatar: 'J',
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
    <div className="flex-shrink-0 w-72 mx-2 bg-[#0c0c0c] border border-white/10 rounded-3xl p-5 flex flex-col gap-3">
      {/* Reviewer row */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}
        >
          {avatar}
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none mb-0.5">{display}</p>
          <p className="text-[#666666] text-xs font-medium">{role} · {location}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 16 16">
            <path
              d="M8 1l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.25l-3.71 1.95.71-4.12-3-2.93 4.15-.6z"
              fill="#FCB250"
            />
          </svg>
        ))}
      </div>

      {/* Title + body */}
      <div>
        <p className="text-white font-bold text-sm mb-1">{title}</p>
        <p className="text-[#888888] text-xs leading-relaxed font-medium">{quote}</p>
      </div>
    </div>
  )
}

function useDragScroll() {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const startTranslate = useRef(0)

  const getX = (el: HTMLElement) =>
    new DOMMatrix(window.getComputedStyle(el).transform).m41

  const onDragStart = useCallback((clientX: number) => {
    const track = trackRef.current
    if (!track) return
    const x = getX(track)
    track.style.animation = 'none'
    track.style.transform = `translateX(${x}px) translateZ(0)`
    startX.current = clientX
    startTranslate.current = x
    dragging.current = true
  }, [])

  const onDragMove = useCallback((clientX: number) => {
    if (!dragging.current) return
    const track = trackRef.current
    if (!track) return
    const delta = clientX - startX.current
    track.style.transform = `translateX(${startTranslate.current + delta}px) translateZ(0)`
  }, [])

  const onDragEnd = useCallback(() => {
    if (!dragging.current) return
    dragging.current = false
    const track = trackRef.current
    if (!track) return

    let x = getX(track)
    const halfWidth = track.scrollWidth / 2

    // Normalise x into [-halfWidth, 0]
    x = x % halfWidth
    if (x > 0) x -= halfWidth

    const duration = window.innerWidth >= 1024 ? 60 : window.innerWidth >= 768 ? 50 : 40
    const delay = -(Math.abs(x) / halfWidth) * duration

    track.style.transform = ''
    track.style.animation = ''
    track.getBoundingClientRect() // force reflow
    track.style.animationDelay = `${delay}s`
  }, [])

  return {
    trackRef,
    onMouseDown: (e: React.MouseEvent) => onDragStart(e.clientX),
    onMouseMove: (e: React.MouseEvent) => onDragMove(e.clientX),
    onMouseUp: () => onDragEnd(),
    onMouseLeave: () => onDragEnd(),
    onTouchStart: (e: React.TouchEvent) => onDragStart(e.touches[0].clientX),
    onTouchMove: (e: React.TouchEvent) => onDragMove(e.touches[0].clientX),
    onTouchEnd: () => onDragEnd(),
  }
}

export default function Testimonials() {
  const drag = useDragScroll()
  const [shuffled, setShuffled] = useState(testimonials)
  useEffect(() => { setShuffled(shuffle(testimonials)) }, [])

  return (
    <section id="reviews" className="py-20 bg-[#161616] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-3 leading-tight">
          Our users <span className="gradient-text">love us.</span>
        </h2>
      </div>

      <div
        className="relative cursor-grab active:cursor-grabbing select-none"
        onMouseDown={drag.onMouseDown}
        onMouseMove={drag.onMouseMove}
        onMouseUp={drag.onMouseUp}
        onMouseLeave={drag.onMouseLeave}
        onTouchStart={drag.onTouchStart}
        onTouchMove={drag.onTouchMove}
        onTouchEnd={drag.onTouchEnd}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #161616, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #161616, transparent)' }} />
        <div ref={drag.trackRef} className="flex w-max animate-scroll-left">
          {[...shuffled, ...shuffled].map((t, i) => <Card key={`${t.display}-${i}`} {...t} />)}
        </div>
      </div>
    </section>
  )
}
