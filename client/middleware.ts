import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const username = request.cookies.get('username')?.value
  const isAdmin = request.cookies.get('isAdmin')?.value
  
  const pathname = request.nextUrl.pathname
  // const AceesloginPageAfterLogin = request.nextUrl.pathname === "/user/authentication/login"

  if (username === undefined ) { 
    return NextResponse.rewrite(new URL('/user/authentication/login', request.url))
  }
  if (isAdmin === 'true') {
    return NextResponse.next()
  } else {
    return NextResponse.rewrite(new URL('/user/authentication/login', request.url))
  }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*', "/user/:path*",]
}