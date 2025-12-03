import Exercise from "../models/Exercise.js";
import Workout from "../models/Workout.js";

export async function createExercise(req, res, next) {
    try {
        const { workoutId, name, sets } = req.body;

        if (!workoutId || !name || !sets) {
            return res.status(400).json({ message: "workoutId, name and sets are required" });
        }

        const workout = await Workout.findOne({
            _id: workoutId,
            userId: req.user._id
        });

        if (!workout) {
            return res.status(404).json({ message: "Workout not found" })
        }

        const exercise = await Exercise.create({
            workoutId,
            userId: req.user._id,
            name,
            sets
        });

        res.status(201).json(exercise)
    } catch (err) {
        next(err)
    }
}

export async function updateExercise(req, res, next) {
    try {
        const { id } = req.params;
        const { name, sets } = req.body;

        const exercise = await Exercise.findOne({
            _id: id,
            userId: req.user._id
        });

        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }

        if (name !== undefined) exercise.name = name;
        if (sets !== undefined) exercise.sets = sets;

        res.json(exercise);
    } catch (err) {
        next(err)
    }
}

export async function deleteExercise(req, res ,next) {
    try {
        const { id } = req.params;

        const exercise = await Exercise.findOneAndDelete({
            _id: id,
            userId: req.user._id
        });

        if (!exercise) {
            return res.status(404).json({ message: "Exercise not found" });
        }

        res.json({ message: "Exercise deleted" })
    } catch (err) {
        next(err)
    }
}