import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        notes: {
            type: String,
            default: "",
            trim: true,
        },
    },
    { timestamps: true }
);

const Workout = mongoose.model("Workout", workoutSchema);
export default Workout;