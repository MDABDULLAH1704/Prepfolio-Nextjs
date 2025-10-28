import { NextResponse } from 'next/server';
import { verifyPayment } from '@/server/controllers/paymentController';
import { protect } from '@/server/middleware/authMiddleware';
import { connectDB } from '@/server/lib/database';

export async function POST(req) {
    await connectDB();
    const auth = await protect(req);
    if (auth.error) return NextResponse.json({ message: auth.error }, { status: 401 });

    req.user = auth.user;
    const result = await verifyPayment(req, auth.user);
    return NextResponse.json(result.body, { status: result.status });
}
