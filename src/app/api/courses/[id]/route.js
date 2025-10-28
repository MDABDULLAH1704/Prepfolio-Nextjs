// app/api/courses/[id]/route.js
import { getCourseById } from '@/server/controllers/courseController';
import { protect } from '@/server/middleware/authMiddleware';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
    try {
        // ✅ Await params first (as required by Next.js)
        const { id } = await context.params;

        // ✅ Central auth
        const { error, userId } = await protect(req);
        if (error)
            return NextResponse.json({ success: false, message: error }, { status: 401 });

        // ✅ Pass verified userId to controller
        return await getCourseById(req, id, userId);
    } catch (err) {
        console.error('GET /api/courses/[id] error:', err);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
