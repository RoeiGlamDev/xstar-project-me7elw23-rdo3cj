import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};

export async function middleware(req) {
  const url = req.nextUrl.clone();

  // Redirect to home page for any unmatched routes
  if (url.pathname !== '/') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domain
  },
  webpack(config) {
    
    return config;
  }
};