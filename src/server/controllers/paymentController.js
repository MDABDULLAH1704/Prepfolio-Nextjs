import crypto from "crypto";
import Course from "../models/Course.js";
import Payment from "../models/Payment.js";

/* =====================================
   1️⃣ Create Razorpay Order (Protected)
===================================== */
export const createOrder = async (req) => {
    try {
        // ✅ Dynamic import Razorpay only when needed (runtime-safe)
        const Razorpay = (await import("razorpay")).default;

        // ✅ Ensure env vars exist
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            throw new Error("Razorpay keys are missing in environment variables");
        }

        // ✅ Initialize Razorpay at runtime (not build time)
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const { courseId } = await req.json();
        const user = req.user;

        if (!user)
            return { status: 401, body: { success: false, message: "Not authorized" } };
        if (!courseId)
            return { status: 400, body: { success: false, message: "courseId required" } };

        const course = await Course.findById(courseId);
        if (!course)
            return { status: 404, body: { success: false, message: "Course not found" } };

        if (!course.newPrice || course.newPrice <= 0)
            return { status: 400, body: { success: false, message: "Invalid course price" } };

        const amount = Math.round(course.newPrice * 100);

        // ✅ Create Razorpay order
        const order = await razorpay.orders.create({
            amount,
            currency: "INR",
            receipt: `rcpt_${Date.now()}`,
            payment_capture: 1,
        });

        // ✅ Save order in DB
        await Payment.create({
            razorpay_order_id: order.id,
            userId: user._id,
            courseId,
            amount,
            currency: "INR",
            status: "created",
        });

        return {
            status: 200,
            body: {
                success: true,
                orderId: order.id,
                amount,
                keyId: process.env.RAZORPAY_KEY_ID,
                course: {
                    id: course._id,
                    title: course.title,
                    description: course.description,
                },
            },
        };
    } catch (error) {
        console.error("createOrder Error:", error);
        return { status: 500, body: { success: false, message: "Server error" } };
    }
};

/* =====================================
   2️⃣ Verify Razorpay Payment
===================================== */
export const verifyPayment = async (req) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            courseId,
        } = await req.json();
        const user = req.user;

        if (!user)
            return { status: 401, body: { success: false, message: "Not authorized" } };

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !courseId)
            return { status: 400, body: { success: false, message: "Missing parameters" } };

        const generated_signature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (generated_signature !== razorpay_signature)
            return { status: 400, body: { success: false, message: "Invalid signature" } };

        const existingPayment = await Payment.findOne({ razorpay_payment_id });
        if (existingPayment && existingPayment.status === "paid") {
            return { status: 200, body: { success: true, message: "Payment already verified" } };
        }

        const SIX_MONTHS_MS = 6 * 30 * 24 * 60 * 60 * 1000;
        const boughtAt = new Date();
        const expiry = new Date(boughtAt.getTime() + SIX_MONTHS_MS);

        const payment = await Payment.findOneAndUpdate(
            { razorpay_order_id },
            { razorpay_payment_id, razorpay_signature, status: "paid", boughtAt, expiry },
            { new: true }
        );

        return {
            status: 200,
            body: { success: true, message: "Payment verified, course unlocked", payment },
        };
    } catch (error) {
        console.error("verifyPayment Error:", error);
        return { status: 500, body: { success: false, message: "Server error" } };
    }
};

/* =====================================
   3️⃣ Handle Razorpay Webhook (Server)
===================================== */
export const razorpayWebhook = async (req) => {
    try {
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
        const signature = req.headers.get("x-razorpay-signature");
        const body = await req.text();

        const expectedSignature = crypto.createHmac("sha256", secret).update(body).digest("hex");

        if (signature !== expectedSignature)
            return { status: 400, body: { error: "Invalid webhook signature" } };

        const parsed = JSON.parse(body);
        const event = parsed.event;
        const payment = parsed.payload?.payment?.entity;

        if (event === "payment.captured" && payment) {
            await Payment.findOneAndUpdate(
                { razorpay_order_id: payment.order_id },
                { razorpay_payment_id: payment.id, status: "paid" }
            );
        } else if (event === "payment.failed" && payment) {
            await Payment.findOneAndUpdate(
                { razorpay_order_id: payment.order_id },
                { status: "failed" }
            );
        }

        return { status: 200, body: { success: true } };
    } catch (error) {
        console.error("webhook Error:", error);
        return { status: 500, body: { success: false, message: "Server error" } };
    }
};

/* =====================================
   4️⃣ Get Active Courses (Protected)
===================================== */
export const getActiveCourses = async (req) => {
    try {
        const user = req.user;
        if (!user)
            return { status: 401, body: { success: false, message: "Not authorized" } };

        const now = new Date();
        const payments = await Payment.find({
            userId: user._id,
            status: "paid",
            expiry: { $gt: now },
        }).populate("courseId");

        const courses = payments.map((p) => ({
            _id: p.courseId._id,
            title: p.courseId.title,
            description: p.courseId.description,
            expiry: p.expiry,
        }));

        return { status: 200, body: { success: true, courses } };
    } catch (error) {
        console.error("getActiveCourses Error:", error);
        return { status: 500, body: { success: false, message: "Server error" } };
    }
};
