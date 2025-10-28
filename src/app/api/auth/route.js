// src/app/api/auth/route.js
import { handleSignup, handleLogin, handleGetProfile } from '@/server/controllers/authController';
import { connectDB } from '@/server/lib/database';

// ✅ Connect DB on cold start
connectDB();

export async function POST(req) {
    try {
        const body = await req.json();
        const { action } = body;

        if (action === 'login') return handleLogin(body);
        if (action === 'signup') return handleSignup(body);

        return Response.json({ success: false, message: 'Invalid action' }, { status: 400 });
    } catch (error) {
        console.error('Auth route error:', error);
        return Response.json({ success: false, message: 'Server Error' }, { status: 500 });
    }
}

export async function GET(req) {
    return handleGetProfile(req);
}
