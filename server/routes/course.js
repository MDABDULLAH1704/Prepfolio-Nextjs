import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getAllCourses, getCourseById, getPurchasedCourses, buyCourse } from "../controllers/courseController.js";


const router = express.Router();

router.get("/all", getAllCourses);
router.get("/:id", getCourseById);
router.get("/purchased", protect, getPurchasedCourses); 

export default router;
