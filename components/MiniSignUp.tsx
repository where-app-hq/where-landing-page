'use client'

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function MiniSignUp() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (status !== 'success') return
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FCB250', '#EC008C', '#ffffff'],
    })
  }, [status])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else if (res.status === 409) {
        setStatus('duplicate')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
          style={{ background: 'linear-gradient(135deg, #FCB250, #EC008C)' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[#0c0c0c] dark:text-white font-bold text-lg mb-1">You&apos;re in!</p>
        <p className="text-[#555555] dark:text-[#aaaaaa] text-sm font-medium">Check your email for your invite link.</p>
      </div>
    )
  }

  if (status === 'duplicate') {
    return (
      <div className="text-center py-4">
        <p className="text-[#0c0c0c] dark:text-white font-bold text-lg mb-1">You&apos;re already on the list!</p>
        <p className="text-[#555555] dark:text-[#aaaaaa] text-sm font-medium">We&apos;ll reach out when your early access is ready.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999999] dark:text-[#888888]">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full bg-white dark:bg-[#0c0c0c] border border-black/10 dark:border-white/10 text-[#0c0c0c] dark:text-white placeholder-[#aaaaaa] dark:placeholder-[#474747] rounded-2xl pl-11 pr-4 py-3 text-sm font-medium focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gradient-fill disabled:opacity-60 text-white font-bold text-sm py-3 rounded-2xl flex items-center justify-center gap-2 w-full"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
            Joining...
          </>
        ) : (
          <span className="flex items-center justify-center gap-1">
            <svg width="14" height="14" viewBox="0 0 814 1000" fill="white" style={{ flexShrink: 0, marginTop: '-4px' }}>
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.8 135.4-317.7 269-317.7 70.8 0 129.5 46.4 173.1 46.4 42.8 0 109.4-49 192.5-49 31 0 108.4 2.6 168.1 68.8zm-56.8-183.8c-30.8 36.8-79.1 64.8-127.8 64.8-6.4 0-12.8-.6-19.2-1.9.6-7 .6-14 .6-20.4 0-45.1 19.2-92.8 53.3-124.4 17.3-16.5 48.9-30.8 76.1-38.5 6.4-1.9 12.8-2.6 19.2-2.6.6 6.4 1.3 12.8 1.3 19.9 0 46.4-18.6 93.4-53.5 102.1z"/>
            </svg>
            <span className="leading-none">{'Get Beta Access on iPhone'}<sup>®</sup></span>
          </span>
        )}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm text-center font-medium">{errorMsg}</p>
      )}

      <p className="text-[#888888] text-xs text-center font-medium">Free. No account required. We never sell your data.</p>
    </form>
  )
}
