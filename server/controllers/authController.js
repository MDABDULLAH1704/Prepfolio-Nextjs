import User from '../models/User.js';
import { generateToken } from '../utils/tokenUtils.js';

export const signup = async (req, res, next) => {
    try {
        const { name, email, phone, gender, college, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ success: false, message: 'Required fields missing' });
        }

        // Validate phone (exactly 10 digits)
        if (!/^\d{10}$/.test(phone)) {
            return res.status(400).json({ success: false, message: 'Phone number must be exactly 10 digits' });
        }

        // Validate password (6-15 chars, at least 1 special character)
        if (!/^(?=.*[!@#$%^&*])(?=.{6,15})/.test(password)) {
            return res.status(400).json({ success: false, message: 'Password must be 6-15 characters and include a special character' });
        }

        const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const user = await User.create({ name, email, phone, gender, college, password });
        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        next(error);  // Pass to centralized error handler
    }
};


// Login
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        next(error);
    }
};
