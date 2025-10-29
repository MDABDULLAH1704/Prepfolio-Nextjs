import { NextResponse } from 'next/server';
import Course from '@/server/models/Course';
import User from '@/server/models/User';
import { connectDB } from '@/server/lib/database';

// Ensure DB is connected
connectDB();

/* ================================
   1. GET all courses (Public)
================================ */
export async function getAllCourses() {
    try {
        const courses = await Course.find();
        return NextResponse.json({ success: true, courses });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}

/* ================================
   2. GET course preview (Public)
================================ */
export async function getCoursePreview(id) {
    try {
        const course = await Course.findOne(
            /^[0-9a-fA-F]{24}$/.test(id)
                ? { _id: id }
                : { urlCourseDetail: id }
        );

        if (!course) {
            return NextResponse.json({ success: false, message: "Course not found" }, { status: 404 });
        }

        return NextResponse.json({ success: true, course });
    } catch (error) {
        console.error("Error fetching course preview:", error);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}

/* ================================
   3. GET single course (Protected)
================================ */
export async function getCourseById(req, id, userId) {
    try {
        // ✅ 1. Authorization check
        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'Not authorized' },
                { status: 401 }
            );
        }

        // ✅ 2. Load user and their purchased courses
        const user = await User.findById(userId).populate({
            path: 'boughtCourses.courseId',
            select: '_id title urlCourseDetail',
        });

        if (!user) {
            return NextResponse.json(
                { success: false, message: 'User not found' },
                { status: 404 }
            );
        }

        // ✅ 3. Find the course (by ID or slug)
        const course = await Course.findOne(
            /^[0-9a-fA-F]{24}$/.test(id)
                ? { _id: id }
                : { urlCourseDetail: id }
        );

        if (!course) {
            return NextResponse.json(
                { success: false, message: 'Course not found' },
                { status: 404 }
            );
        }

        // ✅ 4. Verify purchase & expiry
        const now = new Date();
        const isPurchased = user.boughtCourses.some((b) => {
            const courseObj = b.courseId;
            if (!courseObj) return false;
            const matches = courseObj._id.toString() === course._id.toString();
            const notExpired = b.expiry ? new Date(b.expiry) > now : true;
            return matches && notExpired;
        });

        if (!isPurchased) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'You have not purchased this course. Please buy it to access.',
                },
                { status: 403 }
            );
        }

        // ✅ 5. Return success (no sensitive data)
        return NextResponse.json({
            success: true,
            course,
        });

    } catch (err) {
        console.error('❌ getCourseById Error:', err);

        // ✅ 6. Handle known Mongoose or JWT errors gracefully
        const isMongooseError = err.name === 'CastError' || err.name === 'ValidationError';
        const isAuthError = err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError';

        if (isAuthError) {
            return NextResponse.json(
                { success: false, message: 'Invalid or expired token' },
                { status: 401 }
            );
        }

        if (isMongooseError) {
            return NextResponse.json(
                { success: false, message: 'Invalid course ID format' },
                { status: 400 }
            );
        }

        // ✅ Default: Internal Server Error
        return NextResponse.json(
            { success: false, message: 'Server error, please try again later' },
            { status: 500 }
        );
    }
}

/* ================================
   4. GET purchased courses (Protected)
================================ */
export async function getPurchasedCourses(req, userId) {
    try {
        if (!userId) return NextResponse.json({ success: false, message: 'Not authorized' }, { status: 401 });

        const user = await User.findById(userId).populate('boughtCourses.courseId');
        if (!user) return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });

        const now = new Date();
        const activeBought = user.boughtCourses.filter(b => new Date(b.expiry) > now);

        const courses = activeBought.map(b => {
            const course = b.courseId;
            if (!course) return null;
            return {
                ...course.toObject(),
                purchasedAt: b.boughtAt,
                expiry: b.expiry,
            };
        }).filter(Boolean);

        return NextResponse.json({ success: true, courses });
    } catch (err) {
        console.error('getPurchasedCourses error:', err);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

/* ================================
   5. POST buy a course (Protected)
================================ */
export async function buyCourse(req) {
    try {
        const authHeader = req.headers.get("authorization");
        const token = authHeader?.split(" ")[1];
        if (!token) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 });
        }

        const decoded = verifyToken(token);
        const { courseId } = await req.json();

        const course = await Course.findById(courseId);
        if (!course) {
            return NextResponse.json({ success: false, message: "Course not found" }, { status: 404 });
        }

        if (!course.purchasedBy.includes(decoded.id)) {
            course.purchasedBy.push(decoded.id);
            await course.save();
        }

        return NextResponse.json({ success: true, message: "Course purchased successfully" });
    } catch (err) {
        console.error("buyCourse error:", err);
        return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
    }
}