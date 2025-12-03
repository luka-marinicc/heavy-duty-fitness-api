import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";
import exerciseRoutes from "./routes/exerciseRoutes.js";

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" })
})

app.use("/api/auth", authRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/exercises", exerciseRoutes);

app.use(errorHandler)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
