import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '365d' });
};

export const API_BASE_URL = 
    process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
