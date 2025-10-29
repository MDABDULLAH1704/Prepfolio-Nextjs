// src/server/controllers/authController.js
import { NextResponse } from 'next/server';
import User from '@/server/models/User';
import { generateToken, generateSessionToken, verifyToken } from '@/server/utils/tokenUtils';

/* ================================
   🧩 Handle Signup
================================ */
export async function handleSignup({ name, email, phone, gender, course, college, password }) {
    try {
        if (!name || !email || !phone || !gender || !course || !college || !password) {
            return NextResponse.json({ success: false, message: 'Required fields missing' }, { status: 400 });
        }

        if (!/^\d{10}$/.test(phone)) {
            return NextResponse.json({ success: false, message: 'Phone number must be exactly 10 digits' }, { status: 400 });
        }

        if (!/^(?=.*[!@#$%^&*])(?=.{6,15})/.test(password)) {
            return NextResponse.json({ success: false, message: 'Password must be 6-15 characters and include a special character' }, { status: 400 });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
        }

        const user = await User.create({ name, email, phone, gender, course, college, password });
        const token = generateToken(user._id);

        return NextResponse.json({
            success: true,
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        }, { status: 201 });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}

/* ================================
   🧩 Handle Login
================================ */
export async function handleLogin({ email, password }) {
    try {
        if (!email || !password) {
            return NextResponse.json({ success: false, message: 'Email and password are required' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return NextResponse.json({ success: false, message: 'Invalid email or password' }, { status: 401 });
        }

        const sessionToken = generateSessionToken();
        user.sessionToken = sessionToken;
        await user.save();

        const token = generateToken(user._id, sessionToken);

        return NextResponse.json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ success: false, message: 'Server error during login' }, { status: 500 });
    }
}

/* ================================
   🧩 Handle Get Profile
================================ */
export async function handleGetProfile(req) {
    try {
        const authHeader = req.headers.get('authorization');
        const token = authHeader?.split(' ')[1];
        if (!token) {
            return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });
        }

        const decoded = verifyToken(token);
        const user = await User.findById(decoded.id).select('-password');
        if (!user) {
            return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
        }

        // ✅ Check sessionToken validity
        if (user.sessionToken !== decoded.sessionToken) {
            return NextResponse.json({ success: false, message: 'Session expired. Please log in again.' }, { status: 401 });
        }

        return NextResponse.json({ success: true, user }, { status: 200 });
    } catch (error) {
        console.error('Profile error:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
