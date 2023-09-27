import express from "express";
import { createCustommer } from "../controller/custommerController.js";

// init router
const router = express.Router();

// routers
router.post("/custommer", createCustommer);

// export default
export default router;
