import Image from 'next/image'
import Link from 'next/link'

interface Props {
  searchParams: { display_name?: string; avatar_url?: string; open_id?: string }
}

export default function TikTokConnected({ searchParams }: Props) {
  const { display_name, avatar_url } = searchParams
  const name = display_name || 'your TikTok account'

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white dark:bg-black">
      <div className="max-w-sm w-full flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          {avatar_url && (
            <Image
              src={avatar_url}
              alt={name}
              width={56}
              height={56}
              className="rounded-full border border-gray-200"
              unoptimized
            />
          )}
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Connected as</p>
            <p className="font-bold text-gray-900 dark:text-white text-lg leading-tight">@{name}</p>
          </div>
        </div>

        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">TikTok connected</h1>
          <p className="mt-2 text-gray-500 text-sm">
            You can now share your Where App routes directly to TikTok.
          </p>
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
