import express from "express";
import { addStudent, deleteStudent, getAllStudents } from "../controllers/studentControllers.js";

// init router
const router = express.Router();

// student route
router.get("/student", getAllStudents);
router.post("/add-student", addStudent);
router.delete("/delete-student", deleteStudent);

// export default router
export default router;
