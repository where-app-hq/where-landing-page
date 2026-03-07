import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }

  const apiKey = process.env.LOOPS_API_KEY

  if (!apiKey) {
    // In dev without env vars, simulate success so the form can be tested
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({ success: true })
    }
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, source: 'landing-page' }),
  })

  const data = await res.json()

  if (res.status === 409 || data.message?.toLowerCase().includes('already')) {
    return NextResponse.json({ error: 'Already subscribed.' }, { status: 409 })
  }

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
