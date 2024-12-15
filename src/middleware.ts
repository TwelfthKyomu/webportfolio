import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ALLOWED_IPS = ['89.22.236.121', '::1', '127.0.0.1']
const isDevelopment = process.env.NODE_ENV === 'development'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const forwardedFor = request.headers.get('x-forwarded-for')
        const realIp = request.headers.get('x-real-ip')
        const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown'

        if (isDevelopment && (clientIp === '::1' || clientIp === '127.0.0.1')) {
            return NextResponse.next()
        }

        if (!ALLOWED_IPS.includes(clientIp)) {
            console.log(`Unauthorized access attempt from IP: ${clientIp}`)
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*'
}
