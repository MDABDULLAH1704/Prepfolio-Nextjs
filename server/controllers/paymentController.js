import Razorpay from 'razorpay';
import crypto from 'crypto';
import Course from '../models/Course.js';
import Payment from '../models/Payment.js';

// ✅ Create Razorpay instance
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Helper: 6 months expiry (approx 6*30 days)
// const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;


// 1. Create Razorpay Order
export const createOrder = async (req, res) => {
    try {
        const { courseId } = req.body;
        if (!req.user) return res.status(401).json({ success: false, message: 'Not authorized' });
        if (!courseId) return res.status(400).json({ success: false, message: 'courseId required' });

        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ success: false, message: 'Course not found' });
        if (!course.newPrice || course.newPrice <= 0)
            return res.status(400).json({ success: false, message: 'Invalid course price' });

        // Razorpay expects amount in paise
        const amount = Math.round(course.newPrice * 100);

        const options = {
            amount,
            currency: 'INR',
            receipt: `rcpt_${Date.now()}`,
            payment_capture: 1,
        };

        const order = await razorpay.orders.create(options);

        // Save initial payment record
        await Payment.create({
            razorpay_order_id: order.id,
            userId: req.user._id,
            courseId,
            amount,
            currency: 'INR',
            status: 'created',
        });

        return res.status(200).json({
            success: true,
            orderId: order.id,
            amount,
            keyId: process.env.RAZORPAY_KEY_ID,
            course: { id: course._id, title: course.title, description: course.description },
        });
    } catch (err) {
        console.error('createOrder err', err);
        return res.status(500).json({ success: false, message: 'Server error creating order' });
    }
};


// 2. Verify Payment
export const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;
        if (!req.user) return res.status(401).json({ success: false, message: 'Not authorized' });
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !courseId) {
            return res.status(400).json({ success: false, message: 'Missing parameters' });
        }

        // Verify signature
        const generated_signature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        if (generated_signature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: 'Invalid signature' });
        }

        const existingPayment = await Payment.findOne({ razorpay_payment_id });
        if (existingPayment && existingPayment.status === 'paid') {
            return res.status(200).json({ success: true, message: 'Payment already verified' });
        }

        // Set expiry 6 months from now
        const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;
        const boughtAt = new Date();
        const expiry = new Date(boughtAt.getTime() + SIX_MONTHS_MS);

        // Update payment
        const payment = await Payment.findOneAndUpdate(
            { razorpay_order_id },
            { razorpay_payment_id, razorpay_signature, status: 'paid', boughtAt, expiry },
            { new: true }
        );

        return res.status(200).json({ success: true, message: 'Payment verified, course unlocked', payment });
    } catch (err) {
        console.error('verifyPayment err', err);
        return res.status(500).json({ success: false, message: 'Server error verifying payment' });
    }
};


// 3. Razorpay Webhook
export const razorpayWebhook = async (req, res) => {
    try {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
        const signature = req.headers['x-razorpay-signature'];
        const body = JSON.stringify(req.body || {});

        const expectedSignature = crypto.createHmac('sha256', secret).update(body).digest('hex');
        if (signature !== expectedSignature) {
            return res.status(400).json({ error: 'Invalid webhook signature' });
        }

        const event = req.body.event;
        const payment = req.body.payload?.payment?.entity;

        if (event === 'payment.captured' && payment) {
            await Payment.findOneAndUpdate(
                { razorpay_order_id: payment.order_id },
                { razorpay_payment_id: payment.id, status: 'paid' }
            );
        } else if (event === 'payment.failed' && payment) {
            await Payment.findOneAndUpdate(
                { razorpay_order_id: payment.order_id },
                { status: 'failed' }
            );
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('razorpayWebhook err', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};


// 4. getActiveCourses 
export const getActiveCourses = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ success: false, message: 'Not authorized' });

        const now = new Date();

        const payments = await Payment.find({
            userId: req.user._id,
            status: 'paid',
            expiry: { $gt: now },
        }).populate('courseId');

        const courses = payments.map(p => ({
            _id: p.courseId._id,
            title: p.courseId.title,
            description: p.courseId.description,
            expiry: p.expiry,
        }));

        return res.status(200).json({ success: true, courses });
    } catch (err) {
        console.error('getActiveCourses err', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};