import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/">
          <Image
            src="/where-logo-new.png"
            alt="Where App"
            width={100}
            height={34}
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="flex items-center gap-6 text-sm text-[#888888] font-semibold">
          <a href="/privacy" className="hover:text-[#0c0c0c] dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#0c0c0c] dark:hover:text-white transition-colors">Terms</a>
          <a href="/about" className="hover:text-[#0c0c0c] dark:hover:text-white transition-colors">About</a>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href="#" aria-label="TikTok" className="text-[#888888] hover:text-[#0c0c0c] dark:hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-[#888888] hover:text-[#0c0c0c] dark:hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-black/5 dark:border-white/5 text-center">
        <p className="text-[#888888] text-xs font-medium">© 2026 Where, LLC. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
