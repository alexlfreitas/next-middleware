import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  try {
    const response = await fetch(req.nextUrl.href, {
      method: req.method,
      headers: req.headers,
      body: req.body,
    })

    console.log('Status Code >>>', response.status)
  } catch (error) {
    console.error(error)
  }

  return NextResponse.next()
}
