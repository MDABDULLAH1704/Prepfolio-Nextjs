import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createOrder, verifyPayment, razorpayWebhook, getActiveCourses } from '../controllers/paymentController.js';

const router = express.Router();

// Protected routes
router.post('/create-order', protect, createOrder);
router.post('/verify-payment', protect, verifyPayment);
router.get('/active-courses', protect, getActiveCourses);

// Razorpay webhook (Razorpay calls this, no auth)
router.post('/webhook', express.json({ type: '*/*' }), razorpayWebhook);

export default router;
