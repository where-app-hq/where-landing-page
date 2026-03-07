export const WAITLIST_TOTAL = 10000

// Grows ~5 per day from a fixed base on March 6 2026.
// Recalculates on every server request (see page.tsx force-dynamic).
const BASE_DATE = new Date('2026-03-06').getTime()
const BASE_COUNT = 6247
const GROWTH_PER_DAY = 5

const daysSinceBase = Math.max(
  0,
  Math.floor((Date.now() - BASE_DATE) / (1000 * 60 * 60 * 24))
)

export const WAITLIST_CURRENT = Math.min(
  BASE_COUNT + daysSinceBase * GROWTH_PER_DAY,
  WAITLIST_TOTAL - 10
)
