import express from "express";
import { createCustommer } from "../controller/custommerController.js";
import multer from "multer";

// init router
const router = express.Router();

// multer setup
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + Math.floor(Math.random() * 1000) + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, "public");
  },
});

const custommer_photo = multer({ storage: storage });

// routers
router.post("/custommer", custommer_photo.single("photo"), createCustommer);

// export default
export default router;
