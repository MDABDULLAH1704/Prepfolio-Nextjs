import jwt from 'jsonwebtoken';
import crypto from 'crypto'; // to generate random session tokens


export const generateToken = (id, sessionToken) => {
    return jwt.sign(
        { id, sessionToken }, // include sessionToken in payload
        process.env.JWT_SECRET,
        { expiresIn: '365d' } // keep your existing long expiration
    );
};


export const generateSessionToken = () => {
    return crypto.randomBytes(32).toString('hex');
};


export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
