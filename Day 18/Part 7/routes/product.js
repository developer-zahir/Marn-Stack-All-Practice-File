import express from "express";
import {
  create_product,
  delete_product,
  get_all_products,
  get_single_product,
  show_add_product_page,
  show_product_dashboard,
  show_shop_page,
} from "../controller/productController.js";
import { productMulter } from "../utils/multer.js";

// init route
const router = express.Router();

// ejs routes
router.get("/product-dashboard", show_product_dashboard);
router.get("/add-product", show_add_product_page);
router.get("/shop", show_shop_page)

// api routes
router.get("/product", get_all_products);
router.post("/create-product", productMulter, create_product);
router.get("/products/:slug", get_single_product);
router.delete("/products/:id", delete_product);
// export default
export default router;
