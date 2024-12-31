import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables')
    return response
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseKey,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  try {
    const { data: { session } } = await supabase.auth.getSession()

    // Get the pathname of the request
    const pathname = request.nextUrl.pathname

    // If user is signed in and tries to access /admin/login, redirect them to /admin
    if (session && pathname === '/admin/login') {
      return NextResponse.redirect(new URL('/admin', request.url))
    }

    // If user is not signed in and tries to access admin pages (except login), redirect to login
    if (!session && pathname.startsWith('/admin') && pathname !== '/admin/login') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  } catch (error) {
    console.error('Error in middleware:', error)
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
