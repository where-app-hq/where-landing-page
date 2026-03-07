import { WAITLIST_CURRENT } from '@/lib/waitlist'

const stats = [
  { value: WAITLIST_CURRENT.toLocaleString(), label: 'People Joined' },
  { value: '100%', label: 'Stored on Your Device' },
  { value: 'Encrypted', label: 'Always, By Default' },
]

export default function TrustBar() {
  return (
    <div className="w-full bg-[#EBEBEB] dark:bg-[#111111] border-y border-black/10 dark:border-white/10 py-7 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 divide-x divide-black/10 dark:divide-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 px-2 sm:px-4">
              <span className="font-extrabold text-lg sm:text-2xl gradient-text">{stat.value}</span>
              <span className="text-[#666666] dark:text-[#888888] text-[10px] sm:text-sm text-center font-semibold leading-tight">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
