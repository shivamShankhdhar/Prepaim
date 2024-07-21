import axios from 'axios';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
axios.defaults.headers.get["Content-Type"] =
    "application-json/x-www-form-urlencoded";
  
  console.log("middle ware called")

  const loged_in_user_id = request.cookies.get('loged_in_user_id')?.value
 
  
  const pathname = request.nextUrl.pathname
  
  // const AceesloginPageAfterLogin = request.nextUrl.pathname === "/user/authentication/login"

  if (loged_in_user_id === undefined ) { 
    return NextResponse.rewrite(new URL('/user/authentication/login', request.url))
  }
  else {
    return NextResponse.next()
  }
  
} 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/user/:path*",]
  // '/admin/:path*',
}