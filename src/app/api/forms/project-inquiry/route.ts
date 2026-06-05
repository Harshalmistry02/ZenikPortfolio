import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { z } from 'zod';

const projectInquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  serviceType: z.string().min(2).max(50),
  budget: z.string().optional(),
  description: z.string().min(10).max(5000),
  phone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const data = projectInquirySchema.parse(await request.json());
    const inquiry = await prisma.projectInquiry.create({ data });
    return NextResponse.json({ message: 'Project inquiry submitted successfully', id: inquiry.id }, { status: 201 });
  } catch (error) {
    console.error('Project inquiry error:', error);
    return NextResponse.json({ error: 'Failed to submit project inquiry' }, { status: 400 });
  }
}
