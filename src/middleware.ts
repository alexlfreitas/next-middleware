// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()

  if (url.pathname.startsWith('/api')) {
    // Realizar a chamada da API e obter a resposta
    const apiResponse = await fetch(url.href, {
      method: req.method,
      headers: req.headers,
      body: req.body ? req.body : undefined,
    })

    // Obtenha o status code da resposta
    const statusCode = apiResponse.status
    console.log(statusCode)

    if (statusCode === 500 || statusCode === 404) {
      const errorPage = `/error?status=${statusCode}`
      return NextResponse.redirect(new URL(errorPage, req.url))
    }

    // Você pode tomar ações baseadas no status code
    if (statusCode === 401) {
      // Redirecionar para a página de login, por exemplo
      return NextResponse.redirect('/login')
    } else if (statusCode === 404) {
      // Retornar uma resposta customizada para 404
      return new NextResponse('API not found', { status: 404 })
    }

    // Clonar a resposta original para manipulação e retorno
    const response = new NextResponse(apiResponse.body, {
      headers: apiResponse.headers,
      status: apiResponse.status,
    })

    return response
  }

  // Continue o middleware normalmente
  return NextResponse.next()
}

export const config = {
  // matcher: '/api/:path*', // Aplica o middleware apenas para rotas de API
}
