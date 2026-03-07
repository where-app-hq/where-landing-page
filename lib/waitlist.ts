export const WAITLIST_TOTAL = 10000

const BASE_DATE = new Date('2026-03-07').getTime()
const BASE_COUNT = 5241
const DAYS = 90

function noise(day: number): number {
  const x = Math.sin(day * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x) // stable 0–1 for any given day
}

function dailyIncrement(day: number): number {
  const baseRate = 18 + 32 * (day / DAYS)  // 18/day → 50/day
  const variance = noise(day) * 0.8 + 0.6  // 0.6× to 1.4× multiplier
  return Math.round(baseRate * variance)
}

const daysSinceBase = Math.max(
  0,
  Math.floor((Date.now() - BASE_DATE) / (1000 * 60 * 60 * 24))
)

let count = BASE_COUNT
for (let i = 0; i < daysSinceBase; i++) {
  count += dailyIncrement(i)
}

export const WAITLIST_CURRENT = Math.min(count, WAITLIST_TOTAL - 100)
