import express from "express"
import { createExercise, deleteExercise, updateExercise } from "../controllers/exerciseController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/", protect, createExercise)
router.patch("/:id", protect, updateExercise)
router.delete("/:id", protect, deleteExercise)

export default router;