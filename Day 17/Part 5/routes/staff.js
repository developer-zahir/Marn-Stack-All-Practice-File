import express from "express";
import { addStaff, deleteStaff, getAllStaff } from "../controllers/staffControllers.js";

// init router
const router = express.Router();

// staff routes
router.get("/all-staff", getAllStaff);
router.post("/add-staff", addStaff);
router.delete("/delete-staff", deleteStaff);

// export router
export default router;
