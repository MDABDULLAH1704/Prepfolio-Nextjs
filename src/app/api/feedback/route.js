// app/api/feedback/route.js
import { NextResponse } from 'next/server';
import { createFeedback, getAllFeedback } from '@/server/controllers/feedbackController';

/**
 * GET -> return all feedbacks
 * POST -> create new feedback (requires authentication in frontend; we validate server-side)
 */

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const limit = Math.min(parseInt(url.searchParams.get("limit") || "50", 10), 200);
        const skip = parseInt(url.searchParams.get("skip") || "0", 10);

        const feedbacks = await getAllFeedback({ limit, skip });
        return NextResponse.json({ ok: true, feedbacks });
    } catch (err) {
        console.error("GET /api/feedback error", err);
        return NextResponse.json({ ok: false, error: "Failed to load feedbacks" }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const data = await req.json();
        // Expect { name, message, userId? } — userId can be sent from server-side session if you use it
        const { name, message, userId } = data;

        if (!name || !message) {
            return NextResponse.json({ ok: false, error: "Name and message are required" }, { status: 400 });
        }

        const fb = await createFeedback({ name, message, userId });

        return NextResponse.json({ ok: true, feedback: fb }, { status: 201 });
    } catch (err) {
        console.error("POST /api/feedback error", err);
        const status = err.status || 500;
        return NextResponse.json({ ok: false, error: err.message || "Failed to submit feedback" }, { status });
    }
}
