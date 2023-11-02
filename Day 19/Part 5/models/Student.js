import mongoose from "mongoose";

// create student schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    enum: ["male", "female", "other"],
  },
  profileImage: {
    type: String,
    trim: true,
    default: "avatar.png",
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Student", studentSchema);
