import express from "express";
import { createCustommer } from "../controller/custommerController.js";
import { custommerMulter } from "../utils/multer.js";

// init router
const router = express.Router();

// routers
router.post("/custommer", custommerMulter, createCustommer);

// export default
export default router;
