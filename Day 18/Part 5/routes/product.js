import express from "express";
import { create_product, delete_product, get_all_products, get_single_product } from "../controller/productController.js";
import { productMulter } from "../utils/multer.js";


// init route
const router = express.Router();

// product routes
router.get("/products", get_all_products);
router.post("/create-product", productMulter, create_product);
router.get("/products/:slug", get_single_product)
router.delete("/products/:id", delete_product)
// export default
export default router;
