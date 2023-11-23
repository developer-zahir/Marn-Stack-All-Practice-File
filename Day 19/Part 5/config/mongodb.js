import mongoose from "mongoose";

// MongoDB connection
export const mongodbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected".bgMagenta);
  } catch (error) {
    console.error("MongoDB connection failed:".bgRed);
  }
};

