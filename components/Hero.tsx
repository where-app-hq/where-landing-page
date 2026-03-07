import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-4 pb-4 lg:pt-10 lg:pb-20">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#FCB250] opacity-[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-0 w-96 h-96 rounded-full bg-accent opacity-[0.08] blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* flex-col-reverse: phone renders first visually on mobile */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left mt-6 lg:mt-0">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-4">
              Go Anywhere.{' '}
              <span className="gradient-text">Come Back to Everything.</span>
            </h1>

            <p className="text-[#aaaaaa] text-sm sm:text-base leading-relaxed mb-6 max-w-sm sm:max-w-lg mx-auto lg:mx-0 font-medium">
              Where App is a free app that turns every trip into an encrypted wayline, your personal memory of your experiences.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-3">
              <a
                href="#signup"
                className="btn-gradient-fill inline-block font-bold text-base px-8 py-4 rounded-2xl w-full sm:w-auto text-center text-white"
              >
                Save Your First Trip. It&apos;s Free.
              </a>
              <p className="text-[#666666] text-xs font-medium">
                Free. No account required. iPhone only.
              </p>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex-1 flex justify-center relative">
            {/* Glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }} />
            </div>

            {/* Stacked phone mockup — all screen sizes */}
            <div className="relative w-36 sm:w-48 lg:w-72 -translate-x-[20%] lg:translate-x-0 group h-[260px] sm:h-[340px] lg:h-[420px]">
              {[
                { src: '/app-screenshot.png',   left: '50%', opacity: 0.36, blur: '2px', rotate: '8deg', z: 0 },
                { src: '/app-screenshot-2.png', left: '31%', opacity: 0.65, blur: '1px', rotate: '4deg', z: 1 },
                { src: '/app-screenshot.png',   left: '0%',  opacity: 1,    blur: '0px', rotate: '0deg', z: 2 },
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
