import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, password } = data

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Email and password are required.' }, { status: 400 })
    }

    // ensure DB is connected before query
    await prisma.$connect()

    const user = await prisma.user.findUnique({ where: { email } })

    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found.' }, { status: 401 })
    }

    if (user.password !== password) {
      return NextResponse.json({ success: false, message: 'Invalid password.' }, { status: 401 })
    }

    return NextResponse.json({ success: true, message: 'Login successful' })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ success: false, message: 'Server error', details: (error as Error).message }, { status: 500 })
  }
}
