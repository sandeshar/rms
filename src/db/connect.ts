import mongoose, { Mongoose } from "mongoose";

const mongodb: string | undefined = process.env.MONGODB_URI;

if (!mongodb) {
    throw new Error("MONGODB_URI is not defined in environment variables");
}

// Extend global to store cached connection in dev
declare global {
    // eslint-disable-next-line no-var
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDb(): Promise<Mongoose> {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(mongodb || "").then((mongoose) => {
            console.log("Connected to MongoDB");
            return mongoose;
        }).catch((err) => {
            console.error("Error connecting to MongoDB:", err);
            throw err;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDb;
