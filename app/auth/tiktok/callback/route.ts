import { NextRequest, NextResponse } from 'next/server'

const TOKEN_URL = 'https://open.tiktokapis.com/v2/oauth/token/'
const USER_URL = 'https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url'
const REDIRECT_URI = process.env.TIKTOK_REDIRECT_URI ?? 'https://where.app/auth/tiktok/callback'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error || !code) {
    const reason = error ?? 'no_code'
    return NextResponse.redirect(new URL(`/auth/tiktok/error?reason=${reason}`, req.url))
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET

  if (!clientKey || !clientSecret) {
    return NextResponse.redirect(new URL('/auth/tiktok/error?reason=config', req.url))
  }

  // Exchange authorization code for access token
  const tokenRes = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
    }),
  })

  const tokenData = await tokenRes.json()

  if (!tokenRes.ok || !tokenData.access_token) {
    return NextResponse.redirect(new URL('/auth/tiktok/error?reason=token_exchange', req.url))
  }

  const { access_token, refresh_token, open_id } = tokenData

  // Fetch TikTok display name and avatar
  const userRes = await fetch(USER_URL, {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  const userData = await userRes.json()
  const user = userData.data?.user ?? {}

  const params = new URLSearchParams({
    open_id: open_id ?? user.open_id ?? '',
    display_name: user.display_name ?? '',
    avatar_url: user.avatar_url ?? '',
  })

  // In production: persist access_token + refresh_token tied to open_id here.
  // For now the connected page shows the linked account for the demo flow.

  return NextResponse.redirect(new URL(`/auth/tiktok/connected?${params}`, req.url))
}
