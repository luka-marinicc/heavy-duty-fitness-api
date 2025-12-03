import Workout from "../models/Workout.js";

export async function createWorkout(req, res, next) {
    try {
        const { date, notes } = req.body;

        const workout = await Workout.create({
            userId: req.user._id,
            date: date || Date.now(),
            notes: notes || "",
        });

        res.status(201).json(workout);
    } catch (err) {
        next(err)
    }
}

export async function getWorkouts(req, res, next) {
    try {
        const workouts = await Workout.find({ userId: req.user._id }).sort({ date: -1 });
        res.json(workouts)
    } catch (err) {
        next(err)
    }
}