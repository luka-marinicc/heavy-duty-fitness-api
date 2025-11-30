import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" })
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
