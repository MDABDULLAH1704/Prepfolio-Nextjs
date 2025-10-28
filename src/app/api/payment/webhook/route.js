import { NextResponse } from 'next/server';
import { razorpayWebhook } from '@/server/controllers/paymentController';
import { connectDB } from '@/server/lib/database';

export async function POST(req) {
    await connectDB();
    const result = await razorpayWebhook(req);
    return NextResponse.json(result.body, { status: result.status });
}
