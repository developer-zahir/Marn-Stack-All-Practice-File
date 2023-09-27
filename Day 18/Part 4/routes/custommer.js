import express from "express";
import { createCustommer } from "../controller/custommerController.js";
import { createCustommerMulter } from "../utils/multer.js";

// init router
const router = express.Router();


// routers
router.post("/custommer", createCustommerMulter, createCustommer);

// export default
export default router;
