import { NextRequest, NextResponse } from 'next/server'
import { randomBytes } from 'crypto'

const SCOPES = 'user.info.basic,video.publish,video.upload'
const REDIRECT_URI = process.env.TIKTOK_REDIRECT_URI ?? 'https://where.app/auth/tiktok/callback'

export async function GET(req: NextRequest) {
  const clientKey = process.env.TIKTOK_CLIENT_KEY
  if (!clientKey) {
    return NextResponse.redirect(new URL('/auth/tiktok/error?reason=config', req.url))
  }

  const state = randomBytes(16).toString('hex')

  const params = new URLSearchParams({
    client_key: clientKey,
    scope: SCOPES,
    response_type: 'code',
    redirect_uri: REDIRECT_URI,
    state,
  })

  return NextResponse.redirect(
    `https://www.tiktok.com/v2/auth/authorize/?${params}`
  )
}
