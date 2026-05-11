import Link from 'next/link'

const REASONS: Record<string, string> = {
  access_denied: 'You declined the TikTok connection.',
  no_code: 'No authorization code was received.',
  token_exchange: 'We could not complete the connection. Please try again.',
  config: 'Server configuration error. Please contact support.',
}

interface Props {
  searchParams: { reason?: string }
}

export default function TikTokError({ searchParams }: Props) {
  const message = REASONS[searchParams.reason ?? ''] ?? 'Something went wrong. Please try again.'

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-black">
      <div className="max-w-sm w-full flex flex-col items-center gap-6 text-center">
        <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Connection failed</h1>
          <p className="mt-2 text-gray-500 text-sm">{message}</p>
        </div>

        <Link
          href="/"
          className="w-full py-3 px-6 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-sm text-center"
        >
          Back to Where App
        </Link>
      </div>
    </main>
  )
}
