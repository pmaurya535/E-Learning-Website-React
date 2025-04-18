import express from 'express';
import { enrollCourse } from '../controllers/courseController.js';
import { protect } from '../middleware/authMiddleware.js'; // if using JWT auth

const router = express.Router();

// Enroll route
router.post('/enroll/:courseId', protect, enrollCourse);

export default router;
