import Image from 'next/image'
import { WAITLIST_CURRENT } from '@/lib/waitlist'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-4 pb-4 md:pt-6 md:pb-10 lg:pb-20">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#FCB250] opacity-[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.08] blur-3xl" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-6 btn-gradient-border">
              <span className="w-2 h-2 rounded-full bg-brand-gradient flex-shrink-0" style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }} />
              <span className="text-[#E2E2E2] text-xs font-semibold">Private. Frictionless. Forever.</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-5">
              Go Anywhere.{' '}
              <span className="gradient-text">Come Back to Everything.</span>
            </h1>

            {/* Subhead */}
            <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed mb-8 max-w-sm sm:max-w-lg mx-auto lg:mx-0 font-medium">
              Where App is a free app that turns every trip into a wayline, your personal memory of everywhere you went. Press record, go live your life, and six months later open your phone to be transported right back.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <a
                href="#signup"
                className="btn-gradient-fill inline-block font-bold text-base px-8 py-4 rounded-2xl w-full sm:w-auto text-center text-white"
              >
                Save Your First Trip. It&apos;s Free.
              </a>
              <p className="text-[#888888] text-sm font-medium">
                Join <span className="gradient-text font-extrabold">{WAITLIST_CURRENT.toLocaleString()}</span> people already in. No account required to get started.
              </p>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center relative">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }} />
            </div>

            {/* Phone stack container */}
            <div className="relative w-52 sm:w-60 lg:w-72 -translate-x-[20%] lg:translate-x-0 group" style={{ height: '420px' }}>
              {[
                // Phone 3 — back (swap src to change this screen)
                { src: '/app-screenshot.png', left: '50%', opacity: 0.36, blur: '2px', rotate: '8deg', z: 0 },
                // Phone 2 — middle (swap src to change this screen)
                { src: '/app-screenshot-2.png', left: '31%', opacity: 0.65, blur: '1px', rotate: '4deg', z: 1 },
                // Phone 1 — foreground (swap src to change this screen)
                { src: '/app-screenshot.png', left: '0%',  opacity: 1,    blur: '0px', rotate: '0deg', z: 2 },
              ].map((p, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: 0,
                    left: p.left,
                    width: '88%',
                    opacity: p.opacity,
                    filter: `blur(${p.blur})`,
                    transform: `rotate(${p.rotate})`,
                    transformOrigin: 'bottom center',
                    zIndex: p.z,
                  }}
                >
                  <Image
                    src={p.src}
                    alt={i === 2 ? 'Where App trip wayline in San Francisco' : ''}
                    width={280}
                    height={560}
                    className="w-full h-auto object-contain group-hover:[animation:jiggle_0.5s_ease-in-out]"
                    priority={i === 2}
                    aria-hidden={i !== 2}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
