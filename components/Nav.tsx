'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const prefix = pathname === '/' ? '' : '/'

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5F5F5]/90 dark:bg-[#0c0c0c]/90 backdrop-blur border-b border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/where-logo-new.png"
            alt="Where App"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href={`${prefix}#features`} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">How It Works</a>
          <a href={`${prefix}#wherebot`} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">WhereBot</a>
          <a href={`${prefix}#reviews`} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">Reviews</a>
          <ThemeToggle />
          <a
            href={`${prefix}#signup`}
            className="btn-gradient-border text-sm font-bold px-5 py-2 rounded-xl"
          >
            Get Beta Access
          </a>
        </div>

        {/* Mobile: CTA + theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`${prefix}#signup`}
            className="btn-gradient-border text-[11px] font-bold px-2.5 py-1.5 rounded-lg"
          >
            Get Early Access
          </a>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#555555] dark:text-[#B8B8B8] p-1"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="3" y1="3" x2="19" y2="19" />
                  <line x1="19" y1="3" x2="3" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="15" x2="19" y2="15" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/5 dark:border-white/5 px-4 py-4 flex flex-col gap-4 bg-[#F5F5F5] dark:bg-[#0c0c0c]">
          <a href={`${prefix}#features`} onClick={() => setMenuOpen(false)} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">How It Works</a>
          <a href={`${prefix}#wherebot`} onClick={() => setMenuOpen(false)} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">WhereBot</a>
          <a href={`${prefix}#reviews`} onClick={() => setMenuOpen(false)} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">Reviews</a>
          <a href={`${prefix}#signup`} onClick={() => setMenuOpen(false)} className="text-[#555555] dark:text-[#B8B8B8] hover:text-[#0c0c0c] dark:hover:text-white text-sm font-semibold transition-colors">Get Beta Access</a>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#555555] dark:text-[#B8B8B8]">
            <ThemeToggle />
            <span>Toggle light / dark mode</span>
          </div>
        </div>
      )}
    </nav>
  )
}
