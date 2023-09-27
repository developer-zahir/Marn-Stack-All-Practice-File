import express from "express";
import { createStudent } from "../controller/studentController.js";
import { createStudentMulter } from "../utils/multer.js";

// init express
const router = express.Router();

// routers
router.post("/student", createStudentMulter, createStudent);

export default router;
