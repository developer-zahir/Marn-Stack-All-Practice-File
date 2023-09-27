import express from "express";
import { add_student, delete_student, get_all_student, register, update_student } from "../controller/studentController.js";

// init router
const router = express.Router();

// student router
router.get("/student", get_all_student);
router.post("/add-student", add_student);
router.patch("/update-student", update_student);
router.delete("/delete-student", delete_student);
router.post("/register", register);

// export router
export default router;
