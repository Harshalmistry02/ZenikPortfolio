import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  message: z.string().min(10).max(5000),
  phone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const data = contactSchema.parse(await request.json());
    const submission = await prisma.contactSubmission.create({ data });
    return NextResponse.json({ message: 'Contact form submitted successfully', id: submission.id }, { status: 201 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 400 });
  }
}
