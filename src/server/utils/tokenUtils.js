import jwt from 'jsonwebtoken';
import crypto from 'crypto';

/**
 * 🔐 Generate JWT token with optional sessionToken
 */
export function generateToken(id, sessionToken) {
    return jwt.sign(
        { id, sessionToken },
        process.env.JWT_SECRET,
        { expiresIn: '365d' }
    );
}

/**
 * 🧩 verifyToken token 
**/
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch {
        throw new Error('Invalid or expired token');
    }
};

/**
 * 🧩 Generate random session token for single-device login
 */
export function generateSessionToken() {
    return crypto.randomBytes(32).toString('hex');
}


/**
 * 🌍 Define base API URL (useful for frontend fetch calls)
 * In Next.js App Router, no need for hard-coded ports.
 */
export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
