export default async function TestPage() {
  const response = await fetch('https://api.adviceslip.com/advice', {
    cache: 'no-store',
  })
  const data = await response.json()

  return (
    <div>
      <strong>API Test</strong>
      <p className="mt-2">{data?.slip?.advice}</p>
    </div>
  )
}
