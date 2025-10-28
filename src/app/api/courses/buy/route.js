// app/api/courses/purchase.js
import { buyCourse } from '@/server/controllers/courseController';
import { protect } from '@/server/middleware/authMiddleware';
import { NextResponse } from 'next/server';

export async function GET(req) {
    const { error, userId } = await protect(req);
    if (error) return NextResponse.json({ success: false, message: error }, { status: 401 });
    return buyCourse(req, userId);
}
