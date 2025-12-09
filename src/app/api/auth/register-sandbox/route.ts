import { prisma } from '@/lib/queries/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Secure token check
  const token = request.headers.get('x-sandbox-admin-token');
  if (!token || token !== process.env.SANDBOX_ADMIN_TOKEN) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { username, password } = await request.json();
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(password, 16);
    const newUser = await prisma.sandbox_users.create({
      data: {
        username: username,
        password: hashedPassword,
        created_at: new Date()
      }
    });
    return NextResponse.json({ message: 'success', user: newUser });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: 'error', error: e }, { status: 500 });
  }
}
