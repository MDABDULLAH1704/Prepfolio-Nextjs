import Course from "../models/Course.js";
import User from '../models/User.js';


// 1. GET all courses
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, courses });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};


// 2. GET single course by ID (secured)
export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure user is logged in (protect middleware adds req.user)
        if (!req.user) {
            return res.status(401).json({ success: false, message: "Not authorized Ok" });
        }

        // Find course by ID or slug
        const course = await Course.findOne(
            /^[0-9a-fA-F]{24}$/.test(id)
                ? { _id: id }
                : { urlCourseDetail: id }
        );

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Check if user has purchased this course
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const now = new Date();
        const isPurchased = user.boughtCourses.some(
            (b) => b.courseId.toString() === course._id.toString() && new Date(b.expiry) > now
        );

        if (!isPurchased) {
            return res.status(403).json({
                success: false,
                message: "You have not purchased this course. Please buy it to access.",
            });
        }

        // ✅ Allow access
        return res.status(200).json({ success: true, course });
    } catch (error) {
        // console.error("Error fetching course:", error);
        // return res.status(500).json({ success: false, message: "Server error" });
        console.error("getCourseById Error:", error.message, error.stack);
    }
};


// 3. GET purchased courses for a user
export const getPurchasedCourses = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ success: false, message: 'Not authorized' });

        // Populate course references from user.boughtCourses
        const user = await User.findById(req.user._id).populate('boughtCourses.courseId');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const now = new Date();
        const activeBought = user.boughtCourses.filter(b => new Date(b.expiry) > now);

        // send full course objects (populated)
        const courses = activeBought.map(b => {
            const course = b.courseId;
            if (!course) return null;
            return {
                ...course.toObject(),
                purchasedAt: b.boughtAt,
                expiry: b.expiry,
                purchasedBy: [{ user: user._id, boughtAt: b.boughtAt, expiry: b.expiry }]
            };
        }).filter(Boolean);

        return res.status(200).json({ success: true, courses });
    } catch (err) {
        console.error('getPurchasedCourses err', err);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};


// 4. POST buy a course
export const buyCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).json({ success: false, message: 'Course not found' });

        // Add user to purchasedBy if not already purchased
        if (!course.purchasedBy.includes(req.user._id)) {
            course.purchasedBy.push(req.user._id);
            await course.save();
        }

        res.status(200).json({ success: true, message: 'Course purchased successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


// 5. Public course preview (no token)
export const getCoursePreview = async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findOne(
            /^[0-9a-fA-F]{24}$/.test(id)
                ? { _id: id }
                : { urlCourseDetail: id }
        );

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        // Optionally hide sensitive fields
        return res.status(200).json({ success: true, course });
    } catch (error) {
        console.error("Error fetching course preview:", error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};
