export default async function TestPage() {
  const routeApi = 'https://api.adviceslip.com/advice'

  const response = await fetch(routeApi, {
    cache: 'no-store',
  })
  const data = await response.json()

  return (
    <div>
      <strong>API Test</strong>
      <pre className="mt-2">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
