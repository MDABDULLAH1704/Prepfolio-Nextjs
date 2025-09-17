import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database.js';
import authRoutes from './routes/auth.js'; // Import auth routes

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

// Default route
app.get('/', (req, res) => res.send('🚀 Prepfolio API Running'));

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));













// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './database.js';
// import authRoutes from './routes/auth.js';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect MongoDB
// connectDB();

// // Routes
// app.use('/api/auth', authRoutes);

// // Default route
// app.get('/', (req, res) => res.send('🚀 Prepfolio API Running'));

// // Global error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: 'Something went wrong!' });
// });

// // Start server
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
