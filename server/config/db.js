
import mongoose from 'mongoose';

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectDB() {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Successfully connected to MongoDB!");
    } catch (err) {
        // Ensures that the client will close when you finish/error
        console.error("MongoDB connection error: ", err)
        await mongoose.disconnect();
        process.exit(1)
    }
}