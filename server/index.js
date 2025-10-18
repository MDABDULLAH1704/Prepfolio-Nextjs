import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database.js';
import authRoutes from './routes/auth.js'; // Import auth routes
import courseRoutes from './routes/course.js'; // Import auth routes
import paymentRoutes from './routes/payment.js';
import { errorHandler } from './errorHandler.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/courses', courseRoutes);
app.use('/api/payment', paymentRoutes);

// Default route
app.get('/', (req, res) => res.send('🚀 Prepfolio API Running'));

// Centralized error handler
app.use(errorHandler);

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
