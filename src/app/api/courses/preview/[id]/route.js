import { getCoursePreview } from '@/server/controllers/courseController';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
    try {
        // ✅ Await params as required by Next.js
        const { id } = await context.params;

        // ✅ Fetch and return course preview
        return await getCoursePreview(id);
    } catch (err) {
        console.error('GET /api/courses/[id] (preview) error:', err);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
