import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add your IP address here
const ALLOWED_IP = '89.22.236.121'

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const forwardedFor = request.headers.get('x-forwarded-for')
        const realIp = request.headers.get('x-real-ip')
        const clientIp = forwardedFor?.split(',')[0] || realIp || 'unknown'

        if (clientIp !== ALLOWED_IP) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*'
}
