const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Capture Every Experience',
    body: 'No tapping. No logging. Just go.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Stored on Your Phone',
    body: 'Encrypted on your device. Not on big tech\'s servers.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: 'Share Only What You Want',
    body: 'Your waylines. Your call.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 py-12 sm:py-20 bg-[#F5F5F5] dark:bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c0c0c] dark:text-white text-center mb-8 leading-tight">
          How it <span className="gradient-text">works.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:[&>*:last-child]:col-span-2 sm:[&>*:last-child]:max-w-sm sm:[&>*:last-child]:mx-auto lg:[&>*:last-child]:col-span-1 lg:[&>*:last-child]:max-w-none lg:[&>*:last-child]:mx-0">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-[#1a1a1a] border border-black/8 dark:border-white/10 rounded-3xl p-5 sm:p-8 flex flex-col items-center text-center gap-5 hover:border-black/20 dark:hover:border-white/20 transition-colors"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="text-[#0c0c0c] dark:text-white font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-[#666666] dark:text-[#888888] text-sm font-medium">{feature.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
