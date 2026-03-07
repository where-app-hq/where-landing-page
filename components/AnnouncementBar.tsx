import { WAITLIST_CURRENT, WAITLIST_TOTAL } from '@/lib/waitlist'

const PCT = Math.round((WAITLIST_CURRENT / WAITLIST_TOTAL) * 100)

export default function AnnouncementBar() {
  return (
    <a
      href="#signup"
      className="block w-full px-4 py-2.5 transition-opacity hover:opacity-80"
      style={{
        background: 'linear-gradient(135deg, rgba(252,178,80,0.08) 0%, rgba(236,0,140,0.08) 100%), #0c0c0c',
        borderBottom: '1px solid transparent',
        backgroundClip: 'padding-box',
        boxShadow: '0 1px 0 0 rgba(252,178,80,0.25)',
      }}
    >
      <div className="max-w-md mx-auto flex flex-col gap-1.5">
        {/* One line on mobile, with progress bar below on sm+ */}
        <div className="flex items-center justify-center gap-1.5 text-xs font-semibold">
          <span className="text-[#bbbbbb]">iOS<sup>®</sup> beta is open.</span>
          <span>
            <span className="gradient-text font-extrabold">{WAITLIST_CURRENT.toLocaleString()}</span>
            <span className="text-[#bbbbbb]"> of {WAITLIST_TOTAL.toLocaleString()} slots filled.</span>
          </span>
        </div>

        {/* Progress bar — hidden on mobile to save space */}
        <div className="hidden sm:block w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${PCT}%`, background: 'linear-gradient(90deg, #FCB250, #EC008C)' }}
          />
        </div>
      </div>
    </a>
  )
}
