import mongoose from "mongoose";

const setSchema = new mongoose.Schema(
    {
        reps: {
            type: Number,
            required: true,
            min: 1,
        },
        weight: {
            type: Number,
            required: true,
            min: 0,
        },
        rpe: {
            type: Number,
            min: 1,
            max: 10,
        },
        rest: {
            type: Number,
            min: 0,
        },
    },
    { _id: false }
);

const exerciseSchema = new mongoose.Schema(
    {
        workoutId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workout",
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        sets: {
            type: [setSchema],
            validate: v => Array.isArray(v) && v.length > 0,
        },
    },
    { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
export default Exercise;