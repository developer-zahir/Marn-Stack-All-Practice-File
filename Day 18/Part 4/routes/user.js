import express from "express";
import { createUser } from "../controller/userController.js";
import { userCreateMulter } from "../utils/multer.js";

// init express
const router = express.Router();

// routers
router.post("/user",userCreateMulter, createUser);


// export default
export default router;
