import express from "express";
import { addGallery } from "../controller/galleryController.js";
import { createGalleryMulter } from "../utils/multer.js";

// inti express
const router = express.Router();

// routers
router.post("/gallery", createGalleryMulter, addGallery);

// expoert default
export default router;
