import axios from 'axios';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  
// axios.defaults.headers.get["Content-Type"] =
//     "application-json/x-www-form-urlencoded";
  
//   console.log("middle ware called")

//   const username = request.cookies.get('loged_in_user_id')?.value
 
  
//   const pathname = request.nextUrl.pathname
  
//   // const AceesloginPageAfterLogin = request.nextUrl.pathname === "/user/authentication/login"

//   if (username === undefined ) { 
//     return NextResponse.rewrite(new URL('/user/authentication/login', request.url))
//   }
//   if (isAdmin === 'true') {
//     return NextResponse.next()
//   } else {
//     return NextResponse.rewrite(new URL('/user/authentication/login', request.url))
//   }
  
} 
// See "Matching Paths" below to learn more
export const config = {
  // matcher: ['/admin/:path*', "/user/:path*",]
}