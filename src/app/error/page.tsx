'use client'

import { useSearchParams } from 'next/navigation'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  return (
    <div>
      <h1 className="text-red-500">Error {status}</h1>
    </div>
  )
}
