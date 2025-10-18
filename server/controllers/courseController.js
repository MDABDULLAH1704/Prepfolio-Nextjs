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


// 2. GET single course by ID
export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;

        // If it's a valid Mongo ObjectId → search by _id
        // Otherwise → search by urlCourseDetail slug
        const course = await Course.findOne(
            /^[0-9a-fA-F]{24}$/.test(id)
                ? { _id: id }
                : { urlCourseDetail: id }
        );

        if (!course) {
            return res.status(404).json({ success: false, message: "Course not found" });
        }

        res.status(200).json({ success: true, course });
    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({ success: false, message: "Server error" });
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
