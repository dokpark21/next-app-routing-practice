import { NextResponse } from 'next/server';

export function middleware(request) {
  return new NextResponse.next();
}

export const config = {
  matcher: '/news', // filter only requests to /news
};
