import express from "express"
import { createWorkout, getWorkouts } from "../controllers/workoutController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/", protect, createWorkout);
router.get("/", protect, getWorkouts)

export default router;