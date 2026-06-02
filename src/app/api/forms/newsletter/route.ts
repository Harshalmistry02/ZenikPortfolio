import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email(),
  name: z.string().max(100).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const data = newsletterSchema.parse(await request.json());

    const existing = await prisma.newsletterSubscriber.findUnique({ where: { email: data.email } });
    if (existing?.isActive) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 });
    }

    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email: data.email },
      update: { isActive: true, unsubscribedAt: null },
      create: { email: data.email, name: data.name },
    });

    return NextResponse.json({ message: 'Subscribed successfully', id: subscriber.id }, { status: 201 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 400 });
  }
}
