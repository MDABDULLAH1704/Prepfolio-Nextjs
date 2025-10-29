// import mongoose from "mongoose";

// let isConnected = false;

// export const connectDB = async () => {
//     if (isConnected) return;

//     try {
//         const conn = await mongoose.connect(process.env.MONGODB_URI, { dbName: 'prepfolio', });
//         isConnected = conn.connections[0].readyState;
//         console.log("✅ MongoDB Connected");
//     } catch (error) {
//         console.error("❌ MongoDB connection failed:", error.message);
//         throw new Error("Database connection failed");
//     }
// };





import mongoose from "mongoose";

export const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        // 1 = connected, 2 = connecting
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prepfolio",
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        throw new Error("Database connection failed");
    }
};
