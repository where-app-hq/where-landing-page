import { WAITLIST_CURRENT, WAITLIST_TOTAL } from '@/lib/waitlist'

const PCT = Math.round((WAITLIST_CURRENT / WAITLIST_TOTAL) * 100)

export default function AnnouncementBar() {
  return (
    <a
      href="#signup"
      className="block w-full px-4 py-3 transition-opacity hover:opacity-90"
      style={{
        background: 'linear-gradient(135deg, #FCB250 0%, #EC008C 100%)',
        boxShadow: '0 8px 40px rgba(236, 0, 140, 0.8), 0 4px 16px rgba(0,0,0,0.9)',
      }}
    >
      <div className="max-w-md mx-auto flex flex-col gap-1.5" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
        {/* Count + label */}
        <div className="flex items-center justify-between">
          <span className="text-white text-xs font-bold">
            🚀{' '}
            <span className="text-white font-extrabold">{WAITLIST_CURRENT.toLocaleString()}</span>
            <span className="text-white/70 font-semibold"> / {WAITLIST_TOTAL.toLocaleString()} beta slots filled</span>
          </span>
          <span className="text-white/70 text-xs font-semibold hidden sm:inline">
            TestFlight for iOS<sup>&reg;</sup>
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-white"
            style={{ width: `${PCT}%` }}
          />
        </div>
      </div>
    </a>
  )
}
