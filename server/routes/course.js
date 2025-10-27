import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getAllCourses, getCourseById, getPurchasedCourses, buyCourse, getCoursePreview } from "../controllers/courseController.js";


const router = express.Router();

router.get('/all', getAllCourses);
router.get('/preview/:id', getCoursePreview);
router.get('/:id', protect, getCourseById);
router.get('/purchased', protect, getPurchasedCourses);
router.post('/buy', protect, buyCourse);

export default router;
