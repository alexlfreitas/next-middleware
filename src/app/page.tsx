import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <ul>
        <li className="list-disc">
          <Link href={'/api'}>api</Link>
        </li>
        <li className="list-disc">
          <Link href={'/api-error'}>api-error</Link>
        </li>
        <li className="list-disc">
          <Link href={'/teste'}>teste</Link>
        </li>
      </ul>
    </div>
  )
}
