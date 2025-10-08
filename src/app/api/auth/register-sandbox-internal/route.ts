import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Make internal call to the existing register-sandbox endpoint with admin token
    const response = await fetch(
      `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/api/auth/register-sandbox`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-sandbox-admin-token': process.env.SANDBOX_ADMIN_TOKEN || ''
        },
        body: JSON.stringify(body)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(responseData, { status: response.status });
    }

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Internal registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error },
      { status: 500 }
    );
  }
}
