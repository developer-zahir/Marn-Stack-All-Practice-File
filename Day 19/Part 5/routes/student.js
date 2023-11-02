import express from "express";
import { createStudent, getAllStudents, getSingelData, deleteStudent } from "../controller/studentController.js";
import { profileImage } from "../utils/multer.js";

// init route
const router = express.Router();

// routers
router.post("/add-student", profileImage, createStudent);
router.get("/students", getAllStudents);
router.get("/student/:id", getSingelData);
router.delete("/student/:id", deleteStudent);

// export default
export default router;
