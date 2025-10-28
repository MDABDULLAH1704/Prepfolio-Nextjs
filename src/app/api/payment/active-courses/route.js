import { NextResponse } from 'next/server';
import { getActiveCourses } from '@/server/controllers/paymentController';
import { protect } from '@/server/middleware/authMiddleware';
import { connectDB } from '@/server/lib/database';

export async function GET(req) {
    await connectDB();
    const auth = await protect(req);
    if (auth.error) return NextResponse.json({ message: auth.error }, { status: 401 });

    req.user = auth.user;
    const result = await getActiveCourses(req, auth.user);
    return NextResponse.json(result.body, { status: result.status });
}
