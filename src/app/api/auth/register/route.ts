import { NextResponse } from 'next/server';
import { PrismaClient as PostgresClient } from '../../../../generated/client';

const prisma = new PostgresClient();

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert into public.sandbox_users
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
