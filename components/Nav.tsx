'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0c0c0c]/90 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image
            src="/where-logo.png"
            alt="Where App"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">How It Works</a>
          <a href="#wherebot" className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">WhereBot</a>
          <a href="#reviews" className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">Reviews</a>
          <a
            href="#signup"
            className="btn-gradient-border text-white text-sm font-bold px-5 py-2 rounded-xl"
          >
            Get Beta Access
          </a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#signup"
            className="btn-gradient-border text-white text-xs font-bold px-3 py-2 rounded-lg"
          >
            Get Early Access
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#B8B8B8] p-1"
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
        <div className="md:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-4 bg-[#0c0c0c]">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">How It Works</a>
          <a href="#wherebot" onClick={() => setMenuOpen(false)} className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">WhereBot</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">Reviews</a>
          <a href="#signup" onClick={() => setMenuOpen(false)} className="text-[#B8B8B8] hover:text-white text-sm font-semibold transition-colors">Get Beta Access</a>
        </div>
      )}
    </nav>
  )
}
